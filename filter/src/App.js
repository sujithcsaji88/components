import React, { useState, useRef, useEffect } from "react";
import "./scss/filter.scss";
import RightDrawer from "./components/drawer/rightdrawer";
import LeftDrawer from "./components/drawer/leftdrawer";
import MainFilterPanel from "./components/panel/MainFilterPanel";
import SpreadSheet from "./components/datagrid/speadsheet";
import FilterData from "../src/stubs/FilterData.json";
import { DEPARTURE_PORT, ARRIVAL_PORT, DATE, REVENUE } from "./constants/filtertypeconstants";

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
  //to show the selected filter count on the rightdrawer of the filter component
  const [addedFilter, setAddedFilter] = useState(0);
  //filter labelnames state where the names of filter passed down from leftdrawer component stored
  const [labelName, setLabelName] = useState();
  //filter typesName state where the typesName of filter passed down from leftdrawer component stored
  const [labelType, setLabelType] = useState();
  //incase of date filter the fromDate and toDate names are stored while passed down from leftdrawer component
  const [field, setField] = useState();
  //incase of revenue filter the conditiontypes while passed down from leftdrawer component
  const [condition, setCondition] = useState();
  //initial enabled value passed from the leftdrawer stored 
  const [enabled, setEnabled] = useState();
  //holding the state of the reset function
  const [isReset, setIsReset] = useState(false);
  //dataType of the attribute fields
  const [dataType, setDataType] = useState();
  const [filterMap, setFilterMap] = useState();
  const [filterKeys, setFilterKeys] = useState();
  const [filterInfoToShow, setFilterInfoToShow] = useState();
  const childRefs = useRef(null);


  const clearTextComponentName = (name) => {
    setAddedFilter(addedFilter - 1);
    if (name === labelName) {
      setLabelName("")
    }
  }
  const addedFilterCount = () => {
    setAddedFilter(addedFilter + 1);
  };
  const passTextComponent = (filterName, dataType, enabled) => {
    setIsResetFalse();
    setLabelName(filterName);
    setDataType(dataType);
    setEnabled(enabled);
    setFilterInfoToShow(undefined);
  }
  const passPortValues = (filterName, filterType, enabled) => {
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

  const clearType = (resetStateVariableMap) => {
    setLabelType("");
    if (addedFilter !== 0) {
      setAddedFilter(addedFilter - 1);
    }
    if (resetStateVariableMap !== undefined)
      childRefs.current.clearStateVariables(resetStateVariableMap);
  };
  const onSelectSavedFilter = (savedFilter, name) => {
    let filterArray = [];
    if (savedFilter !== [] && name !== "") {
      savedFilter[name].forEach(filter => {
        filterArray.push(filter)
      })
      savedFilter[name].forEach(filters => {
        if (filters.column === DEPARTURE_PORT) {
          filters.types.forEach(filter => {
            setLabelName(filters.column)
            setLabelType(filter.column)
            setEnabled(filter.enabled)
          })
        }
        if (filters.column === ARRIVAL_PORT) {
          filters.types.forEach(filter => {
            setLabelName(filters.column)
            setLabelType(filter.column)
            setEnabled(filter.enabled)
          })
        }
        if (filters.column === DATE) {
          filters.field.forEach(field => {
            setLabelName(filters.column)
            setField(field.column)
            setEnabled(field.enabled)
          })
        }
        if (filters.column === REVENUE) {
          setLabelName(filters.column)
          console.log(FilterData)
          let conditions = [];
          FilterData.filter.forEach(filters => {
            if (filters.name === REVENUE) {
              if (filters.condition !== undefined) {
                conditions.push(filters.condition)
              }
            }
          })
          setCondition(conditions[0])
          setEnabled(filters.enabled)
        }
      })
    }
    setApplyFilter(true)
    setFilterInfoToShow(filterArray)
  }

  const clearName = () => {
    setLabelName("");
    if (addedFilter !== 0) {
      setAddedFilter(addedFilter - 1);
    }
  };
  // this function clears the rightDrawer
  const clearAllFilter = () => {
    //set the state of isReset state to true that means to clear all the labelNames and labelTypes
    setIsReset(true);
    //set filter count state to 0
    setAddedFilter(0);
    //clears all saved filter list selected
    onSelectSavedFilter([], "");
    //Clear the chip values
    captureFilterMap([]);
    //revert back the filters applied on the spreadsheet or table
    setFilterKeys();
  };

  const setIsResetFalse = () => {
    setIsReset(false);
  };

  const captureFilterMap = (map) => {
    if (filterMap !== undefined) {
      map = checkAndMergeFilterLists(filterMap.applyFilter, map.applyFilter);
    }
    setFilterMap(map);
  };
  const onApplyFilter = (obj) => {
    setFilterKeys(obj);
  };

  const applyFilterClose = () => {
    setApplyFilter(false);
  };

  const handleFilterViewInRightDrawer = (filterInfo) => {
    setLabelName("");
    setLabelType("");
    setApplyFilter(true);
    if (filterInfo !== undefined) {
      setLabelName(labelName);
      setLabelType(labelType);
      setFilterInfoToShow(filterInfo);
    }
  };


  /**
   * Returns a merged combination of filter List based on existing and upcoming filter Lists.
   * 
   * @param {existing List of filter values} oldList 
   * @param {New list of updated Filter Values} newList 
   * 
   * @returns a map with key as applyFilter and value as Updated filter List
   */
  const checkAndMergeFilterLists = (oldList, newList) => {
    var returnList = oldList, newListColumnName = "",
      isColumnPresentInOldList, oldListTypeArray, dummyOldListTypeArray, isNewItemInOldTypeList;
    for (var newListIndex = 0; newListIndex < newList.length; newListIndex++) {
      newListColumnName = newList[newListIndex].column;
      isColumnPresentInOldList = oldList.some(item => (item.column === newListColumnName))
      if (isColumnPresentInOldList === false) {
        returnList.push(newList[newListIndex]);
      }
      else {
        if (newListColumnName === "Departure Port" || newListColumnName === "Arrival Port") {
          oldListTypeArray = oldList.filter(item =>
            (item.column === newListColumnName))[0].types;
          dummyOldListTypeArray = oldListTypeArray;
          for (var newItemType of newList[newListIndex].types) {
            isNewItemInOldTypeList = oldListTypeArray.some(item =>
              (item.column === newItemType.column))
            if (isNewItemInOldTypeList === true) {
              dummyOldListTypeArray = dummyOldListTypeArray.filter(item =>
                item.column !== newItemType.column)
            }
            dummyOldListTypeArray.push(newItemType);
            returnList[newListIndex]["types"] = dummyOldListTypeArray;
          }
        }
        else {
          /* LOGIC FOR FILTER UPDATE FOR DATES AND REVENUE */
        }
      }
    }
    return { "applyFilter": returnList };
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
                handlePortValue={passPortValues}
                handleRevenue={passRevenue}
                addedFilterCount={addedFilterCount}
                handleValue={passTextComponent}
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
                dataType={dataType}
                clearValues={(resetStateVariableMap) => clearType(resetStateVariableMap)}
                clearValue={clearName}
                addedFilter={addedFilter}
                onApplyFilter={onApplyFilter}
                filterInfoToShow={filterInfoToShow}
                applyFilterClose={applyFilterClose}
                ref={childRefs}
                clearTextComponentName={clearTextComponentName}
              />
            </div>
          </div>
        </div>
      )}

      <MainFilterPanel
        filterMap={filterMap}
        click={(item) => handleFilterViewInRightDrawer(item)}
        onSelectSavedFilter={onSelectSavedFilter}
      />
      <SpreadSheet filterArray={filterKeys} />
    </div>
  );
}

export default App;
