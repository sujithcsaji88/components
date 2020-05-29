import React from "react";
import sampleData from "./sample_data.json";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";

const { SearchBar } = Search;

const styleFormatter = (cell, row) => {
	return <p style={{ color: "red" }}>{cell}</p>;
};

const arrayFormatter = (cell, row) => {
	return cell.join(",");
};

const objectFormatter = (cell, row) => {
	const names = cell.map((friend) => {
		return friend.name;
	});
	return names.join(",");
};

const imageFormatter = (cell, row) => {
	return <img src={cell} style={{ width: "100%", height: "100%" }} alt='Employee DP' />;
};

const rowStyle = (row, rowIndex) => {
	return { wordBreak: "break-all" };
};

const App = () => {
	const columns = [
		{ dataField: "index", text: "Index", formatter: styleFormatter },
		{ dataField: "id", text: "Data ID" },
		{ dataField: "guid", text: "Global ID" },
		{ dataField: "isActive", text: "Is Active" },
		{ dataField: "balance", text: "Balance Amount" },
		{ dataField: "picture", text: "Image", formatter: imageFormatter },
		{ dataField: "age", text: "Age" },
		{ dataField: "eyeColor", text: "Eye Color" },
		{ dataField: "name", text: "Name" },
		{ dataField: "gender", text: "Gender" },
		{ dataField: "company", text: "Company" },
		{ dataField: "email", text: "Email ID" },
		{ dataField: "phone", text: "Phone Number" },
		{ dataField: "address", text: "Address" },
		{ dataField: "registered", text: "Registered Time" },
		{ dataField: "latitude", text: "Latitude" },
		{ dataField: "longitude", text: "Longitude" },
		{ dataField: "tags", text: "Tags", formatter: arrayFormatter },
		{ dataField: "friends", text: "Friends", formatter: objectFormatter },
		{ dataField: "favoriteFruit", text: "Favorite Fruit" },
	];

	const pagination = paginationFactory({
		sizePerPage: 50,
	});

	console.log("JSON Length: " + sampleData.length);
	return (
		<div className='App'>
			<ToolkitProvider keyField='id' data={sampleData} columns={columns} search>
				{(props) => (
					<div>
						<h3>Input something at below input field:</h3>
						<SearchBar {...props.searchProps} />
						<hr />
						<BootstrapTable {...props.baseProps} rowStyle={rowStyle} pagination={pagination} />
					</div>
				)}
			</ToolkitProvider>
		</div>
	);
};

export default App;
