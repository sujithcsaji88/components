import React from "react";
import offerData from "./getofferlist.json";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";

const App = () => {
	const columns = [
		{ dataField: "id", text: "Offer Code" },
		{ dataField: "type", text: "Offer Type" },
		{ dataField: "status", text: "Offer Status" },
	];

	return (
		<div className='App'>
			<BootstrapTable keyField='id' data={offerData.offers} columns={columns} pagination={paginationFactory()} />
		</div>
	);
};

export default App;
