import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faStar } from "@fortawesome/free-solid-svg-icons";

const SavedFilters = (props) => {
  if (props.showFilter) {
    return (
      <div className="lists">
        <div className="listsView">
          <div className="text-muted">list view</div>
          <div className="alignLeft">
            <FontAwesomeIcon
              icon={faCheck}
              className="selected"
            ></FontAwesomeIcon>
            <div className="leftSpace selected">Recently Viewed(10)</div>
            <FontAwesomeIcon
              icon={faStar}
              className="marginLeft"
            ></FontAwesomeIcon>
          </div>
          <div className="alignLeft">
            <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>
            <div className="leftSpace">To be called cancelled flights(12)</div>
            <FontAwesomeIcon
              icon={faStar}
              className="marginLeft"
            ></FontAwesomeIcon>
          </div>
          <div className="alignLeft">
            <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>
            <div className="leftSpace"> Delayed Flights(10)</div>
            <FontAwesomeIcon
              icon={faStar}
              className="marginLeft"
            ></FontAwesomeIcon>
          </div>
          <div className="alignLeft">
            <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>
            <div className="leftSpace"> Flights in next 7 days(10) </div>
            <FontAwesomeIcon
              icon={faStar}
              className="marginLeft"
            ></FontAwesomeIcon>
          </div>
          <div className="alignLeft">
            <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>
            <div className="leftSpace"> Flights in next 10 days(10) </div>
            <FontAwesomeIcon
              icon={faStar}
              className="marginLeft"
            ></FontAwesomeIcon>
          </div>
          <div className="alignLeft">
            <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>
            <div className="leftSpace"> Flights in next 20 days(10) </div>
            <FontAwesomeIcon
              icon={faStar}
              className="marginLeft"
            ></FontAwesomeIcon>
          </div>
          <div className="alignLeft">
            <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>
            <div className="leftSpace"> Flights in next 30 days(10) </div>
            <FontAwesomeIcon
              icon={faStar}
              className="marginLeft"
            ></FontAwesomeIcon>
          </div>
        </div>
        <div className="savedFilters">
          <div className="text-muted">saved filters</div>
          <div className="alignLeft">
            <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>
            <div className="leftSpace">Flights under 2500kgs capacity (30)</div>
            <FontAwesomeIcon
              icon={faStar}
              className="marginLeft"
            ></FontAwesomeIcon>
          </div>
          <div className="alignLeft">
            <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>
            <div className="leftSpace">Flights under 2500kgs capacity (30)</div>
            <FontAwesomeIcon
              icon={faStar}
              className="marginLeft"
            ></FontAwesomeIcon>
          </div>
          <div className="alignLeft">
            <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>
            <div className="leftSpace">Flights under 2500kgs capacity (30)</div>
            <FontAwesomeIcon
              icon={faStar}
              className="marginLeft"
            ></FontAwesomeIcon>
          </div>
          <div className="alignLeft">
            <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>
            <div className="leftSpace">Flights under 2500kgs capacity (30)</div>
            <FontAwesomeIcon
              icon={faStar}
              className="marginLeft"
            ></FontAwesomeIcon>
          </div>
        </div>
      </div>
    );
  }
  else {
    return <div></div>
  }
};

export default SavedFilters;
