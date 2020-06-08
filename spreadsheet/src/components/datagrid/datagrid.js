import React, { Component } from "react";
import ReactDataGrid from "react-data-grid";
import { Toolbar, Data, Filters } from "react-data-grid-addons";
import { range } from 'lodash';
import LoadingSpinner from "../common/LoadingSpinner";
import ErrorMessage from "../common/ErrorMessage";
import { SEARCH_NOT_FOUNT_ERROR } from "../constants/ErrorConstants";
import { basicCalculation } from "../../utilities/utils";
import { Navbar, Nav, Form, FormControl } from "react-bootstrap";
import {
  faBold,
  faItalic,
  faUnderline,
  faCross,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const defaultColumnProperties = {
  sortable: true,
  resizable: true,
  filterable: true,
  width: 100,
};

const defaultParsePaste = str => (
  str.split(/\r\n|\n|\r/)
    .map(row => row.split('\t'))
);

const selectors = Data.Selectors;
const {
  NumericFilter,
  AutoCompleteFilter,
  MultiSelectFilter,
  SingleSelectFilter,
} = Filters;

const handleFilterChange = (filter) => (filters) => {
  const newFilters = { ...filters };
  if (filter.filterTerm) {
    newFilters[filter.column.key] = filter;
  } else {
    delete newFilters[filter.column.key];
  }
  return newFilters;
};

function getValidFilterValues(rows, columnId) {
  return rows
    .map((r) => r[columnId])
    .filter((item, i, a) => {
      return i === a.indexOf(item);
    });
}

function getRows(rows, filters) {
  return selectors.getRows({ rows, filters });
}

const columns = [
  {
    key: "flightno",
    name: "Flight #",
    editable: true,
    filterRenderer: NumericFilter,
  },
  {
    key: "date",
    name: "Date",
    editable: true,
    filterRenderer: AutoCompleteFilter,
  },
  {
    key: "segmentfrom",
    name: "Segment From",
    editable: true,
    filterRenderer: AutoCompleteFilter,
  },
  {
    key: "revenue",
    name: "Revenue",
    editable: true,
    filterRenderer: NumericFilter,
  },
  {
    key: "yeild",
    name: "Yeild",
    editable: true,
    filterRenderer: NumericFilter,
  },
  {
    key: "segmentto",
    name: "Segment To",
    editable: true,
    filterRenderer: AutoCompleteFilter,
  },
  {
    key: "flightModel",
    name: "Flight Model",
    editable: true,
    filterRenderer: AutoCompleteFilter,
  },
  {
    key: "bodyType",
    name: "Body Type",
    editable: true,
    filterRenderer: AutoCompleteFilter,
  },
  {
    key: "type",
    name: "Type",
    editable: true,
    filterRenderer: AutoCompleteFilter,
  },
  {
    key: "startTime",
    name: "Start Time",
    editable: true,
    filterRenderer: AutoCompleteFilter,
  },
  {
    key: "endTime",
    name: "End Time",
    editable: true,
    filterRenderer: AutoCompleteFilter,
  },
  {
    key: "status",
    name: "Status",
    editable: true,
    filterRenderer: AutoCompleteFilter,
  },
  {
    key: "additionalStatus",
    name: "Additional Status",
    editable: true,
    filterRenderer: AutoCompleteFilter,
  },
  {
    key: "timeStatus",
    name: "Time Status",
    editable: true,
    filterRenderer: AutoCompleteFilter,
  },
  {
    key: "weightpercentage",
    name: "Weight Percentage",
    editable: true,
    filterRenderer: AutoCompleteFilter,
  },
  {
    key: "weightvalue",
    name: "Weight Value",
    editable: true,
    filterRenderer: AutoCompleteFilter,
  },
  {
    key: "volumepercentage",
    name: "Volume Percentage",
    editable: true,
    filterRenderer: AutoCompleteFilter,
  },
  {
    key: "volumevalue",
    name: "Volume Value",
    editable: true,
    filterRenderer: AutoCompleteFilter,
  },
  {
    key: "uldposition1",
    name: "uldposition1",
    editable: true,
    filterRenderer: AutoCompleteFilter,
  },
  {
    key: "uldvalue1",
    name: "uldvalue1",
    editable: true,
    filterRenderer: AutoCompleteFilter,
  },
  {
    key: "uldposition2",
    name: "uldposition2",
    editable: true,
    filterRenderer: AutoCompleteFilter,
  },
  {
    key: "uldvalue2",
    name: "uldvalue2",
    editable: true,
    filterRenderer: AutoCompleteFilter,
  },
  {
    key: "uldposition3",
    name: "uldposition3",
    editable: true,
    filterRenderer: AutoCompleteFilter,
  },
  {
    key: "uldvalue3",
    name: "uldvalue3",
    editable: true,
    filterRenderer: AutoCompleteFilter,
  },
  {
    key: "uldposition4",
    name: "uldposition4",
    editable: true,
    filterRenderer: AutoCompleteFilter,
  },
  {
    key: "uldvalue4",
    name: "uldvalue4",
    editable: true,
    filterRenderer: AutoCompleteFilter,
  },

  { key: "sr", name: "SR", editable: true, filterRenderer: AutoCompleteFilter },
  {
    key: "queuedBookingSR",
    name: "Queued Booking SR",
    editable: true,
    filterRenderer: AutoCompleteFilter,
  },
  {
    key: "queuedBookingvolume",
    name: "Queued Booking Volume",
    editable: true,
    filterRenderer: AutoCompleteFilter,
  },
].map((c) => ({ ...c, ...defaultColumnProperties }));

class Grid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rows: this.props.rows,
      selectedIndexes: [],
      topLeft: {},
      botRight: {},
    };
    document.addEventListener("copy", this.handleCopy);
    document.addEventListener("paste", this.handlePaste);
  }

  componentWillUnmount() {
    this.removeAllListeners();
  }

  removeAllListeners = () => {
    document.removeEventListener("copy", this.handleCopy);
    document.removeEventListener("paste", this.handlePaste);
  };

  updateRows = (startIdx, newRows) => {
    this.setState((state) => {
      const rows = state.rows.slice();
      for (let i = 0; i < newRows.length; i++) {
        if (startIdx + i < rows.length) {
          rows[startIdx + i] = { ...rows[startIdx + i], ...newRows[i] };
        }
      }
      return { rows };
    });
  }

  rowGetter = (i) => {
    const { rows } = this.state;
    return rows[i];
  };

  handleCopy = (e) => { debugger ;
    console.debug("handleCopy Called");
    e.preventDefault();
    const { topLeft, botRight } = this.state;

    // Loop through each row
    const text = range(topLeft.rowIdx, botRight.rowIdx + 1)
      .map(
        // Loop through each column
        (rowIdx) =>
          columns
            .slice(topLeft.colIdx, botRight.colIdx + 1)
            .map(
              // Grab the row values and make a text string
              (col) => this.rowGetter(rowIdx)[col.key]
            )
            .join("\t")
      )
      .join("\n");
    console.debug("text", text);
    e.clipboardData.setData("text/plain", text);
  };

  handlePaste = (e) => {
    console.debug("handlePaste Called");
    e.preventDefault();
    const { topLeft } = this.state;

    const newRows = [];
    const pasteData = defaultParsePaste(e.clipboardData.getData("text/plain"));

    console.debug("pasteData", pasteData);

    pasteData.forEach((row) => {
      const rowData = {};
      // Merge the values from pasting and the keys from the columns
      columns
        .slice(topLeft.colIdx, topLeft.colIdx + row.length)
        .forEach((col, j) => {
          // Create the key-value pair for the row
          rowData[col.key] = row[j];
        });
      // Push the new row to the changes
      newRows.push(rowData);
    });

    console.debug("newRows", newRows);

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
    this.setState({ rows: [...this.state.rows].sort(comparer) });
    return sortDirection === "NONE" ? data : this.state.rows;
  };

  componentWillReceiveProps(props) {
    this.state = { rows: props.rows };
  }

  onGridRowsUpdated = ({ fromRow, toRow, updated, action }) => {
    updated.yeild = basicCalculation("=sum", 1, 2);
    console.debug('onGridRowsUpdated!', action);
    console.debug('updated', updated);
    if (action !== "COPY_PASTE") {
      this.setState((state) => {
        const rows = state.rows.slice();
        for (let i = fromRow; i <= toRow; i++) {
          rows[i] = { ...rows[i], ...updated };
        }
        return { rows };
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

  onBoldClick = ({ rowIdx, idx }) => {
    alert("TODO");
  };
  onUnderlineClick = () => {
    alert("TODO");
  };
  onItalicsClick = () => {
    alert("TODO");
  };

  firstNameActions = [
    // {
    //   icon: <FontAwesomeIcon style={{fontSize: '18px', color: 'red', margin: '0px 30px'}} icon={faCross} />,
    //   callback: () => {
    //      alert("Deleting");
    //     //  <FontAwesomeIcon style={{fontSize: '18px', color: 'red', margin: '0px 30px'}} icon={faBold} />
    //   }
    // },
    {
      icon: (
        <svg
          class="bi bi-textarea-t"
          width="2em"
          height="2em"
          viewBox="0 0 16 16"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M14 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 1a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM2 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 1a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"
          />
          <path
            fill-rule="evenodd"
            d="M1.5 2.5A1.5 1.5 0 0 1 3 1h10a1.5 1.5 0 0 1 1.5 1.5v4h-1v-4A.5.5 0 0 0 13 2H3a.5.5 0 0 0-.5.5v4h-1v-4zm1 7v4a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5v-4h1v4A1.5 1.5 0 0 1 13 15H3a1.5 1.5 0 0 1-1.5-1.5v-4h1z"
          />
          <path d="M11.434 4H4.566L4.5 5.994h.386c.21-1.252.612-1.446 2.173-1.495l.343-.011v6.343c0 .537-.116.665-1.049.748V12h3.294v-.421c-.938-.083-1.054-.21-1.054-.748V4.488l.348.01c1.56.05 1.963.244 2.173 1.496h.386L11.434 4z" />
        </svg>
      ),
      actions: [
        {
          text: "Bold",
          callback: (renderBaseRow, ...props) => {
            const rowRend = this.RowRenderer;
            return rowRend;
          },
        },
        {
          text: "Italic",
          callback: () => {
            alert("Italic clicked");
          },
        },
      ],
    },
  ];

  getCellActions = (column, row) => {
    const cellActions = { segmentfrom: this.firstNameActions };
    return cellActions[column.key];
    console.log({ column, row });
  };

  onCellSelected = ({ rowIdx, idx }) => {
    console.log({ rowIdx, idx });
  };

  onCellDeSelected = ({ rowIdx, idx }) => {
    if (idx === 2) {
      alert(
        "the editor for cell (" +
          rowIdx +
          "," +
          idx +
          ") should have just closed"
      );
    }
  };

  RowRenderer = ({ renderBaseRow, ...props }) => {
    console.log({ renderBaseRow, ...props });
    const fontWeight = props.idx % 2 ? "bold" : "normal";
    return <div style={{ fontWeight }}> {renderBaseRow(props)}</div>;
  };

  render() {
    const { rows } = this.state;
    return (
      <div>
        <div style={{ position: "absolute", margin: "15px 15px" }}>
          <Nav className="mr-auto"></Nav>
          <Form inline>
            <FontAwesomeIcon
              style={{ fontSize: "18px", color: "#000", margin: "0px 5px" }}
              icon={faBold}
              onClick={this.onBoldClick}
            />
            <FontAwesomeIcon
              style={{ fontSize: "18px", color: "#000", margin: "0px 5px" }}
              icon={faItalic}
              onClick={this.onUnderlineClick}
            />
            <FontAwesomeIcon
              style={{ fontSize: "18px", color: "#000", margin: "0px 5px" }}
              icon={faUnderline}
              onClick={this.onItalicsClick}
            />
          </Form>
        </div>
        <ReactDataGrid
          minHeight={650}
          columns={columns}
          rowGetter={(i) => rows[i]}
          rowsCount={this.props.rows.length}
          onGridRowsUpdated={this.onGridRowsUpdated}
          enableCellSelect={true}
          onColumnResize={(idx, width) =>
            console.log(`Column ${idx} has been resized to ${width}`)
          }
          toolbar={<Toolbar enableFilter={true} />}
          // onAddFilter={filter => setFilters(handleFilterChange(filter))}
          // onClearFilters={() => setFilters({})}
          getValidFilterValues={(columnKey) =>
            getValidFilterValues(this.props.rows, columnKey)
          }
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
          cellRangeSelection={{
            onComplete: this.setSelection,
          }}
          getCellActions={this.getCellActions}
          onCellSelected={this.onCellSelected}
          onCellDeSelected={this.onCellDeSelected}
          rowRenderer={this.RowRenderer}
        />
      </div>
    );
  }
}
export default Grid;
