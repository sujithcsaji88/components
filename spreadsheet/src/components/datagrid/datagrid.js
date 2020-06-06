import React, { Component } from "react";
import ReactDataGrid from "react-data-grid";
import { Toolbar, Data, Filters } from "react-data-grid-addons";
import LoadingSpinner from "../common/LoadingSpinner";
import ErrorMessage from "../common/ErrorMessage";
import { SEARCH_NOT_FOUNT_ERROR } from "../constants/ErrorConstants";
import { basicCalculation } from "../../utilities/utils";
import { Navbar, Nav, Form, FormControl } from "react-bootstrap";
import {
  faBold,
  faItalic,
  faUnderline,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const defaultColumnProperties = {
  sortable: true,
  resizable: true,
  filterable: true,
  width: 100,
};

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
    filterRenderer: SingleSelectFilter,
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
    this.state = { rows: this.props.rows, selectedIndexes: [] };
  }

  componentWillReceiveProps(props) {
    this.state = { rows: props.rows };
  }

  onGridRowsUpdated = ({ fromRow, toRow, updated }) => {
    debugger;
    updated.yeild = basicCalculation("=sum", 1, 2);

    this.setState((state) => {
      const rows = state.rows.slice();
      for (let i = fromRow; i <= toRow; i++) {
        rows[i] = { ...rows[i], ...updated };
      }
      return { rows };
    });
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
  onBoldClick = () => {
    alert("TODO");
  };
  onUnderlineClick = () => {
    alert("TODO");
  };
  onItalicsClick = () => {
    alert("TODO");
  };

  getCellActions = (column, row) => {
    const cellActions = {};
    return row.id % 2 === 0 ? cellActions[column.key] : null;
  };
  render() {
    return (
      <div>
        <div style={{ position: "absolute", margin: "15px 15px" }}>
          <Nav className="mr-auto"></Nav>
          <Form inline>
            <FontAwesomeIcon
              style={{ fontSize: "18px", color: "#000", margin: "0px 5px" }}
              icon={faBold} onClick={this.onBoldClick}
            />
            <FontAwesomeIcon
              style={{ fontSize: "18px", color: "#000", margin: "0px 5px" }}
              icon={faItalic} onClick={this.onUnderlineClick}
            />
            <FontAwesomeIcon
              style={{ fontSize: "18px", color: "#000", margin: "0px 5px" }}
              icon={faUnderline} onClick={this.onItalicsClick}
            />
          </Form>
        </div>
        <ReactDataGrid
          minHeight={650}
          columns={columns}
          rowGetter={(i) => this.state.rows[i]}
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
          cellRangeSelection={{
            onStart: (args) => console.log(this.state.rows),
            onUpdate: (args) => console.log(this.state.rows),
            onComplete: (args) => console.log(this.state.rows),
          }}
          getCellActions={this.getCellActions}
        />
      </div>
    );
  }
}
export default Grid;
