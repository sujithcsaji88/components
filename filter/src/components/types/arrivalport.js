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
    if (props.name) {
      if (props.isReset === true) {
        setName("");
        setType("");
      } else if (props.name === ARRIVAL_PORT) {
        setName(props.name);
        setType(props.type);
      }
      //condition necessary for showing filter resutls in right Drawer
      else if (props.filterInfoToShow !== undefined && 
          props.filterInfoToShow.some(item => (item.column === "Arrival Port"))) {
        setName("Arrival Port");
        setType("Airport")
    }
    }
  }, [props]);

  if (name === ARRIVAL_PORT) {
    var airportToDisplay = "", airportGroupToDisplay = "",
      cityToDisplay = "", cityGroupToDisplay = "", countryToDisplay = "";
    if (props.filterInfoToShow !== undefined) {
      props.filterInfoToShow.map(item => {
        if (item.column === "Arrival Port" && 
          item.types !== undefined && Array.isArray(item.types)) {
          item.types.map(subItem => {
            if (subItem.column === "Airport") {
              airportToDisplay = subItem.value;
            }
            else if (subItem.column === "Airport Group") {
              airportGroupToDisplay = subItem.value;
            }
            else if (subItem.column === "City") {
              cityToDisplay = subItem.value;
            }
            else if (subItem.column === "City Group") {
              cityGroupToDisplay = subItem.value;
            }
            else if (subItem.column === "Country") {
              countryToDisplay = subItem.value;
            }
          })
        }
      })
    }
    return (
      <React.Fragment>
        <Airport
          name={name}
          type={type}
          clearValues={(resetStateVariableMap)=>props.clearValues(resetStateVariableMap)}
          valueToSave={props.PortvalueToSave}
          arrivalAirportEnabledSave={props.arrivalAirportEnabledSave}
          isReset={props.isReset}
          airportToDisplay={airportToDisplay}
        />
        <AirportGroup
          name={name}
          type={type}
          clearValues={props.clearValues}
          valueToSave={props.PortvalueToSave}
          arrivalAirportGroupEnabledSave={props.arrivalAirportGroupEnabledSave}
          isReset={props.isReset}
          airportGroupToDisplay={airportGroupToDisplay}
        />
        <City
          name={name}
          type={type}
          clearValues={props.clearValues}
          valueToSave={props.PortvalueToSave}
          arrivalCityEnabledSave={props.arrivalCityEnabledSave}
          isReset={props.isReset}
          cityToDisplay={cityToDisplay}
        />
        <CityGroup
          name={name}
          type={type}
          clearValues={props.clearValues}
          valueToSave={props.PortvalueToSave}
          arrivalCityGroupEnabledSave={props.arrivalCityGroupEnabledSave}
          isReset={props.isReset}
          cityGroupToDisplay={cityGroupToDisplay}
        />
        <Country
          name={name}
          type={type}
          clearValues={props.clearValues}
          valueToSave={props.PortvalueToSave}
          arrivalCountryEnabledSave={props.arrivalCountryEnabledSave}
          isReset={props.isReset}
          countryToDisplay={countryToDisplay}
        />
      </React.Fragment>
    );
  } else {
    return <div></div>;
  }
};

export default ArrivalPort;
