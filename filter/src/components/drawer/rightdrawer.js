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
          column: departurePortName,
          types: [
            {
              column: departureAirportName,
              value:departureAirport,
              enabled:departureAirportEnabled
            },
            {
              column: departureAirportGroupName,
              value:departureAirportGroup
            },
            {
              column: departureCityName,
              value:departureCity
            },
            {
              column: departureCityGroupName,
              value:departureCityGroup
            },
            {
              column: departureCountryName,
              value:departureCountry
            }
          ]
        },
        {
          column:arrivalPortName,
          types: [
            {
              column: arrivalAirportName,
              value:arrivalAirport
            },
            {
              column:arrivalAirportGroupName,
              value:arrivalAirportGroup
            },
            {
              column:arrivalCityName,
              value:arrivalCity
            },
            {
              column: arrivalCityGroupName,
              value:arrivalCityGroup
            },
            {
              column:arrivalCountryName,
              value:arrivalCountry
            }
          ]
        },
        {
          column: revenueName,
          enabled: revenueEnabled,
          condition: revenueCondition,
          value: revenueAmount,
        },
        {
          column: dateName,
          enabled: dateEnabled,
          field: [
            {
              column: fromDateTimeName,
              value:fromDateTime
            },
            {
              column: toDateTimeName,
              value:toDateTime
            }
          ]
        }
      ]
    }
    
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
  }
  const [departurePortName,setDeparturePortName]=useState();
  const [departureAirportName, setDepartureAirportName] = useState();
  const [departureAirport, setDepartureAirport] = useState();
  const [departureAirportEnabled, setDepartureAirportEnabled] = useState();
  const [departureAirportGroupName, setDepartureAirportGroupName] = useState();
  const [departureAirportGroup, setDepartureAirportGroup] = useState();
  const [departureAirportGroupEnabled, setDepartureAirportGroupEnabled] = useState();
  const [departureCityName, setDepartureCityName] = useState();
  const [departureCity, setDepartureCity] = useState();
  const [departureCityEnabled, setDepartureCityEnabled] = useState();
  const [departureCityGroupName, setDepartureCityGroupName] = useState();
  const [departureCityGroup, setDepartureCityGroup] = useState();
  const [departureCityGroupEnabled, setDepartureCityGroupEnabled] = useState();
  const [departureCountryName, setDepartureCountryName] = useState();
  const [departureCountry, setDepartureCountry] = useState();
  const [departureCountryEnabled, setDepartureCountryEnabled] = useState();
  const [arrivalPortName,setArrivalPortName]=useState();
  const [arrivalAirportName, setArrivalAirportName] = useState();
  const [arrivalAirport, setArrivalAirport] = useState();
  const [arrivalAirportEnabled, setArrivalAirportEnabled] = useState();
  const [arrivalAirportGroupName, setArrivalAirportGroupName] = useState();
  const [arrivalAirportGroup, setArrivalAirportGroup] = useState();
  const [arrivalAirportGroupEnabled, setArrivalAirportGroupEnabled] = useState();
  const [arrivalCityName, setArrivalCityName] = useState();
  const [arrivalCity, setArrivalCity] = useState();
  const [arrivalCityEnabled, setArrivalCityEnabled] = useState();
  const [arrivalCityGroupName, setArrivalCityGroupName] = useState();
  const [arrivalCityGroup, setArrivalCityGroup] = useState();
  const [arrivalCityGroupEnabled, setArrivalCityGroupEnabled] = useState();
  const [arrivalCountryName, setArrivalCountryName] = useState();
  const [arrivalCountry, setArrivalCountry] = useState();
  const [arrivalCountryEnabled, setArrivalCountryEnabled] = useState();
  const [revenueName,setRevenueName]=useState();
  const [revenueCondition, setRevenueCondition] = useState();
  const [revenueAmount, setRevenueAmount] = useState();
  const [dateName,setDateName]=useState();
  const [fromDateTimeName,setFromDateTimeName]=useState();
  const [fromDateTime, setFromDateTime] = useState();
  const [toDateTimeName,setToDateTimeName]=useState();
  const [toDateTime, setToDateTime] = useState();
  const [dateEnabled, setDateEnabled] = useState(true);
  const [revenueEnabled, setRevenueEnabled] = useState(true);
  const [popupStatus, setPopupStatus] = useState(false);
  const [fileName, setFileName] = useState();
  const PortvalueToSave = (e, name, type) => {
    if (name === DEPARTURE_PORT) {
      setDeparturePortName(name);
      if (type === AIRPORT) {
        setDepartureAirportName(type);
        setDepartureAirport(e.target.value);
      } else if (type === AIRPORT_GROUP) {
        setDepartureAirportGroupName(type);
        setDepartureAirportGroup(e.target.value);
      } else if (type === CITY) {
        setDepartureCityName(type)
        setDepartureCity(e.target.value);
      } else if (type === CITY_GROUP) {
        setDepartureCityGroupName(type)
        setDepartureCityGroup(e.target.value);
      } else if (type === COUNTRY) {
        setDepartureCountryName(type);
        setDepartureCountry(e.target.value);
      }
    } else if (name === ARRIVAL_PORT) {
       setArrivalPortName(name)
      if (type === AIRPORT) {
        setArrivalAirportName(type);
        setArrivalAirport(e.target.value);
      } else if (type === AIRPORT_GROUP) {
        setArrivalAirportGroupName(type);
        setArrivalAirportGroup(e.target.value);
      } else if (type === CITY) {
        setArrivalCityName(type);
        setArrivalCity(e.target.value);
      } else if (type === CITY_GROUP) {
        setArrivalCityGroupName(type);
        setArrivalCityGroup(e.target.value);
      } else if (type === COUNTRY) {
        setArrivalCountryName(type);
        setArrivalCountry(e.target.value);
      }
    }
  };
  const departureAirportEnabledSave = (enabled) => {
    setDepartureAirportEnabled(enabled);
    if (!departureAirportEnabled) {
      setDepartureAirport("");
    }
  }
  const departureAirportGroupEnabledSave = (enabled) => {
    setDepartureAirportGroupEnabled(enabled);
    if (!departureAirportGroupEnabled) {
      setDepartureAirportGroup("");
    }
  }
  const departureCityEnabledSave = (enabled) => {
    setDepartureAirportGroupEnabled(enabled);
    if (!departureCityEnabled) {
      setDepartureCity("");
    }
  }
  const departureCityGroupEnabledSave = (enabled) => {
    setDepartureAirportGroupEnabled(enabled);
    if (!departureCityGroupEnabled) {
      setDepartureCityGroup("");
    }
  }
  const departureCountryEnabledSave = (enabled) => {
    setDepartureCountryEnabled(enabled);
    if (!departureCountryEnabled) {
      setDepartureCountry("");
    }
  }
  const arrivalAirportEnabledSave=(enabled)=>{
    setArrivalAirportEnabled(enabled);
    if(!arrivalAirportEnabled){
      setArrivalAirportGroup('')
    }
  }
  const arrivalAirportGroupEnabledSave = (enabled) => {
    setArrivalAirportGroupEnabled(enabled);
    if (!arrivalAirportGroupEnabled) {
      setArrivalAirportGroup("");
    }
  }
  const arrivalCityEnabledSave = (enabled) => {
    setArrivalAirportGroupEnabled(enabled);
    if (!arrivalCityEnabled) {
      setArrivalCity("");
    }
  }
  const arrivalCityGroupEnabledSave = (enabled) => {
    setArrivalAirportGroupEnabled(enabled);
    if (!arrivalCityGroupEnabled) {
      setArrivalCityGroup("");
    }
  }
  const arrivalCountryEnabledSave = (enabled) => {
    setArrivalCountryEnabled(enabled);
    if (!arrivalCountryEnabled) {
      setArrivalCountry("");
    }
  }

  const revenueConditionSave = (e) => {
      setRevenueCondition(e.target.value);
  }
  const revenueAmountSave = (e,name) => {
      setRevenueName(name);
      setRevenueAmount(e.target.value);
  }
  const dateSave = (e, name) => {
    setDateName(name);
      if (name === FROM_DATE) {
        setFromDateTimeName(name)
        setFromDateTime(e.target.value);

      } else if (name === TO_DATE) {
        setToDateTimeName(name);
        setToDateTime(e.target.value);
      }
  }
  const dateEnabledSave=(enabled)=>{
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
  return (
    <React.Fragment>
      <div className="rightDrawer">
        <div>Searched Filters</div>
        <DeparturePort
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
          name={props.name}
          field={props.field}
          enabled={props.enabled}
          clearValue={props.clearValue}
          dateSave={dateSave}
          dateEnabledSave={dateEnabledSave}
        />
        <Revenue
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
            <FontAwesomeIcon icon={faSave}></FontAwesomeIcon>
          </Button>
        </div>
        <div className="rmarginLeft">
          <Button variant="" className="reset">
            Reset
          </Button>
          <Button variant="" className="applyFilter">
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
