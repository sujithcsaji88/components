import React, { useState } from "react";
import { Button } from "react-bootstrap";
import ArrivalPort from "../types/arrivalport";
import DeparturePort from "../types/departureport";
import Date from "../types/date";
import Revenue from "../types/revenue";
import { DEPARTURE_PORT,ARRIVAL_PORT } from '../../constants/filtertypeconstants'


const RightDrawer = (props) => {
  const [jsonObj, setjsonObj] = useState(
    {
      filter: [
        {
          name: "Departure Port",
          enabled: true,
          types: [
            {
              name: "Airport",
              value: ""
            }
          ]
        },
        {
          name: "Arrival Port",
          enabled: true,
          types: [
            {
              name: "City",
              value: ""
            }
          ]
        },
        {
          name: "Date",
          enabled: true,
          field: [
            {
              name: "From Date & Time",
              value: ""
            },
            {
              name: "To Date & Time",
              value: ""
            }
          ]
        },
        {
          name: "Revenue",
          dataType: "Numeric",
          enabled: true,
          condition:
          {
            value: "equals"
          },
          value: ""

        }
      ]
    }
  );
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
  const [revenueCondition,setRevenueCondition]=useState();
  const [revenueAmount,setRevenueAmount]=useState();
  const[fromDateTime,setFromDateTime]=useState();
  const[toDateTime,setToDateTime]=useState();
  const PortvalueToSave = (e, name, type) => {
    if (name === DEPARTURE_PORT) {
      if (type === 'Airport') {
        setDepartureAirport(e.target.value)
      }
      else
      if (type === 'Airport Group') {
        setDepartureAirportGroup(e.target.value)
      }
      else
      if (type === 'City') {
        setDepartureCity(e.target.value)
      }
      else
      if (type === 'City Group') {
        setDepartureCityGroup(e.target.value)
      }
      else
      if (type === 'Country') {
        setDepartureCountry(e.target.value)
      }
    }
    else
    if(name===ARRIVAL_PORT){
      if (type === 'Airport') {
        setArrivalAirport(e.target.value)
      }
      else
      if (type === 'Airport Group') {
        setArrivalAirportGroup(e.target.value)
      }
      else
      if (type === 'City') {
        setArrivalCity(e.target.value)
      }
      else
      if (type === 'City Group') {
        setArrivalCityGroup(e.target.value)
      }
      else
      if (type === 'Country') {
        setArrivalCountry(e.target.value)
      }
    }
  }
  const revenueConditionSave = (e) => {
    setRevenueCondition(e.target.value)
  }
  const revenueAmountSave = (e) => {
    setRevenueAmount(e.target.value)
  }
  const dateSave = (e, name) => {
    if(name==='From Date & Time'){
      setFromDateTime(e.target.value)
    }
    else if(name==='To Date & Time'){
      setToDateTime(e.target.value)
    }
  }
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
        <Date name={props.name} field={props.field} clearValue={props.clearValue} dateSave={dateSave} />
        <Revenue name={props.name} condition={props.condition} clearValue={props.clearValue} revenueConditionSave={revenueConditionSave} revenueAmountSave={revenueAmountSave} />
      </div>
      <div className="">
        <Button variant="primary">Save</Button>{" "}
        <Button variant="primary">Reset</Button>{" "}
        <Button variant="primary">Apply Filter</Button>{" "}
      </div>
    </React.Fragment>
  );
};

export default RightDrawer;
