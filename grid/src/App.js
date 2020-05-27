import React from "react";
import offerData from "./getofferlist.json";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";

const styleFormatter = (cell, row) => {
	return <p style={{ color: "red" }}>{cell}</p>;
};

const arrayFormatter = (cell, row) => {
	return cell.join(",");
};

const App = () => {
	const columns = [
		{ dataField: "id", text: "Offer Code", formatter: styleFormatter },
		{ dataField: "type", text: "Offer Type" },
		{ dataField: "status", text: "Offer Status" },
		{ dataField: "displayid", text: "displayid" },
		{ dataField: "title", text: "title" },
		{ dataField: "description", text: "description" },
		{ dataField: "start", text: "start date" },
		{ dataField: "end", text: "end date" },
		{ dataField: "source", text: "source" },
		{ dataField: "pref", text: "pref" },
		{ dataField: "ruleId", text: "ruleId" },
		{ dataField: "type", text: "type" },
		{ dataField: "propertyList", text: "propertyList", formatter: arrayFormatter },
	];

	return (
		<div className='App'>
			<BootstrapTable keyField='id' data={offerData.offers} columns={columns}></BootstrapTable>
		</div>
	);
};

export default App;
