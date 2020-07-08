import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTimes,
  faFilePdf,
  faFileExcel,
  faFileCsv,
  faAlignJustify,
  faSave,
  faTrash,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import "./sorting.scss";

const sorting = (props) => {
  return (
    <div className="sorts--grid">
      <div className="sort__grid">
        <div className="sort__settings">
          <div className="sort__header">
            <div className="sort__headerTxt">
              <strong>Sort </strong>
            </div>
            <div className="sort__close">
              <FontAwesomeIcon icon={faTimes}></FontAwesomeIcon>
            </div>
          </div>
          <div className="sort__body">
            <div className="sort__bodyContent">
              <div className="sort__reorder">
                <div className="">
                  <div>&nbsp;</div>
                </div>
                <div className="sort__icon">
                  <FontAwesomeIcon icon={faAlignJustify}></FontAwesomeIcon>
                </div>
              </div>
              <div className="sort__reorder">
                <div className="">
                  <div>Sort by</div>
                </div>
                <div className="sort__file">
                  <select className="custom__ctrl">
                    <option>AWB</option>
                    <option>AWB</option>
                  </select>
                </div>
              </div>
              <div className="sort__reorder">
                <div className="">
                  <div>Sort on</div>
                </div>
                <div className="sort__file">
                  <select className="custom__ctrl">
                    <option>Value</option>
                    <option>Value</option>
                  </select>
                </div>
              </div>
              <div className="sort__reorder">
                <div className="">
                  <div>Order</div>
                </div>
                <div className="sort__file">
                  <select className="custom__ctrl">
                    <option>Order</option>
                    <option>Order</option>
                  </select>
                </div>
              </div>
              <div className="sort__reorder">
                <div className="">
                  <div>&nbsp;</div>
                </div>
                <div className="sort__icon">
                  <FontAwesomeIcon icon={faSave}></FontAwesomeIcon>
                </div>
              </div>
              <div className="sort__reorder">
                <div className="">
                  <div>&nbsp;</div>
                </div>
                <div className="sort__icon">
                  <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
                </div>
              </div>
            </div>
            <div className="sort__new">
              <div className="sort__txt">
                <FontAwesomeIcon icon={faPlus} className="sort__icon"></FontAwesomeIcon>
              </div>
              <div>New Sort</div>
            </div>
          </div>
          <div className="sort__footer">
            <div className="sort__btns">
              <button className="btns">Clear All</button>
              <button className="btns btns__save">Ok</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default sorting;
