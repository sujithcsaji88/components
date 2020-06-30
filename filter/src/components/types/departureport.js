import React, { useState, useEffect } from "react";
import { DEPARTURE_PORT } from "../../constants/filtertypeconstants";
import Airport from "./porttypes/airport";
import AirportGroup from "./porttypes/airportGroup";
import City from "./porttypes/city";
import CityGroup from "./porttypes/cityGroup";
import Country from "./porttypes/country";

const DeparturePort = (props) => {
  const [name, setName] = useState(props.name);
  const [type, setType] = useState();

  useEffect(() => {
    if (props.name) {
      if (props.isReset === true) {
        setName("");
        setType("");
      } else if (props.name === DEPARTURE_PORT) {
        setName(props.name);
        setType(props.type);
      }
      //condition necessary for showing filter resutls in right Drawer
      else if (props.filterInfoToShow !== undefined &&
        props.filterInfoToShow.some(item => (item.column === "Departure Port"))) {
        setName("Departure Port");
        setType("Airport")
      }
    }
  }, [props]);

  if (name === DEPARTURE_PORT) {
    var airportToDisplay = "", airportGroupToDisplay = "",
      cityToDisplay = "", cityGroupToDisplay = "", countryToDisplay = "";
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
      props.filterInfoToShow.map((item)=>{
        if(item.column===DEPARTURE_PORT && item.types!== undefined){
          item.types.map((type,index)=>{
            props.PortvalueToSave(type.value,item.column,type.column,type.enabled)
            console.log(type.value,item.column,type.column,type.enabled)
          })
        }
      })
    }
    return (
      <React.Fragment>
        <Airport
          name={name}
          type={type}
          clearValues={props.clearValues}
          valueToSave={props.PortvalueToSave}
          airportToDisplay={airportToDisplay}
          departureAirportEnabledSave={props.departureAirportEnabledSave}
          isReset={props.isReset}
        />
        <AirportGroup
          name={name}
          type={type}
          clearValues={props.clearValues}
          valueToSave={props.PortvalueToSave}
          airportGroupToDisplay={airportGroupToDisplay}
          departureAirportGroupEnabledSave={
            props.departureAirportGroupEnabledSave
          }
          isReset={props.isReset}
        />
        <City
          name={name}
          type={type}
          clearValues={props.clearValues}
          valueToSave={props.PortvalueToSave}
          cityToDisplay={cityToDisplay}
          departureCityEnabledSave={props.departureCityEnabledSave}
          isReset={props.isReset}
        />
        <CityGroup
          name={name}
          type={type}
          clearValues={props.clearValues}
          valueToSave={props.PortvalueToSave}
          cityGroupToDisplay={cityGroupToDisplay}
          departureCityGroupEnabledSave={props.departureCityGroupEnabledSave}
          isReset={props.isReset}
        />
        <Country
          name={name}
          type={type}
          clearValues={props.clearValues}
          valueToSave={props.PortvalueToSave}
          countryToDisplay={countryToDisplay}
          departureCountryEnabledSave={props.departureCountryEnabledSave}
          isReset={props.isReset}
        />
      </React.Fragment>
    );
  } else {
    return <div></div>;
  }
};

export default DeparturePort;
