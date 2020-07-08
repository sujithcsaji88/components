import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTimes,
  faAlignJustify,
  faSave,
  faTrash,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";

const AddedElement = (props) => {
  return (
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
            {props.newColumnValue.map((item) => (
              <option>{item}</option>
            ))}
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
          </select>
        </div>
      </div>
      <div className="sort__reorder">
        <div className="">
          <div>Order</div>
        </div>
        <div className="sort__file">
          <select className="custom__ctrl">
            <option>Ascending</option>
            <option>Descending</option>
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
          <FontAwesomeIcon
            icon={faTrash}
            onClick={deleteHandler}
          ></FontAwesomeIcon>
        </div>
      </div>
    </div>
  );
};

const deleteHandler = (index) => {
  console.log("deleted", index);
};

const Sorting = (props) => {
  const [count, setCount] = useState(0);

  return (
    <div className="sorts--grid">
      <div className="sort__grid">
        <div className="sort__settings">
          <div className="sort__header">
            <div className="sort__headerTxt">
              <strong>Sort </strong>
            </div>
            <div className="sort__close">
              <FontAwesomeIcon
                icon={faTimes}
                onClick={() => props.closeSorting()}
              ></FontAwesomeIcon>
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
                    {props.columnFieldValue.map((item, index) => (
                      <option key={index}>{item}</option>
                    ))}
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
                  </select>
                </div>
              </div>
              <div className="sort__reorder">
                <div className="">
                  <div>Order</div>
                </div>
                <div className="sort__file">
                  <select className="custom__ctrl">
                    <option>Ascending</option>
                    <option>Descending</option>
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
                  <FontAwesomeIcon
                    icon={faTrash}
                    onClick={deleteHandler}
                  ></FontAwesomeIcon>
                </div>
              </div>
            </div>
            {Array(count).fill(
              <AddedElement newColumnValue={props.columnFieldValue} />
            )}
            <div className="sort__new">
              <div
                className="sort__section"
                onClick={() => setCount(count + 1)}
              >
                <FontAwesomeIcon
                  icon={faPlus}
                  className="sort__icon"
                ></FontAwesomeIcon>
                <div className="sort__txt">New Sort</div>
              </div>
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

export default Sorting;
