import React, { useState, useRef, useEffect } from "react";
import "./scss/filter.scss";
import RightDrawer from "./components/drawer/rightdrawer";
import LeftDrawer from "./components/drawer/leftdrawer";
import List from './components/List/List';
import Lists from './components/List/Lists';

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

  const passValues = (filterName, filterType) => {
    setLabelName(filterName);
    setLabelType(filterType);
  };

  const passDate = (filterName, field) => {
    setLabelName(filterName);
    setField(field);
  };
  const passRevenue = (filterName, condition) => {
    setLabelName(filterName);
    setCondition(condition);
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
                name={labelName}
                type={labelType}
                clearValues={clearType}
                clearValue={clearName}
              />
            </div>
          </div>
        </div>
      )}
      <div>
        <input
          type="submit"
          value="+ add filter"
          className="dummy"
          onClick={() => setShowSideDrawer(true)}
        ></input>
      </div>
        {/* <List/> */}
        <Lists/>
    </div>
  );
}

export default App;
