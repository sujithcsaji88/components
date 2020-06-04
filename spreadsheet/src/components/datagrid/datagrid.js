import React, { Component } from "react";
import ReactDataGrid from "react-data-grid";
// import data from "../../stubs/sample-data";

const defaultColumnProperties = {
  sortable: true,
  resizable: true,
  width: 120,
};

const columns = [
  { key: "id", name: "Flight No", editable: true },
  { key: "Flight", name: "Flight Date", editable: true },
  { key: "SegmentFrom", name: "Segment From", editable: true },
  { key: "SegmentTo", name: "Segment To", editable: true },
  { key: "FlightModel", name: "Flight Model", editable: true },
  { key: "BodyType", name: "Body Type", editable: true },
  { key: "Type", name: "Type", editable: true },
  { key: "StartTime", name: "Start Time", editable: true },
  { key: "EndTime", name: "End Time", editable: true },
  { key: "Status", name: "Status", editable: true },
  { key: "AdditionalStatus", name: "Additional Status", editable: true },
  { key: "TimeStatus", name: "Time Status", editable: true },
  { key: "Weight%", name: "Weight %", editable: true },
  { key: "WeightValue", name: "Weight Value", editable: true },
  { key: "Volume%", name: "Volume %", editable: true },
  { key: "VolumeValue", name: "Volume Value", editable: true },
  { key: "ULDPosition1", name: "ULD Position 1", editable: true },
  { key: "ULDValue1", name: "ULD Value 1", editable: true },
  { key: "ULDPosition2", name: "ULD Position 2", editable: true },
  { key: "ULDValue2", name: "ULD Value 2", editable: true },
  { key: "ULDPosition3", name: "ULD Position 3", editable: true },
  { key: "ULDValue3", name: "ULD Value 3", editable: true },
  { key: "ULDPosition4", name: "ULD Position 4", editable: true },
  { key: "ULDValue4", name: "ULD Value 4", editable: true },
  { key: "Revenue", name: "Revenue", editable: true },
  { key: "Yield", name: "Yield", editable: true },
  { key: "SR", name: "SR", editable: true },
  { key: "BookingSR", name: "Booking SR", editable: true },
  { key: "BookingVolume", name: "Booking Volume", editable: true },
].map((c) => ({ ...c, ...defaultColumnProperties }));

const rows = [
  { id: 0, Flight: "Task 1", SegmentFrom: "24-Apr-2020" },
  { id: 1, Flight: "Task 2", SegmentFrom: "24-Apr-2020" },
  { id: 2, Flight: "Task 3", SegmentFrom: "24-Apr-2020" },
];
console.log(rows);

class Grid extends Component {
  state = { rows, selectedIndexes: [] };

  onGridRowsUpdated = ({ fromRow, toRow, updated }) => {
    this.setState((state) => {
      const rows = state.rows.slice();
      for (let i = fromRow; i <= toRow; i++) {
        rows[i] = { ...rows[i], ...updated };
      }
      return { rows };
    });
  };
  render() {
    return (
      <ReactDataGrid
        columns={columns}
        rowGetter={(i) => this.state.rows[i]}
        rowsCount={3}
        onGridRowsUpdated={this.onGridRowsUpdated}
        enableCellSelect={true}
        onColumnResize={(idx, width) =>
          console.log(`Column ${idx} has been resized to ${width}`)
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
    );
  }
}

export default Grid;
