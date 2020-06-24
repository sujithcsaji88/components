import React, { Component } from "react";
import ReactDataGrid from "react-data-grid";
import { Data } from "react-data-grid-addons";

const {
  DraggableHeader: { DraggableContainer },
} = require("react-data-grid-addons");

const defaultColumnProperties = {
  resizable: true,
  width: 120,
};

const defaultParsePaste = (str) =>
  str.split(/\r\n|\n|\r/).map((row) => row.split("\t"));

const selectors = Data.Selectors;

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
      columns: [
        {
          key: "flightno",
          name: "Flight #",
          draggable: true,
        },
        {
          key: "date",
          name: "Date",
          draggable: true,
        },
        {
          key: "departureAirport",
          name: "Departure Airport",
          draggable: true,
        },
        {
          key: "revenue",
          name: "Revenue",
          draggable: true,
        },
        {
          key: "yeild",
          name: "Yeild",
          draggable: true,
        },
        {
          key: "arrivalAirport",
          name: "Arrival Airport",
          draggable: true,
        },
        {
          key: "flightModel",
          name: "Flight Model",
          draggable: true,
        },
        {
          key: "type",
          name: "Type",
          draggable: true,
        },
        {
          key: "startTime",
          name: "Start Time",
          draggable: true,
        },
        {
          key: "endTime",
          name: "End Time",
          draggable: true,
        },
        {
          key: "status",
          name: "Status",
          draggable: true,
        },
        {
          key: "additionalStatus",
          name: "Additional Status",
          draggable: true,
        },
        {
          key: "timeStatus",
          name: "Time Status",
          draggable: true,
        },
        {
          key: "weightpercentage",
          name: "Weight Percentage",
          draggable: true,
        },
        {
          key: "weightvalue",
          name: "Weight Value",
          draggable: true,
        },
        {
          key: "volumepercentage",
          name: "Volume Percentage",
          draggable: true,
        },
        {
          key: "volumevalue",
          name: "Volume Value",
          draggable: true,
        },
      ].map((c) => ({ ...c, ...defaultColumnProperties })),
    };
    this.handletextValue = this.handletextValue.bind(this);
  }

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
  };

  rowGetter = (i) => {
    const { rows } = this.state;
    return rows[i];
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
    this.setState({ rows: props.rows });
    this.setState({ status: props.status });
    this.setState({ textValue: props.textValue });
  }

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
    this.setState({ rows: [...data].sort(comparer) });
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

    const emptyColumns = Object.assign({}, this.state, { columns: [] });
    this.setState(emptyColumns);

    const reorderedColumns = Object.assign({}, this.state, {
      columns: stateCopy.columns,
    });
    this.setState(reorderedColumns);
  };

  handletextValue() {
    this.setState({ textValue: "" });
    this.setState({ status: "" });
  }
  render() {
    return (
      <div>
        <DraggableContainer
          className="gridDiv"
          onHeaderDrop={this.onHeaderDrop}
        >
          <ReactDataGrid
            getValidFilterValues={(columnKey) =>
              this.getValidFilterValues(this.props.rows, columnKey)
            }
            minHeight={680}
            columns={this.state.columns}
            rowGetter={(i) => this.state.rows[i]}
            rowsCount={this.state.rows.length}
            enableCellSelect={true}
            getValidFilterValues={(columnKey) =>
              this.getValidFilterValues(this.props.rows, columnKey)
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
          />
        </DraggableContainer>
      </div>
    );
  }
}
export default Grid;
