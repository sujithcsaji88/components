import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import ArrivalPort from "../types/arrivalport";
import DeparturePort from "../types/departureport";
import Date from "../types/date";
import Revenue from "../types/revenue";
import Modal from "react-bootstrap/Modal";
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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSave } from "@fortawesome/free-solid-svg-icons";

const RightDrawer = (props) => {
  const saveFilters = () => {
    console.log("hooi");
    const obj = {
      savedfilter: [
        {
          column: "Departure Port",
          types: [
            {
              column: "Airport",
              value: departureAirport,
              enabled: departureAirportEnabled,
            },
            {
              column: "Airport Group",
              value: departureAirportGroup,
            },
            {
              column: "City",
              value: departureCity,
            },
            {
              column: "City Group",
              value: departureCityGroup,
            },
            {
              column: "Country",
              value: departureCountry,
            },
          ],
        },
        {
          column: "Arrival Port",
          types: [
            {
              column: "Airport",
              value: arrivalAirport,
            },
            {
              column: "Airport Group",
              value: arrivalAirportGroup,
            },
            {
              column: "City",
              value: arrivalCity,
            },
            {
              column: "City Group",
              value: arrivalCityGroup,
            },
            {
              column: "Country",
              value: arrivalCountry,
            },
          ],
        },
        {
          column: "Revenue",
          enabled: revenueEnabled,
          condition: revenueCondition,
          value: revenueAmount,
        },
        {
          column: "FromDate",
          enabled: dateEnabled,
          value: fromDateTime,
        },
        {
          column: "ToDate",
          enabled: dateEnabled,
          value: toDateTime,
        },
      ],
    };

    // let existing = localStorage.getItem("filters");
    // existing = existing ? JSON.parse(existing) : [];
    // existing.push(obj);
    // localStorage.setItem("filters", JSON.stringify(existing));

    const myData = obj; // I am assuming that "this.state.myData"
    // is an object and I wrote it to file as
    // json
    const json = JSON.stringify(myData);
    const blob = new Blob([json], { type: "application/json" });
    const href = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = href;
    link.download = fileName + ".json";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  const [departureAirport, setDepartureAirport] = useState();
  const [departureAirportEnabled, setDepartureAirportEnabled] = useState();
  const [departureAirportGroup, setDepartureAirportGroup] = useState();
  const [
    departureAirportGroupEnabled,
    setDepartureAirportGroupEnabled,
  ] = useState();
  const [departureCity, setDepartureCity] = useState();
  const [departureCityEnabled, setDepartureCityEnabled] = useState();
  const [departureCityGroup, setDepartureCityGroup] = useState();
  const [departureCityGroupEnabled, setDepartureCityGroupEnabled] = useState();
  const [departureCountry, setDepartureCountry] = useState();
  const [departureCountryEnabled, setDepartureCountryEnabled] = useState();
  const [arrivalAirport, setArrivalAirport] = useState();
  const [arrivalAirportEnabled, setArrivalAirportEnabled] = useState();
  const [arrivalAirportGroup, setArrivalAirportGroup] = useState();
  const [
    arrivalAirportGroupEnabled,
    setArrivalAirportGroupEnabled,
  ] = useState();
  const [arrivalCity, setArrivalCity] = useState();
  const [arrivalCityEnabled, setArrivalCityEnabled] = useState();
  const [arrivalCityGroup, setArrivalCityGroup] = useState();
  const [arrivalCityGroupEnabled, setArrivalCityGroupEnabled] = useState();
  const [arrivalCountry, setArrivalCountry] = useState();
  const [arrivalCountryEnabled, setArrivalCountryEnabled] = useState();
  const [revenueCondition, setRevenueCondition] = useState();
  const [revenueAmount, setRevenueAmount] = useState();
  const [fromDateTime, setFromDateTime] = useState();
  const [toDateTime, setToDateTime] = useState();
  const [dateEnabled, setDateEnabled] = useState(true);
  const [revenueEnabled, setRevenueEnabled] = useState(true);
  const [popupStatus, setPopupStatus] = useState(false);
  const [fileName, setFileName] = useState();

  if(props.isReset === true){
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

  const PortvalueToSave = (e, name, type) => {
    if (name === DEPARTURE_PORT) {
      if (type === AIRPORT) {
        setDepartureAirport(e.target.value);
      } else if (type === AIRPORT_GROUP) {
        setDepartureAirportGroup(e.target.value);
      } else if (type === CITY) {
        setDepartureCity(e.target.value);
      } else if (type === CITY_GROUP) {
        setDepartureCityGroup(e.target.value);
      } else if (type === COUNTRY) {
        setDepartureCountry(e.target.value);
      }
    } else if (name === ARRIVAL_PORT) {
      if (type === AIRPORT) {
        setArrivalAirport(e.target.value);
      } else if (type === AIRPORT_GROUP) {
        setArrivalAirportGroup(e.target.value);
      } else if (type === CITY) {
        setArrivalCity(e.target.value);
      } else if (type === CITY_GROUP) {
        setArrivalCityGroup(e.target.value);
      } else if (type === COUNTRY) {
        setArrivalCountry(e.target.value);
      }
    }
  };

  const departureAirportEnabledSave = (enabled) => {
    setDepartureAirportEnabled(enabled);
    if (!dateEnabledSave) {
      setFromDateTime("");
      setToDateTime("");
    }
  };

  const revenueConditionSave = (e) => {
    setRevenueCondition(e.target.value);
  };
  const revenueAmountSave = (e) => {
    setRevenueAmount(e.target.value);
  };
  const dateSave = (e, name) => {
    if (name === FROM_DATE) {
      setFromDateTime(e.target.value);
    } else if (name === TO_DATE) {
      setToDateTime(e.target.value);
    }
  };
  const dateEnabledSave = (enabled) => {
    setDateEnabled(enabled);
    if (!dateEnabledSave) {
      setFromDateTime("");
      setToDateTime("");
    }
  };
  const revenueEnabledSave = (enabled) => {
    setRevenueEnabled(enabled);
  };
  const showModal = () => {
    setPopupStatus(!popupStatus);
  };
  const setFileNameFunc = (e) => {
    setFileName(e.target.value);
  };

  const collectFilterAttributesToMap = () => {
    var filter = [], typeArrival = [], typeDeparture = [], fieldList=[], obj = {};

      if(fromDateTime !== undefined)
        fieldList.push({"column": "From Date & Time", "value": fromDateTime});
      
      if(toDateTime !== undefined)
        fieldList.push({"column": "To Date & Time", "value": toDateTime});

    var departureEntitiesNameList = [
      { entityName: "departureAirport", entityValue: departureAirport },
      { entityName: "departureAirportGroup", entityValue: departureAirportGroup },
      { entityName: "departureCity", entityValue: departureCity },
      { entityName: "departureCityGroup", entityValue: departureCityGroup },
      { entityName: "departureCountry", entityValue: departureCountry }
    ];

    var arrivalEntitiesNameList = [
      { entityName: "arrivalAirport", entityValue: arrivalAirport },
      { entityName: "arrivalAirportGroup", entityValue: arrivalAirportGroup },
      { entityName: "arrivalCity", entityValue: arrivalCity },
      { entityName: "arrivalCityGroup", entityValue: arrivalCityGroup },
      { entityName: "arrivalCountry", entityValue: arrivalCountry }
    ];

    departureEntitiesNameList.map(item => {
      if( constructAirportListEntities(`${item.entityName}`, `${item.entityValue}`) !== undefined)
        typeDeparture.push(
          constructAirportListEntities(`${item.entityName}`, `${item.entityValue}`));
    });

    arrivalEntitiesNameList.map(item => {
      if( constructAirportListEntities(`${item.entityName}`, `${item.entityValue}`) !== undefined)
        typeArrival.push(
          constructAirportListEntities(`${item.entityName}`, `${item.entityValue}`));
    })

    if(typeDeparture.length>0){
      obj["column"] = "Departure Port"
      obj["types"] = typeDeparture;
      filter.push(obj);
    }

    obj = {}; //nullifying obj for reuse

    if(typeArrival.length>0){
      obj["column"] = "Arrival Port"
      obj["types"] = typeArrival;
      filter.push(obj);
    }

    obj = {}; //nullifying obj for reuse

    if(fieldList.length>0){
      obj["column"] = "Date"
      obj["field"] = fieldList;
      filter.push(obj);
    }
    
    obj = {}; //nullifying obj for reuse

    if(revenueCondition!==undefined){
      obj["column"] = "Revenue";
      obj["condition"] = revenueCondition;
      obj["value"]=revenueAmount != undefined ? revenueAmount : 0
      filter.push(obj);
    }
    obj = {}; //nullifying obj for reuse

    obj["filter"] = filter
    console.log("filterJson ", obj)
  }

  const constructAirportListEntities = (mapColumValue, mapEntityValue) => {
    var obj = {}, key = "";
    //dont use === in comparison; Intentionally did !=
    if(mapEntityValue !== "undefined"){
      if (mapColumValue.includes("AirportGroup")) {
        key = "Airport Group";
      }
      else if (mapColumValue.includes("CityGroup")) {
        key = "City Group";
      }
      else if (mapColumValue.includes("Airport")) {
        key = "Airport"
      }
      else if (mapColumValue.includes("City")) {
        key = "City"
      }
      else if (mapColumValue.includes("Country")) {
        key = "Country"
      }
      obj["column"] = key;
      obj["value"] = mapEntityValue
      return obj;
    }
  }

  return (
    <React.Fragment>
      <div className="filter__title">Searched Filters</div>
      <div className="rightDrawer">
        <DeparturePort
          isReset={props.isReset}
          name={props.name}
          type={props.type}
          clearValues={props.clearValues}
          PortvalueToSave={PortvalueToSave}
          enabled={props.enabled}
          departureAirportEnabledSave={departureAirportEnabledSave}
        />
        <ArrivalPort
          isReset={props.isReset}
          name={props.name}
          type={props.type}
          enabled={props.enabled}
          clearValues={props.clearValues}
          PortvalueToSave={PortvalueToSave}
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
      <div className="rdisplayFlex">
        <div className="ralignLeft">
          <Button variant="">
            <FontAwesomeIcon
              icon={faSave}
              onClick={showModal}
            ></FontAwesomeIcon>
          </Button>
        </div>
        <div className="rmarginLeft">
          <Button variant="" className="reset" onClick={props.clearAllFilter}>
            Reset
          </Button>
          <Button variant="" className="applyFilter"
          onClick={() => collectFilterAttributesToMap()}
          >
            Apply Filter
          </Button>
        </div>
      </div>
      <Modal size="sm" show={popupStatus} onHide={showModal}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <label>name of file:</label>
          <input type="text" onChange={setFileNameFunc} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={showModal}>
            Close
          </Button>
          <Button variant="primary" onClick={saveFilters}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </React.Fragment>
  );
};

export default RightDrawer;
