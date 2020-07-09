import React, { Component } from "react";
import ReactDataGrid from "react-data-grid";
import { Toolbar, Data, Filters, Editors } from "react-data-grid-addons";
import { range } from "lodash";
import { applyFormula } from "../utilities/utils";
import { FormControl } from "react-bootstrap";
import DatePicker from "./functions/DatePicker.js";
import {
  faSortAmountDown,
  faColumns,
  faSyncAlt,
  faShareAlt,
  faAlignLeft,
  faFilter,
  faSortDown,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ErrorMessage from "./common/ErrorMessage";
import ColumnReordering from "./overlays/column_chooser/Chooser";
import Sorting from "./overlays/sorting/Sorting";
import ExportData from './overlays/export_data/ExportData';

const {
  DraggableHeader: { DraggableContainer },
} = require("react-data-grid-addons");

const { DropDownEditor } = Editors;


const defaultParsePaste = (str) =>
  str.split(/\r\n|\n|\r/).map((row) => row.split("\t"));

let newFilters = {};

const selectors = Data.Selectors;

const { AutoCompleteFilter } = Filters;

class SpreadSheet extends Component {
  constructor(props) {
    super(props);
    const airportCodes = [];
    this.props.airportCodes.forEach((item) => {
      airportCodes.push({ "id": item, "value": item })
    })
    this.state = {
      searchValue: "",
      filter: {},
      rows: this.props.rows,
      selectedIndexes: [],
      junk: {},
      topLeft: {},
      status: "",
      textValue: "",
      columnReorderingComponent: null,
      exportComponent: null,
      filteringRows: this.props.rows,
      sortingPanelComponent: null,
      columns: this.props.columns.map((item) => {
        if (item.editor === "DatePicker") {
          item.editor = DatePicker;
        } else if (item.editor === "DropDown") {
          item.editor = <DropDownEditor options={airportCodes} />;
        }
        else if (item.editor === "Text") {
          item.editor = "text";
        }
        else {
          item.editor = null;
        }
        item.filterRenderer = AutoCompleteFilter;
        return item;
      }),
    };
    document.addEventListener("copy", this.handleCopy);
    document.addEventListener("paste", this.handlePaste);
    this.handletextValue = this.handletextValue.bind(this);
    this.handleSearchValue = this.handleSearchValue.bind(this);
    this.clearSearchValue = this.clearSearchValue.bind(this);
    this.handleFilterChange = this.handleFilterChange.bind(this);

    this.formulaAppliedCols = this.props.columns.filter((item) => {
      return item.formulaApplicable;
    });
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
    let columnName = "";
    const filter = this.formulaAppliedCols.filter((item) => {
      if (updated[item.key] !== null && updated[item.key] !== undefined) {
        columnName = item.key;
        return true;
      }
    });

    if (filter.length > 0) {
      updated = applyFormula(updated, columnName);
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
      this.setState((state) => {
        const filteringRows = state.filteringRows.slice();
        for (let i = fromRow; i <= toRow; i++) {
          filteringRows[i] = {
            ...filteringRows[i],
            ...updated,
          };
        }

        return {
          filteringRows,
        };
      });
    }
    //find row
    if (this.props.updateCellData) {
      //this.props.updateCellData(passRow);
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
    let filteredRows = null;
    let junk = this.state.junk;
    if (!(value.filterTerm == null) && !(value.filterTerm.length <= 0)) {
      junk[value.column.key] = value;
      filteredRows = this.state.rows;
    }
    else {
      delete junk[value.column.key];
      filteredRows = this.state.filteringRows;
    }
    this.setState({ junk });
    const data = this.getrows(this.state.filteringRows, this.state.junk);
    debugger
    this.setState({
      rows: data,
    });
  };
  getrows = (rows, filters) => {
    if (Object.keys(filters).length <= 0) {
      filters = {};
    }
    const value = selectors.getRows({ rows: [], filters: {} });
    return selectors.getRows({ rows: rows, filters: filters });
    //return data;
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

  updateTableAsPerRowChooser = (inComingColumnsHeaderList, pinnedColumnsList) => {
    var existingColumnsHeaderList = this.state.columns;
    existingColumnsHeaderList = existingColumnsHeaderList.filter((item) => {
      return inComingColumnsHeaderList.includes(item.name);
    });
    existingColumnsHeaderList.map((headerItem, index) => {
      if (pinnedColumnsList.includes(headerItem.name)) {
        existingColumnsHeaderList[index]["frozen"] = true;
      }
    })
    console.log("existingColumnsHeaderList ", existingColumnsHeaderList)
    this.setState({
      columns: existingColumnsHeaderList,
    });

    this.closeColumnReOrdering();
  };


  columnReorderingPannel = () => {
    var headerNameList = [];
    this.state.columns.map((item) => headerNameList.push(item.name));
    this.setState({
      columnReorderingComponent: (
        <ColumnReordering
          maxLeftPinnedColumn={this.props.maxLeftPinnedColumn}
          updateTableAsPerRowChooser={this.updateTableAsPerRowChooser}
          headerKeys={headerNameList}
          closeColumnReOrdering={this.closeColumnReOrdering}
        />
      ),
    });
  };

  closeColumnReOrdering = () => {
    this.setState({
      columnReorderingComponent: null,
    });
  };
  handleSearchValue = (value) => {
    this.setState({ searchValue: value })
  }
  clearSearchValue = () => {
    this.setState({ searchValue: "" })
  }

  sortingPanel = () => {
    let columnField = [];
    this.state.columns.map((item) => columnField.push(item.name));
    this.setState({
      sortingPanelComponent: (
        <Sorting
          columnFieldValue={columnField}
          closeSorting={this.closeSorting}
        />
      ),
    });
  };

  closeSorting = () => {
    this.setState({
      sortingPanelComponent: null,
    });
  };

  //Export Data Logic
  exportColumnData = () => {
    this.setState({
      exportComponent: (
        <ExportData
          rows={this.state.rows}
          columnsList={this.state.columns}
          closeExport={this.closeExport}
        />
      ),
    });
  };

  closeExport = () => {
    this.setState({
      exportComponent: null,
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
              onChange={(e) => {
                this.handleSearchValue(e.target.value)
                this.props.globalSearchLogic(e, this.state.filteringRows)
              }}
              value={this.state.searchValue}
            />
          </div>
          {/* <div className="filterIcons">
            <FontAwesomeIcon icon={faFilter} />
          </div> */}
          <div className="filterIcons" onClick={this.sortingPanel}>
            <FontAwesomeIcon title="Group Sort" icon={faSortAmountDown} />
            <FontAwesomeIcon icon={faSortDown} className="filterArrow" />
          </div>
          {this.state.sortingPanelComponent}
          <div className="filterIcons" onClick={this.columnReorderingPannel}>
            <FontAwesomeIcon title="Column Chooser" icon={faColumns} />
            <FontAwesomeIcon icon={faSortDown} className="filterArrow" />
          </div>
          {this.state.columnReorderingComponent}
          <div className="filterIcons">
            <FontAwesomeIcon title="Export" icon={faShareAlt} onClick={this.exportColumnData} />
          </div>
          {this.state.exportComponent}
          {/* <div className="filterIcons">
            <FontAwesomeIcon title="Reload" icon={faSyncAlt} />
          </div> */}
          {/* <div className="filterIcons">
            <FontAwesomeIcon icon={faAlignLeft} />
          </div> */}
        </div>
        <ErrorMessage className="errorDiv" status={this.props.status} closeWarningStatus={this.props.closeWarningStatus} clearSearchValue={this.clearSearchValue} />
        <DraggableContainer
          className="gridDiv"
          onHeaderDrop={this.onHeaderDrop}
        >
          <ReactDataGrid
            toolbar={<Toolbar enableFilter={true} />}
            getValidFilterValues={(columnKey) =>
              this.getValidFilterValues(this.state.filteringRows, columnKey)
            }
            minHeight={680}
            columns={this.state.columns}
            rowGetter={(i) => this.state.rows[i]}
            rowsCount={this.state.rows.length}
            onGridRowsUpdated={this.onGridRowsUpdated}
            enableCellSelect={true}
            onClearFilters={() => { this.setState({ junk: {} }) }}
            onColumnResize={(idx, width) =>
              console.log(`Column ${idx} has been resized to ${width}`)
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
              this.sortRows(this.state.rows, sortColumn, sortDirection)
            }
          />
        </DraggableContainer>
      </div>
    );
  }
}
export default SpreadSheet;
