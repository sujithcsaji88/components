import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faAlignJustify } from "@fortawesome/free-solid-svg-icons";
import "../column-reorder/column-reorder.scss";

const columnReordering = (props) => {
  return (
    <div className="columns--grid">
      <div className="column__grid">
        <div className="column__chooser">
          <div className="column__header">
            <div className="">
              <strong>Column Chooser</strong>
            </div>
          </div>
          <div className="column__body">
            <div>
              <input
                type="text"
                placeholder="Search column"
                className="custom__ctrl"
              ></input>
            </div>
            <div className="column__selectAll">
              <a href="" className="column__selectTxt">
                Select All
              </a>
            </div>
            <div className="column__wrap">
              <div className="column__checkbox">
                <input type="checkbox"></input>
              </div>
              <div className="column__txt">AWB Number</div>
            </div>
            <div className="column__wrap">
              <div className="column__checkbox">
                <input type="checkbox"></input>
              </div>
              <div className="column__txt">AWB Number</div>
            </div>
            <div className="column__wrap">
              <div className="column__checkbox">
                <input type="checkbox"></input>
              </div>
              <div className="column__txt">AWB Number</div>
            </div>
            <div className="column__wrap">
              <div className="column__checkbox">
                <input type="checkbox"></input>
              </div>
              <div className="column__txt">AWB Number</div>
            </div>
            <div className="column__wrap">
              <div className="column__checkbox">
                <input type="checkbox"></input>
              </div>
              <div className="column__txt">AWB Number</div>
            </div>
            <div className="column__wrap">
              <div className="column__checkbox">
                <input type="checkbox"></input>
              </div>
              <div className="column__txt">AWB Number</div>
            </div>
            <div className="column__wrap">
              <div className="column__checkbox">
                <input type="checkbox"></input>
              </div>
              <div className="column__txt">AWB Number</div>
            </div>
            <div className="column__wrap">
              <div className="column__checkbox">
                <input type="checkbox"></input>
              </div>
              <div className="column__txt">AWB Number</div>
            </div>
            <div className="column__wrap">
              <div className="column__checkbox">
                <input type="checkbox"></input>
              </div>
              <div className="column__txt">AWB Number</div>
            </div>
            <div className="column__wrap">
              <div className="column__checkbox">
                <input type="checkbox"></input>
              </div>
              <div className="column__txt">AWB Number</div>
            </div>
          </div>
        </div>
        <div className="column__settings">
          <div className="column__header">
            <div className="column__headerTxt">
              <strong>Column Setting</strong>
            </div>
            <div className="column__close">
              <FontAwesomeIcon icon={faTimes}></FontAwesomeIcon>
            </div>
          </div>
          <div className="column__body">
            <div className="column__reorder">
              <div className="">
                <FontAwesomeIcon icon={faAlignJustify}></FontAwesomeIcon>
              </div>
              <div className="">AWB Number</div>
              <div className="column__wrap">
                <div className="column__checkbox">
                  <input type="checkbox"></input>
                </div>
                <div className="column__txt">Pin Left</div>
              </div>
            </div>
            <div className="column__reorder">
              <div className="">
                <FontAwesomeIcon icon={faAlignJustify}></FontAwesomeIcon>
              </div>
              <div className="">AWB Number</div>
              <div className="column__wrap">
                <div className="column__checkbox">
                  <input type="checkbox"></input>
                </div>
                <div className="column__txt">Pin Left</div>
              </div>
            </div>
            <div className="column__reorder">
              <div className="">
                <FontAwesomeIcon icon={faAlignJustify}></FontAwesomeIcon>
              </div>
              <div className="">AWB Number</div>
              <div className="column__wrap">
                <div className="column__checkbox">
                  <input type="checkbox"></input>
                </div>
                <div className="column__txt">Pin Left</div>
              </div>
            </div>
            <div className="column__reorder">
              <div className="">
                <FontAwesomeIcon icon={faAlignJustify}></FontAwesomeIcon>
              </div>
              <div className="">AWB Number</div>
              <div className="column__wrap">
                <div className="column__checkbox">
                  <input type="checkbox"></input>
                </div>
                <div className="column__txt">Pin Left</div>
              </div>
            </div>
            <div className="column__reorder">
              <div className="">
                <FontAwesomeIcon icon={faAlignJustify}></FontAwesomeIcon>
              </div>
              <div className="">AWB Number</div>
              <div className="column__wrap">
                <div className="column__checkbox">
                  <input type="checkbox"></input>
                </div>
                <div className="column__txt">Pin Left</div>
              </div>
            </div>
            <div className="column__reorder">
              <div className="">
                <FontAwesomeIcon icon={faAlignJustify}></FontAwesomeIcon>
              </div>
              <div className="">AWB Number</div>
              <div className="column__wrap">
                <div className="column__checkbox">
                  <input type="checkbox"></input>
                </div>
                <div className="column__txt">Pin Left</div>
              </div>
            </div>
            <div className="column__reorder">
              <div className="">
                <FontAwesomeIcon icon={faAlignJustify}></FontAwesomeIcon>
              </div>
              <div className="">AWB Number</div>
              <div className="column__wrap">
                <div className="column__checkbox">
                  <input type="checkbox"></input>
                </div>
                <div className="column__txt">Pin Left</div>
              </div>
            </div>
            <div className="column__reorder">
              <div className="">
                <FontAwesomeIcon icon={faAlignJustify}></FontAwesomeIcon>
              </div>
              <div className="">AWB Number</div>
              <div className="column__wrap">
                <div className="column__checkbox">
                  <input type="checkbox"></input>
                </div>
                <div className="column__txt">Pin Left</div>
              </div>
            </div>
          </div>
          <div className="column__footer">
            <div className="column__btns">
              <button className="btns">Reset</button>
              <button className="btns">Cancel</button>
              <button className="btns btns__save">Save</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default columnReordering;
