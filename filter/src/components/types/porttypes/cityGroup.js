import React, { useEffect, useState } from "react";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Form } from "react-bootstrap";
import {
  DEPARTURE_PORT,
  ARRIVAL_PORT,
} from "../../../constants/filtertypeconstants";

export default function CityGroup(props) {
  const [labelName, setLabelName] = useState();
  const [labelType, setLabelType] = useState();
  const [enabled, setEnabled] = useState(true);
  const [textStatus, setTextStatus] = useState(false);
  const [switchId, setSwitchId] = useState();
  const [allowEdit, setAllowEdit] = useState(true); 

  useEffect(() => {
    if (props.name === DEPARTURE_PORT) {
      setSwitchId("departureCityGroup");
    } else if (props.name === ARRIVAL_PORT) {
      setSwitchId("arrivalCityGroup");
    }
    if (props.type === "City Group") {
      setLabelName(props.name);
      setLabelType(props.type);
    }
    else if(props.cityGroupToDisplay!==""){
      setLabelName(props.name === "Departure Port" ? "Departure Port": "Arrival Port");
      setLabelType("City Group");
    }
  }, [props]);

  const closeCityGroup = () => {
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
  if (labelType === "City Group") {
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
                  props.departureCityGroupEnabledSave(e.target.checked);
                } else if (labelName === ARRIVAL_PORT) {
                  props.arrivalCityGroupEnabledSave(e.target.checked);
                }
              }}
            />
            <FontAwesomeIcon
              icon={faTimes}
              type="button"
              onClick={(e) => {
                closeCityGroup();
                props.clearValues({name:props.name, type:"City Group"});
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
            value= { allowEdit && props.cityGroupToDisplay !=="" ? 
            props.cityGroupToDisplay : null}
          ></input>
        </div>
      </div>
    );
  } else if (props.isReset === true) {
    return <div></div>;
  } else return <div></div>;
}
