import React, { useCallback, useState, memo, useEffect, createRef, useMemo } from "react";
import {
    useTable,
    useResizeColumns,
    useFlexLayout,
    useRowSelect,
    useSortBy,
    useFilters,
    useGlobalFilter,
    useExpanded
} from "react-table";
import { VariableSizeList as List } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";
import RowSelector from "./Functions/RowSelector";
import DefaultColumnFilter from "./Functions/DefaultColumnFilter";
import GlobalFilter from "./Functions/GlobalFilter";
import "./tablestyles.css";
import { CSVLink } from "react-csv";

import jsPDF from "jspdf";
import "jspdf-autotable";

const listRef = createRef();

const Grid = memo((props) => {
    
    const [arrValue, setArrValue] = useState([]);
    const {
        title,
        gridHeight,
        columns,
        data,
        globalSearchLogic,
        updateCellData,
        selectBulkData,
        calculateRowHeight,
        renderExpandedContent
    } = props;

    if (!(data && data.length) || !(columns && columns.length)) {
        return <h2 style={{ marginTop: "50px", textAlign: "center" }}>Invalid Data or Columns Configuration</h2>;
    }
    const [isFilterOpen, setFilterOpen] = useState(false);

    const toggleColumnFilter = () => {
        setFilterOpen(!isFilterOpen);
    };

    const defaultColumn = useMemo(
        () => ({
            Filter: DefaultColumnFilter
        }),
        []
    );
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
        selectedFlatRows,
        state,
        setGlobalFilter
    } = useTable(
        {
            columns,
            data,
            defaultColumn,
            updateCellData,
            globalFilter: (rows, columns, filterValue) => {
                if (globalSearchLogic && typeof globalSearchLogic === "function") {
                    return globalSearchLogic(rows, columns, filterValue);
                } else {
                    return rows;
                }
            }
        },
        useFilters,
        useGlobalFilter,
        useSortBy,
        useRowSelect,
        useFlexLayout,
        useResizeColumns,
        useExpanded,
        (hooks) => {
            hooks.allColumns.push((columns) => [
                {
                    id: "selection",
                    disableResizing: true,
                    disableFilters: true,
                    disableSortBy: true,
                    minWidth: 35,
                    width: 35,
                    maxWidth: 35,
                    Header: ({ getToggleAllRowsSelectedProps }) => <RowSelector {...getToggleAllRowsSelectedProps()} />,
                    Cell: ({ row }) => <RowSelector {...row.getToggleRowSelectedProps()} />
                },
                ...columns
            ]);
        }
    );

    const RenderRow = useCallback(
        ({ index, style }) => {
            const row = rows[index];
            prepareRow(row);
            return (
                <div {...row.getRowProps({ style })} className="table-row tr">
                    <div className="table-row-wrap">
                        {row.cells.map((cell) => {
                            return (
                                <div {...cell.getCellProps()} className="table-cell td">
                                    {cell.render("Cell")}
                                </div>
                            );
                        })}
                    </div>
                    {row.isExpanded ? (
                        <div className="expand">{renderExpandedContent ? renderExpandedContent(row) : null}</div>
                    ) : null}
                </div>
            );
        },
        [prepareRow, rows, renderExpandedContent]
    );

    const bulkSelector = () => {
        if (selectBulkData) {
            selectBulkData(selectedFlatRows);
        }
    };

    const [isLoader , setLoader] = useState(false)
    const exportPDF = async () => {
        const unit = "pt";
        const size = "A4"; // Use A1, A2, A3 or A4
        const orientation = "landscape"; // portrait or landscape
    
        const marginLeft = 300;
        const doc = new jsPDF(orientation, unit, size);
    
        doc.setFontSize(15);
        
        const title = "Multiline Grid Data Export To PDF";
        const headers = [["Id", "Flight", "Segment", "Details", "Weight", "Volume", "ULD Positions", "Revenue/Yield", "SR", "Queued Booking"]];
        const dataValues = await data.map(row=> [
            row.travelId,
            row.flight.date + ' ' + row.flight.flightno, 
            row.segment.from + ' ' + row.segment.to,
            row.details.flightModel + ' | ' + row.details.bodyType + ' | ' +row.details.type + ' | ' + row.details.startTime
            + ' | ' +row.details.endTime + ' | ' + row.details.status + ' | ' +row.details.additionalStatus + ' | ' + row.details.timeStatus,
            row.weight.percentage + ' '+row.weight.value,
            row.volume.percentage + ' '+row.volume.value,
            row.uldPositions.map((item) => {
                
                var returnVal = item.position + " " + item.value
                return returnVal;
            }),
            row.revenue.revenue + ' ' + row.revenue.yeild,
            row.sr,
            row.queuedBooking.sr + ' ' + row.queuedBooking.volume
        ]);
    
        let content = {
          startY: 50,
          head: headers,
          body: dataValues
        };
    
        doc.text(title, marginLeft, 40);
        doc.autoTable(content);
        doc.save("report.pdf")
      }

    useEffect(() => {
        if (listRef && listRef.current) {
            listRef.current.resetAfterIndex(0, true);
        }
    });

    const dataRearranging = () => {
        const arrValue = [];
         data.filter((row) => {
            const { flight, segment, details, weight, volume, revenue, queuedBooking, uldPositions, sr } = row;
            const { date, flightno } = flight;
            const { from, to } = segment;
            const { flightModel, bodyType, type, startTime, endTime, status, additionalStatus, timeStatus } = details;
            arrValue.push ({'flight': date + flightno,
             "segment": from + to,
             "details": flightModel + bodyType + type + startTime + endTime + status + additionalStatus + timeStatus,
             "weight": weight.percentage + weight.value,
             "volume": volume.percentage + volume.value,
             "revenue": revenue.revenue + revenue.yield,
             "sr": sr,
             "queuedBooking": queuedBooking.sr + queuedBooking.volume,
             "uldPositions": uldPositions.map((item) => {
                return (item.position + " " + item.value);
            })
            });
        });
        setArrValue(arrValue);
};


    return (
        <div className="wrapper">
            <div className="table-filter">
                <div className="results">
                    <div className="name">
                        <strong>{rows.length}</strong>
                        <span> {title ? title : "Rows"}</span>
                    </div>
                </div>
                <div className="filter-utilities">
                    <GlobalFilter globalFilter={state.globalFilter} setGlobalFilter={setGlobalFilter} />
                    <div className="filter-icon keyword-search" onClick={toggleColumnFilter}>
                        <i className="fa fa-filter" aria-hidden="true"></i>
                    </div>
                    <div className="filter-icon bulk-select" onClick={bulkSelector}>
                        <i className="fa fa-pencil-square-o"></i>
                    </div>
                    <div className="filter-icon bulk-select" onClick={dataRearranging}>
                        <CSVLink columns={columns} data={arrValue} filename={"ExportToCsv_file.csv"}>
                            <i className="fa fa-file"></i>
                        </CSVLink>
                    </div>
                    <div className="filter-icon bulk-select" onClick={exportPDF}>
                        <i className="fa fa-file"></i>
                    </div>
                    <div></div>
                </div>
            </div>
            <div className="tableContainer table-outer" style={{ height: gridHeight ? gridHeight : "50vh" }}>
                <AutoSizer disableWidth disableResizing>
                    {({ height }) => (
                        <div {...getTableProps()} className="table">
                            <div className="thead table-row table-row--head">
                                {headerGroups.map((headerGroup) => (
                                    <div {...headerGroup.getHeaderGroupProps()} className="tr">
                                        {headerGroup.headers.map((column) => (
                                            <div {...column.getHeaderProps()} className="table-cell column-heading th">
                                                <div {...column.getSortByToggleProps()}>
                                                    {column.render("Header")}
                                                    <span>
                                                        {column.isSorted ? (
                                                            column.isSortedDesc ? (
                                                                <i className="fa fa-sort-desc" aria-hidden="true"></i>
                                                            ) : (
                                                                <i className="fa fa-sort-asc" aria-hidden="true"></i>
                                                            )
                                                        ) : (
                                                            ""
                                                        )}
                                                    </span>
                                                </div>
                                                <div className={`txt-wrap column-filter ${isFilterOpen ? "open" : ""}`}>
                                                    {!column.disableFilters ? column.render("Filter") : null}
                                                </div>
                                                {column.canResize && <div {...column.getResizerProps()} className="resizer" />}
                                            </div>
                                        ))}
                                    </div>
                                ))}
                            </div>
                            <div {...getTableBodyProps()} className="tbody">
                                <List
                                    ref={listRef}
                                    className="table-list"
                                    height={height}
                                    itemCount={rows.length}
                                    itemSize={(index) => {
                                        if (calculateRowHeight && typeof calculateRowHeight === "function") {
                                            return calculateRowHeight(rows, index, headerGroups);
                                        } else {
                                            return 70;
                                        }
                                    }}
                                    overscanCount={20}
                                >
                                    {RenderRow}
                                </List>
                            </div>
                        </div>
                    )}
                </AutoSizer>
            </div>
        </div>
    );
});

export default Grid;
