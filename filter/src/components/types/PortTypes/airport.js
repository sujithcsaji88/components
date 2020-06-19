import React, { useState, useEffect } from "react";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Form } from "react-bootstrap";
import { DEPARTURE_PORT,ARRIVAL_PORT} from "../../../constants/filtertypeconstants";


export default function Airport(props){
    const [labelName, setLabelName] = useState();
    const [labelType, setLabelType] = useState();
    const [enabled, setEnabled] = useState(true);
    const [textStatus, setTextStatus] = useState(false)
    const [switchId,setSwitchId]=useState();

    useEffect(() => {
      if(props.name===DEPARTURE_PORT){
        setSwitchId("departureAirport")
      }
      else
      if(props.name===ARRIVAL_PORT){
        setSwitchId("arrivalAirport")
      }
      if (props.type === 'Airport') {
        setLabelName(props.name);
        setLabelType(props.type);
      }
    }, [props]);
  
    const enableSwitchChange = (e) => {
      setEnabled(e.target.checked);
      if (!enabled) {
        setTextStatus(false)
      }
      else {
        setTextStatus(true)
      }
    }
  const closeAirport = () => {
    setLabelName("");
    setLabelType("");
  };
  if (labelType === "Airport") {
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
              checked={enabled}
              onClick={(e) => {
                enableSwitchChange(e); 
                if(labelName===DEPARTURE_PORT){props.departureAirportEnabledSave(e.target.checked);}
                else if (labelName===ARRIVAL_PORT){props.arrivalAirportEnabledSave(e.target.checked);}
              }}
            />
            <FontAwesomeIcon
              icon={faTimes}
              onClick={() => {
                closeAirport();
                props.clearValues();
              }}
            />
          </div>
        </div>
      <div className="displayFlex">
        <input
          disabled={textStatus}
          type="text"
          placeholder="filter"
          className="form-control"
          onChange={(e)=>{props.valueToSave(e,labelName,labelType,enabled)}}
        ></input>
      </div>
    </div>
    )
  }
  else return <div></div>
  }
