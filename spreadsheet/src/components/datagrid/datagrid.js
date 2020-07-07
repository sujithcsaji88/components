import React, { Component } from "react";
import ReactDOM from "react-dom";
import ReactDataGrid from "react-data-grid";
import { Toolbar, Data, Filters, Editors } from "react-data-grid-addons";
import { range } from "lodash";
import { applyFormula } from "../../utilities/utils";
import { FormControl } from "react-bootstrap";


import {
  faFilter,
  faSortAmountDown,
  faTimes,
  faFileExcel,
  faFilePdf,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ErrorMessage from "../common/ErrorMessage";
import ColumnReordering from "../column/column-reorder/column-reorder";

import jsPDF from "jspdf";
import "jspdf-autotable";
//import { CSVLink } from "react-csv";
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';

const {
  DraggableHeader: { DraggableContainer },
} = require("react-data-grid-addons");

const defaultColumnProperties = {
  sortable: true,
  resizable: true,
  filterable: true,
  width: 120,
};
const { DropDownEditor } = Editors;
// The DatePicker componenent to be used for editor functionality
class DatePicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
    //the variable to store component reference
    this.input = null;

    this.getInputNode = this.getInputNode.bind(this);
    this.getValue = this.getValue.bind(this);
    this.onValueChanged = this.onValueChanged.bind(this);
  }

  //returning the component with the reference, input
  getInputNode() {
    return this.input;
  }

  getValue() {
    // date format library instance creation
    let dateFormat = require('dateformat');
    var updated = {};
    //returning updated object with the date value in the required format
    updated[this.props.column.key] = dateFormat(this.state.value, "dd-mmm-yyyy");
    return updated;
  }

  onValueChanged(ev) {
    this.setState({ value: ev.target.value });
  }

  render() {
    return (
      <div>
        <FormControl type="date" ref={(ref) => { this.input = ref; }} value={this.state.value} onChange={this.onValueChanged} />
      </div>);
  }
}
// The values required to be visible in the dropdown editor
const segmentToAndFrom = [
  { id: "AAA", value: "AAA" },
  { id: "AAB", value: "AAB" },
  { id: "AAC", value: "AAC" },
  { id: "ABA", value: "ABA" },
  { id: "ABB", value: "ABB" },
  { id: "ABC", value: "ABC" },
  { id: "ACA", value: "ACA" },
  { id: "ACB", value: "ACB" },
  { id: "ACC", value: "ACC" },
  { id: "BAA", value: "BAA" },
  { id: "BAB", value: "BAB" },
  { id: "BAC", value: "BAC" },
  { id: "BBA", value: "BBA" },
  { id: "BBB", value: "BBB" },
  { id: "BBC", value: "BBC" },
  { id: "BCA", value: "BCA" },
  { id: "BCB", value: "BCB" },
  { id: "BCC", value: "BCC" },
  { id: "CAA", value: "CAA" },
  { id: "CAB", value: "CAB" },
  { id: "CAC", value: "CAC" },
  { id: "CBA", value: "CBA" },
  { id: "CBB", value: "CBB" },
  { id: "CBC", value: "CBC" },
  { id: "CCA", value: "CCA" },
  { id: "CCB", value: "CCB" },
  { id: "CCC", value: "CCC" },
  { id: "XXX", value: "XXX" },
  { id: "XXY", value: "XXY" },
  { id: "XXZ", value: "XXZ" },
  { id: "XYX", value: "XYX" },
  { id: "XYY", value: "XYY" },
  { id: "XYZ", value: "XYZ" },
  { id: "XZX", value: "XZX" },
  { id: "XZY", value: "XZY" },
  { id: "XZZ", value: "XZZ" },
  { id: "YXX", value: "YXX" },
  { id: "YXY", value: "YXY" },
  { id: "YXZ", value: "YXZ" },
  { id: "YYX", value: "YYX" },
  { id: "YYY", value: "YYY" },
  { id: "YYZ", value: "YYZ" },
  { id: "YZX", value: "YZX" },
  { id: "YZY", value: "YZY" },
  { id: "YZZ", value: "YZZ" },
  { id: "ZXX", value: "ZXX" },
  { id: "ZXY", value: "ZXY" },
  { id: "ZXZ", value: "ZXZ" },
  { id: "ZYX", value: "ZYX" },
  { id: "ZYY", value: "ZYY" },
  { id: "ZYZ", value: "ZYZ" },
  { id: "ZZX", value: "ZZX" },
  { id: "ZZY", value: "ZZY" },
  { id: "ZZZ", value: "ZZZ" }
]

const SegmentToAndFrom = <DropDownEditor options={segmentToAndFrom} />;
const defaultParsePaste = (str) =>
  str.split(/\r\n|\n|\r/).map((row) => row.split("\t"));

let newFilters = {};

const selectors = Data.Selectors;

const { AutoCompleteFilter, SingleSelectFilter } = Filters;

class Grid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: {},
      rows: this.props.rows,
      selectedIndexes: [],
      junk: {},
      topLeft: {},
      status: "",
      textValue: "",
      columnReorderingComponent: null,
      columns: [
        {
          key: "flightno",
          name: "Flight #",
          editable: true,
          filterRenderer: SingleSelectFilter,
          draggable: true,
        },
        {
          key: "date",
          name: "Date",
          editable: true,
          filterRenderer: SingleSelectFilter,
          draggable: true,
          editor: DatePicker
        },
        {
          key: "segmentfrom",
          name: "Segment From",
          editable: true,
          filterRenderer: AutoCompleteFilter,
          draggable: true,
          editor: SegmentToAndFrom
        },
        {
          key: "revenue",
          name: "Revenue",
          editable: true,
          filterRenderer: SingleSelectFilter,
          draggable: true,
        },
        {
          key: "yeild",
          name: "Yeild",
          editable: true,
          filterRenderer: SingleSelectFilter,
          draggable: true,
        },
        {
          key: "segmentto",
          name: "Segment To",
          editable: true,
          filterRenderer: AutoCompleteFilter,
          draggable: true,
          editor: SegmentToAndFrom
        },
        {
          key: "flightModel",
          name: "Flight Model",
          editable: false,
          filterRenderer: AutoCompleteFilter,
          draggable: true,
        },
        {
          key: "bodyType",
          name: "Body Type",
          editable: true,
          filterRenderer: AutoCompleteFilter,
          draggable: true,
        },
        {
          key: "type",
          name: "Type",
          editable: true,
          filterRenderer: AutoCompleteFilter,
          draggable: true,
        },
        {
          key: "startTime",
          name: "Start Time",
          editable: true,
          filterRenderer: AutoCompleteFilter,
          draggable: true,
        },
        {
          key: "endTime",
          name: "End Time",
          editable: true,
          filterRenderer: AutoCompleteFilter,
          draggable: true,
        },
        {
          key: "status",
          name: "Status",
          editable: true,
          filterRenderer: AutoCompleteFilter,
          draggable: true,
        },
        {
          key: "additionalStatus",
          name: "Additional Status",
          editable: true,
          filterRenderer: AutoCompleteFilter,
          draggable: true,
        },
        {
          key: "timeStatus",
          name: "Time Status",
          editable: true,
          filterRenderer: AutoCompleteFilter,
          draggable: true,
        },
        {
          key: "weightpercentage",
          name: "Weight Percentage",
          editable: true,
          filterRenderer: AutoCompleteFilter,
          draggable: true,
        },
        {
          key: "weightvalue",
          name: "Weight Value",
          editable: true,
          filterRenderer: AutoCompleteFilter,
          draggable: true,
        },
        {
          key: "volumepercentage",
          name: "Volume Percentage",
          editable: true,
          filterRenderer: AutoCompleteFilter,
          draggable: true,
        },
        {
          key: "volumevalue",
          name: "Volume Value",
          editable: true,
          filterRenderer: AutoCompleteFilter,
          draggable: true,
        },
        {
          key: "uldposition1",
          name: "uldposition1",
          editable: true,
          filterRenderer: AutoCompleteFilter,
          draggable: true,
        },
        {
          key: "uldvalue1",
          name: "uldvalue1",
          editable: true,
          filterRenderer: AutoCompleteFilter,
          draggable: true,
        },
        {
          key: "uldposition2",
          name: "uldposition2",
          editable: true,
          filterRenderer: AutoCompleteFilter,
          draggable: true,
        },
        {
          key: "uldvalue2",
          name: "uldvalue2",
          editable: true,
          filterRenderer: AutoCompleteFilter,
          draggable: true,
        },
        {
          key: "uldposition3",
          name: "uldposition3",
          editable: true,
          filterRenderer: AutoCompleteFilter,
          draggable: true,
        },
        {
          key: "uldvalue3",
          name: "uldvalue3",
          editable: true,
          filterRenderer: AutoCompleteFilter,
          draggable: true,
        },
        {
          key: "uldposition4",
          name: "uldposition4",
          editable: true,
          filterRenderer: AutoCompleteFilter,
          draggable: true,
        },
        {
          key: "uldvalue4",
          name: "uldvalue4",
          editable: true,
          filterRenderer: AutoCompleteFilter,
          draggable: true,
        },

        {
          key: "sr",
          name: "SR",
          editable: true,
          filterRenderer: AutoCompleteFilter,
          draggable: true,
        },
        {
          key: "queuedBookingSR",
          name: "Queued Booking SR",
          editable: true,
          filterRenderer: AutoCompleteFilter,
          draggable: true,
        },
        {
          key: "queuedBookingvolume",
          name: "Queued Booking Volume",
          editable: true,
          filterRenderer: AutoCompleteFilter,
          draggable: true,
        },
      ].map((c) => ({
        ...c,
        ...defaultColumnProperties,
      })),
    };
    document.addEventListener("copy", this.handleCopy);
    document.addEventListener("paste", this.handlePaste);
    this.handletextValue = this.handletextValue.bind(this);
  }

  exportPDF = () => {
    const unit = "pt";
    const size = "A4"; // Use A1, A2, A3 or A4
    const orientation = "landscape"; // portrait or landscape

    const marginLeft = 300;
    const doc = new jsPDF(orientation, unit, size);

    doc.setFontSize(15);

    const title = "Multiline Grid Data Export To PDF";
    const headers = [
      [
        "Id",
        "Flight",
        "Date",
        "Segment From",
        "Revenue",
        "Segment TO",
        "Flight Model",
        "Body Type",
        "Type",
        "Start Time",
        "End Time",
      ],
    ];

    const dataValues = this.state.rows.map((row) => [
      row.travelId,
      row.flightno,
      row.date,
      row.segmentfrom,
      row.revenue,
      row.segmentto,
      row.flightModel,
      row.bodyType,
      row.type,
      row.startTime,
      row.endTime,
    ]);

    let content = {
      startY: 50,
      head: headers,
      body: dataValues,
    };

    doc.text(title, marginLeft, 40);
    doc.autoTable(content);
    doc.save("report.pdf");
  };

  downloadCSVFile = () => {
    const fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    const fileExtension = '.csv';
    const fileName = 'CSVDownload'
    const ws = XLSX.utils.json_to_sheet(this.state.rows);
    const wb = { Sheets: { 'data': ws }, SheetNames: ['data'] };
    const excelBuffer = XLSX.write(wb, { bookType: 'csv', type: 'array' });
    const data = new Blob([excelBuffer], { type: fileType });
    FileSaver.saveAs(data, fileName + fileExtension);
  }

  downloadXLSFile = () => {
    const fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    const fileExtension = '.xlsx';
    const fileName = 'XLSXDownload'
    const ws = XLSX.utils.json_to_sheet(this.state.rows);
    const wb = { Sheets: { 'data': ws }, SheetNames: ['data'] };
    const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
    const data = new Blob([excelBuffer], { type: fileType });
    FileSaver.saveAs(data, fileName + fileExtension);
  }

  updateRows = (startIdx, newRows) => {
    this.setState((state) => {
      const rows = state.rows.slice();
      for (let i = 0; i < newRows.length; i++) {
        if (startIdx + i < rows.length) {
          rows[startIdx + i] = {
            ...rows[startIdx + i],
            ...newRows[i],
          };
        }
      }
      return {
        rows,
      };
    });
  };

  rowGetter = (i) => {
    const { rows } = this.state;
    return rows[i];
  };

  handleCopy = (e) => {
    e.preventDefault();
    const { topLeft, botRight } = this.state;
    const text = range(topLeft.rowIdx, botRight.rowIdx + 1)
      .map((rowIdx) =>
        this.state.columns
          .slice(topLeft.colIdx, botRight.colIdx + 1)
          .map((col) => this.rowGetter(rowIdx)[col.key])
          .join("\t")
      )
      .join("\n");
    e.clipboardData.setData("text/plain", text);
  };

  handlePaste = (e) => {
    e.preventDefault();
    const { topLeft } = this.state;
    const newRows = [];
    const pasteData = defaultParsePaste(e.clipboardData.getData("text/plain"));
    pasteData.forEach((row) => {
      const rowData = {};
      // Merge the values from pasting and the keys from the columns
      this.state.columns
        .slice(topLeft.colIdx, topLeft.colIdx + row.length)
        .forEach((col, j) => {
          rowData[col.key] = row[j];
        });
      newRows.push(rowData);
    });
    this.updateRows(topLeft.rowIdx, newRows);
  };

  setSelection = (args) => {
    this.setState({
      topLeft: {
        rowIdx: args.topLeft.rowIdx,
        colIdx: args.topLeft.idx,
      },
      botRight: {
        rowIdx: args.bottomRight.rowIdx,
        colIdx: args.bottomRight.idx,
      },
    });
  };

  sortRows = (data, sortColumn, sortDirection) => {
    const comparer = (a, b) => {
      if (sortDirection === "ASC") {
        return a[sortColumn] > b[sortColumn] ? 1 : -1;
      } else if (sortDirection === "DESC") {
        return a[sortColumn] < b[sortColumn] ? 1 : -1;
      }
    };
    this.setState({
      rows: [...this.state.rows].sort(comparer),
    });
    return sortDirection === "NONE" ? data : this.state.rows;
  };

  componentWillReceiveProps(props) {
    this.setState({
      rows: props.rows,
    });
    this.setState({
      status: props.status,
    });
    this.setState({
      textValue: props.textValue,
    });
  }
  onGridRowsUpdated = ({ fromRow, toRow, updated, action }) => {
    if (
      updated.yeild !== null ||
      updated.yeild !== undefined ||
      updated.revenue !== null ||
      updated.revenue !== undefined ||
      updated.weightpercentage !== null ||
      updated.weightpercentage !== undefined ||
      updated.weightvalue !== null ||
      updated.weightvalue !== undefined
    ) {
      updated = applyFormula(updated);
    }
    if (action !== "COPY_PASTE") {
      this.setState((state) => {
        const rows = state.rows.slice();
        for (let i = fromRow; i <= toRow; i++) {
          rows[i] = {
            ...rows[i],
            ...updated,
          };
        }
        return {
          rows,
        };
      });
    }
  };

  onRowsSelected = (rows) => {
    this.setState({
      selectedIndexes: this.state.selectedIndexes.concat(
        rows.map((r) => r.rowIdx)
      ),
    });
  };

  onRowsDeselected = (rows) => {
    let rowIndexes = rows.map((r) => r.rowIdx);
    this.setState({
      selectedIndexes: this.state.selectedIndexes.filter(
        (i) => rowIndexes.indexOf(i) === -1
      ),
    });
  };

  handleFilterChange = (value) => {
    newFilters = {
      ...value,
    };
    let { junk } = this.state;
    if (!(value.filterTerm == null) && !(value.filterTerm.length <= 0)) {
      newFilters[value.column.key] = value;
      junk[value.column.key] = value;
    } else if (value.filterTerm == null || value.filterTerm.length <= 0) {
      delete newFilters[value.column.key];
      delete junk[value.column.key];
    }
    this.setState({
      filter: newFilters,
      junk,
    });
    const data = this.getrows(this.props.rows, junk);
    this.setState({
      rows: data,
    });
  };
  getrows = (rows, junk) => {
    if (Object.keys(junk).length <= 0) {
      junk = {};
    }
    const data = selectors.getRows({
      rows: rows,
      filters: junk,
    });
    return data;
  };

  getValidFilterValues(rows, columnId) {
    return rows
      .map((r) => r[columnId])
      .filter((item, i, a) => {
        return i === a.indexOf(item);
      });
  }
  sortRows = (data, sortColumn, sortDirection) => {
    const comparer = (a, b) => {
      if (sortDirection === "ASC") {
        return a[sortColumn] > b[sortColumn] ? 1 : -1;
      } else if (sortDirection === "DESC") {
        return a[sortColumn] < b[sortColumn] ? 1 : -1;
      }
    };
    this.setState({
      rows: [...data].sort(comparer),
    });
    return sortDirection === "NONE" ? data : this.state.rows;
  };
  onHeaderDrop = (source, target) => {
    const stateCopy = Object.assign({}, this.state);
    const columnSourceIndex = this.state.columns.findIndex(
      (i) => i.key === source
    );
    const columnTargetIndex = this.state.columns.findIndex(
      (i) => i.key === target
    );

    stateCopy.columns.splice(
      columnTargetIndex,
      0,
      stateCopy.columns.splice(columnSourceIndex, 1)[0]
    );

    const emptyColumns = Object.assign({}, this.state, {
      columns: [],
    });
    this.setState(emptyColumns);

    const reorderedColumns = Object.assign({}, this.state, {
      columns: stateCopy.columns,
    });
    this.setState(reorderedColumns);
  };

  handletextValue() {
    this.setState({
      textValue: "",
    });
    this.setState({
      status: "",
    });
  }

  columnReorderingPannel = () => {
    var headerNameList = [];
    this.state.columns.map((item) =>
      headerNameList.push(item.name)
    );
    console.log("columnReorderingPannel Open ");
    this.setState({
      columnReorderingComponent: 
        <ColumnReordering
          headerKeys={headerNameList}
          closeColumnReOrdering={this.closeColumnReOrdering}
        />
    });
  };

  closeColumnReOrdering = () => {
    console.log("columnReorderingPannel Closed ");
    this.setState({
      columnReorderingComponent: null,
    });
  };

  render() {
    return (
      <div>
        <div className="parentDiv">
          <div className="totalCount">
            Showing <strong> {this.props.count} </strong> records
          </div>
          <div className="globalSearch">
            <FormControl
              type="text"
              placeholder="Search a screen"
              onChange={this.props.handleChange}
              value={this.props.value}
            />
            <span className="crossSearchIcon">
              <FontAwesomeIcon icon={faTimes} onClick={this.onClose} />
            </span>
          </div>
          <FontAwesomeIcon className="filterIcons" icon={faFilter} />
          <FontAwesomeIcon
            className="filterIcons"
            onClick={this.columnReorderingPannel}
            icon={faSortAmountDown}
          />
          {this.state.columnReorderingComponent}
          <FontAwesomeIcon
            className="filterIcons"
            icon={faFilePdf}
            onClick={this.exportPDF}
          />
          {/* <CSVLink data={this.state.rows} >
            <FontAwesomeIcon className="filterIcons" icon={faFileExcel} />
          </CSVLink> */}
          <FontAwesomeIcon className="filterIcons" icon={faFileExcel} onClick={this.downloadCSVFile} />
          <FontAwesomeIcon className="filterIcons" icon={faFileExcel} onClick={this.downloadXLSFile} />
        </div>
        <ErrorMessage className="errorDiv" status={this.props.status} />
        <DraggableContainer
          className="gridDiv"
          onHeaderDrop={this.onHeaderDrop}
        >
          <ReactDataGrid
            toolbar={<Toolbar enableFilter={true} />}
            getValidFilterValues={(columnKey) =>
              this.getValidFilterValues(this.props.rows, columnKey)
            }
            minHeight={680}
            columns={this.state.columns}
            rowGetter={(i) => this.state.rows[i]}
            rowsCount={this.state.rows.length}
            onGridRowsUpdated={this.onGridRowsUpdated}
            enableCellSelect={true}
            onColumnResize={(idx, width) =>
              console.log(`Column ${idx} has been resized to ${width}`)
            }
            toolbar={<Toolbar enableFilter={true} />}
            getValidFilterValues={(columnKey) =>
              this.getValidFilterValues(this.props.rows, columnKey)
            }
            onAddFilter={(filter) => this.handleFilterChange(filter)}
            rowSelection={{
              showCheckbox: true,
              enableShiftSelect: true,
              onRowsSelected: this.onRowsSelected,
              onRowsDeselected: this.onRowsDeselected,
              selectBy: {
                indexes: this.state.selectedIndexes,
              },
            }}
            onGridSort={(sortColumn, sortDirection) =>
              this.sortRows(this.props.rows, sortColumn, sortDirection)
            }
          />
        </DraggableContainer>
      </div>
    );
  }
}
export default Grid;
