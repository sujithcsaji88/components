import React, { useMemo, useState } from "react";
import sampleData from "./data.json";
import Grid from "./components/Grid";
import SREdit from "./cells/SREdit";
import FlightEdit from "./cells/FlightEdit";
import FlightIcon from "./images/FlightIcon.png";

const App = () => {
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
                width: 120,
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
                width: 120,
                disableSortBy: true,
                Cell: (row) => (
                    <div className="segment-details content">
                        <span>{row.value.from}</span>
                        <i>
                            {" "}
                            <img src={FlightIcon} alt="segment" />{" "}
                        </i>
                        <span>{row.value.to}</span>
                    </div>
                ),
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
                width: 350,
                disableSortBy: true,
                Cell: (row) => (
                    <div className="details-wrap content">
                        <ul>
                            <li>
                                {row.value.startTime} – {row.value.endTime}
                            </li>
                            <li>
                                <span>{row.value.status}</span>
                            </li>
                            <li>{row.value.additionalStatus}</li>
                        </ul>
                        <ul>
                            <li>{row.value.flightModel}</li>
                            <li>{row.value.bodyType}</li>
                            <li>
                                <span>{row.value.type}</span>
                            </li>
                            <li>
                                <strong>{row.value.timeStatus.split("|")[0]} </strong>
                                <span>{row.value.timeStatus.split("|")[1]}</span>
                            </li>
                        </ul>
                    </div>
                ),
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
                Cell: (row) => (
                    <div className="weight-details content">
                        <strong className="per">{row.value.percentage}</strong>
                        <span>
                            <strong>{row.value.value.split("/")[0]}/</strong>
                            {row.value.value.split("/")[1]}
                        </span>
                    </div>
                ),
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
                width: 120,
                Cell: (row) => (
                    <div className="weight-details content">
                        <strong className="per">{row.value.percentage}</strong>
                        <span>
                            <strong>{row.value.value.split("/")[0]}/</strong>
                            {row.value.value.split("/")[1]}
                        </span>
                    </div>
                ),
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
                Cell: (row) => (
                    <div className="revenue-details content">
                        <span className="large">{row.value.revenue}</span>
                        <span>{row.value.yeild}</span>
                    </div>
                ),
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
                width: 100,
                Cell: SREdit
            },
            {
                Header: "Queued Booking",
                accessor: "queuedBooking",
                disableSortBy: true,
                Cell: (row) => (
                    <div className="queued-details content">
                        <span>
                            <strong></strong>
                            {row.value.sr}
                        </span>
                        <span>
                            <strong></strong> {row.value.volume}
                        </span>
                    </div>
                ),
                filter: (rows, id, filterValue) => {
                    const filterText = filterValue ? filterValue.toLowerCase() : "";
                    return rows.filter((row) => {
                        const rowValue = row.values[id];
                        const { sr, volume } = rowValue;
                        return sr.toLowerCase().includes(filterText) || volume.toLowerCase().includes(filterText);
                    });
                }
            }
        ],
        []
    );
    const [data, setData] = useState(sampleData);

    //Gets called when there is a cell edit
    const updateMyData = (rowIndex, columnId, value) => {
        console.log(rowIndex + " " + columnId + " " + value);
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
    return <Grid columns={columns} data={data} updateMyData={updateMyData} />;
};

export default App;
