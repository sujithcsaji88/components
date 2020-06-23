import React, { useState, useEffect } from "react";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Form } from "react-bootstrap";
import {
  DEPARTURE_PORT,
  ARRIVAL_PORT,
} from "../../../constants/filtertypeconstants";

export default function AirportGroup(props) {
  const [labelName, setLabelName] = useState();
  const [labelType, setLabelType] = useState();
  const [enabled, setEnabled] = useState(true);
  const [textStatus, setTextStatus] = useState(false);
  const [switchId, setSwitchId] = useState();

  useEffect(() => {
    if (props.name === DEPARTURE_PORT) {
      setSwitchId("departureAirportGroup");
    } else if (props.name === ARRIVAL_PORT) {
      setSwitchId("arrivalAirportGroup");
    }
    if (props.type === "Airport Group") {
      setLabelName(props.name);
      setLabelType(props.type);
    }
  }, [props]);

  const closeAirportGroup = () => {
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

  if (labelType === "Airport Group") {
    return (
      <div className="filter__input">
        <div className="displayFlex">
          <div className="alignLeft">
            <p>{labelName}</p>
            <span>&nbsp;&gt;&nbsp;</span>
            <p>{labelType}</p>
          </div>
          <div className="marginLeft">
            <Form.Check
              type="switch"
              id={switchId}
              label=""
              defaultChecked={enabled}
              onClick={(e) => {
                enableSwitchChange(e);
                if (labelName === DEPARTURE_PORT) {
                  props.departureAirportGroupEnabledSave(e.target.checked);
                } else if (labelName === ARRIVAL_PORT) {
                  props.arrivalAirportGroupEnabledSave(e.target.checked);
                }
              }}
            />
            <FontAwesomeIcon
              icon={faTimes}
              onClick={(e) => {
                closeAirportGroup();
                props.clearValues();
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
              props.valueToSave(e, labelName, labelType, enabled);
            }}
          ></input>
        </div>
      </div>
    );
  } else if (props.isReset === true) {
    return <div></div>;
  } else return <div></div>;
}
