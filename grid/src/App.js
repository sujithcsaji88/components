import React, { useEffect } from "react";
import sampleData from "./sample_data.json";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import filterFactory, { textFilter } from "react-bootstrap-table2-filter";
import cellEditFactory from "react-bootstrap-table2-editor";
import FlightEdit from "./FlightEdit";
import "./styles.css";

const { SearchBar } = Search;
const $ = window.$;

const flightFormatter = (cell) => {
	return (
		<div>
			<p style={{ color: "red" }}>{cell.flightno}</p>
			<br />
			<p>{cell.date}</p>
		</div>
	);
};

const segmentFormatter = (cell) => {
	return (
		<div>
			<p>
				{cell.from} - {cell.to}
			</p>
		</div>
	);
};

const detailsFormatter = (cell) => {
	return (
		<div>
			<p>
				{cell.startTime} - {cell.endTime} | {cell.status} | {cell.additionalStatus}
			</p>
			<br />
			<p>
				{cell.flightModel} | {cell.bodyType} | {cell.type} | {cell.timeStatus}
			</p>
		</div>
	);
};

const weightAndVolumeFormatter = (cell) => {
	return (
		<div>
			<p>{cell.percentage}</p>
			<br />
			<p>{cell.value}</p>
		</div>
	);
};

const positionFormatter = (cell) => {
	return cell.map((positions, index) => {
		return (
			<div key={index}>
				<p>
					{positions.position} {positions.value}
				</p>
			</div>
		);
	});
};

const revenueFormatter = (cell) => {
	return (
		<div>
			<p>{cell.revenue}</p>
			<br />
			<p>{cell.yeild}</p>
		</div>
	);
};

const bookingFormatter = (cell) => {
	return (
		<div>
			<p>{cell.sr}</p>
			<br />
			<p>{cell.volume}</p>
		</div>
	);
};

const rowStyle = (row, rowIndex) => {
	return { wordBreak: "break-all" };
};

const expandRow = {
	renderer: (row) => (
		<div>
			<p>{`Expanded content goes here`}</p>
		</div>
	),
};

/*const customDataFilter = (filterVal, data) => {
	debugger
	if (filterVal) {
		return data.filter(
			(travel) =>
				travel.flight.date.toLowerCase().includes(filterVal.toLowerCase()) ||
				travel.flight.flightno.toLowerCase().includes(filterVal.toLowerCase())
		);
	}
	return data;
};*/

const customDataFilter = (filterVal, data) => {
	//debugger
	if (filterVal) {
		return data.filter((travel) =>
			travel.flight.date.toLowerCase().includes(filterVal.toLowerCase()) ||
			travel.flight.flightno.toLowerCase().includes(filterVal.toLowerCase()) ||
			travel.details.flightModel.toString().toLowerCase().includes(filterVal.toLowerCase()) ||
			travel.details.bodyType.toString().toLowerCase().includes(filterVal.toLowerCase()) ||
			travel.details.type.toString().toLowerCase().includes(filterVal.toLowerCase()) ||
			travel.details.startTime.toString().toLowerCase().includes(filterVal.toLowerCase()) ||
			travel.details.endTime.toString().toLowerCase().includes(filterVal.toLowerCase()) ||
			travel.details.status.toString().toLowerCase().includes(filterVal.toLowerCase()) ||
			travel.details.additionalStatus.toString().toLowerCase().includes(filterVal.toLowerCase()) ||
			travel.details.timeStatus.toString().toLowerCase().includes(filterVal.toLowerCase()) ||
			travel.weight.percentage.toString().toLowerCase().includes(filterVal.toLowerCase()) ||
			travel.weight.value.toString().toLowerCase().includes(filterVal.toLowerCase()) ||
			travel.volume.percentage.toString().toLowerCase().includes(filterVal.toLowerCase()) ||
			travel.volume.value.toString().toLowerCase().includes(filterVal.toLowerCase()) ||
			travel.revenue.revenue.toString().toLowerCase().includes(filterVal.toLowerCase()) ||
			travel.revenue.yeild.toString().toLowerCase().includes(filterVal.toLowerCase()) ||
			travel.sr.toString().toLowerCase().includes(filterVal.toLowerCase()) ||
			travel.queuedBooking.sr.toString().toLowerCase().includes(filterVal.toLowerCase()) ||
			travel.queuedBooking.volume.toString().toLowerCase().includes(filterVal.toLowerCase())
		);
	}
	return data;
};

const customDataUldFilter = (filterVal, data) => {
	//debugger
	//console.log(this.props)
	if (filterVal) {
		var uldvalues;
		data.filter((travel) =>{
				console.log(travel.uldPositions)
				uldvalues = travel.uldPositions
				return uldvalues.filter((values) => 
					values.position.toString().toLowerCase().includes(filterVal.toLowerCase()) ||
					values.value.toString().toLowerCase().includes(filterVal.toLowerCase())
				)
			}
		);
	}
	return data;
};

/*function onColumnMatch({ searchText, value, column, row }) {
	return true;
	// implement your custom match logic on every cell value
}*/

function onColumnMatch({
	searchText,
	value,
	column,
	row
  }) {
	if (typeof value !== 'undefined') {
		//debugger;
	  //return value.startsWith(searchText);
	  return true;
	}
	return false;
  }

const App = () => {
	const columns = [
		{
			dataField: "flight",
			text: "Flight",
			formatter: flightFormatter,
			filter: textFilter({
				onFilter: customDataFilter,
			}),
			editorRenderer: (editorProps, value, row, column, rowIndex, columnIndex) => (
				<FlightEdit {...editorProps} value={value} />
			),
		},
		{ dataField: "segment", text: "Segment", formatter: segmentFormatter, filter: textFilter() },
		{ 
			dataField: "details", 
			text: "Details", 
			formatter: detailsFormatter, 
			filter: textFilter({
				onFilter: customDataFilter,
			})
		},
		{ dataField: "weight", text: "Weight", formatter: weightAndVolumeFormatter, 
			filter: textFilter({
				onFilter: customDataFilter,
			})
		},
		{ dataField: "volume", text: "Volume", formatter: weightAndVolumeFormatter, 
			filter: textFilter({
				onFilter: customDataFilter,
			})
		},
		{ dataField: "uldPositions", text: "ULD Positions", formatter: positionFormatter, 
			filter: textFilter({
				onFilter: customDataUldFilter,
			}) 
		},
		{ dataField: "revenue", text: "Revenue/Yield", formatter: revenueFormatter, 
			filter: textFilter({
				onFilter: customDataFilter,
			}) 
		},
		{ dataField: "sr", text: "SR", 
			filter: textFilter({
				onFilter: customDataFilter,
			}) 
		},
		{ dataField: "queuedBooking", text: "Queued Booking", formatter: bookingFormatter, 
			filter: textFilter({
				onFilter: customDataFilter,
			})
		},
	];

	const pagination = paginationFactory({
		sizePerPage: 50,
	});

	console.log("JSON Length: " + sampleData.length);

	useEffect(() => {
		$(".react-bootstrap-table thead th").resizable();
	});

	return (
		<div className='App'>
			<ToolkitProvider keyField='travelId' data={sampleData} columns={columns} search={{ onColumnMatch }}>
				{(props) => (
					<div>
						<h3>Input something at below input field:</h3>
						<SearchBar {...props.searchProps} />
						<hr />
						<BootstrapTable
							{...props.baseProps}
							expandRow={expandRow}
							rowStyle={rowStyle}
							filter={filterFactory()}
							cellEdit={cellEditFactory({ mode: "dbclick", blurToSave: true })}
							pagination={pagination}
							hover={true}
						/>
					</div>
				)}
			</ToolkitProvider>
		</div>
	);
};

export default App;
