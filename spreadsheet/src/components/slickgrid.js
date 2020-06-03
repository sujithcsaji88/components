import { Data,Grid, Editors, Plugins } from "slickgrid-es6";
import data from "../stubs/data";
import { CustomFormatter } from "../utilities/iCargo.formatters";
import React,{ useState, useEffect } from 'react';

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
dataView.setItems(data, "travelId");
const sortable = true;
const columns = [
  checkboxSelector.getColumnDefinition(),
  {
    id: "id",
    sortable,
    width: 1,
    field: "id",
    formatter: CustomFormatter,
    editor: Editors.Checkbox
  },
  {
    id: "flight",
    sortable,
    name: "Flight No",
    field: "flight",
    minWidth: 90,
    editor: Editors.Text,
    formatter: CustomFormatter,
  },
  {
    id: "flight",
    sortable,
    name: "Flight Date",
    field: "flight",
    cssClass: "cell-title",
    editor: Editors.Date,
    options: {
      date: flatPickrOptions,
    },
    formatter: CustomFormatter,
    sortable: true
  },
  {
    id: "segment",
    sortable,
    name: "Segment From",
    field: "segment",
    editor: Editors.Text,
    formatter: CustomFormatter,
  },
  {
    id: "segment",
    sortable,
    name: "Segment To",
    field: "segment",
    minWidth: 90,
    editor: Editors.Text,
    formatter: CustomFormatter,
  },
  {
    id: "details",
    sortable,
    name: "Flight Model",
    field: "details",
    minWidth: 90,
    editor: Editors.Text,
    formatter: CustomFormatter,
  },
  {
    id: "details",
    sortable,
    name: "Body Type",
    field: "details",
    editor: Editors.Text,
    formatter: CustomFormatter,
  },
  {
    id: "details",
    sortable,
    name: "Type",
    field: "details",
    maxWidth: 100,
    minWidth: 80,
    editor: Editors.Text,
    formatter: CustomFormatter,
  },
  {
    id: "details",
    sortable,
    name: "Start Time",
    field: "details",
    editor: Editors.Text,
    formatter: CustomFormatter,
  },
  {
    id: "details",
    sortable,
    name: "End Time",
    field: "details",
    minWidth: 90,
    editor: Editors.Text,
    formatter: CustomFormatter,
  },
  {
    id: "details",
    sortable,
    name: "Status",
    field: "details",
    editor: Editors.Text,
    formatter: CustomFormatter,
  },
  {
    id: "details",
    sortable,
    name: "Additional Status",
    field: "details",
    editor: Editors.Text,
    formatter: CustomFormatter,
  },
  {
    id: "details",
    sortable,
    name: "Time Status",
    field: "details",
    maxWidth: 100,
    minWidth: 80,
    editor: Editors.Text,
    formatter: CustomFormatter,
  },
  {
    id: "weight",
    sortable,
    name: "Weight %",
    field: "weight",
    editor: Editors.Text,
    formatter: CustomFormatter,
  },
  {
    id: "weight",
    sortable,
    name: "Weight Value",
    field: "weight",
    editor: Editors.Text,
    formatter: CustomFormatter,
  },
  {
    id: "volume",
    sortable,
    name: "Volume %",
    field: "volume",
    minWidth: 90,
    editor: Editors.Text,
    formatter: CustomFormatter,
  },
  {
    id: "volume",
    sortable,
    name: "Volume Value",
    field: "volume",
    editor: Editors.Text,
    formatter: CustomFormatter,
  },
  {
    id: "uldPositions",
    sortable,
    name: "ULD Position1",
    field: "uldPositions",
    editor: Editors.Text,
    formatter: CustomFormatter,
  },
  {
    id: "uldPositions",
    sortable,
    name: "ULD Value1",
    field: "uldPositions",
    editor: Editors.Text,
    formatter: CustomFormatter,
  },
  {
    id: "uldPositions",
    sortable,
    name: "ULD Position2",
    field: "uldPositions",
    editor: Editors.Text,
    formatter: CustomFormatter,
  },
  {
    id: "uldPositions",
    sortable,
    name: "ULD Value2",
    field: "uldPositions",
    editor: Editors.Text,
    formatter: CustomFormatter,
  },
  {
    id: "uldPositions",
    sortable,
    name: "ULD Position3",
    field: "uldPositions",
    editor: Editors.Text,
    formatter: CustomFormatter,
  },
  {
    id: "uldPositions",
    sortable,
    name: "ULD Value3",
    field: "uldPositions",
    editor: Editors.Text,
    formatter: CustomFormatter,
  },
  {
    id: "uldPositions",
    sortable,
    name: "ULD Position4",
    field: "uldPositions",
    editor: Editors.Text,
    formatter: CustomFormatter,
  },
  {
    id: "uldPositions",
    sortable,
    name: "ULD Value4",
    field: "uldPositions",
    editor: Editors.Text,
    formatter: CustomFormatter,
  },
  {
    id: "revenue",
    sortable,
    name: "Revenue",
    field: "revenue",
    editor: Editors.Text,
    formatter: CustomFormatter,
  },
  {
    id: "revenue",
    sortable,
    name: "Yeild",
    field: "revenue",
    editor: Editors.Text,
    formatter: CustomFormatter,
  },
  { id: "sr",sortable, name: "SR", field: "sr", editor: Editors.Text },
  {
    id: "queuedBooking",
    sortable,
    name: "Booking SR",
    field: "queuedBooking",
    editor: Editors.Text,
    formatter: CustomFormatter,
  },
  {
    id: "queuedBooking",
    sortable,
    name: "Booking Volume",
    field: "queuedBooking",
    editor: Editors.Text,
    formatter: CustomFormatter,
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