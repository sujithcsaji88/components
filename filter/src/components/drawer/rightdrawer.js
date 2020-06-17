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
  const saveFilters=()=>{
    const obj={
      filter: [
        {
          name: "Departure Port",
          enabled: true,
          types: [
            {
              name: "Airport",
              value: departureAirport,
            },
          ],
        },
        {
          name: "Arrival Port",
          enabled: true,
          types: [
            {
              name: "City",
              value: arrivalCity,
            },
          ],
        },
        {
          name: "Date",
          enabled: true,
          field: [
            {
              name: "From Date & Time",
              value: fromDateTime,
            },
            {
              name: "To Date & Time",
              value: toDateTime,
            },
          ],
        },
        {
          name: "Revenue",
          dataType: "Numeric",
          enabled: true,
          condition: {
            value: "equals",
          },
          value: revenueAmount,
        },
      ]
    }
 console.log(obj)
 debugger;
 let existing = localStorage.getItem("filters");
	existing = existing ? JSON.parse(existing) : [];
	existing.push(obj);
	localStorage.setItem("filters", JSON.stringify(existing));
 
  }
  const [departureAirport, setDepartureAirport] = useState();
  const [departureAirportGroup, setDepartureAirportGroup] = useState();
  const [departureCity, setDepartureCity] = useState();
  const [departureCityGroup, setDepartureCityGroup] = useState();
  const [departureCountry, setDepartureCountry] = useState();
  const [arrivalAirport, setArrivalAirport] = useState();
  const [arrivalAirportGroup, setArrivalAirportGroup] = useState();
  const [arrivalCity, setArrivalCity] = useState();
  const [arrivalCityGroup, setArrivalCityGroup] = useState();
  const [arrivalCountry, setArrivalCountry] = useState();
  const [revenueCondition, setRevenueCondition] = useState();
  const [revenueAmount, setRevenueAmount] = useState();
  const [fromDateTime, setFromDateTime] = useState();
  const [toDateTime, setToDateTime] = useState();
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
  return (
    <React.Fragment>
      <div className="rightDrawer">
        <DeparturePort
          name={props.name}
          type={props.type}
          clearValues={props.clearValues}
          PortvalueToSave={PortvalueToSave}
        />
        <ArrivalPort
          name={props.name}
          type={props.type}
          clearValues={props.clearValues}
          PortvalueToSave={PortvalueToSave}
        />
        <Date
          name={props.name}
          field={props.field}
          clearValue={props.clearValue}
          dateSave={dateSave}
        />
        <Revenue
          name={props.name}
          condition={props.condition}
          clearValue={props.clearValue}
          revenueConditionSave={revenueConditionSave}
          revenueAmountSave={revenueAmountSave}
        />
      </div>
      <div className="">
        <Button variant="primary" onClick={saveFilters}>Save</Button>{" "}
        <Button variant="primary">Reset</Button>{" "}
        <Button variant="primary">Apply Filter</Button>{" "}
      </div>
    </React.Fragment>
  );
};

export default RightDrawer;
