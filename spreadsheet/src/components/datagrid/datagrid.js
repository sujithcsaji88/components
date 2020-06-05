import React, { Component } from "react";
import ReactDataGrid from "react-data-grid";
import CargoData from "../../stubs/CargoData.json";

const defaultColumnProperties = {
  sortable: true,
  resizable: true,
  width: 100,
};

const columns = [
  { key: "travelId", name: "TravelId", editable: true },
  { key: "flightno", name: "flightno", editable: true },
  { key: "date", name: "date", editable: true },
  { key: "segmentfrom", name: "segmentfrom", editable: true },
  { key: "segmentto", name: "segmentto", editable: true },
  { key: "flightModel", name: "flightModel", editable: true },
  { key: "bodyType", name: "bodyType", editable: true },
  { key: "type", name: "type", editable: true },
  { key: "startTime", name: "startTime", editable: true },
  { key: "endTime", name: "endTime", editable: true },
  { key: "status", name: "status", editable: true },
  { key: "additionalStatus", name: "additionalStatus", editable: true },
  { key: "timeStatus", name: "timeStatus", editable: true },
  { key: "weightpercentage", name: "weightpercentage", editable: true },
  { key: "weightvalue", name: "weightvalue", editable: true },
  { key: "volumepercentage", name: "volumepercentage", editable: true },
  { key: "volumevalue", name: "volumevalue", editable: true },
  { key: "uldposition1", name: "uldposition1", editable: true },
  { key: "uldvalue1", name: "uldvalue1", editable: true },
  { key: "uldposition2", name: "uldposition2", editable: true },
  { key: "uldvalue2", name: "uldvalue2", editable: true },
  { key: "uldposition3", name: "uldposition3", editable: true },
  { key: "uldvalue3", name: "uldvalue3", editable: true },
  { key: "uldposition4", name: "uldposition4", editable: true },
  { key: "uldvalue4", name: "uldvalue4", editable: true },
  { key: "revenue", name: "revenue", editable: true },
  { key: "yeild", name: "yeild", editable: true },
  { key: "sr", name: "sr", editable: true },
  { key: "queuedBookingSR", name: "queuedBookingSR", editable: true },
  { key: "queuedBookingvolume", name: "queuedBookingvolume", editable: true },
].map((c) => ({ ...c, ...defaultColumnProperties }));



let data= CargoData.map( (CargoData) => {
  return ({
    key: CargoData.travelId,
    travelId:CargoData.travelId,
    flightno: CargoData.flightno,
    date: CargoData.date,
    segmentfrom: CargoData.segmentfrom,
    segmentto: CargoData.segmentto,
    flightModel: CargoData.flightModel,
    bodyType: CargoData.bodyType,
    type: CargoData.type,
    startTime: CargoData.startTime,
    endTime: CargoData.endTime,
    status: CargoData.status,
    additionalStatus: CargoData.additionalStatus,
    timeStatus: CargoData.timeStatus,
    weightpercentage: CargoData.weightpercentage,
    weightvalue: CargoData.weightvalue,
    volumepercentage: CargoData.volumepercentage,
    volumevalue: CargoData.volumevalue,
    uldposition1: CargoData.uldposition1,
    uldvalue1: CargoData.uldvalue1,
    uldposition2: CargoData.uldposition2,
    uldvalue2: CargoData.uldvalue2,
    uldposition3: CargoData.uldposition3,
    uldvalue3: CargoData.uldvalue3,
    uldposition4: CargoData.uldposition4,
    uldvalue4: CargoData.uldvalue4,
    revenue: CargoData.revenue,
    yeild: CargoData.yeild,
    sr: CargoData.sr,
    queuedBookingSR: CargoData.queuedBookingSR,
    queuedBookingvolume: CargoData.queuedBookingvolume
  });
}); 

class Grid extends Component {
    state = {data,selectedIndexes: [] };
  onGridRowsUpdated = ({ fromRow, toRow, updated }) => {
    this.setState((state) => {
      const data = state.data.slice();
      for (let i = fromRow; i <= toRow; i++) {
        data[i] = { ...data[i], ...updated };
      }
      return { data };
    });
  }
  render(props) {
    console.log(this.props.value)
    //data=this.props.rows;
    return (
      <ReactDataGrid
        columns={columns}
        rowGetter={(i) =>this.state.data[i]}
        rowsCount={this.state.data.length}
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
