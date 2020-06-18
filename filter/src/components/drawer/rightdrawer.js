import React, { useState } from "react";
import { Button } from "react-bootstrap";
import ArrivalPort from "../types/arrivalport";
import DeparturePort from "../types/departureport";
import Date from "../types/date";
import Revenue from "../types/revenue";
import Modal from 'react-bootstrap/Modal'
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
  const saveFilters = () => {
    console.log('hooi')
    const obj = {
      savedfilter: [
        {
          column: "Departure Port",
          types: [
            {
              column: "Airport",
              value:departureAirport
            },
            {
              column: "Airport Group",
              value:departureAirportGroup
            },
            {
              column: "City",
              value:departureCity
            },
            {
              column: "City Group",
              value:departureCityGroup
            },
            {
              column: "Country",
              value:departureCountry
            }
          ]
        },
        {
          column: "Arrival Port",
          types: [
            {
              column: "Airport",
              value:arrivalAirport
            },
            {
              column: "Airport Group",
              value:arrivalAirportGroup
            },
            {
              column: "City",
              value:arrivalCity
            },
            {
              column: "City Group",
              value:arrivalCityGroup
            },
            {
              column: "Country",
              value:arrivalCountry
            }
          ]
        },
        {
          column: "Revenue",
          enabled: revenueEnabled,
          condition: revenueCondition,
          value:revenueAmount
        },
        {
          column: "FromDate",
          enabled: dateEnabled,
          value: fromDateTime
        },
        {
          column: "ToDate",
          enabled: dateEnabled,
          value: toDateTime
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
    const blob = new Blob([json],{type:'application/json'});
    const href = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = href;
    link.download = fileName + ".json";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  const [departureAirport, setDepartureAirport] = useState();
  const [departureAirportEnabled, setDepartureAirportEnabled] = useState();
  const [departureAirportGroup, setDepartureAirportGroup] = useState();
  const [departureAirportGroupEnabled, setDepartureAirportGroupEnabled] = useState();
  const [departureCity, setDepartureCity] = useState();
  const [departureCityEnabled, setDepartureCityEnabled] = useState();
  const [departureCityGroup, setDepartureCityGroup] = useState();
  const [departureCityGroupEnabled, setDepartureCityGroupEnabled] = useState();
  const [departureCountry, setDepartureCountry] = useState();
  const [departureCountryEnabled, setDepartureCountryEnabled] = useState();
  const [arrivalAirport, setArrivalAirport] = useState();
  const [arrivalAirportEnabled, setArrivalAirportEnabled] = useState();
  const [arrivalAirportGroup, setArrivalAirportGroup] = useState();
  const [arrivalAirportGroupEnabled, setArrivalAirportGroupEnabled] = useState();
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
  const [popupStatus,setPopupStatus]=useState(false);
  const [fileName,setFileName]=useState();
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
  const DepartureAirportEnabledSave=(enabled)=>{
    setDepartureAirportEnabled(enabled)
    if(!dateEnabledSave){
      setFromDateTime('')
      setToDateTime('')
    }
  }



  const revenueConditionSave = (e) => {
      setRevenueCondition(e.target.value);
  }
  const revenueAmountSave = (e) => {
      setRevenueAmount(e.target.value);
  }
  const dateSave = (e, name) => {
      if (name === FROM_DATE) {
        setFromDateTime(e.target.value);

      } else if (name === TO_DATE) {
        setToDateTime(e.target.value);
      }
  }
  const dateEnabledSave=(enabled)=>{
    setDateEnabled(enabled);
    if(!dateEnabledSave){
      setFromDateTime('')
      setToDateTime('')
    }
  }
  const revenueEnabledSave=(enabled)=>{
    setRevenueEnabled(enabled);
  }
  const showModal=()=>{
    setPopupStatus(!popupStatus)
  }
  const setFileNameFunc=(e)=>{
    setFileName(e.target.value)
  }
  return (
    <React.Fragment>
      <div className="rightDrawer">
        <DeparturePort
          name={props.name}
          type={props.type}
          clearValues={props.clearValues}
          PortvalueToSave={PortvalueToSave}
          enabled={props.enabled}
          DepartureAirportEnabledSave={DepartureAirportEnabledSave}
        />
        <ArrivalPort
          name={props.name}
          type={props.type}
          enabled={props.enabled}
          clearValues={props.clearValues}
          PortvalueToSave={PortvalueToSave}
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
      <div className="">
        <Button variant="primary" onClick={showModal}>Save</Button>{" "}
        <Button variant="primary">Reset</Button>{" "}
        <Button variant="primary">Apply Filter</Button>{" "}
        <Modal show={popupStatus} onHide={showModal}>
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
      </div>
    </React.Fragment>
  );
};

export default RightDrawer;
