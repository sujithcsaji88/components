import React, { useState, useRef, useEffect } from "react";
import "./scss/filter.scss";
import RightDrawer from "./components/drawer/rightdrawer";
import LeftDrawer from "./components/drawer/leftdrawer";
import MainFilterPanel from "./components/panel/MainFilterPanel";


function useComponentVisible() {
  const [showApplyFilter, setApplyFilter] = useState(false);
  const ref = useRef(null);

  const handleHideDropdown = (event ) => {
    if (event.key === "Escape") {
      setApplyFilter(false);

    }
  };

  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setApplyFilter(false);
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

  return { ref, showApplyFilter, setApplyFilter};
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

  const { ref, showApplyFilter, setApplyFilter } = useComponentVisible(true);

  return (
    <div ref={ref}>
      {showApplyFilter && (
        <div className="sideDrawer" ref={ref}>
          <div className="filter__wrap">
            <div className="filter__list">
              <LeftDrawer
                handleDate={passDate}
                handleValue={passValues}
                handleRevenue={passRevenue}
              />
            </div>
            <div className="filter__inputwrap">
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
      <MainFilterPanel click={() => setApplyFilter(true)} />
    </div>
  );
}

export default App;
