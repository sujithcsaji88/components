import React, { Component } from "react";
import reactDOM from 'react-dom';
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
let newFilters = {};
const selectors = Data.Selectors;
const {
  NumericFilter,
  AutoCompleteFilter,
  MultiSelectFilter,
  SingleSelectFilter,
} = Filters;
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
    filterRenderer: SingleSelectFilter,
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
    filterRenderer: SingleSelectFilter,
  },
  {
    key: "yeild",
    name: "Yeild",
    editable: true,
    filterRenderer: SingleSelectFilter,
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
    filterRenderer:NumericFilter ,
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
    this.state = { filter:{},rows: this.props.rows, selectedIndexes: [], junk:{} };

  }
  componentWillReceiveProps(props) {debugger;
    this.setState({rows:props.rows})
  }
  onGridRowsUpdated = ({ fromRow, toRow, updated }) => {
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
  
  handleFilterChange =(value)=>{
    let values={...value};
    newFilters = { ...values };
    let {junk} = this.state
    if (!(value.filterTerm==null)&& !(value.filterTerm.length<=0)) {
      if(Object.keys(value.rawValue).length==0){

      }
      newFilters[value.column.key] = value;
      junk[value.column.key]=value
    } else if(value.filterTerm==null||value.filterTerm.length<=0) {
      delete newFilters[value.column.key];
      delete junk[value.column.key]
    }
    this.setState({filter:newFilters, junk});
    const data=this.getrows(this.props.rows,junk);
    this.setState({rows:data})
  };
  getrows=(rows, junk)=>{
    if(Object.keys(junk).length<=0){
      junk={}
    }
    const data= selectors.getRows({
      rows: rows,
      filters: junk
    });
    return data;
  }
  getValidFilterValues(rows, columnId) {
    return rows.map(r => r[columnId])
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
    this.setState({ rows: [...data].sort(comparer) })
    return sortDirection === "NONE" ? data : this.state.rows;
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
          style={{fontWeight:"bold"}}
          minHeight={650}
          columns={columns}
          rowGetter={i=>this.state.rows[i]}
          rowsCount={this.state.rows.length}
          onGridRowsUpdated={this.onGridRowsUpdated}
          enableCellSelect={true}
          onColumnResize={(idx, width) =>
            console.log(`Column ${idx} has been resized to ${width}`)
          }
          toolbar={<Toolbar enableFilter={true}/>}
          onAddFilter={filter => this.handleFilterChange(filter)}
          //onClearFilters={() => this.handleClear()}
          getValidFilterValues={columnKey => this.getValidFilterValues(this.props.rows, columnKey)}
          rowSelection={{
            showCheckbox: true,
            enableShiftSelect: true,
            onRowsSelected: this.onRowsSelected,
            onRowsDeselected: this.onRowsDeselected,
            selectBy: {
              indexes: this.state.selectedIndexes,
            },
          }}
          onGridSort={(sortColumn, sortDirection) => this.sortRows(this.props.rows, sortColumn, sortDirection)}
          // cellRangeSelection={{
          //   onStart: (args) => console.log(this.state.rows),
          //   onUpdate: (args) => console.log(this.state.rows),
          //   onComplete: (args) => console.log(this.state.rows),
          // }}
        />
      </div>
    );
  }
}
export default Grid;
