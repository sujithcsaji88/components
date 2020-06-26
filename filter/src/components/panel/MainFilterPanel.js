import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAlignLeft } from "@fortawesome/free-solid-svg-icons";
import SavedFilters from "./SavedFilters";

const MainFilterPanel = (props) => {
  const [listFilter, setListFilter] = useState(false);
  const handleListFilter=()=>{
    setListFilter(!listFilter)
  }
  return (
    <div className="list">
      <div className="displayFlex">
        <div className="alignLeft">
          <FontAwesomeIcon
            icon={faAlignLeft}
            onClick={handleListFilter}
          />
          <SavedFilters showFilter={listFilter} handleListFilter={handleListFilter} />
          <div className="leftSpace">All flights</div>
        </div>
      </div>
      <div className="secondList">
        <div className="displayFlex">
          {props.filterMap !== undefined && props.filterMap.applyFilter !== undefined
            ? props.filterMap.applyFilter.map((item) => {
                if (
                  item.column === "Departure Port" ||
                  item.column === "Arrival Port"
                ) {
                  return item.types.map((subItem) => (
                    <div className="listContent" key={item.column} onClick={()=>props.click(props.filterMap.applyFilter)}>
                        <span>
                          {item.column === "Departure Port"
                            ? "Departure "
                            : "Arrival "}
                          {subItem.column} {": "}
                        </span>{" "}
                        {subItem.value}
                      </div>
          ));
                } else if (item.column === "Revenue") {
                  return (
                    <div className="listContent" key={item.column} onClick={()=>props.click(props.filterMap.applyFilter)}>
                      <span>
                        {item.column} {item.condition}{" "}
                      </span>{" "}
                      {item.value}
                    </div>
                  );
                }
                else if(item.column === "Date"){
                  return item.field.map((subItem)=>(
                    <div className="listContent" key={item.column} onClick={()=>props.click(props.filterMap.applyFilter)}>
                      <span>
                        {subItem.column === "From Date & Time"
                          ? "From "
                          : "To "} {": "}
                      </span>{" "}
                      {subItem.value}
                    </div>
                  )
                  );
                } else {
                  return (
                    <div className="listContent" key={item.column} onClick={()=>props.click(props.filterMap.applyFilter)}>
                      <span>{item.column}</span> {item.value}
                    </div>
                  );
                }
              })
            : null}
          <div onClick={()=>props.click()}>+ Add Filter</div>
        </div>
      </div>
    </div>
  );
};

export default MainFilterPanel;
