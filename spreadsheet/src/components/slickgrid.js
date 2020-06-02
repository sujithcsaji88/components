import { Grid, Formatters, Editors } from "slickgrid-es6";
import data from "../stubs/data";
import { CustomFormatter } from "../utilities/iCargo.formatters";

const flatPickrOptions = {
  dateFormat: "d/m/Y", // see https://chmln.github.io/flatpickr/#options,
  parseDate: function (input) {
    var split = input.split("/");
    return new Date(split[1] + "-" + split[0] + "-" + split[2]);
  },
};

const columns = [
  {
    id: "id",
    width: 1,
    field: "id",
    formatter: Formatters.Checkmark,
    editor: Editors.Checkbox
  },
  {
    id: "flight",
    name: "Flight No",
    field: "flight",
    minWidth: 90,
    editor: Editors.Text,
    formatter: CustomFormatter,
  },
  {
    id: "flight",
    name: "Flight Date",
    field: "flight",
    cssClass: "cell-title",
    editor: Editors.Date,
    options: {
      date: flatPickrOptions,
    },
    formatter: CustomFormatter,
  },
  {
    id: "segment",
    name: "Segment From",
    field: "segment",
    editor: Editors.Text,
    formatter: CustomFormatter,
  },
  {
    id: "segment",
    name: "Segment To",
    field: "segment",
    minWidth: 90,
    editor: Editors.Text,
    formatter: CustomFormatter,
  },
  {
    id: "details",
    name: "Flight Model",
    field: "details",
    minWidth: 90,
    editor: Editors.Text,
    formatter: CustomFormatter,
  },
  {
    id: "details",
    name: "Body Type",
    field: "details",
    editor: Editors.Text,
    formatter: CustomFormatter,
  },
  {
    id: "details",
    name: "Type",
    field: "details",
    maxWidth: 100,
    minWidth: 80,
    editor: Editors.Text,
    formatter: CustomFormatter,
  },
  {
    id: "details",
    name: "Start Time",
    field: "details",
    editor: Editors.Text,
    formatter: CustomFormatter,
  },
  {
    id: "details",
    name: "End Time",
    field: "details",
    minWidth: 90,
    editor: Editors.Text,
    formatter: CustomFormatter,
  },
  {
    id: "details",
    name: "Status",
    field: "details",
    editor: Editors.Text,
    formatter: CustomFormatter,
  },
  {
    id: "details",
    name: "Additional Status",
    field: "details",
    editor: Editors.Text,
    formatter: CustomFormatter,
  },
  {
    id: "details",
    name: "Time Status",
    field: "details",
    maxWidth: 100,
    minWidth: 80,
    editor: Editors.Text,
    formatter: CustomFormatter,
  },
  {
    id: "weight",
    name: "Weight %",
    field: "weight",
    editor: Editors.Text,
    formatter: CustomFormatter,
  },
  {
    id: "weight",
    name: "Weight Value",
    field: "weight",
    editor: Editors.Text,
    formatter: CustomFormatter,
  },
  {
    id: "volume",
    name: "Volume %",
    field: "volume",
    minWidth: 90,
    editor: Editors.Text,
    formatter: CustomFormatter,
  },
  {
    id: "volume",
    name: "Volume Value",
    field: "volume",
    editor: Editors.Text,
    formatter: CustomFormatter,
  },
  {
    id: "uldPositions",
    name: "ULD Position1",
    field: "uldPositions",
    editor: Editors.Text,
    formatter: CustomFormatter,
  },
  {
    id: "uldPositions",
    name: "ULD Value1",
    field: "uldPositions",
    editor: Editors.Text,
    formatter: CustomFormatter,
  },
  {
    id: "uldPositions",
    name: "ULD Position2",
    field: "uldPositions",
    editor: Editors.Text,
    formatter: CustomFormatter,
  },
  {
    id: "uldPositions",
    name: "ULD Value2",
    field: "uldPositions",
    editor: Editors.Text,
    formatter: CustomFormatter,
  },
  {
    id: "uldPositions",
    name: "ULD Position3",
    field: "uldPositions",
    editor: Editors.Text,
    formatter: CustomFormatter,
  },
  {
    id: "uldPositions",
    name: "ULD Value3",
    field: "uldPositions",
    editor: Editors.Text,
    formatter: CustomFormatter,
  },
  {
    id: "uldPositions",
    name: "ULD Position4",
    field: "uldPositions",
    editor: Editors.Text,
    formatter: CustomFormatter,
  },
  {
    id: "uldPositions",
    name: "ULD Value4",
    field: "uldPositions",
    editor: Editors.Text,
    formatter: CustomFormatter,
  },
  {
    id: "revenue",
    name: "Revenue",
    field: "revenue",
    editor: Editors.Text,
    formatter: CustomFormatter,
  },
  {
    id: "revenue",
    name: "Yeild",
    field: "revenue",
    editor: Editors.Text,
    formatter: CustomFormatter,
  },
  { id: "sr", name: "SR", field: "sr", editor: Editors.Text },
  {
    id: "queuedBooking",
    name: "Booking SR",
    field: "queuedBooking",
    editor: Editors.Text,
    formatter: CustomFormatter,
  },
  {
    id: "queuedBooking",
    name: "Booking Volume",
    field: "queuedBooking",
    editor: Editors.Text,
    formatter: CustomFormatter,
  },
];

const options = {
  enableCellNavigation: true,
  enableColumnReorder: true,
  forceFitColumns: !true,
  frozenColumn: 0,
  frozenRow: 1,
  editable: true,
  enableAddRow: true,
  asyncEditorLoading: false,
  autoEdit: false,
};

export default () => {
  new Grid("#iCargoSpreadSheet", data, columns, options);
};
