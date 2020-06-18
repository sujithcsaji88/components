import React, { useState, useEffect } from "react";
import { DEPARTURE_PORT } from "../../constants/filtertypeconstants";
import Airport from "./PortTypes/airport";
import AirportGroup from "./PortTypes/airportGroup";
import City from "./PortTypes/city";
import CityGroup from "./PortTypes/cityGroup";
import Country from "./PortTypes/country";

const DeparturePort = (props) => {
  const [name, setName] = useState(props.name);
  const [type, setType] = useState();

  useEffect(() => {
    if (props.name === DEPARTURE_PORT) {
      setName(props.name);
      setType(props.type);
    }
  }, [props]);

  if (name === DEPARTURE_PORT) {
    return (
      <React.Fragment>
        <Airport
          name={name}
          type={type}
          clearValues={props.clearValues}
          valueToSave={props.PortvalueToSave}
        />
        <AirportGroup
          name={name}
          type={type}
          clearValues={props.clearValues}
          valueToSave={props.PortvalueToSave}
        />
        <City
          name={name}
          type={type}
          clearValues={props.clearValues}
          valueToSave={props.PortvalueToSave}
        />
        <CityGroup
          name={name}
          type={type}
          clearValues={props.clearValues}
          valueToSave={props.PortvalueToSave}
        />
        <Country
          name={name}
          type={type}
          clearValues={props.clearValues}
          valueToSave={props.PortvalueToSave}
        />
      </React.Fragment>
    );
  } else {
    return <div></div>;
  }
};

export default DeparturePort;
