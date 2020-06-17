import React, { useCallback, useState, memo, useEffect } from "react";
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
import RowSelector from "./Cells/RowSelector";
import DefaultColumnFilter from "./Functions/DefaultColumnFilter";
import GlobalFilter from "./Functions/GlobalFilter";
import FilterIcon from "../images/FilterIcon.svg";
import TableViewIcon from "../images/TableViewIcon.png";

const listRef = React.createRef();

const Grid = memo((props) => {
    const { columns, data, globalSearchLogic, updateCellData, updateRowData, selectBulkData, calculateRowHeight } = props;
    const [isFilterOpen, setFilterOpen] = useState(false);

    const toggleColumnFilter = () => {
        setFilterOpen(!isFilterOpen);
    };

    const defaultColumn = React.useMemo(
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
            updateRowData,
            globalFilter: (rows, columns, filterValue) => globalSearchLogic(rows, columns, filterValue)
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
                    {row.cells.map((cell) => {
                        return (
                            <div {...cell.getCellProps()} className="table-cell td">
                                {cell.render("Cell")}
                            </div>
                        );
                    })}
                    {row.isExpanded ? <div className="expand">Expanded content goes here</div> : null}
                </div>
            );
        },
        [prepareRow, rows]
    );

    const bulkSelector = () => {
        selectBulkData(selectedFlatRows);
    };

    useEffect(() => {
        if (listRef && listRef.current) {
            listRef.current.resetAfterIndex(0, true);
        }
    });

    return (
        <div className="wrapper">
            <div className="table-filter">
                <div className="results">
                    <div className="name">
                        <strong>{rows.length}</strong>
                        <span> AWBs</span>
                    </div>
                </div>
                <div className="filter-utilities">
                    <GlobalFilter globalFilter={state.globalFilter} setGlobalFilter={setGlobalFilter} />
                    <div className="filter-icon keyword-search" onClick={toggleColumnFilter}>
                        <i>
                            <img src={FilterIcon} alt="cargo" />
                        </i>
                    </div>
                    <div className="filter-icon table-view">
                        <i>
                            <img src={TableViewIcon} alt="cargo" />
                        </i>
                    </div>
                    <div className="filter-icon bulk-select" onClick={bulkSelector}>
                        <i className="fa fa-pencil-square-o"></i>
                    </div>
                </div>
            </div>
            <div className="tableContainer table-outer">
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
                                                    {column.canFilter ? column.render("Filter") : null}
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
                                    height={height - 50}
                                    itemCount={rows.length}
                                    itemSize={(index) => calculateRowHeight(rows, index, headerGroups)}
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
