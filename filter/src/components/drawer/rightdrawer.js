import React, { useState } from "react";
import { Button} from "react-bootstrap";
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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSave } from "@fortawesome/free-solid-svg-icons";

const RightDrawer = (props) => {
  const saveFilters = () => {
    console.log("hooi");
    const obj = {
      savedfilter: [
        {
          column: departurePortName,
          types: [
            {
              column: departureAirportName,
              value:departureAirport,
              enabled:departureAirportEnabled
            },
            {
              column: departureAirportGroupName,
              value:departureAirportGroup,
              enabled:departureAirportGroupEnabled
            },
            {
              column: departureCityName,
              value:departureCity,
              enabled:departureCityEnabled
            },
            {
              column: departureCityGroupName,
              value:departureCityGroup,
              enabled:departureCityGroupEnabled
            },
            {
              column: departureCountryName,
              value:departureCountry,
              enabled:departureCountryEnabled
            }
          ]
        },
        {
          column:arrivalPortName,
          types: [
            {
              column: arrivalAirportName,
              value:arrivalAirport,
              enabled:arrivalAirportEnabled
            },
            {
              column:arrivalAirportGroupName,
              value:arrivalAirportGroup,
              enabled:arrivalAirportGroupEnabled
            },
            {
              column:arrivalCityName,
              value:arrivalCity,
              enabled:arrivalCityEnabled
            },
            {
              column: arrivalCityGroupName,
              value:arrivalCityGroup,
              enabled:arrivalCityGroupEnabled
            },
            {
              column:arrivalCountryName,
              value:arrivalCountry,
              enabled:arrivalCountryEnabled
            }
          ]
        },
        {
          column: revenueName,
          enabled: revenueEnabled,
          condition: revenueCondition,
          value: revenueAmount,
        },
        {
          column: dateName,
          enabled: dateEnabled,
          field: [
            {
              column: fromDateTimeName,
              value:fromDateTime
            },
            {
              column: toDateTimeName,
              value:toDateTime
            }
          ]
        }
      ]
    }
    console.log(obj);

  }
  const [departurePortName,setDeparturePortName]=useState();
  const [departureAirportName, setDepartureAirportName] = useState();
  const [departureAirport, setDepartureAirport] = useState();
  const [departureAirportEnabled, setDepartureAirportEnabled] = useState();
  const [departureAirportGroupName, setDepartureAirportGroupName] = useState();
  const [departureAirportGroup, setDepartureAirportGroup] = useState();
  const [departureAirportGroupEnabled, setDepartureAirportGroupEnabled] = useState();
  const [departureCityName, setDepartureCityName] = useState();
  const [departureCity, setDepartureCity] = useState();
  const [departureCityEnabled, setDepartureCityEnabled] = useState();
  const [departureCityGroupName, setDepartureCityGroupName] = useState();
  const [departureCityGroup, setDepartureCityGroup] = useState();
  const [departureCityGroupEnabled, setDepartureCityGroupEnabled] = useState();
  const [departureCountryName, setDepartureCountryName] = useState();
  const [departureCountry, setDepartureCountry] = useState();
  const [departureCountryEnabled, setDepartureCountryEnabled] = useState();
  const [arrivalPortName,setArrivalPortName]=useState();
  const [arrivalAirportName, setArrivalAirportName] = useState();
  const [arrivalAirport, setArrivalAirport] = useState();
  const [arrivalAirportEnabled, setArrivalAirportEnabled] = useState();
  const [arrivalAirportGroupName, setArrivalAirportGroupName] = useState();
  const [arrivalAirportGroup, setArrivalAirportGroup] = useState();
  const [arrivalAirportGroupEnabled, setArrivalAirportGroupEnabled] = useState();
  const [arrivalCityName, setArrivalCityName] = useState();
  const [arrivalCity, setArrivalCity] = useState();
  const [arrivalCityEnabled, setArrivalCityEnabled] = useState();
  const [arrivalCityGroupName, setArrivalCityGroupName] = useState();
  const [arrivalCityGroup, setArrivalCityGroup] = useState();
  const [arrivalCityGroupEnabled, setArrivalCityGroupEnabled] = useState();
  const [arrivalCountryName, setArrivalCountryName] = useState();
  const [arrivalCountry, setArrivalCountry] = useState();
  const [arrivalCountryEnabled, setArrivalCountryEnabled] = useState();
  const [revenueName,setRevenueName]=useState();
  const [revenueCondition, setRevenueCondition] = useState();
  const [revenueAmount, setRevenueAmount] = useState();
  const [dateName,setDateName]=useState();
  const [fromDateTimeName,setFromDateTimeName]=useState();
  const [fromDateTime, setFromDateTime] = useState();
  const [toDateTimeName,setToDateTimeName]=useState();
  const [toDateTime, setToDateTime] = useState();
  const [dateEnabled, setDateEnabled] = useState();
  const [revenueEnabled, setRevenueEnabled] = useState();
  const PortvalueToSave = (e,name,type,enabled) => {
    if (name === DEPARTURE_PORT) {
      setDeparturePortName(name);
      if (type === AIRPORT) {
        setDepartureAirportName(type);
        setDepartureAirport(e.target.value);
        setDepartureAirportEnabled(enabled);
      } else if (type === AIRPORT_GROUP) {
        setDepartureAirportGroupName(type);
        setDepartureAirportGroup(e.target.value);
        setDepartureAirportGroupEnabled(enabled);
      } else if (type === CITY) {
        setDepartureCityName(type)
        setDepartureCity(e.target.value);
        setDepartureCityEnabled(enabled);
      } else if (type === CITY_GROUP) {
        setDepartureCityGroupName(type)
        setDepartureCityGroup(e.target.value);
        setDepartureCityGroupEnabled(enabled);
      } else if (type === COUNTRY) {
        setDepartureCountryName(type);
        setDepartureCountry(e.target.value);
        setDepartureCountryEnabled(enabled)
      }
    } else if (name === ARRIVAL_PORT) {
       setArrivalPortName(name)
      if (type === AIRPORT) {
        setArrivalAirportName(type);
        setArrivalAirport(e.target.value);
        setArrivalAirportEnabled(enabled);
      } else if (type === AIRPORT_GROUP) {
        setArrivalAirportGroupName(type);
        setArrivalAirportGroup(e.target.value);
        setArrivalAirportGroupEnabled(enabled);
      } else if (type === CITY) {
        setArrivalCityName(type);
        setArrivalCity(e.target.value);
        setArrivalCityEnabled(enabled);
      } else if (type === CITY_GROUP) {
        setArrivalCityGroupName(type);
        setArrivalCityGroup(e.target.value);
        setArrivalCityGroupEnabled(enabled);
      } else if (type === COUNTRY) {
        setArrivalCountryName(type);
        setArrivalCountry(e.target.value);
        setArrivalCountryEnabled(enabled);
      }
    }
  };
  const departureAirportEnabledSave = (enabled) => {
    setDepartureAirportEnabled(enabled);
    if (!departureAirportEnabled) {
      setDepartureAirport("");
    }
  }
  const departureAirportGroupEnabledSave = (enabled) => {
    setDepartureAirportGroupEnabled(enabled);
    if (!departureAirportGroupEnabled) {
      setDepartureAirportGroup("");
    }
  }
  const departureCityEnabledSave = (enabled) => {
    setDepartureAirportGroupEnabled(enabled);
    if (!departureCityEnabled) {
      setDepartureCity("");
    }
  }
  const departureCityGroupEnabledSave = (enabled) => {
    setDepartureAirportGroupEnabled(enabled);
    if (!departureCityGroupEnabled) {
      setDepartureCityGroup("");
    }
  }
  const departureCountryEnabledSave = (enabled) => {
    setDepartureCountryEnabled(enabled);
    if (!departureCountryEnabled) {
      setDepartureCountry("");
    }
  }
  const arrivalAirportEnabledSave=(enabled)=>{
    setArrivalAirportEnabled(enabled);
    if(!arrivalAirportEnabled){
      setArrivalAirportGroup('')
    }
  }
  const arrivalAirportGroupEnabledSave = (enabled) => {
    setArrivalAirportGroupEnabled(enabled);
    if (!arrivalAirportGroupEnabled) {
      setArrivalAirportGroup("");
    }
  }
  const arrivalCityEnabledSave = (enabled) => {
    setArrivalAirportGroupEnabled(enabled);
    if (!arrivalCityEnabled) {
      setArrivalCity("");
    }
  }
  const arrivalCityGroupEnabledSave = (enabled) => {
    setArrivalAirportGroupEnabled(enabled);
    if (!arrivalCityGroupEnabled) {
      setArrivalCityGroup("");
    }
  }
  const arrivalCountryEnabledSave = (enabled) => {
    setArrivalCountryEnabled(enabled);
    if (!arrivalCountryEnabled) {
      setArrivalCountry("");
    }
  }

  const revenueConditionSave = (e) => {
      setRevenueCondition(e.target.value);
  }
  const revenueAmountSave = (e,name,enabled) => {
      setRevenueEnabled(enabled);
      setRevenueName(name);
      setRevenueAmount(e.target.value);
  }
  const dateSave = (e, name,labelName,enabled) => {
    setDateEnabled(enabled)
    setDateName(labelName);
      if (name === FROM_DATE) {
        setFromDateTimeName(name)
        setFromDateTime(e.target.value);

      } else if (name === TO_DATE) {
        setToDateTimeName(name);
        setToDateTime(e.target.value);
      }
  }
  const dateEnabledSave=(enabled)=>{
    setDateEnabled(enabled);
    if (dateEnabled===false) {
      setFromDateTime("");
      setToDateTime("");
    }
  };
  const revenueEnabledSave = (enabled) => {
    setRevenueEnabled(enabled);
    if (revenueEnabled===false) {
      setRevenueCondition("");
      setRevenueAmount("");
    }
  };
  return (
    <React.Fragment>
      <div className="rightDrawer">
        <div>Searched Filters</div>
        <DeparturePort
          name={props.name}
          type={props.type}
          clearValues={props.clearValues}
          PortvalueToSave={PortvalueToSave}
          enabled={props.enabled}
          departureAirportEnabledSave={departureAirportEnabledSave}
          departureAirportGroupEnabledSave={departureAirportGroupEnabledSave}
          departureCityEnabledSave={departureCityEnabledSave}
          departureCityGroupEnabledSave={departureCityGroupEnabledSave}
          departureCountryEnabledSave={departureCountryEnabledSave}
        />
        <ArrivalPort
          name={props.name}
          type={props.type}
          enabled={props.enabled}
          clearValues={props.clearValues}
          PortvalueToSave={PortvalueToSave}
          arrivalAirportEnabledSave={arrivalAirportEnabledSave}
          arrivalAirportGroupEnabledSave={arrivalAirportGroupEnabledSave}
          arrivalCityEnabledSave={arrivalCityEnabledSave}
          arrivalCityGroupEnabledSave={arrivalCityGroupEnabledSave}
          arrivalCountryEnabledSave={arrivalCountryEnabledSave}
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
      <div className="rdisplayFlex">
        <div className="ralignLeft">
          <Button variant="">
            <FontAwesomeIcon icon={faSave} onClick={saveFilters}></FontAwesomeIcon>
          </Button>
        </div>
        <div className="rmarginLeft">
          <Button variant="" className="reset">
            Reset
          </Button>
          <Button variant="" className="applyFilter">
            Apply Filter
          </Button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default RightDrawer;
