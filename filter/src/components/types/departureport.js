import React, { useState, useEffect } from "react";
import { DEPARTURE_PORT } from "../../constants/filtertypeconstants";
import Airport from "./porttypes/airport";
import AirportGroup from "./porttypes/airportGroup";
import City from "./porttypes/city";
import CityGroup from "./porttypes/cityGroup";
import Country from "./porttypes/country";
let airportToDisplay = "", airportGroupToDisplay = "",
  cityToDisplay = "", cityGroupToDisplay = "", countryToDisplay = "";
const DeparturePort = (props) => {
  const [name, setName] = useState();
  const [type, setType] = useState();
  const [enabled, setEnabled] = useState();
  useEffect(() => {
    if (props.name) {
      if (props.isReset === true) {
        setName("");
        setType("");
      } else if (props.name === DEPARTURE_PORT) {
        setName(props.name);
        setType(props.type);
        setEnabled(props.enabled)
      }
    }
  }, [props.name, props.type, props.enabled, props.isReset]);
  const closeAirport = () => {
    setType('');
  }

  useEffect(
    () => {
      if (props.filterInfoToShow !== undefined) {
        props.filterInfoToShow.filter((item) => item.column === "Departure Port" &&
          item.types !== undefined && Array.isArray(item.types)).map(item => (
            item.types.map(subItem =>
              subItem.column === "Airport" ? airportToDisplay = subItem.value :
                subItem.column === "Airport Group" ? airportGroupToDisplay = subItem.value :
                  subItem.column === "City" ? cityToDisplay = subItem.value :
                    subItem.column === "City Group" ? cityGroupToDisplay = subItem.value :
                      subItem.column === "Country" ? countryToDisplay = subItem.value : ""
            )
          ));
        props.filterInfoToShow.forEach(item => {
          if (item.column === DEPARTURE_PORT && item.types !== undefined) {
            item.types.forEach(type => {
              setName(item.column)
              setType(type.column)
              setEnabled(true)
              props.PortvalueToSave(type.value, item.column, type.column, true)
            })
          }
        })


      }
    }
    , []);

  if (name === DEPARTURE_PORT) {
    return (
      <React.Fragment>
        <Airport
          name={name}
          type={type}
          enabled={enabled}
          clearValues={props.clearValues}
          valueToSave={props.PortvalueToSave}
          airportToDisplay={airportToDisplay}
          departureAirportEnabledSave={props.departureAirportEnabledSave}
          isReset={props.isReset}
          clearAirport={props.clearDepartureAirport}
          closeAirport={closeAirport}
        />
        <AirportGroup
          name={name}
          type={type}
          enabled={enabled}
          clearValues={props.clearValues}
          valueToSave={props.PortvalueToSave}
          airportGroupToDisplay={airportGroupToDisplay}
          departureAirportGroupEnabledSave={
            props.departureAirportGroupEnabledSave
          }
          isReset={props.isReset}
          closeAirport={closeAirport}
        />
        <City
          name={name}
          type={type}
          clearValues={props.clearValues}
          valueToSave={props.PortvalueToSave}
          cityToDisplay={cityToDisplay}
          departureCityEnabledSave={props.departureCityEnabledSave}
          isReset={props.isReset}
          closeAirport={closeAirport}
        />
        <CityGroup
          name={name}
          type={type}
          clearValues={props.clearValues}
          valueToSave={props.PortvalueToSave}
          cityGroupToDisplay={cityGroupToDisplay}
          departureCityGroupEnabledSave={props.departureCityGroupEnabledSave}
          isReset={props.isReset}
          closeAirport={closeAirport}
        />
        <Country
          name={name}
          type={type}
          clearValues={props.clearValues}
          valueToSave={props.PortvalueToSave}
          countryToDisplay={countryToDisplay}
          departureCountryEnabledSave={props.departureCountryEnabledSave}
          isReset={props.isReset}
          closeAirport={closeAirport}
        />
      </React.Fragment>
    );
  } else {
    return <div></div>;
  }
};

export default DeparturePort;
