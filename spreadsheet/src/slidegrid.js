import {Grid, Data} from 'slickgrid-es6';
import data from "./sample_data.json";

const columns = [
    { id: "index", name: "Index", field:"Index"},
    { id: "id", name: "Data ID", field:"Data ID" },
    { id: "guid", name: "Global ID" , field:"Global ID"},
    { id: "isActive", name: "Is Active", field:"Is Active" },
    { id: "balance", name: "Balance Amount", field:"Balance Amount" },
    { id: "picture", name: "Image", field:"Image" },
    { id: "age", name: "Age", field:"Age" },
    { id: "eyeColor", name: "Eye Color" , field:"Eye Color"},
    { id: "name", name: "Name" , field:"Name"},
    { id: "gender", name: "Gender" , field:"Gender"},
    { id: "company", name: "Company" , field:"Company"},
    { id: "email", name: "Email ID" , field:"Email ID"},
    { id: "phone", name: "Phone Number", field:"Phone Number" },
    { id: "address", name: "Address", field:"Address" },
    { id: "registered", name: "Registered Time" , field:"Registered Time"},
    { id: "latitude", name: "Latitude", field:"Latitude" },
    { id: "longitude", name: "Longitude", field:"Longitude" },
    { id: "tags", name: "Tags", field:"Tags" },
    { id: "friends", name: "Friends", field:"Friends"},
    { id: "favoriteFruit", name: "Favorite Fruit" , field:"Favorite Fruit"},
  ];


const options = {
  enableCellNavigation: true,
  enableColumnReorder: true,
  forceFitColumns: !true,
  frozenColumn: 0,
  frozenRow: 1
};

const dataView = new Data.DataView();
console.log(data);
dataView.setItems([ ...data ]); 

export default () => new Grid("#spreadsheet", dataView, columns, options);