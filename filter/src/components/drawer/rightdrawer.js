import React, { useState } from "react";
import { Button,Card} from "react-bootstrap";
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
  const [showSavePopup,setShowSavePopup]=useState("none");
  const [saveFilterName,setSaveFilterName]=useState("")
  // const saveFilters = () => {
  //   const obj = {
  //     savedfilter: [
  //       {
  //         column: departurePortName,
  //         types: [
  //           {
  //             column: departureAirportName,
  //             value:departureAirport,
  //             enabled:departureAirportEnabled
  //           },
  //           {
  //             column: departureAirportGroupName,
  //             value:departureAirportGroup,
  //             enabled:departureAirportGroupEnabled
  //           },
  //           {
  //             column: departureCityName,
  //             value:departureCity,
  //             enabled:departureCityEnabled
  //           },
  //           {
  //             column: departureCityGroupName,
  //             value:departureCityGroup,
  //             enabled:departureCityGroupEnabled
  //           },
  //           {
  //             column: departureCountryName,
  //             value:departureCountry,
  //             enabled:departureCountryEnabled
  //           }
  //         ]
  //       },
  //       {
  //         column:arrivalPortName,
  //         types: [
  //           {
  //             column: arrivalAirportName,
  //             value:arrivalAirport,
  //             enabled:arrivalAirportEnabled
  //           },
  //           {
  //             column:arrivalAirportGroupName,
  //             value:arrivalAirportGroup,
  //             enabled:arrivalAirportGroupEnabled
  //           },
  //           {
  //             column:arrivalCityName,
  //             value:arrivalCity,
  //             enabled:arrivalCityEnabled
  //           },
  //           {
  //             column: arrivalCityGroupName,
  //             value:arrivalCityGroup,
  //             enabled:arrivalCityGroupEnabled
  //           },
  //           {
  //             column:arrivalCountryName,
  //             value:arrivalCountry,
  //             enabled:arrivalCountryEnabled
  //           }
  //         ]
  //       },
  //       {
  //         column: revenueName,
  //         enabled: revenueEnabled,
  //         condition: revenueCondition,
  //         value: revenueAmount,
  //       },
  //       {
  //         column: dateName,
  //         enabled: dateEnabled,
  //         field: [
  //           {
  //             column: fromDateTimeName,
  //             value:fromDateTime
  //           },
  //           {
  //             column: toDateTimeName,
  //             value:toDateTime
  //           }
  //         ]
  //       }
  //     ]
  //   }
  //   console.log(obj);

  // }
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
  const [dateEnabled, setDateEnabled] = useState(true);
  const [revenueEnabled, setRevenueEnabled] = useState(true);

  if(props.isReset === true){
    // //resetting all the values on RESET to undefined to remove old data
    // setDepartureAirport(undefined); setDepartureAirportGroup(undefined); setDepartureCity(undefined);
    // setDepartureCityGroup(undefined); setDepartureCountry(undefined);
    // setArrivalAirport(undefined); setArrivalAirportGroup(undefined); setArrivalCity(undefined)
    // setArrivalCityGroup(undefined); setArrivalCountry(undefined);
    // setRevenueCondition(undefined);setRevenueAmount(undefined);
    // setFromDateTime(undefined); setToDateTime(undefined);
    // //making isReset=False to prevent infinite rendering 
    // props.setIsResetFalse();
  }

  const PortvalueToSave = (e, name, type,enabled) => {
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
    setDepartureCityEnabled(enabled);
    if (!departureCityEnabled) {
      setDepartureCity("");
    }
  }
  const departureCityGroupEnabledSave = (enabled) => {
    setDepartureCityGroupEnabled(enabled);
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
    setArrivalCityEnabled(enabled);
    if (!arrivalCityEnabled) {
      setArrivalCity("");
    }
  }
  const arrivalCityGroupEnabledSave = (enabled) => {
    setArrivalCityGroupEnabled(enabled);
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


  const saveApplyFilterMap = () => {
    setShowSavePopup("none")
    let filter = [], typeArrival = [], typeDeparture = [], fieldList=[], obj = {};

      if(fromDateTime !== undefined)
        fieldList.push({"column":fromDateTimeName , "value": fromDateTime,"enabled":dateEnabled});
      
      if(toDateTime !== undefined)
        fieldList.push({"column":toDateTimeName, "value": toDateTime,"enabled":dateEnabled});

    let departureEntitiesNameList = [
      { column: departureAirportName, value: departureAirport,enabled:departureAirportEnabled },
      { column: departureAirportGroupName, value: departureAirportGroup,enabled:departureAirportGroupEnabled },
      { column: departureCityName, value: departureCity ,enabled:departureCityEnabled},
      { column: departureCityGroupName, value: departureCityGroup,enabled:departureCityGroupEnabled },
      { column: departureCountryName, value: departureCountry,enabled:departureCountryEnabled }
    ];

    var arrivalEntitiesNameList = [
      { column:arrivalAirportName, value: arrivalAirport,enabled:arrivalAirportEnabled },
      { column:arrivalAirportGroupName, value: arrivalAirportGroup,enabled:arrivalAirportGroupEnabled },
      { column:arrivalCityName, value: arrivalCity,enabled:arrivalCityEnabled },
      { column:arrivalCityGroupName, value: arrivalCityGroup,enabled:arrivalCityGroupEnabled },
      { column:arrivalCountryName, value: arrivalCountry,enabled:arrivalCountryEnabled }
    ];

    departureEntitiesNameList.map(item => {
      if( constructPortListEntities(`${item.column}`, `${item.value}`,`${item.enabled}`) !== undefined)
        typeDeparture.push(
          constructPortListEntities(`${item.column}`, `${item.value}`,`${item.enabled}`));
    });

    arrivalEntitiesNameList.map(item => {
      if( constructPortListEntities(`${item.column}`, `${item.value}`,`${item.enabled}`) !== undefined)
        typeArrival.push(
          constructPortListEntities(`${item.column}`, `${item.value}`,`${item.enabled}`));
    })

    if(typeDeparture.length>0 && (departurePortName!==undefined)){
      obj["column"] = departurePortName;
      obj["types"] = typeDeparture;
      filter.push(obj);
    }

    obj = {}; //nullifying obj for reuse

    if(typeArrival.length>0 && (arrivalPortName!==undefined)){
      obj["column"] = arrivalPortName;
      obj["types"] = typeArrival;
      filter.push(obj);
    }

    obj = {}; //nullifying obj for reuse

    if(fieldList.length>0){
      obj["column"] = dateName;
      obj["field"] = fieldList;
      filter.push(obj);
    }
    
    obj = {}; //nullifying obj for reuse

    if(revenueCondition!==undefined){
      obj["column"] = revenueName;
      obj["condition"] = revenueCondition;
      obj["value"]=revenueAmount != undefined ? revenueAmount : 0;
      obj["enabled"]=revenueEnabled;
      filter.push(obj);
    }
    obj = {}; //nullifying obj for reuse

    obj["filter"] = filter
    console.log(saveFilterName, obj)
  }
  const constructPortListEntities = (mapColumnValue, mapValue,enabled) => {
    let obj = {}, key = "";
    //dont use === in comparison; Intentionally did !=
    if(mapValue !== "undefined" && enabled !== false){
      if (mapColumnValue.includes("Airport Group")) {
        key = "Airport Group";
      }
      else if (mapColumnValue.includes("City Group")) {
        key = "City Group";
      }
      else if (mapColumnValue.includes("Airport")) {
        key = "Airport"
      }
      else if (mapColumnValue.includes("City")) {
        key = "City"
      }
      else if (mapColumnValue.includes("Country")) {
        key = "Country"
      }
      obj["column"] = key;
      obj["value"] = mapValue;
      obj["enabled"]=enabled;
    }
    return obj;
  }

  // const collectFilterAttributesToMap = () => {
  //   var filter = [], typeArrival = [], typeDeparture = [], fieldList=[], obj = {};

  //     if(fromDateTime !== undefined)
  //       fieldList.push({"column": "From Date & Time", "value": fromDateTime});
      
  //     if(toDateTime !== undefined)
  //       fieldList.push({"column": "To Date & Time", "value": toDateTime});

  //   var departureEntitiesNameList = [
  //     { entityName: "departureAirport", entityValue: departureAirport },
  //     { entityName: "departureAirportGroup", entityValue: departureAirportGroup },
  //     { entityName: "departureCity", entityValue: departureCity },
  //     { entityName: "departureCityGroup", entityValue: departureCityGroup },
  //     { entityName: "departureCountry", entityValue: departureCountry }
  //   ];

  //   var arrivalEntitiesNameList = [
  //     { entityName: "arrivalAirport", entityValue: arrivalAirport },
  //     { entityName: "arrivalAirportGroup", entityValue: arrivalAirportGroup },
  //     { entityName: "arrivalCity", entityValue: arrivalCity },
  //     { entityName: "arrivalCityGroup", entityValue: arrivalCityGroup },
  //     { entityName: "arrivalCountry", entityValue: arrivalCountry }
  //   ];

  //   departureEntitiesNameList.map(item => {
  //     if( constructAirportListEntities(`${item.entityName}`, `${item.entityValue}`) !== undefined)
  //       typeDeparture.push(
  //         constructAirportListEntities(`${item.entityName}`, `${item.entityValue}`));
  //   });

  //   arrivalEntitiesNameList.map(item => {
  //     if( constructAirportListEntities(`${item.entityName}`, `${item.entityValue}`) !== undefined)
  //       typeArrival.push(
  //         constructAirportListEntities(`${item.entityName}`, `${item.entityValue}`));
  //   })

  //   if(typeDeparture.length>0){
  //     obj["column"] = "Departure Port"
  //     obj["types"] = typeDeparture;
  //     filter.push(obj);
  //   }

  //   obj = {}; //nullifying obj for reuse

  //   if(typeArrival.length>0){
  //     obj["column"] = "Arrival Port"
  //     obj["types"] = typeArrival;
  //     filter.push(obj);
  //   }

  //   obj = {}; //nullifying obj for reuse

  //   if(fieldList.length>0){
  //     obj["column"] = "Date"
  //     obj["field"] = fieldList;
  //     filter.push(obj);
  //   }
    
  //   obj = {}; //nullifying obj for reuse

  //   if(revenueCondition!==undefined){
  //     obj["column"] = "Revenue";
  //     obj["condition"] = revenueCondition;
  //     obj["value"]=revenueAmount != undefined ? revenueAmount : 0
  //     filter.push(obj);
  //   }
  //   obj = {}; //nullifying obj for reuse

  //   obj["filter"] = filter
  //   console.log("filterJson ", obj)
  // }

  // const constructAirportListEntities = (mapColumValue, mapEntityValue) => {
  //   var obj = {}, key = "";
  //   //dont use === in comparison; Intentionally did !=
  //   if(mapEntityValue !== "undefined"){
  //     if (mapColumValue.includes("AirportGroup")) {
  //       key = "Airport Group";
  //     }
  //     else if (mapColumValue.includes("CityGroup")) {
  //       key = "City Group";
  //     }
  //     else if (mapColumValue.includes("Airport")) {
  //       key = "Airport"
  //     }
  //     else if (mapColumValue.includes("City")) {
  //       key = "City"
  //     }
  //     else if (mapColumValue.includes("Country")) {
  //       key = "Country"
  //     }
  //     obj["column"] = key;
  //     obj["value"] = mapEntityValue
  //     return obj;
  //   }
  // }
  const registersaveFilterName=(e)=>{
  setSaveFilterName(e.target.value)
  }
  const showPopUp=()=>{

    setShowSavePopup("")
  }
  return (
    <React.Fragment>
      <div className="filter__title">Searched Filters</div>
      <div className="rightDrawer">
        <DeparturePort
          isReset={props.isReset}
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
          isReset={props.isReset}
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
          isReset={props.isReset}
          name={props.name}
          field={props.field}
          enabled={props.enabled}
          clearValue={props.clearValue}
          dateSave={dateSave}
          dateEnabledSave={dateEnabledSave}
        />
        <Revenue
          isReset={props.isReset}
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
            <FontAwesomeIcon icon={faSave} onClick={showPopUp} ></FontAwesomeIcon>
          </Button>
        </div>
        <div className="rmarginLeft">
          <Button variant="" className="reset" onClick={props.clearAllFilter}>
            Reset
          </Button>
          <Button variant="" className="applyFilter"
          onClick={() => saveApplyFilterMap()}
          >
            Apply Filter
          </Button>
        </div>
      </div>
      <Card style={{"display":showSavePopup}} className="showSavePopup">
        <h5>Save the Filter</h5>
        <label>filterName</label>
        <input value={saveFilterName} onChange={(e)=>registersaveFilterName(e)} />
        <button onClick={saveApplyFilterMap}>save</button>
      </Card>
    </React.Fragment>
  );
};

export default RightDrawer;
