import React, { useEffect, useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faStar } from "@fortawesome/free-solid-svg-icons";

const SavedFilters = (props) => {
  const [showFilter, setShowFilter] = useState(false)
  let listRef =useRef();
  useEffect(
    () => {
      let listHandler = (event) => {
        if (listRef.current && !listRef.current.contains(event.target)) {
          setShowFilter(false)
          props.handleListFilter();
        }
      }
      setShowFilter(props.showFilter);
      document.addEventListener("mousedown", listHandler)

      return () => {
        document.removeEventListener("mousedown", listHandler)
      }
    }
    , [props]);

    let name='';
    let savedFilters = localStorage.getItem("savedFilters");
    savedFilters = savedFilters ? JSON.parse(savedFilters) : [];
    savedFilters=savedFilters.slice((savedFilters.length-5),(savedFilters.length))
    const savedFilter=savedFilters.map((savedFilters,index)=>{
      return(
        savedFilters.map((filter,index)=>{
         name=Object.keys(filter)[0];
          return (
          <div>
          <div className="alignLeft">
            <FontAwesomeIcon style={{marginLeft:"-54px"}} icon={faCheck}></FontAwesomeIcon>
            <div style={{marginLeft:"15px"}} key={index} onClick={(e)=>{props.onSelectSavedFilter(filter,Object.keys(filter)[0]);}}>{name}</div>
            <FontAwesomeIcon
              icon={faStar}
              className="marginLeft"
            ></FontAwesomeIcon>
           </div>
            </div>);
        })
      )
    })
  if (showFilter) {
    
    return(
         <div className="lists" ref={listRef}>
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
            <ul className="leftSpace">{savedFilter}</ul>
        </div>
      </div>);
  } else {
    return <div></div>;
  }
};

export default SavedFilters;
