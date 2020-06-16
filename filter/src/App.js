import React, { useState, useRef, useEffect } from "react";
import "./scss/filter.scss";
import RightSideDrawer from "./components/RightSideDrawer";
import LeftSideDrawer from "./components/LeftSideDrawer";

function useComponentVisible(initialIsVisible) {
  const [showSideDrawer, setShowSideDrawer] = useState(false);
  const ref = useRef(null);

  const handleHideDropdown = (event: KeyboardEvent) => {
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

  const passValues = (filterName, filterType) => {
    setLabelName(filterName);
    setLabelType(filterType);
  };

  const passDate = (filterName) => {
    setLabelName(filterName);
  };

  const { ref, showSideDrawer, setShowSideDrawer } = useComponentVisible(true);

  return (
    <div ref={ref}>
      {showSideDrawer && (
        <div className="sideDrawer" ref={ref}>
          <div className="row">
            <div className="col-md-5 col-lg-5">
              <LeftSideDrawer handleDate={passDate} handleValue={passValues} />
            </div>
            <div className="col-md-7 col-lg-7">
              <RightSideDrawer name={labelName} type={labelType} />
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
    </div>
  );
}

export default App;