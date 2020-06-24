import React, { useState } from "react";
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

const RightDrawer = (props) => {
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
    if (name === DEPARTURE_PORT) {
      setDeparturePortName(name);
      if (type === AIRPORT) {
        setDepartureAirportName(type);
        setDepartureAirport(e.target.value);
        setDepartureAirportEnabled(enabled);
      } else if (type === AIRPORT_GROUP) {
        setDepartureAirportGroupName(type);
        setDepartureAirportGroup(e.target.value);
        setDepartureAirportGroupEnabled(enabled);
      } else if (type === CITY) {
        setDepartureCityName(type);
        setDepartureCity(e.target.value);
        setDepartureCityEnabled(enabled);
      } else if (type === CITY_GROUP) {
        setDepartureCityGroupName(type);
        setDepartureCityGroup(e.target.value);
        setDepartureCityGroupEnabled(enabled);
      } else if (type === COUNTRY) {
        setDepartureCountryName(type);
        setDepartureCountry(e.target.value);
        setDepartureCountryEnabled(enabled);
      }
    } else if (name === ARRIVAL_PORT) {
      setArrivalPortName(name);
      if (type === AIRPORT) {
        setArrivalAirportName(type);
        setArrivalAirport(e.target.value);
        setArrivalAirportEnabled(enabled);
      } else if (type === AIRPORT_GROUP) {
        setArrivalAirportGroupName(type);
        setArrivalAirportGroup(e.target.value);
        setArrivalAirportGroupEnabled(enabled);
      } else if (type === CITY) {
        setArrivalCityName(type);
        setArrivalCity(e.target.value);
        setArrivalCityEnabled(enabled);
      } else if (type === CITY_GROUP) {
        setArrivalCityGroupName(type);
        setArrivalCityGroup(e.target.value);
        setArrivalCityGroupEnabled(enabled);
      } else if (type === COUNTRY) {
        setArrivalCountryName(type);
        setArrivalCountry(e.target.value);
        setArrivalCountryEnabled(enabled);
      }
    }
  };
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
      filters=[],
      buff={};

    if (fromDateTime !== undefined)
      fieldList.push({
        column: fromDateTimeName,
        value: fromDateTime,
        enabled: dateEnabled,
      });

    if (toDateTime !== undefined)
      fieldList.push({
        column: toDateTimeName,
        value: toDateTime,
        enabled: dateEnabled,
      });

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
          `${item.enabled}`
        ) !== undefined
      )
        typeDeparture.push(
          constructPortListEntities(
            `${item.column}`,
            `${item.value}`,
            `${item.enabled}`
          )
        );
    });

    arrivalEntitiesNameList.map((item) => {
      if (
        constructPortListEntities(
          `${item.column}`,
          `${item.value}`,
          `${item.enabled}`
        ) !== undefined
      )
        typeArrival.push(
          constructPortListEntities(
            `${item.column}`,
            `${item.value}`,
            `${item.enabled}`
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

    if (revenueCondition !== undefined) {
      obj["column"] = revenueName;
      obj["condition"] = revenueCondition;
      obj["value"] = revenueAmount !== undefined ? revenueAmount : 0;
      obj["enabled"] = revenueEnabled;
      filter.push(obj);
    }
    obj = {}; //nullifying obj for reuse

    if (className === "applyFilter") {
      obj["applyFilter"] = filter;
      console.log(obj);
    } else {
      buff[saveFilterName]=filter;
      filters.push(buff);
      obj["saveFilter"]={...filters}
      console.log(obj);
      let savedFilters = localStorage.getItem("savedFilters");
      savedFilters = savedFilters ? JSON.parse(savedFilters) : [];
      savedFilters.push(filters);
      localStorage.setItem("savedFilters", JSON.stringify(savedFilters));
      console.log(savedFilters);
    }
    props.captureFilterMap(obj);
  };
  const constructPortListEntities = (mapColumn, mapValue, enabled) => {
    let obj = {},
      key = "";
    //dont use === in comparison; Intentionally did !=
    if (mapValue !== "undefined") {
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
      obj["enabled"] = enabled;
      return obj;
    }
  };
  const registersaveFilterName = (e) => {
    setSaveFilterName(e.target.value);
  };
  const showPopUp = () => {
    setShowSavePopup("");
  };
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
          clearValues={props.clearValues}
          PortvalueToSave={PortvalueToSave}
          enabled={props.enabled}
          departureAirportEnabledSave={departureAirportEnabledSave}
          departureAirportGroupEnabledSave={departureAirportGroupEnabledSave}
          departureCityEnabledSave={departureCityEnabledSave}
          departureCityGroupEnabledSave={departureCityGroupEnabledSave}
          departureCountryEnabledSave={departureCountryEnabledSave}   
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
        />
        <Date
          isReset={props.isReset}
          name={props.name}
          field={props.field}
          enabled={props.enabled}
          clearValue={props.clearValue}
          dateSave={dateSave}
          dateEnabledSave={dateEnabledSave}
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
            onClick={() => saveApplyFilterMap("applyFilter")}
          >
            Apply Filter
          </Button>
        </div>
        <div style={{ display: showSavePopup }} className="popup--save">
          <h5>Save the Filter</h5>
          <label>Saved Filter Name</label>
          <input
            className="txt"
            value={saveFilterName}
            onChange={(e) => registersaveFilterName(e)}
          />
          <div className="btn-wrap">
            <button className="button" onClick={(e)=>{setShowSavePopup("none")}}>Cancel</button>
            <button className="button" onClick={(e)=>{saveApplyFilterMap();
            setSaveFilterName("")}
            }>
              Save
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default RightDrawer;
