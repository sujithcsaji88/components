import React, { useEffect } from "react";
import sampleData from "./sample_data.json";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import filterFactory, { textFilter } from "react-bootstrap-table2-filter";
import cellEditFactory from "react-bootstrap-table2-editor";
import FlightEdit from "./FlightEdit";
import SegmentEdit from "./SegmentEdit";
import DetailsEdit from "./DetailsEdit";
import WeightEdit from "./WeigthEdit";
import VolumeEdit from "./VolumeEdit";
import RevenueEdit from "./RevenueEdit";
import QueuedBookingEdit from "./QueuedBookingEdit";
import UldPositionsEdit from "./UldPositionsEdit";
import "./styles.css";
import Header from "./Header/Header";

const { SearchBar } = Search;
const $ = window.$;

const flightFormatter = (cell) => {
	return (
		<div>
			<p className="flightCol">{cell.flightno}</p>
			<p>{cell.date}</p>
		</div>
	);
};

const segmentFormatter = (cell) => {
	return (
		<div>
			<p>
				{cell.from} 
					<img className="img" alt='' src="https://d1icd6shlvmxi6.cloudfront.net/gsc/OYDDTS/35/1e/62/351e623259f345efac57e1f95b7849f9/images/neo-list-5/u374.png?token=f5979504349fe3dc90a3076a078178c0306f3004b31e4e2956f3bdb677a59ec9" />
				{cell.to}
			</p>
		</div>
	);
};

const detailsFormatter = (cell) => {
	return (
		<div >
			<p>
				{cell.startTime} - {cell.endTime} | {cell.status} | {cell.additionalStatus}
			</p>
			<p>
				<div className='d-flex'>
					{cell.flightModel} | {cell.bodyType} | {cell.type} | 
					<div className="detailsCol">{cell.timeStatus.split('to')[0]}</div>
					<div> {' to depart'}</div>
				</div>
			</p>
		</div>
	);
};

const weightAndVolumeFormatter = (cell) => {
	return (
		<div>
			<p className="weightCol">{cell.percentage}</p>
			<div className='d-flex'>
				<p className="weightValueCol">{cell.value.split('/')[0]}</p>
				<p className="weightValueSecondCol">/{cell.value.split('/')[1].split(' ')[0]}</p>
				<p>{' '+cell.value.split('/')[1].split(' ')[1]}</p>
			</div>
		</div>
	);
};

const positionFormatter = (cell) => {
	return cell.map((positions, index) => {
		return (
			<div key={index} style={{ width: "50%", float: "left", textAlign: "center" }}>
				<div className='d-flex'>
					<p> {positions.position} </p>
					<p className='uldCol'> {positions.value} </p>
				</div>
				
			</div>
		);
	});
};

const revenueFormatter = (cell) => {
	return (
		<div className='revenueCol'>
			<p>{cell.revenue}</p>
			<p>{cell.yeild}</p>
		</div>
	);
};

const srFormatter = (cell) => {
	return (
		<div className='srCol'>
			<p>{cell}</p>
		</div>
	);
};

const bookingFormatter = (cell) => {
	return (
		<div>
			<div className='row'>
				<p className='bookingCol'>{cell.sr.split(' ')[0]}</p>
				<p>{cell.sr.split(' ')[1]}</p>
			</div>
			<div className='row'>
				<p className='bookingCol'>{cell.volume.split('/')[0].split(' ')[0]}</p>
				<p>{cell.volume.split('/')[0].split(' ')[1]}</p>
				<p className='bookingCol'>{' / '+cell.volume.split('/')[1].split(' ')[1]}</p>
				<p>{cell.volume.split('/')[1].split(' ')[2]}</p>
			</div>
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

const customFlightFilter = (filterVal, data) => {
	if (filterVal) {
		filterVal = filterVal.toLowerCase();
		return data.filter(
			(travel) =>
				travel.flight.date.toLowerCase().includes(filterVal) ||
				travel.flight.flightno.toLowerCase().includes(filterVal)
		);
	}
	return data;
};

const customSegmentFilter = (filterVal, data) => {
	if (filterVal) {
		filterVal = filterVal.toLowerCase();
		return data.filter(
			(travel) =>
				travel.segment.from.toLowerCase().includes(filterVal) ||
				travel.segment.to.toLowerCase().includes(filterVal)
		);
	}
	return data;
};

const customDetailsFilter = (filterVal, data) => {
	if (filterVal) {
		filterVal = filterVal.toLowerCase();
		return data.filter(
			(travel) =>
				travel.details.flightModel.toString().toLowerCase().includes(filterVal) ||
				travel.details.bodyType.toLowerCase().includes(filterVal) ||
				travel.details.type.toLowerCase().includes(filterVal) ||
				travel.details.startTime.toLowerCase().includes(filterVal) ||
				travel.details.endTime.toLowerCase().includes(filterVal) ||
				travel.details.status.toLowerCase().includes(filterVal) ||
				travel.details.additionalStatus.toLowerCase().includes(filterVal) ||
				travel.details.timeStatus.toLowerCase().includes(filterVal)
		);
	}
	return data;
};

const customWeightFilter = (filterVal, data) => {
	if (filterVal) {
		filterVal = filterVal.toLowerCase();
		return data.filter(
			(travel) =>
				travel.weight.percentage.toLowerCase().includes(filterVal) ||
				travel.weight.value.toLowerCase().includes(filterVal)
		);
	}
	return data;
};

const customVolumeFilter = (filterVal, data) => {
	if (filterVal) {
		filterVal = filterVal.toLowerCase();
		return data.filter(
			(travel) =>
				travel.volume.percentage.toLowerCase().includes(filterVal) ||
				travel.volume.value.toLowerCase().includes(filterVal)
		);
	}
	return data;
};

const customRevenueFilter = (filterVal, data) => {
	if (filterVal) {
		filterVal = filterVal.toLowerCase();
		return data.filter(
			(travel) =>
				travel.revenue.revenue.toLowerCase().includes(filterVal) ||
				travel.revenue.yeild.toLowerCase().includes(filterVal)
		);
	}
	return data;
};

const customQueuedBookingFilter = (filterVal, data) => {
	if (filterVal) {
		filterVal = filterVal.toLowerCase();
		return data.filter(
			(travel) =>
				travel.queuedBooking.sr.toLowerCase().includes(filterVal) ||
				travel.queuedBooking.volume.toLowerCase().includes(filterVal)
		);
	}
	return data;
};

const customUldFilter = (filterVal, data) => {
	if (filterVal) {
		filterVal = filterVal.toLowerCase();
		return data.filter((travel) =>{
			const {uldPositions} = travel;
			const filteredData = uldPositions.find(values => {
				var searchVal = values.position + ' '+ values.value;
				if(searchVal.toLowerCase().includes(filterVal))
					return true
			}	
		);
		return filteredData
		})
	};
	return data;
}

function onColumnMatch({ searchText, value, column, row }) {
	if (searchText) {
		searchText = searchText.toLowerCase();
		return value.filter((travel) =>
			travel.flight.date.toLowerCase().includes(searchText) ||
			travel.flight.flightno.toLowerCase().includes(searchText) ||
			travel.details.flightModel.toString().toLowerCase().includes(searchText) ||
			travel.details.bodyType.toLowerCase().includes(searchText) ||
			travel.details.type.toLowerCase().includes(searchText) ||
			travel.details.startTime.toLowerCase().includes(searchText) ||
			travel.details.endTime.toLowerCase().includes(searchText) ||
			travel.details.status.toLowerCase().includes(searchText) ||
			travel.details.additionalStatus.toLowerCase().includes(searchText) ||
			travel.details.timeStatus.toLowerCase().includes(searchText) ||
			travel.weight.percentage.toLowerCase().includes(searchText) ||
			travel.weight.value.toLowerCase().includes(searchText) ||
			travel.volume.percentage.toLowerCase().includes(searchText) ||
			travel.volume.value.toLowerCase().includes(searchText) ||
			travel.revenue.revenue.toLowerCase().includes(searchText) ||
			travel.revenue.yeild.toLowerCase().includes(searchText) ||
			travel.queuedBooking.sr.toLowerCase().includes(searchText) ||
			travel.queuedBooking.volume.toLowerCase().includes(searchText)
		);
	}
	return value;
}

const App = () => {
	const airports = ["FRA", "DXB", "AAA", "BBB", "CCC", "DDD", "EEE", "FFF"];
	const columns = [
		{
			dataField: "flight",
			text: "Flight",
			formatter: flightFormatter,
			filter: textFilter({
				onFilter: customFlightFilter,
			}),
			editorRenderer: (editorProps, value, row, column, rowIndex, columnIndex) => (
				<FlightEdit {...editorProps} value={value} />
			),
		},
		{
			dataField: "segment",
			text: "Segment",
			formatter: segmentFormatter,
			filter: textFilter({
				onFilter: customSegmentFilter,
			}),
			editorRenderer: (editorProps, value, row, column, rowIndex, columnIndex) => (
				<SegmentEdit {...editorProps} value={value} airports={airports} />
			),
		},
		{
			dataField: "details",
			text: "Details",
			formatter: detailsFormatter,
			filter: textFilter({
				onFilter: customDetailsFilter,
			}),
			headerStyle: { width: "20%" },
			editorRenderer: (editorProps, value, row, column, rowIndex, columnIndex) => (
				<DetailsEdit {...editorProps} value={value} />
			),
		},
		{
			dataField: "weight",
			text: "Weight",
			formatter: weightAndVolumeFormatter,
			filter: textFilter({
				onFilter: customWeightFilter,
			}),
			editorRenderer: (editorProps, value, row, column, rowIndex, columnIndex) => (
				<WeightEdit {...editorProps} value={value} />
			),
		},
		{
			dataField: "volume",
			text: "Volume",
			formatter: weightAndVolumeFormatter,
			filter: textFilter({
				onFilter: customVolumeFilter,
			}),
			editorRenderer: (editorProps, value, row, column, rowIndex, columnIndex) => (
				<VolumeEdit {...editorProps} value={value} />
			),
		},
		{
			dataField: "uldPositions",
			text: "ULD Positions",
			formatter: positionFormatter,
			filter: textFilter({
				onFilter: customUldFilter,
			}),
			// editorRenderer: (editorProps, value, row, column, rowIndex, columnIndex) => (
			// 	<UldPositionsEdit {...editorProps} value={value} />
			// )
		},
		{
			dataField: "revenue",
			text: "Revenue/Yield",
			formatter: revenueFormatter,
			filter: textFilter({
				onFilter: customRevenueFilter,
			}),
			editorRenderer: (editorProps, value, row, column, rowIndex, columnIndex) => (
				<RevenueEdit {...editorProps} value={value} />
			),
		},
		{ dataField: "sr", text: "SR", formatter: srFormatter, filter: textFilter() },
		{
			dataField: "queuedBooking",
			text: "Queued Booking",
			formatter: bookingFormatter,
			filter: textFilter({
				onFilter: customQueuedBookingFilter,
			}),
			editorRenderer: (editorProps, value, row, column, rowIndex, columnIndex) => (
				<QueuedBookingEdit {...editorProps} value={value} />
			),
		},
	];
	const pagination = paginationFactory({
		sizePerPage: 50,
	});

	useEffect(() => {
		$(".react-bootstrap-table thead th").resizable();
	});

	return (
		<div className='App'>
			<Header />
			<ToolkitProvider keyField='travelId' data={sampleData} columns={columns} search={ { searchFormatted: true } }>
				{(props) => (
					<div>
						<div className='row m-0 p-3 col-md-12' style={{background: '#1f567e0c'}}>
							<div className='col-md-6'></div>
							<div className='col-md-6 row searchArea'>
								<div className='col-md-4 searchAreaElement'>
									<SearchBar {...props.searchProps} />
								</div>
								<div className='col-md-1'>
									<i className="fa fa-sort-amount-desc fa-2x fa-border"></i>
								</div>
								<div className='col-md-1'>
									<i className="fa fa-columns fa-2x fa-border" aria-hidden="true"></i>
								</div>
								<div className='col-md-1'>
									<i className="fa fa-refresh fa-2x fa-border" aria-hidden="true"></i>
								</div>
								<div className='col-md-1'>
									<i className="fa fa-cog fa-2x fa-border" aria-hidden="true"></i>
								</div>
								<div className='col-md-1'>
									<span className="fa fa-file-excel-o fa-2x fa-border" />
								</div>
							</div>
						</div>
						<BootstrapTable
							{...props.baseProps}
							expandRow={expandRow}
							rowStyle={rowStyle}
							filter={filterFactory()}
							cellEdit={cellEditFactory({ mode: "dbclick", blurToSave: true })}
							pagination={pagination}
							hover={true}
							selectRow={ { mode: 'checkbox' } }
						/>
					</div>
				)}
			</ToolkitProvider>
		</div>
	);
};

export default App;
