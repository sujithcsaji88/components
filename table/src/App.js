import React, { useMemo, useState, memo } from "react";
import sampleData from "./data.json";
import RowOptions from "./components/Cells/RowOptions";
import Grid from "./components/Grid";
import SREdit from "./components/Cells/SREdit";
import FlightEdit from "./components/Cells/FlightEdit";
import FlightIcon from "./images/FlightIcon.png";

const App = memo(() => {
    const columns = useMemo(
        () => [
            {
                Header: "Id",
                accessor: "travelId",
                disableFilters: true,
                width: 50
            },
            {
                Header: "Flight",
                accessor: "flight",
                width: 100,
                Cell: FlightEdit,
                sortType: (rowA, rowB) => {
                    return rowA.original.flight.flightno > rowB.original.flight.flightno ? -1 : 1;
                },
                filter: (rows, id, filterValue) => {
                    const filterText = filterValue ? filterValue.toLowerCase() : "";
                    return rows.filter((row) => {
                        const rowValue = row.values[id];
                        const { flightno, date } = rowValue;
                        return flightno.toLowerCase().includes(filterText) || date.toLowerCase().includes(filterText);
                    });
                }
            },
            {
                Header: "Segment",
                accessor: "segment",
                width: 100,
                disableSortBy: true,
                Cell: (row) => {
                    const { from, to } = row.value;
                    return (
                        <div className="segment-details content">
                            <span>{from}</span>
                            <i>
                                {" "}
                                <img src={FlightIcon} alt="segment" />{" "}
                            </i>
                            <span>{to}</span>
                        </div>
                    );
                },
                filter: (rows, id, filterValue) => {
                    const filterText = filterValue ? filterValue.toLowerCase() : "";
                    return rows.filter((row) => {
                        const rowValue = row.values[id];
                        const { from, to } = rowValue;
                        return from.toLowerCase().includes(filterText) || to.toLowerCase().includes(filterText);
                    });
                }
            },
            {
                Header: "Details",
                accessor: "details",
                width: 300,
                disableSortBy: true,
                Cell: (row) => {
                    const { startTime, endTime, status, additionalStatus, flightModel, bodyType, type, timeStatus } = row.value;
                    let timeStatusArray = timeStatus.split(" ");
                    const timeValue = timeStatusArray.shift();
                    const timeText = timeStatusArray.join(" ");
                    return (
                        <div className="details-wrap content">
                            <ul>
                                <li>
                                    {startTime} – {endTime}
                                </li>
                                <li>
                                    <span>{status}</span>
                                </li>
                                <li>{additionalStatus}</li>
                                <li>{flightModel}</li>
                                <li>{bodyType}</li>
                                <li>
                                    <span>{type}</span>
                                </li>
                                <li>
                                    <strong>{timeValue} </strong>
                                    <span>{timeText}</span>
                                </li>
                            </ul>
                        </div>
                    );
                },
                filter: (rows, id, filterValue) => {
                    const filterText = filterValue ? filterValue.toLowerCase() : "";
                    return rows.filter((row) => {
                        const rowValue = row.values[id];
                        const {
                            flightModel,
                            bodyType,
                            type,
                            startTime,
                            endTime,
                            status,
                            additionalStatus,
                            timeStatus
                        } = rowValue;
                        return (
                            String(flightModel).toLowerCase().includes(filterText) ||
                            bodyType.toLowerCase().includes(filterText) ||
                            type.toLowerCase().includes(filterText) ||
                            startTime.toLowerCase().includes(filterText) ||
                            endTime.toLowerCase().includes(filterText) ||
                            status.toLowerCase().includes(filterText) ||
                            additionalStatus.toLowerCase().includes(filterText) ||
                            timeStatus.toLowerCase().includes(filterText)
                        );
                    });
                }
            },
            {
                Header: "Weight",
                accessor: "weight",
                width: 130,
                Cell: (row) => {
                    const { percentage, value } = row.value;
                    return (
                        <div className="weight-details content">
                            <strong className="per">{percentage}</strong>
                            <span>
                                <strong>{value.split("/")[0]}/</strong>
                                {value.split("/")[1]}
                            </span>
                        </div>
                    );
                },
                sortType: (rowA, rowB) => {
                    return rowA.original.weight.percentage > rowB.original.weight.percentage ? -1 : 1;
                },
                filter: (rows, id, filterValue) => {
                    const filterText = filterValue ? filterValue.toLowerCase() : "";
                    return rows.filter((row) => {
                        const rowValue = row.values[id];
                        const { percentage, value } = rowValue;
                        return percentage.toLowerCase().includes(filterText) || value.toLowerCase().includes(filterText);
                    });
                }
            },
            {
                Header: "Volume",
                accessor: "volume",
                width: 100,
                Cell: (row) => {
                    const { percentage, value } = row.value;
                    return (
                        <div className="weight-details content">
                            <strong className="per">{percentage}</strong>
                            <span>
                                <strong>{value.split("/")[0]}/</strong>
                                {value.split("/")[1]}
                            </span>
                        </div>
                    );
                },
                sortType: (rowA, rowB) => {
                    return rowA.original.volume.percentage > rowB.original.volume.percentage ? -1 : 1;
                },
                filter: (rows, id, filterValue) => {
                    const filterText = filterValue ? filterValue.toLowerCase() : "";
                    return rows.filter((row) => {
                        const rowValue = row.values[id];
                        const { percentage, value } = rowValue;
                        return percentage.toLowerCase().includes(filterText) || value.toLowerCase().includes(filterText);
                    });
                }
            },
            {
                Header: "ULD Positions",
                accessor: "uldPositions",
                disableSortBy: true,
                Cell: (row) => (
                    <div className="uld-details content">
                        <ul>
                            {row.value.map((positions, index) => {
                                return (
                                    <li key={index}>
                                        <span>{positions.position}</span>
                                        <strong>{positions.value}</strong>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                ),
                filter: (rows, id, filterValue) => {
                    const filterText = filterValue ? filterValue.toLowerCase() : "";
                    return rows.filter((row) => {
                        const rowValue = row.values[id];
                        return (
                            rowValue.findIndex((item) => {
                                return (item.position + " " + item.value).toLowerCase().includes(filterText);
                            }) >= 0
                        );
                    });
                }
            },
            {
                Header: "Revenue/Yield",
                accessor: "revenue",
                width: 120,
                Cell: (row) => {
                    const { revenue, yeild } = row.value;
                    return (
                        <div className="revenue-details content">
                            <span className="large">{revenue}</span>
                            <span>{yeild}</span>
                        </div>
                    );
                },
                sortType: (rowA, rowB) => {
                    return rowA.original.revenue.revenue > rowB.original.revenue.revenue ? -1 : 1;
                },
                filter: (rows, id, filterValue) => {
                    const filterText = filterValue ? filterValue.toLowerCase() : "";
                    return rows.filter((row) => {
                        const rowValue = row.values[id];
                        const { revenue, yeild } = rowValue;
                        return revenue.toLowerCase().includes(filterText) || yeild.toLowerCase().includes(filterText);
                    });
                }
            },
            {
                Header: "SR",
                accessor: "sr",
                width: 90,
                Cell: SREdit
            },
            {
                Header: "Queued Booking",
                accessor: "queuedBooking",
                width: 130,
                disableSortBy: true,
                Cell: (row) => {
                    const { sr, volume } = row.value;
                    return (
                        <div className="queued-details content">
                            <span>
                                <strong></strong>
                                {sr}
                            </span>
                            <span>
                                <strong></strong> {volume}
                            </span>
                        </div>
                    );
                },
                filter: (rows, id, filterValue) => {
                    const filterText = filterValue ? filterValue.toLowerCase() : "";
                    return rows.filter((row) => {
                        const rowValue = row.values[id];
                        const { sr, volume } = rowValue;
                        return sr.toLowerCase().includes(filterText) || volume.toLowerCase().includes(filterText);
                    });
                }
            },
            {
                id: "custom",
                disableResizing: true,
                disableFilters: true,
                disableSortBy: true,
                width: 50,
                Cell: (row) => <RowOptions row={row} updateRowData={updateRowData} />
            }
        ],
        []
    );
    const [data, setData] = useState(sampleData);

    const globalSearchLogic = (rows, columns, filterValue) => {
        if (filterValue) {
            const searchText = filterValue.toLowerCase();
            return rows.filter((row) => {
                const { flight, segment, details, weight, volume, revenue, queuedBooking, uldPositions, sr } = row.original;
                const { date, flightno } = flight;
                const { from, to } = segment;
                const { flightModel, bodyType, type, startTime, endTime, status, additionalStatus, timeStatus } = details;
                return (
                    date.toLowerCase().includes(searchText) ||
                    flightno.toLowerCase().includes(searchText) ||
                    from.toLowerCase().includes(searchText) ||
                    to.toLowerCase().includes(searchText) ||
                    flightModel.toString().toLowerCase().includes(searchText) ||
                    bodyType.toLowerCase().includes(searchText) ||
                    type.toLowerCase().includes(searchText) ||
                    startTime.toLowerCase().includes(searchText) ||
                    endTime.toLowerCase().includes(searchText) ||
                    status.toLowerCase().includes(searchText) ||
                    additionalStatus.toLowerCase().includes(searchText) ||
                    timeStatus.toLowerCase().includes(searchText) ||
                    weight.percentage.toLowerCase().includes(searchText) ||
                    weight.value.toLowerCase().includes(searchText) ||
                    volume.percentage.toLowerCase().includes(searchText) ||
                    volume.value.toLowerCase().includes(searchText) ||
                    revenue.revenue.toLowerCase().includes(searchText) ||
                    revenue.yeild.toLowerCase().includes(searchText) ||
                    sr.toLowerCase().includes(searchText) ||
                    queuedBooking.sr.toLowerCase().includes(searchText) ||
                    queuedBooking.volume.toLowerCase().includes(searchText) ||
                    uldPositions.findIndex((item) => {
                        return (item.position + " " + item.value).toLowerCase().includes(searchText);
                    }) >= 0
                );
            });
        }
        return rows;
    };

    //Gets called when there is a cell edit
    const updateCellData = (rowIndex, columnId, value) => {
        console.log(rowIndex + " " + columnId + " " + JSON.stringify(value));
        setData((old) =>
            old.map((row, index) => {
                if (index === rowIndex) {
                    return {
                        ...old[rowIndex],
                        [columnId]: value
                    };
                }
                return row;
            })
        );
    };

    //Gets called when Row option is selected
    const updateRowData = (row) => {
        console.log(row);
    };

    return (
        <Grid
            columns={columns}
            data={data}
            globalSearchLogic={globalSearchLogic}
            updateCellData={updateCellData}
            updateRowData={updateRowData}
        />
    );
});

export default App;
