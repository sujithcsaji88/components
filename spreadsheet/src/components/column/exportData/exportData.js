import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTimes,
  faAlignJustify,
  faFilePdf,
  faFileExcel,
  faFileCsv,
} from "@fortawesome/free-solid-svg-icons";
import "../exportData/exportData.scss";

const exportData = (props) => {
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
                <input type="checkbox"></input>
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
                <input type="checkbox"></input>
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
                <input type="checkbox"></input>
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
              <button className="btns btns__save">Export</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default exportData;
