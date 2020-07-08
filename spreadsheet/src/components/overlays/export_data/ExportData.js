import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTimes,
  faAlignJustify,
  faFilePdf,
  faFileExcel,
  faFileCsv,
} from "@fortawesome/free-solid-svg-icons";
import "./exportData.scss";

import jsPDF from "jspdf";
import "jspdf-autotable";
import * as FileSaver from "file-saver";
import * as XLSX from "xlsx";

import {
  CheckboxGroup,
  AllCheckerCheckbox,
  Checkbox
} from "@createnl/grouped-checkboxes";

const ExportData = (props) => {
  const [isChecked, setIsChecked] = useState(false);
  const selectAllColumns = () => {
    if (!isChecked) setIsChecked(true);
    else setIsChecked(false);
  };
  var downLaodFileType = [];
  var filteredRow = [];
  const selectDownLoadType = (event) => {
    if (
      event.target.checked &&
      !downLaodFileType.includes(event.target.value)
    ) {
      downLaodFileType.push(event.target.value);
    } else {
      downLaodFileType = downLaodFileType.filter(function (value, index, arr) {
        return value !== event.target.value;
      });
    }
  };

  var selectedColumnList = [];
  var selectedColumnHeaderList = [];
  const selectColumnName = (event) => {
    debugger;
    if (
      event.target.checked &&
      !selectedColumnList.includes(event.target.value)
    ) {
      selectedColumnList.push(event.target.value);
      selectedColumnHeaderList.push(event.target.title);
    } else {
      selectedColumnList = selectedColumnList.filter(function (
        value,
        index,
        arr
      ) {
        return value !== event.target.value;
      });
      selectedColumnHeaderList = selectedColumnHeaderList.filter(function (
        value,
        index,
        arr
      ) {
        return value !== event.target.title;
      });
    }
  };

  const exportData = () => {
    if (selectedColumnList.length > 0 && downLaodFileType.length > 0) {
      const rowValues = props.rows.filter((row) => {
        const keys = Object.getOwnPropertyNames(row);
        var filteredColumnVal = {};
        keys.map(function (key) {
          selectedColumnList.forEach((columnName) => {
            if (columnName == key) filteredColumnVal[key] = row[key];
          });
        });
        filteredRow.push(filteredColumnVal);
      });

      downLaodFileType.forEach((item) => {
        if (item == "pdf") downloadPDF();
        else if (item == "excel") downloadCSVFile();
        else downloadXLSFile();
      });
    }
  };
  const downloadPDF = () => {
    const unit = "pt";
    const size = "A4"; // Use A1, A2, A3 or A4
    const orientation = "landscape"; // portrait or landscape

    const marginLeft = 300;
    const doc = new jsPDF(orientation, unit, size);

    doc.setFontSize(15);

    const title = "Multiline Grid Data Export To PDF";
    const headers = [selectedColumnHeaderList];
    var dataValues = [];
    const rowValues = props.rows.map((row) => {
      const keys = Object.keys(row);
      var filteredColumnVal = [];
      selectedColumnList.filter((columnName) => {
        keys.map((key) => {
          if (columnName == key) filteredColumnVal.push(row[key]);
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

  const downloadCSVFile = () => {
    const fileType =
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
    const fileExtension = ".csv";
    const fileName = "CSVDownload";
    const ws = XLSX.utils.json_to_sheet(filteredRow);
    const wb = { Sheets: { data: ws }, SheetNames: ["data"] };
    const excelBuffer = XLSX.write(wb, { bookType: "csv", type: "array" });
    const data = new Blob([excelBuffer], { type: fileType });
    FileSaver.saveAs(data, fileName + fileExtension);
  };

  const downloadXLSFile = () => {
    const fileType =
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
    const fileExtension = ".xlsx";
    const fileName = "XLSXDownload";
    const ws = XLSX.utils.json_to_sheet(filteredRow);
    const wb = { Sheets: { data: ws }, SheetNames: ["data"] };
    const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
    const data = new Blob([excelBuffer], { type: fileType });
    FileSaver.saveAs(data, fileName + fileExtension);
  };

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
              ></input>
            </div>
            <div className="export__selectAll">
              <div className="export__selectTxt" onClick={selectAllColumns}>
                Select All
              </div>
            </div>
            {props.columnsList.length > 0
              ? props.columnsList.map((column) => (
                  <div className="export__wrap">
                    <div className="export__checkbox">
                      <input
                        type="checkbox"
                        value={column.key}
                        title={column.name}
                        onChange={selectColumnName}
                        checked={isChecked}
                      ></input>
                    </div>
                    <div className="export__txt">{column.name}</div>
                  </div>
                ))
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
                  onChange={selectDownLoadType}
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
                  onClick={selectDownLoadType}
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
                  onClick={selectDownLoadType}
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
              <button className="btns">Cancel</button>
              <button className="btns btns__save" onClick={exportData}>
                Export
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExportData;
