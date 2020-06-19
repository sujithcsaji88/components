import React, { useState, useEffect } from "react";
import { ARRIVAL_PORT } from "../../constants/filtertypeconstants";
import Airport from "./porttypes/airport";
import AirportGroup from "./porttypes/airportGroup";
import City from "./porttypes/city";
import CityGroup from "./porttypes/cityGroup";
import Country from "./porttypes/country";

const ArrivalPort = (props) => {
  const [name, setName] = useState();
  const [type, setType] = useState();

  useEffect(() => {
    if (props.name === ARRIVAL_PORT) {
      setName(props.name);
      setType(props.type);
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
