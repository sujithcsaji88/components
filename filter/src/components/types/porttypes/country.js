import React, { useEffect, useState } from "react";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Form } from "react-bootstrap";
import {
  DEPARTURE_PORT,
  ARRIVAL_PORT,
} from "../../../constants/filtertypeconstants";

export default function Country(props) {
  const [labelName, setLabelName] = useState();
  const [labelType, setLabelType] = useState();
  const [enabled, setEnabled] = useState(true);
  const [textStatus, setTextStatus] = useState(false);
  const [switchId, setSwitchId] = useState();
  const [allowEdit, setAllowEdit] = useState(true); 

  useEffect(() => {
    if (props.name === DEPARTURE_PORT) {
      setSwitchId("departureCountry");
    } else if (props.name === ARRIVAL_PORT) {
      setSwitchId("ArrivalCountry");
    }
    if (props.type === "Country") {
      setLabelName(props.name);
      setLabelType(props.type);
    }
    else if(props.countryToDisplay!==""){
      setLabelName(props.name === "Departure Port" ? "Departure Port": "Arrival Port");
      setLabelType("Country");
    }
  }, [props]);

  const closeCountry = () => {
    setLabelName("");
    setLabelType("");
  };
  const enableSwitchChange = (e) => {
    setEnabled(e.target.checked);
    if (!enabled) {
      setTextStatus(false);
    } else {
      setTextStatus(true);
    }
  };
  if (labelType === "Country") {
    return (
      <div className="filter__input">
        <div className="filter__input-title">
          <div className="filter__label">
            <span>{labelName}</span>
            <span>&nbsp;&gt;&nbsp;</span>
            <span>{labelType}</span>
          </div>
          <div className="filter__control">
            <Form.Check
              type="switch"
              id={switchId}
              label=""
              defaultChecked={enabled}
              onClick={(e) => {
                enableSwitchChange(e);
                if (labelName === DEPARTURE_PORT) {
                  props.departureCountryEnabledSave(e.target.checked);
                } else if (labelName === ARRIVAL_PORT) {
                  props.arrivalCountryEnabledSave(e.target.checked);
                }
              }}
            />
            <FontAwesomeIcon
              icon={faTimes}
              type="button"
              onClick={(e) => {
                closeCountry();
                props.clearValues({name:props.name, type:"Country"});
              }}
            />
          </div>
        </div>
        <div className="displayFlex">
          <input
            disabled={textStatus}
            type="text"
            className="form-control"
            onChange={(e) => {
              setAllowEdit(false);
              props.valueToSave(e, labelName, labelType, enabled);
            }}
            defaultValue= { allowEdit && props.countryToDisplay !== "" ? 
            props.countryToDisplay : null}
          ></input>
        </div>
      </div>
    );
  } else if (props.isReset === true) {
    return <div></div>;
  } else return <div></div>;
}
