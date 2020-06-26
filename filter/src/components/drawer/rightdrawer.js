import React, { forwardRef, useRef, useImperativeHandle, useState } from "react";
import { Button } from "react-bootstrap";
import ArrivalPort from "../types/arrivalport";
import DeparturePort from "../types/departureport";
import Date from "../types/date";
import Revenue from "../types/revenue";
import {
  DEPARTURE_PORT,
  ARRIVAL_PORT,
  AIRPORT,
  AIRPORT_GROUP,
  CITY,
  CITY_GROUP,
  COUNTRY,
  FROM_DATE,
  TO_DATE,
} from "../../constants/filtertypeconstants";

const RightDrawer = forwardRef((props, ref) => {
  const [showSavePopup, setShowSavePopup] = useState("none");
  const [saveFilterName, setSaveFilterName] = useState("");
  const [departurePortName, setDeparturePortName] = useState();
  const [departureAirportName, setDepartureAirportName] = useState();
  const [departureAirport, setDepartureAirport] = useState();
  const [departureAirportEnabled, setDepartureAirportEnabled] = useState();
  const [departureAirportGroupName, setDepartureAirportGroupName] = useState();
  const [departureAirportGroup, setDepartureAirportGroup] = useState();
  const [
    departureAirportGroupEnabled,
    setDepartureAirportGroupEnabled,
  ] = useState();
  const [departureCityName, setDepartureCityName] = useState();
  const [departureCity, setDepartureCity] = useState();
  const [departureCityEnabled, setDepartureCityEnabled] = useState();
  const [departureCityGroupName, setDepartureCityGroupName] = useState();
  const [departureCityGroup, setDepartureCityGroup] = useState();
  const [departureCityGroupEnabled, setDepartureCityGroupEnabled] = useState();
  const [departureCountryName, setDepartureCountryName] = useState();
  const [departureCountry, setDepartureCountry] = useState();
  const [departureCountryEnabled, setDepartureCountryEnabled] = useState();
  const [arrivalPortName, setArrivalPortName] = useState();
  const [arrivalAirportName, setArrivalAirportName] = useState();
  const [arrivalAirport, setArrivalAirport] = useState();
  const [arrivalAirportEnabled, setArrivalAirportEnabled] = useState();
  const [arrivalAirportGroupName, setArrivalAirportGroupName] = useState();
  const [arrivalAirportGroup, setArrivalAirportGroup] = useState();
  const [
    arrivalAirportGroupEnabled,
    setArrivalAirportGroupEnabled,
  ] = useState();
  const [arrivalCityName, setArrivalCityName] = useState();
  const [arrivalCity, setArrivalCity] = useState();
  const [arrivalCityEnabled, setArrivalCityEnabled] = useState();
  const [arrivalCityGroupName, setArrivalCityGroupName] = useState();
  const [arrivalCityGroup, setArrivalCityGroup] = useState();
  const [arrivalCityGroupEnabled, setArrivalCityGroupEnabled] = useState();
  const [arrivalCountryName, setArrivalCountryName] = useState();
  const [arrivalCountry, setArrivalCountry] = useState();
  const [arrivalCountryEnabled, setArrivalCountryEnabled] = useState();
  const [revenueName, setRevenueName] = useState();
  const [revenueCondition, setRevenueCondition] = useState();
  const [revenueAmount, setRevenueAmount] = useState();
  const [dateName, setDateName] = useState();
  const [fromDateTimeName, setFromDateTimeName] = useState();
  const [fromDateTime, setFromDateTime] = useState();
  const [toDateTimeName, setToDateTimeName] = useState();
  const [toDateTime, setToDateTime] = useState();
  const [dateEnabled, setDateEnabled] = useState(true);
  const [revenueEnabled, setRevenueEnabled] = useState(true);
  const [saveFilterWarning, setSaveFilterWarning] = useState("");
  const [warningLabel,setWarningLabel]=useState("")

  if (props.isReset === true) {
    // //resetting all the values on RESET to undefined to remove old data
    // setDepartureAirport(undefined); setDepartureAirportGroup(undefined); setDepartureCity(undefined);
    // setDepartureCityGroup(undefined); setDepartureCountry(undefined);
    // setArrivalAirport(undefined); setArrivalAirportGroup(undefined); setArrivalCity(undefined)
    // setArrivalCityGroup(undefined); setArrivalCountry(undefined);
    // setRevenueCondition(undefined);setRevenueAmount(undefined);
    // setFromDateTime(undefined); setToDateTime(undefined);
    // //making isReset=False to prevent infinite rendering
    // props.setIsResetFalse();
  }

  const PortvalueToSave = (e, name, type, enabled) => {
    assignValuesForPort(e.target.value, name, type, enabled, false);
  };

  const assignValuesForPort = (value, name, type, enabled, isResetVariable) => {
    if (name === DEPARTURE_PORT) {
      setDeparturePortName(name);
      if (type === AIRPORT) {
        setDepartureAirportName(isResetVariable === false ? type : undefined);
        setDepartureAirport(isResetVariable === false ? value : undefined);
        setDepartureAirportEnabled(isResetVariable === false ? enabled : undefined);
      } else if (type === AIRPORT_GROUP) {
        setDepartureAirportGroupName(isResetVariable === false ? type : undefined);
        setDepartureAirportGroup(isResetVariable === false ? value : undefined);
        setDepartureAirportGroupEnabled(isResetVariable === false ? enabled : undefined);
      } else if (type === CITY) {
        setDepartureCityName(isResetVariable === false ? type : undefined);
        setDepartureCity(isResetVariable === false ? value : undefined);
        setDepartureCityEnabled(isResetVariable === false ? enabled : undefined);
      } else if (type === CITY_GROUP) {
        setDepartureCityGroupName(isResetVariable === false ? type : undefined);
        setDepartureCityGroup(isResetVariable === false ? value : undefined);
        setDepartureCityGroupEnabled(isResetVariable === false ? enabled : undefined);
      } else if (type === COUNTRY) {
        setDepartureCountryName(isResetVariable === false ? type : undefined);
        setDepartureCountry(isResetVariable === false ? value : undefined);
        setDepartureCountryEnabled(isResetVariable === false ? enabled : undefined);
      }
    } else if (name === ARRIVAL_PORT) {
      setArrivalPortName(name);
      if (type === AIRPORT) {
        setArrivalAirportName(isResetVariable === false ? type : undefined);
        setArrivalAirport(isResetVariable === false ? value : undefined);
        setArrivalAirportEnabled(isResetVariable === false ? enabled : undefined);
      } else if (type === AIRPORT_GROUP) {
        setArrivalAirportGroupName(isResetVariable === false ? type : undefined);
        setArrivalAirportGroup(isResetVariable === false ? value : undefined);
        setArrivalAirportGroupEnabled(isResetVariable === false ? enabled : undefined);
      } else if (type === CITY) {
        setArrivalCityName(isResetVariable === false ? type : undefined);
        setArrivalCity(isResetVariable === false ? value : undefined);
        setArrivalCityEnabled(isResetVariable === false ? enabled : undefined);
      } else if (type === CITY_GROUP) {
        setArrivalCityGroupName(isResetVariable === false ? type : undefined);
        setArrivalCityGroup(isResetVariable === false ? value : undefined);
        setArrivalCityGroupEnabled(isResetVariable === false ? enabled : undefined);
      } else if (type === COUNTRY) {
        setArrivalCountryName(isResetVariable === false ? type : undefined);
        setArrivalCountry(isResetVariable === false ? value : undefined);
        setArrivalCountryEnabled(isResetVariable === false ? enabled : undefined);
      }
    }
  };

  useImperativeHandle(ref, () => ({
    clearStateVariables(resetStateVariableMap) {
      console.log("BHAI CLEARED ", resetStateVariableMap)
      assignValuesForPort(undefined, resetStateVariableMap.name, resetStateVariableMap.type,
        false, true);
    }
  }));

  const departureAirportEnabledSave = (enabled) => {
    setDepartureAirportEnabled(enabled);
    if (!departureAirportEnabled) {
      setDepartureAirport("");
    }
  };
  const departureAirportGroupEnabledSave = (enabled) => {
    setDepartureAirportGroupEnabled(enabled);
    if (!departureAirportGroupEnabled) {
      setDepartureAirportGroup("");
    }
  };
  const departureCityEnabledSave = (enabled) => {
    setDepartureCityEnabled(enabled);
    if (!departureCityEnabled) {
      setDepartureCity("");
    }
  };
  const departureCityGroupEnabledSave = (enabled) => {
    setDepartureCityGroupEnabled(enabled);
    if (!departureCityGroupEnabled) {
      setDepartureCityGroup("");
    }
  };
  const departureCountryEnabledSave = (enabled) => {
    setDepartureCountryEnabled(enabled);
    if (!departureCountryEnabled) {
      setDepartureCountry("");
    }
  };
  const arrivalAirportEnabledSave = (enabled) => {
    setArrivalAirportEnabled(enabled);
    if (!arrivalAirportEnabled) {
      setArrivalAirportGroup("");
    }
  };
  const arrivalAirportGroupEnabledSave = (enabled) => {
    setArrivalAirportGroupEnabled(enabled);
    if (!arrivalAirportGroupEnabled) {
      setArrivalAirportGroup("");
    }
  };
  const arrivalCityEnabledSave = (enabled) => {
    setArrivalCityEnabled(enabled);
    if (!arrivalCityEnabled) {
      setArrivalCity("");
    }
  };
  const arrivalCityGroupEnabledSave = (enabled) => {
    setArrivalCityGroupEnabled(enabled);
    if (!arrivalCityGroupEnabled) {
      setArrivalCityGroup("");
    }
  };
  const arrivalCountryEnabledSave = (enabled) => {
    setArrivalCountryEnabled(enabled);
    if (!arrivalCountryEnabled) {
      setArrivalCountry("");
    }
  };

  const revenueConditionSave = (e) => {
    setRevenueCondition(e.target.value);
  };
  const revenueAmountSave = (e, name, enabled) => {
    setRevenueEnabled(enabled);
    setRevenueName(name);
    setRevenueAmount(e.target.value);
  };
  const dateSave = (e, name, labelName, enabled) => {
    setDateEnabled(enabled);
    setDateName(labelName);
    if (name === FROM_DATE) {
      setFromDateTimeName(name);
      setFromDateTime(e.target.value);
    } else if (name === TO_DATE) {
      setToDateTimeName(name);
      setToDateTime(e.target.value);
    }
  };
  const dateEnabledSave = (enabled) => {
    setDateEnabled(enabled);
    if (dateEnabled === false) {
      setFromDateTime("");
      setToDateTime("");
    }
  };
  const revenueEnabledSave = (enabled) => {
    setRevenueEnabled(enabled);
    if (revenueEnabled === false) {
      setRevenueCondition("");
      setRevenueAmount("");
    }
  };

  const saveApplyFilterMap = (className) => {
    setShowSavePopup("none");
    let filter = [],
      typeArrival = [],
      typeDeparture = [],
      fieldList = [],
      obj = {},
      filters = [],
      buff = {};

    if (fromDateTime !== undefined) {
      if (className !== "applyFilter") {
        fieldList.push({
          column: fromDateTimeName,
          value: fromDateTime,
          enabled: dateEnabled,
        });
      }
      else {
        fieldList.push({
          column: fromDateTimeName,
          value: fromDateTime
        });
      }

    }


    if (toDateTime !== undefined) {
      if (className !== "applyFilter") {
        fieldList.push({
          column: toDateTimeName,
          value: toDateTime,
          enabled: dateEnabled,
        });
      }
      else {
        fieldList.push({
          column: toDateTimeName,
          value: toDateTime
        });
      }
    }


    let departureEntitiesNameList = [
      {
        column: departureAirportName,
        value: departureAirport,
        enabled: departureAirportEnabled,
      },
      {
        column: departureAirportGroupName,
        value: departureAirportGroup,
        enabled: departureAirportGroupEnabled,
      },
      {
        column: departureCityName,
        value: departureCity,
        enabled: departureCityEnabled,
      },
      {
        column: departureCityGroupName,
        value: departureCityGroup,
        enabled: departureCityGroupEnabled,
      },
      {
        column: departureCountryName,
        value: departureCountry,
        enabled: departureCountryEnabled,
      },
    ];

    var arrivalEntitiesNameList = [
      {
        column: arrivalAirportName,
        value: arrivalAirport,
        enabled: arrivalAirportEnabled,
      },
      {
        column: arrivalAirportGroupName,
        value: arrivalAirportGroup,
        enabled: arrivalAirportGroupEnabled,
      },
      {
        column: arrivalCityName,
        value: arrivalCity,
        enabled: arrivalCityEnabled,
      },
      {
        column: arrivalCityGroupName,
        value: arrivalCityGroup,
        enabled: arrivalCityGroupEnabled,
      },
      {
        column: arrivalCountryName,
        value: arrivalCountry,
        enabled: arrivalCountryEnabled,
      },
    ];

    departureEntitiesNameList.map((item) => {
      if (
        constructPortListEntities(
          `${item.column}`,
          `${item.value}`,
          `${item.enabled}`,
          className
        ) !== undefined
      )
        typeDeparture.push(
          constructPortListEntities(
            `${item.column}`,
            `${item.value}`,
            `${item.enabled}`,
            className
          )
        );
    });

    arrivalEntitiesNameList.map((item) => {
      if (
        constructPortListEntities(
          `${item.column}`,
          `${item.value}`,
          `${item.enabled}`,
          className
        ) !== undefined
      )
        typeArrival.push(
          constructPortListEntities(
            `${item.column}`,
            `${item.value}`,
            `${item.enabled}`,
            className
          )
        );
    });

    if (typeDeparture.length > 0 && departurePortName !== undefined) {
      obj["column"] = departurePortName;
      obj["types"] = typeDeparture;
      filter.push(obj);
    }

    obj = {}; //nullifying obj for reuse

    if (typeArrival.length > 0 && arrivalPortName !== undefined) {
      obj["column"] = arrivalPortName;
      obj["types"] = typeArrival;
      filter.push(obj);
    }

    obj = {}; //nullifying obj for reuse

    if (fieldList.length > 0) {
      obj["column"] = dateName;
      obj["field"] = fieldList;
      filter.push(obj);
    }

    obj = {}; //nullifying obj for reuse

    if (revenueCondition !== undefined && revenueAmount !== undefined) {
      if (className !== "applyFilter") {
        obj["column"] = revenueName;
        obj["condition"] = revenueCondition;
        obj["value"] = revenueAmount !== undefined ? revenueAmount : 0;
        obj["enabled"] = revenueEnabled;
      }
      else {
        obj["column"] = revenueName;
        obj["condition"] = revenueCondition;
        obj["value"] = revenueAmount !== undefined ? revenueAmount : 0;
      }
      filter.push(obj);
    }
    obj = {}; //nullifying obj for reuse

    if (className === "applyFilter") {
      obj["applyFilter"] = filter;
      console.log(obj);
      props.onApplyFilter(obj);
    } else {
      if (saveFilterName.length > 0) {
        buff[saveFilterName] = filter;
        filters.push(buff);
        obj["saveFilter"] = { ...filters }

        let savedFilters = localStorage.getItem("savedFilters");
        savedFilters = savedFilters ? JSON.parse(savedFilters) : [];
        savedFilters.push(filters);
        localStorage.setItem("savedFilters", JSON.stringify(savedFilters));
        console.log(savedFilters);
      }
      else{
        setSaveFilterWarning("enter a valid filter name!")
        setWarningLabel("alert alert-danger")
        setShowSavePopup("")
      }
    }
    props.captureFilterMap(obj);

  };
  const constructPortListEntities = (mapColumn, mapValue, enabled, className) => {
    let obj = {},
      key = "";
    //dont use === in comparison; Intentionally did !=
    if ((mapValue !== "undefined" && mapValue.length > 0) && enabled === "true") {
      if (mapColumn.includes("Airport Group")) {
        key = "Airport Group";
      } else if (mapColumn.includes("City Group")) {
        key = "City Group";
      } else if (mapColumn.includes("Airport")) {
        key = "Airport";
      } else if (mapColumn.includes("City")) {
        key = "City";
      } else if (mapColumn.includes("Country")) {
        key = "Country";
      }
      obj["column"] = key;
      obj["value"] = mapValue;
      if (className !== "applyFilter") {
        obj["enabled"] = enabled;
      }
      return obj;
    }
  };
  const registersaveFilterName = (e) => {
    setSaveFilterWarning("")
    setWarningLabel("")
    setSaveFilterName(e.target.value);
  };
  const showPopUp = () => {
      setShowSavePopup("");
  };
  const cancelSavePopup = () => {
    setShowSavePopup("none")
    setSaveFilterWarning("")
    setWarningLabel("")
  }
  return (
    <React.Fragment>
      <div className="filter__title">
        Searched Filters
        <span className="filter-count">{props.addedFilter}</span>
      </div>
      <div className="filter__content">
        <DeparturePort
          isReset={props.isReset}
          name={props.name}
          type={props.type}
          clearValues={(resetStateVariableMap) => props.clearValues(resetStateVariableMap)}
          PortvalueToSave={PortvalueToSave}
          enabled={props.enabled}
          departureAirportEnabledSave={departureAirportEnabledSave}
          departureAirportGroupEnabledSave={departureAirportGroupEnabledSave}
          departureCityEnabledSave={departureCityEnabledSave}
          departureCityGroupEnabledSave={departureCityGroupEnabledSave}
          departureCountryEnabledSave={departureCountryEnabledSave}
          filterInfoToShow={props.filterInfoToShow}
        />
        <ArrivalPort
          isReset={props.isReset}
          name={props.name}
          type={props.type}
          enabled={props.enabled}
          clearValues={props.clearValues}
          PortvalueToSave={PortvalueToSave}
          arrivalAirportEnabledSave={arrivalAirportEnabledSave}
          arrivalAirportGroupEnabledSave={arrivalAirportGroupEnabledSave}
          arrivalCityEnabledSave={arrivalCityEnabledSave}
          arrivalCityGroupEnabledSave={arrivalCityGroupEnabledSave}
          arrivalCountryEnabledSave={arrivalCountryEnabledSave}
          filterInfoToShow={props.filterInfoToShow}
        />
        <Date
          isReset={props.isReset}
          name={props.name}
          field={props.field}
          enabled={props.enabled}
          clearValue={props.clearValue}
          dateSave={dateSave}
          dateEnabledSave={dateEnabledSave}
          filterInfoToShow={props.filterInfoToShow}
        />
        <Revenue
          isReset={props.isReset}
          name={props.name}
          condition={props.condition}
          enabled={props.enabled}
          clearValue={props.clearValue}
          revenueConditionSave={revenueConditionSave}
          revenueAmountSave={revenueAmountSave}
          revenueEnabledSave={revenueEnabledSave}
          filterInfoToShow={props.filterInfoToShow}
        />
      </div>
      <div className="filter__btn">
        <div className="filter__save">
          <Button className="button-save" variant="">
            <img src="../images/icon-save.svg" onClick={showPopUp} alt="save icon" />
            <span>SAVE</span>
          </Button>
        </div>
        <div className="btn-wrap">
          <Button variant="" className="reset" onClick={props.clearAllFilter}>
            Reset
          </Button>
          <Button
            variant=""
            className="applyFilter"
            onClick={
              (e) => {
                saveApplyFilterMap("applyFilter");
                props.applyFilterClose();
              }
            }
          >
            Apply Filter
          </Button>
        </div>
        <div style={{ display: showSavePopup }} className="popup--save">
          <h5>Save the Filter</h5>
          <h6 className={warningLabel}>{saveFilterWarning}</h6>
          <label>Saved Filter Name</label>
          <input
            className="txt"
            value={saveFilterName}
            onChange={(e) => registersaveFilterName(e)}
          />
          <div className="btn-wrap">
            <button className="button" onClick={(e) => { cancelSavePopup(); }}>Cancel</button>
            <button className="button" onClick={(e) => {
              saveApplyFilterMap();
              setSaveFilterName("")
            }
            }>
              Save
            </button>
          </div>
        </div>
      </div>
    </React.Fragment >
  );
});

export default RightDrawer;
