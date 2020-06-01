import React from "react";
import sampleData from "./sample_data.json";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import filterFactory, { textFilter, selectFilter } from "react-bootstrap-table2-filter";

const { SearchBar } = Search;

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

const App = () => {
	const columns = [
		{ dataField: "flight", text: "Flight", formatter: flightFormatter },
		{ dataField: "segment", text: "Segment", formatter: segmentFormatter },
		{ dataField: "details", text: "Details", formatter: detailsFormatter },
		{ dataField: "weight", text: "Weight", formatter: weightAndVolumeFormatter },
		{ dataField: "volume", text: "Volume", formatter: weightAndVolumeFormatter },
		{ dataField: "uldPositions", text: "ULD Positions", formatter: positionFormatter },
		{ dataField: "revenue", text: "Revenue/Yield", formatter: revenueFormatter },
		{ dataField: "sr", text: "SR" },
		{ dataField: "queuedBooking", text: "Queued Booking", formatter: bookingFormatter },
	];

	const pagination = paginationFactory({
		sizePerPage: 50,
	});

	console.log("JSON Length: " + sampleData.length);
	return (
		<div className='App'>
			<ToolkitProvider keyField='travelId' data={sampleData} columns={columns} search>
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
							pagination={pagination}
						/>
					</div>
				)}
			</ToolkitProvider>
		</div>
	);
};

export default App;
