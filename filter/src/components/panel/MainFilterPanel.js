import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAlignLeft } from "@fortawesome/free-solid-svg-icons";
import SavedFilters from "./SavedFilters";

const MainFilterPanel = (props) => {
  const [listFilter, setListFilter] = useState(false);
  useEffect(() => {
    document.addEventListener("mousedown", () => {
      setListFilter(false);
    });
  });
  return (
    <div className="list">
      <div className="displayFlex">
        <div className="alignLeft">
          <FontAwesomeIcon
            icon={faAlignLeft}
            onClick={() => setListFilter(true)}
          />
          <SavedFilters showFilter={listFilter} />
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
                  return item.types.map((subItem) => {
                    return (
                      <div className="listContent" key={item.column} onClick={props.click}>
                        <span>
                          {item.column === "Departure Port"
                            ? "Departure "
                            : "Arrival "}
                          {subItem.column} {": "}
                        </span>{" "}
                        {subItem.value}
                      </div>
                    );
                  });
                } else if (item.column === "Revenue") {
                  return (
                    <div className="listContent" key={item.column} onClick={props.click}>
                      <span>
                        {item.column} {item.condition}{" "}
                      </span>{" "}
                      {item.value}
                    </div>
                  );
                } else {
                  return (
                    <div className="listContent" key={item.column} onClick={props.click}>
                      <span>{item.column}</span> {item.value}
                    </div>
                  );
                }
              })
            : null}
          <div onClick={props.click}>+ Add Filter</div>
        </div>
      </div>
    </div>
  );
};

export default MainFilterPanel;
