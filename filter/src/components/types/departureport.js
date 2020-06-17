import React, { useState, useEffect } from "react";
import { DEPARTURE_PORT } from "../../constants/filtertypeconstants";
import Airport from "./PortTypes/airport.js"
import AirportGroup from "./PortTypes/airportGroup.js"
import City from "./PortTypes/city.js";
import CityGroup from "./PortTypes/cityGroup.js";
import Country from "./PortTypes/country.js";

const DeparturePort = (props) => {
const[name,setName]=useState(props.name);
const[type,setType]=useState();
useEffect(
  ()=>{
    if(props.name===DEPARTURE_PORT){
    setName(props.name)
    setType(props.type)
  }
}
,[props]);

  if (name === DEPARTURE_PORT) {
    return (
      <div>
     <Airport name={name} type={type} clearValues={props.clearValues}  valueToSave={props.PortvalueToSave}/>
     <AirportGroup name={name} type={type} clearValues={props.clearValues} valueToSave={props.PortvalueToSave}/>
     <City name={name} type={type} clearValues={props.clearValues} valueToSave={props.PortvalueToSave}/>
     <CityGroup name={name} type={type} clearValues={props.clearValues} valueToSave={props.PortvalueToSave}/>
     <Country name={name} type={type} clearValues={props.clearValues} valueToSave={props.PortvalueToSave}/>
     </div>
    );
  } else {
    return <div></div>;
  }
};

export default DeparturePort;
