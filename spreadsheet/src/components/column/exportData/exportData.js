import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTimes,
  faAlignJustify,
  faFilePdf,
  faFileExcel,
  faFileCsv,
} from "@fortawesome/free-solid-svg-icons";
import "../exportData/exportData.scss";

import jsPDF from "jspdf";
import "jspdf-autotable";
import * as FileSaver from "file-saver";
import * as XLSX from "xlsx";

const ExportData = (props) => {
  const downLaodFileType = [];
  const selectDownLoadType = (event) => {
    downLaodFileType.push(event.target.value);
  };
  const exportData = () => {
    if (downLaodFileType.length > 0) {
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

    const dataValues = props.rows.map((row) => [
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

  const downloadCSVFile = () => {
    const fileType =
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
    const fileExtension = ".csv";
    const fileName = "CSVDownload";
    const ws = XLSX.utils.json_to_sheet(props.rows);
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
    const ws = XLSX.utils.json_to_sheet(props.rows);
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
              <a href="" className="export__selectTxt">
                Select All
              </a>
            </div>
            <div className="export__wrap">
              <div className="export__checkbox">
                <input type="checkbox"></input>
              </div>
              <div className="export__txt">AWB Number</div>
            </div>
            <div className="export__wrap">
              <div className="export__checkbox">
                <input type="checkbox"></input>
              </div>
              <div className="export__txt">AWB Number</div>
            </div>
            <div className="export__wrap">
              <div className="export__checkbox">
                <input type="checkbox"></input>
              </div>
              <div className="export__txt">AWB Number</div>
            </div>
            <div className="export__wrap">
              <div className="export__checkbox">
                <input type="checkbox"></input>
              </div>
              <div className="export__txt">AWB Number</div>
            </div>
            <div className="export__wrap">
              <div className="export__checkbox">
                <input type="checkbox"></input>
              </div>
              <div className="export__txt">AWB Number</div>
            </div>
            <div className="export__wrap">
              <div className="export__checkbox">
                <input type="checkbox"></input>
              </div>
              <div className="export__txt">AWB Number</div>
            </div>
            <div className="export__wrap">
              <div className="export__checkbox">
                <input type="checkbox"></input>
              </div>
              <div className="export__txt">AWB Number</div>
            </div>
            <div className="export__wrap">
              <div className="export__checkbox">
                <input type="checkbox"></input>
              </div>
              <div className="export__txt">AWB Number</div>
            </div>
            <div className="export__wrap">
              <div className="export__checkbox">
                <input type="checkbox"></input>
              </div>
              <div className="export__txt">AWB Number</div>
            </div>
            <div className="export__wrap">
              <div className="export__checkbox">
                <input type="checkbox"></input>
              </div>
              <div className="export__txt">AWB Number</div>
            </div>
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
                  onClick={downloadPDF}
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
                  onClick={downloadCSVFile}
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
