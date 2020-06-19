import React, { useState, useEffect } from "react";
import { ARRIVAL_PORT } from "../../constants/filtertypeconstants";
import Airport from "./PortTypes/airport";
import AirportGroup from "./PortTypes/airportGroup";
import City from "./PortTypes/city";
import CityGroup from "./PortTypes/cityGroup";
import Country from "./PortTypes/country";

const ArrivalPort = (props) => {
  const [name, setName] = useState();
  const [type, setType] = useState();

  useEffect(() => {
    if(props.name){
      if(props.isReset === true){
        setName("")
        setType("")
     }
    else if(props.name===ARRIVAL_PORT){
    setName(props.name)
    setType(props.type)
    }
  }
  }, [props]);

  if (name === ARRIVAL_PORT) {
    return (
      <React.Fragment>
        <Airport
          name={name}
          type={type}
          clearValues={props.clearValues}
          valueToSave={props.PortvalueToSave}
          arrivalAirportEnabledSave={props.arrivalAirportEnabledSave}            
        />
        <AirportGroup
          name={name}
          type={type}
          clearValues={props.clearValues}
          valueToSave={props.PortvalueToSave}
          arrivalAirportGroupEnabledSave={props.arrivalAirportGroupEnabledSave}
        />
        <City
          name={name}
          type={type}
          clearValues={props.clearValues}
          valueToSave={props.PortvalueToSave}
          arrivalCityEnabledSave={props.arrivalCityEnabledSave}
        />
        <CityGroup
          name={name}
          type={type}
          clearValues={props.clearValues}
          valueToSave={props.PortvalueToSave}
          arrivalCityGroupEnabledSave={props.arrivalCityGroupEnabledSave}
        />
        <Country
          name={name}
          type={type}
          clearValues={props.clearValues}
          valueToSave={props.PortvalueToSave}
          arrivalCountryEnabledSave={props.arrivalCountryEnabledSave}
        />
      </React.Fragment>
    );
  } else {
    return <div></div>;
  }
};

export default ArrivalPort;
