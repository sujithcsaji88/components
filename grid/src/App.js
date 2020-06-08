import React, { useEffect } from "react";
import sampleData from "./sample_data1.json";
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
		<div className='lineHeight'>
			<p className="flightCol">{cell.flightno}</p>
			<p>{cell.date}</p>
		</div>
	);
};

const segmentFormatter = (cell) => {
	return (
		<div>
			<p className='d-flex'>
				<p className='space'>{cell.from}</p> 
				<p className='space'><img className="img" alt='' src="https://d1icd6shlvmxi6.cloudfront.net/gsc/OYDDTS/35/1e/62/351e623259f345efac57e1f95b7849f9/images/neo-list-5/u374.png?token=f5979504349fe3dc90a3076a078178c0306f3004b31e4e2956f3bdb677a59ec9" /></p>
				<p>{cell.to}</p>
			</p>
		</div>
	);
};

const detailsFormatter = (cell) => {
	return (
		<div >
			<p className='d-flex'>
				<p className='space'> {cell.startTime} - {cell.endTime}</p>
				<p className='space'> | {cell.status} </p>
				<p className='space'> | {cell.additionalStatus}</p>
			</p>
			<p className='d-flex'>
				<p className='space'> {cell.flightModel}</p>
				<p className='space'> | {cell.bodyType}</p>
				<p className='space'> | {cell.type +' |'}</p>
				<p className="detailsCol"> {cell.timeStatus.split('to')[0]}</p>
				<p> {' to depart'}</p>
			</p>
		</div>
	);
};

const weightAndVolumeFormatter = (cell) => {
	return (
		<div className='lineHeight'>
			<p className="weightCol">{cell.percentage}</p>
			<p className='d-flex'>
				<p className="weightValueCol">{cell.value.split('/')[0]}</p>
				<p className="weightValueSecondCol">{'/ '+cell.value.split('/')[1].split(' ')[0]}</p>
				<p className='space'>{cell.value.split('/')[1].split(' ')[1]}</p>
			</p>
		</div>
	);
};

const positionFormatter = (cell) => {
	return cell.map((positions, index) => {
		return (
			<div key={index} style={{ width: "50%", float: "left", textAlign: "center" }}>
				<div className='d-flex lineHeight'>
					<p className='space'> {positions.position} </p>
					<p className='uldCol'> {positions.value} </p>
				</div>
			</div>
		);
	});
};

const revenueFormatter = (cell) => {
	return (
		<div className='revenueCol lineHeight'>
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
		<div className='lineHeight'>
			<div className='row'>
				<p className='bookingCol'>{cell.sr.split(' ')[0]}</p>
				<p>{cell.sr.split(' ')[1]}</p>
			</div>
			<div className='row'>
				<p className='bookingCol'>{cell.volume.split('/')[0].split(' ')[0]}</p>
				<p className='space'>{cell.volume.split('/')[0].split(' ')[1]}</p>
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
			(travel) => {
				const {details} = travel;
				if(details.flightModel.toString().toLowerCase().includes(filterVal) ||
				details.bodyType.toLowerCase().includes(filterVal) ||
				details.type.toLowerCase().includes(filterVal) ||
				details.startTime.toLowerCase().includes(filterVal) ||
				details.endTime.toLowerCase().includes(filterVal) ||
				details.status.toLowerCase().includes(filterVal) ||
				details.additionalStatus.toLowerCase().includes(filterVal) ||
				details.timeStatus.toLowerCase().includes(filterVal))
				return true;
			}
		);
	}
	return data;
};

const customWeightFilter = (filterVal, data) => {
	if (filterVal) {
		filterVal = filterVal.toLowerCase();
		return data.filter(
			(travel) => {
				const {weight} = travel;
				if(weight.percentage.toLowerCase().includes(filterVal) ||
				weight.value.toLowerCase().includes(filterVal))
				return true;
			}
				
		);
	}
	return data;
};

const customVolumeFilter = (filterVal, data) => {
	if (filterVal) {
		filterVal = filterVal.toLowerCase();
		return data.filter(
			(travel) =>{
				const {volume} = travel;
				if(volume.percentage.toLowerCase().includes(filterVal) ||
				volume.value.toLowerCase().includes(filterVal))
				return true;
			}
			
		);
	}
	return data;
};

const customRevenueFilter = (filterVal, data) => {
	if (filterVal) {
		filterVal = filterVal.toLowerCase();
		return data.filter(
			(travel) =>{
				const {revenue} = travel;
				if(revenue.revenue.toLowerCase().includes(filterVal) ||
				revenue.yeild.toLowerCase().includes(filterVal))
				return true;
			}
				
		);
	}
	return data;
};

const customQueuedBookingFilter = (filterVal, data) => {
	if (filterVal) {
		filterVal = filterVal.toLowerCase();
		return data.filter(
			(travel) => {
				const {queuedBooking} = travel;
				if(queuedBooking.sr.toLowerCase().includes(filterVal) ||
				queuedBooking.volume.toLowerCase().includes(filterVal))
				return true;
			}
				
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
		const {flight, segment, details, weight, volume, revenue, queuedBooking, uldPositions} = row;
		return (
			flight.date.toLowerCase().includes(searchText) ||
			flight.flightno.toLowerCase().includes(searchText) ||
			segment.from.toLowerCase().includes(searchText) ||
			segment.to.toLowerCase().includes(searchText)||
			details.flightModel.toString().toLowerCase().includes(searchText) ||
			details.bodyType.toLowerCase().includes(searchText) ||
			details.type.toLowerCase().includes(searchText) ||
			details.startTime.toLowerCase().includes(searchText) ||
			details.endTime.toLowerCase().includes(searchText) ||
			details.status.toLowerCase().includes(searchText) ||
			details.additionalStatus.toLowerCase().includes(searchText) ||
			details.timeStatus.toLowerCase().includes(searchText) ||
			weight.percentage.toLowerCase().includes(searchText) ||
			weight.value.toLowerCase().includes(searchText) ||
			volume.percentage.toLowerCase().includes(searchText) ||
			volume.value.toLowerCase().includes(searchText) ||
			revenue.revenue.toLowerCase().includes(searchText) ||
			revenue.yeild.toLowerCase().includes(searchText) ||
			row.sr.toLowerCase().includes(searchText) ||
			queuedBooking.sr.toLowerCase().includes(searchText) ||
			queuedBooking.volume.toLowerCase().includes(searchText) ||
			uldPositions.findIndex((item) => {
                return (item.position + " " + item.value).toLowerCase().includes(searchText);
            }) >= 0
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
			sort: true,
			sortFunc: (a, b, order, dataField) => {
				const str1 = a.flightno+a.date
				const str2 = b.flightno+b.date
				if (order === 'asc')
					return (str2) < (str1) ? 1 : -1;
				return (str1) > (str2)  ? -1 : 1;
			},
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
			sort: true,
			sortFunc: (a, b, order, dataField) => {
				const str1 = a.from+a.to
				const str2 = b.from+b.to
				if (order === 'asc')
					return (str2) < (str1) ? 1 : -1;
				return (str1) > (str2)  ? -1 : 1;
			},
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
			sort: true,
			sortFunc: (a, b, order, dataField) => {
				const str1 = a.flightModel+a.bodyType+a.type+a.startTime+a.endTime+a.status+a.additionalStatus+a.timeStatus
				const str2 = b.flightModel+b.bodyType+a.type+a.startTime+a.endTime+a.status+a.additionalStatus+a.timeStatus
				if (order === 'asc')
					return (str2) < (str1) ? 1 : -1;
				return (str1) > (str2)  ? -1 : 1;
			},
			formatter: detailsFormatter,
			filter: textFilter({
				onFilter: customDetailsFilter,
			}),
			headerStyle: { width: "25%" },
			editorRenderer: (editorProps, value, row, column, rowIndex, columnIndex) => (
				<DetailsEdit {...editorProps} value={value} />
			),
		},
		{
			dataField: "weight",
			text: "Weight",
			sort: true,
			sortFunc: (a, b, order, dataField) => {
				const str1 = a.percentage+a.value
				const str2 = b.percentage+b.value
				if (order === 'asc')
					return (str2) < (str1) ? 1 : -1;
				return (str1) > (str2)  ? -1 : 1;
			},
			headerStyle: { width: "10%" },
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
			sort: true,
			sortFunc: (a, b, order, dataField) => {
				const str1 = a.percentage+a.value
				const str2 = b.percentage+b.value
				if (order === 'asc')
					return (str2) < (str1) ? 1 : -1;
				return (str1) > (str2)  ? -1 : 1;
			},
			headerStyle: { width: "10%" },
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
			sort: true,
			sortFunc: (a, b, order, dataField) => {
				debugger
				var str1;
				var str2;
				a.find((item) => {
					str1 = str1+ (item.position + item.value);
				})
				b.find((item) => {
					str2 = str2+ (item.position + item.value);
				})
				if (order === 'asc')
					return (str2) < (str1) ? 1 : -1;
				return (str1) > (str2)  ? -1 : 1;
			},
			headerStyle: { width: "15%" },
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
			sort: true,
			sortFunc: (a, b, order, dataField) => {
				const str1 = a.revenue+a.yeild
				const str2 = b.revenue+b.yeild
				if (order === 'asc')
					return (str2) < (str1) ? 1 : -1;
				return (str1) > (str2)  ? -1 : 1;
			},
			formatter: revenueFormatter,
			filter: textFilter({
				onFilter: customRevenueFilter,
			}),
			editorRenderer: (editorProps, value, row, column, rowIndex, columnIndex) => (
				<RevenueEdit {...editorProps} value={value} />
			),
		},
		{ dataField: "sr", text: "SR",sort: true , formatter: srFormatter, filter: textFilter() },
		{
			dataField: "queuedBooking",
			text: "Queued Booking",
			sort: true,
			sortFunc: (a, b, order, dataField) => {
				const str1 = a.sr+a.volume
				const str2 = b.sr+b.volume
				if (order === 'asc')
					return (str2) < (str1) ? 1 : -1;
				return (str1) > (str2)  ? -1 : 1;
			},
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
			<ToolkitProvider keyField='travelId' data={sampleData} columns={columns} search={ { onColumnMatch } }>
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
