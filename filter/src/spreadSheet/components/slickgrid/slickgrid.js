import { Data,Grid, Editors, Plugins } from "slickgrid-es6";
import CargoData from '../../stubs/CargoData.json'
import React,{ useEffect } from 'react';

const checkboxSelector = new Plugins.CheckboxSelectColumn({
  cssClass: "slick-cell-checkboxsel"
});

const flatPickrOptions = {
  dateFormat: "d/m/Y",
  parseDate: function (input) {
    var split = input.split("/");
    return new Date(split[1] + "-" + split[0] + "-" + split[2]);
  },
};

let dataView = new Data.DataView();
dataView.setItems(CargoData, "travelId");
const sortable = true;
const columns = [
  checkboxSelector.getColumnDefinition(),
  {
    id: "flightno",
    sortable,
    name: "Flight No",
    field: "flightno",
    minWidth: 90,
    editor: Editors.Text,
  },
  {
    id: "date",
    sortable,
    name: "Flight Date",
    field: "date",
    cssClass: "cell-title",
    editor: Editors.Date,
    options: {
      date: flatPickrOptions,
    }
  },
  {
    id: "segmentfrom",
    sortable,
    name: "Segment From",
    field: "segmentfrom",
    editor: Editors.Text,
  },
  {
    id: "segmentto",
    sortable,
    name: "Segment To",
    field: "segmentto",
    minWidth: 90,
    editor: Editors.Text,
  },
  {
    id: "flightModel",
    sortable,
    name: "Flight Model",
    field: "flightModel",
    minWidth: 90,
    editor: Editors.Text,
  },
  {
    id: "bodyType",
    sortable,
    name: "Body Type",
    field: "bodyType",
    editor: Editors.Text,
  },
  {
    id: "type",
    sortable,
    name: "Type",
    field: "type",
    maxWidth: 100,
    minWidth: 80,
    editor: Editors.Text,
  },
  {
    id: "startTime",
    sortable,
    name: "Start Time",
    field: "startTime",
    editor: Editors.Text,
  },
  {
    id: "endTime",
    sortable,
    name: "End Time",
    field: "endTime",
    minWidth: 90,
    editor: Editors.Text,
  },
  {
    id: "status",
    sortable,
    name: "Status",
    field: "status",
    editor: Editors.Text,
  },
  {
    id: "additionalStatus",
    sortable,
    name: "Additional Status",
    field: "additionalStatus",
    editor: Editors.Text,
  },
  {
    id: "timeStatus",
    sortable,
    name: "Time Status",
    field: "timeStatus",
    maxWidth: 100,
    minWidth: 80,
    editor: Editors.Text,
  },
  {
    id: "weightpercentage",
    sortable,
    name: "Weight %",
    field: "weightpercentage",
    editor: Editors.Text,
  },
  {
    id: "weightvalue",
    sortable,
    name: "Weight Value",
    field: "weightvalue",
    editor: Editors.Text,
  },
  {
    id: "volumepercentage",
    sortable,
    name: "Volume %",
    field: "volumepercentage",
    minWidth: 90,
    editor: Editors.Text,
  },
  {
    id: "volumevalue",
    sortable,
    name: "Volume Value",
    field: "volumevalue",
    editor: Editors.Text,
  },
  {
    id: "uldposition1",
    sortable,
    name: "ULD Position1",
    field: "uldposition1",
    editor: Editors.Text,
  },
  {
    id: "uldvalue1",
    sortable,
    name: "ULD Value1",
    field: "uldvalue1",
    editor: Editors.Text,
  },
  {
    id: "uldposition2",
    sortable,
    name: "ULD Position2",
    field: "uldposition2",
    editor: Editors.Text,
  },
  {
    id: "uldvalue2",
    sortable,
    name: "ULD Value2",
    field: "uldvalue2",
    editor: Editors.Text,
  },
  {
    id: "uldposition3",
    sortable,
    name: "ULD Position3",
    field: "uldposition3",
    editor: Editors.Text,
  },
  {
    id: "uldvalue3",
    sortable,
    name: "ULD Value3",
    field: "uldvalue3",
    editor: Editors.Text,
  },
  {
    id: "uldposition4",
    sortable,
    name: "ULD Position4",
    field: "uldposition4",
    editor: Editors.Text,
  },
  {
    id: "uldvalue4",
    sortable,
    name: "ULD Value4",
    field: "uldvalue4",
    editor: Editors.Text,
  },
  {
    id: "revenue",
    sortable,
    name: "Revenue",
    field: "revenue",
    editor: Editors.Text,
  },
  {
    id: "yeild",
    sortable,
    name: "Yeild",
    field: "yeild",
    editor: Editors.Text,
  },
  { id: "sr",sortable, name: "SR", field: "sr", editor: Editors.Text },
  {
    id: "queuedBookingSR",
    sortable,
    name: "Booking SR",
    field: "queuedBookingSR",
    editor: Editors.Text,
  },
  {
    id: "queuedBookingvolume",
    sortable,
    name: "Booking Volume",
    field: "queuedBookingvolume",
    editor: Editors.Text,
  },
];

const options = {
  enableCellNavigation: true,
  enableColumnReorder: true,
  editable: true,
  asyncEditorLoading: false,
  autoEdit: false,
  headerRowHeight: 20,
};

function SpreadSheet(props) {
  
  let grid;
  useEffect(
    () => {      
      grid = new Grid('#iCargoSpreadSheet', dataView, columns, options);
      grid.setSelectionModel(new Plugins.RowSelectionModel({ selectActiveRow: false})); 
      grid.registerPlugin(checkboxSelector);
      grid.setSelectionModel(new Plugins.CellSelectionModel());
      grid.onSort.subscribe(function (e, args) {
        var comparer = function (a, b) {
          return (a[args.sortCol.field] > b[args.sortCol.field]) ? 1 : -1;
        }
        dataView.sort(comparer, args.sortAsc);
      });
      dataView.onRowsChanged.subscribe((e, { rows }) => {
        grid.invalidateRows(rows);
        grid.render();
      });
    }
  ,[]);
  return(
    <div id="iCargoSpreadSheet" className="slickgrid-container"/>
    );
}

export default SpreadSheet; 