import React, { useState, useRef, useEffect } from "react";
import "./scss/filter.scss";
import RightDrawer from "./components/drawer/rightdrawer";
import LeftDrawer from "./components/drawer/leftdrawer";
import MainFilterPanel from "./components/panel/MainFilterPanel";
import SpreadSheet from "../src/spreadSheet/SpeadSheet";


function useComponentVisible() {
  const [showApplyFilter, setApplyFilter] = useState(false);

  const ref = useRef(null);

  const handleHideDropdown = (event) => {
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

  return { ref, showApplyFilter, setApplyFilter };
}

function App() {
  const [addedFilter, setAddedFilter] = useState(0);
  const [labelName, setLabelName] = useState();
  const [labelType, setLabelType] = useState();
  const [field, setField] = useState();
  const [condition, setCondition] = useState();
  const [enabled, setEnabled] = useState();
  const [isReset, setIsReset] = useState(false);
  const [filterMap, setFilterMap] = useState();
  const [filterKeys,setFilterKeys]=useState();
  const [filterInfoToShow, setFilterInfoToShow]=useState();


  const addedFilterCount = () => {
    setAddedFilter(addedFilter + 1)
  }
  const passValues = (filterName, filterType, enabled) => {
    setIsResetFalse();
    setLabelName(filterName);
    setLabelType(filterType);
    setEnabled(enabled);
    setFilterInfoToShow(undefined);
  };

  const passDate = (filterName, field, enabled) => {
    setIsResetFalse();
    setLabelName(filterName);
    setField(field);
    setEnabled(enabled);
    setFilterInfoToShow(undefined);
  };
  const passRevenue = (filterName, condition, enabled) => {
    setIsResetFalse();
    setLabelName(filterName);
    setCondition(condition);
    setEnabled(enabled);
  };

  const clearType = () => {
    setLabelType("");
    if(addedFilter!==0){
      setAddedFilter(addedFilter-1)
    }
    
  };

  const clearName = () => {
    setLabelName("");
    if(addedFilter!==0){
      setAddedFilter(addedFilter-1)
    }
    
  };

  const clearAllFilter = () => {
    setIsReset(true);
    setAddedFilter(0)
  }

  const setIsResetFalse = () => {
    setIsReset(false);
  }

  const captureFilterMap = (map) => {
    setFilterMap(map);
  }
  const onApplyFilter = (obj) => {
  setFilterKeys(obj)
}

const applyFilterClose=()=>{
  setApplyFilter(false);
}

  const handleFilterViewInRightDrawer=(filterInfo)=>{
    //krishna's change here*****
    setApplyFilter(true)

    setLabelName("");
    setLabelType("");
    setApplyFilter(true);
    if(filterInfo!==undefined){
      setLabelName(labelName);
      setLabelType(labelType);
      setFilterInfoToShow(filterInfo);
    } 
  }

  const { ref, showApplyFilter, setApplyFilter } = useComponentVisible(true);

  return (
    <div ref={ref}>
      {showApplyFilter && (
        <div className="filter--grid" ref={ref}>
          <div className="filter__wrap">
            <div className="filter__list">
              <LeftDrawer
                handleDate={passDate}
                handleValue={passValues}
                handleRevenue={passRevenue}
                addedFilterCount={addedFilterCount}
              />
            </div>
            <div className="filter__inputwrap">
              <RightDrawer
                captureFilterMap={captureFilterMap}
                clearAllFilter={clearAllFilter}
                setIsResetFalse={setIsResetFalse}
                isReset={isReset}
                field={field}
                condition={condition}
                enabled={enabled}
                name={labelName}
                type={labelType}
                clearValues={clearType}
                clearValue={clearName}
                addedFilter={addedFilter}
                onApplyFilter={onApplyFilter}
                filterInfoToShow={filterInfoToShow}
                applyFilterClose={applyFilterClose}
              />
            </div>
          </div>
        </div>
      )}

      <MainFilterPanel filterMap={filterMap} click={(item) => handleFilterViewInRightDrawer(item)} />
      <SpreadSheet filterArray={filterKeys} />
    </div>
  );
}

export default App;
