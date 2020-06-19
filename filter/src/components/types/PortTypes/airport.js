import React, { useState, useEffect } from "react";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Form } from "react-bootstrap";

export default function Airport(props){
    const [labelName, setLabelName] = useState();
    const [labelType, setLabelType] = useState();
    const [enabled, setEnabled] = useState();
    const [textStatus, setTextStatus] = useState(false)

    useEffect(() => {
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
    if(labelType==='Airport'){
    return(
      <div>
      <div className="displayFlex">
        <div className="alignLeft">
          <p>{labelName}</p>
          <span>&nbsp;&gt;&nbsp;</span>
          <p>{labelType}</p>
        </div>
        <div className="marginLeft">
        <Form.Check type="switch" id="date" label="" checked={enabled} onClick={(e) => {
              enableSwitchChange(e); 
              props.DepartureAirportEnabledSave(e.target.checked);
            }} />
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
          onChange={(e)=>{props.valueToSave(e,labelName,labelType)}}
        ></input>
      </div>
    </div>
    )
  }
  else return <div></div>
  }
