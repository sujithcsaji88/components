import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTimes,
  faFilePdf,
  faFileExcel,
  faFileCsv,
} from "@fortawesome/free-solid-svg-icons";

import jsPDF from "jspdf";
import "jspdf-autotable";
import * as FileSaver from "file-saver";
import * as XLSX from "xlsx";

class ExportData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      columnValueList: this.props.columnsList,
      columnEntityList: [],
      isAllSelected: false,
      downLaodFileType: [],
      filteredRow: [],
    };
  }

  resetColumnExportList = () => {
    this.setState({
      columnEntityList: [],
      isAllSelected: false,
    });
  };

  selectAllToColumnList = () => {
    this.resetColumnExportList();
    this.setState({
      columnEntityList: !this.state.isAllSelected ? this.props.columnsList : [],
      isAllSelected: !this.state.isAllSelected,
    });
  };

  addToColumnEntityList = (typeToBeAdded) => {
    var existingColumnEntityList = this.state.columnEntityList;
    if (!existingColumnEntityList.includes(typeToBeAdded)) {
      existingColumnEntityList.push(typeToBeAdded);
    } else {
      existingColumnEntityList = existingColumnEntityList.filter((item) => {
        if (item !== typeToBeAdded) return item;
      });
    }
    this.setState({
      columnEntityList: existingColumnEntityList,
      isAllSelected: false,
    });
  };

  selectDownLoadType = (event) => {
    if (
      event.target.checked &&
      !this.state.downLaodFileType.includes(event.target.value)
    ) {
      this.state.downLaodFileType.push(event.target.value);
    } else {
      this.state.downLaodFileType.filter(function (value, index, arr) {
        return value !== event.target.value;
      });
    }
  };

  exportRowData = () => {
    debugger;
    const columnVlaueList = this.state.columnEntityList;
    if (columnVlaueList.length > 0 && this.state.downLaodFileType.length > 0) {
      const rowValues = this.props.rows.filter((row) => {
        const keys = Object.getOwnPropertyNames(row);
        var filteredColumnVal = {};
        keys.map(function (key) {
          var rows = columnVlaueList.forEach((columnName) => {
            if (columnName.key == key) filteredColumnVal[key] = row[key];
          });
        });
        this.state.filteredRow.push(filteredColumnVal);
      });

      this.state.downLaodFileType.forEach((item) => {
        if (item == "pdf") this.downloadPDF();
        else if (item == "excel") this.downloadXLSFile();
        else this.downloadCSVFile();
      });
    }
  };
  downloadPDF = () => {
    debugger;
    const unit = "pt";
    const size = "A4"; // Use A1, A2, A3 or A4
    const orientation = "landscape"; // portrait or landscape

    const marginLeft = 300;
    const doc = new jsPDF(orientation, unit, size);

    doc.setFontSize(15);

    const title = "Multiline Grid Data Export To PDF";
    const headers = [
      this.state.columnEntityList.map((column) => {
        return column.name;
      }),
    ];
    var dataValues = [];
    const rowValues = this.props.rows.map((row) => {
      const keys = Object.keys(row);
      var filteredColumnVal = [];
      this.state.columnEntityList.filter((columnName) => {
        keys.map((key) => {
          if (columnName.key == key) filteredColumnVal.push(row[key]);
        });
      });
      dataValues.push(filteredColumnVal);
    });

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
    const fileType =
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
    const fileExtension = ".csv";
    const fileName = "CSVDownload";
    const ws = XLSX.utils.json_to_sheet(this.state.filteredRow);
    const wb = { Sheets: { data: ws }, SheetNames: ["data"] };
    const excelBuffer = XLSX.write(wb, { bookType: "csv", type: "array" });
    const data = new Blob([excelBuffer], { type: fileType });
    FileSaver.saveAs(data, fileName + fileExtension);
  };

  downloadXLSFile = () => {
    const fileType =
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
    const fileExtension = ".xlsx";
    const fileName = "XLSXDownload";
    const ws = XLSX.utils.json_to_sheet(this.state.filteredRow);
    const wb = { Sheets: { data: ws }, SheetNames: ["data"] };
    const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
    const data = new Blob([excelBuffer], { type: fileType });
    FileSaver.saveAs(data, fileName + fileExtension);
  };

  columnSearchLogic = (e) => {
    const searchKey = String(e.target.value).toLowerCase();
    let filteredRows = this.props.columnsList.filter((item) => {
      return item.name.toLowerCase().includes(searchKey);
    });
    if (!filteredRows.length) {
      this.setState({ columnValueList: this.props.columnsList });
    } else {
      this.setState({ columnValueList: filteredRows });
    }
  };
  render() {
    return (
      <div className="exports--grid">
        <div className="export__grid">
          <div className="export__chooser">
            <div className="export__header">
              <div className="">
                <strong>Export Data</strong>
              </div>
            </div>
            <div className="export__body">
              <div>
                <input
                  type="text"
                  placeholder="Search export"
                  className="custom__ctrl"
                  onChange={this.columnSearchLogic}
                ></input>
              </div>
              <div className="export__selectAll">
                <div
                  className="export__selectTxt"
                  onClick={() => this.selectAllToColumnList()}
                >
                  Select All
                </div>
              </div>
              {this.state.columnValueList.length > 0
                ? this.state.columnValueList.map((column, index) => {
                    return (
                      <div className="export__wrap" key={column.key}>
                        <div className="export__checkbox">
                          <input
                            type="checkbox"
                            checked={this.state.columnEntityList.includes(
                              column
                            )}
                            onChange={() => this.addToColumnEntityList(column)}
                          ></input>
                        </div>
                        <div className="export__txt">{column.name}</div>
                      </div>
                    );
                  })
                : ""}
            </div>
          </div>
          <div className="export__settings">
            <div className="export__header">
              <div className="export__headerTxt"></div>
              <div className="export__close">
                <FontAwesomeIcon icon={faTimes}></FontAwesomeIcon>
              </div>
            </div>
            <div className="export__as">Export as</div>
            <div className="export__body">
              <div className="export__reorder">
                <div className="">
                  <input
                    type="checkbox"
                    name="pdf"
                    value="pdf"
                    onChange={this.selectDownLoadType}
                  ></input>
                </div>
                <div className="export__file">
                  <FontAwesomeIcon
                    icon={faFilePdf}
                    className="temp"
                  ></FontAwesomeIcon>
                </div>
              </div>
              <div className="export__reorder">
                <div className="">
                  <input
                    type="checkbox"
                    name="excel"
                    value="excel"
                    onClick={this.selectDownLoadType}
                  ></input>
                </div>
                <div className="export__file">
                  <FontAwesomeIcon
                    icon={faFileExcel}
                    className="temp"
                  ></FontAwesomeIcon>
                </div>
              </div>
              <div className="export__reorder">
                <div className="">
                  <input
                    type="checkbox"
                    name="csv"
                    value="csv"
                    onClick={this.selectDownLoadType}
                  ></input>
                </div>
                <div className="export__file">
                  <FontAwesomeIcon
                    icon={faFileCsv}
                    className="temp"
                  ></FontAwesomeIcon>
                </div>
              </div>
            </div>
            <div className="export__footer">
              <div className="export__btns">
                <button
                  className="btns"
                  onClick={() => this.props.closeExport()}
                >
                  Cancel
                </button>
                <button
                  className="btns btns__save"
                  onClick={this.exportRowData}
                >
                  Export
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default ExportData;
