import React, { useState, useRef, useEffect } from "react";
import "./scss/filter.scss";
import RightDrawer from "./components/drawer/rightdrawer";
import LeftDrawer from "./components/drawer/leftdrawer";
import List from "./components/List/List";
import Lists from "./components/List/Lists";

function useComponentVisible() {
  const [showSideDrawer, setShowSideDrawer] = useState(false);
  const ref = useRef(null);

  const handleHideDropdown = (event) => {
    if (event.key === "Escape") {
      setShowSideDrawer(false);
    }
  };

  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setShowSideDrawer(false);
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleHideDropdown, true);
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("keydown", handleHideDropdown, true);
      document.removeEventListener("click", handleClickOutside, true);
    };
  });

  return { ref, showSideDrawer, setShowSideDrawer };
}

function App() {
  const [labelName, setLabelName] = useState();
  const [labelType, setLabelType] = useState();
  const [field, setField] = useState();
  const [condition, setCondition] = useState();
  const [enabled, setEnabled] = useState();

  const passValues = (filterName, filterType, enabled) => {
    setLabelName(filterName);
    setLabelType(filterType);
    setEnabled(enabled);
  };

  const passDate = (filterName, field, enabled) => {
    setLabelName(filterName);
    setField(field);
    setEnabled(enabled);
  };
  const passRevenue = (filterName, condition, enabled) => {
    setLabelName(filterName);
    setCondition(condition);
    setEnabled(enabled);
  };

  const clearType = () => {
    setLabelType("");
  };

  const clearName = () => {
    setLabelName("");
  };

  const { ref, showSideDrawer, setShowSideDrawer } = useComponentVisible(true);

  return (
    <div ref={ref}>
      {showSideDrawer && (
        <div className="sideDrawer" ref={ref}>
          <div className="row">
            <div className="col-md-5 col-lg-5">
              <LeftDrawer
                handleDate={passDate}
                handleValue={passValues}
                handleRevenue={passRevenue}
              />
            </div>
            <div className="col-md-7 col-lg-7">
              <RightDrawer
                field={field}
                condition={condition}
                enabled={enabled}
                name={labelName}
                type={labelType}
                clearValues={clearType}
                clearValue={clearName}
              />
            </div>
          </div>
        </div>
      )}
      <List clicked={() => setShowSideDrawer(true)} />
      {/* <Lists click={() => setShowList(false)}/> */}
    </div>
  );
}

export default App;
