import React, { useState, useEffect } from "react";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Form, FormControl } from "react-bootstrap";
import { DATE } from "../../constants/filtertypeconstants";
import moment from "moment";

const DateComponent = (props) => {
  const [labelName, setLabelName] = useState();
  const [field, setField] = useState();
  const [enabled, setEnabled] = useState(true);
  const [textStatus, setTextStatus] = useState(false);
  const [starts, setStart] = useState();
  const [ends, setEnd] = useState();

  useEffect(() => {
    if (props.name) {
      if (props.isReset === true) {
        setLabelName("");
        setField("");
      } else if (props.name === DATE) {
        setLabelName(props.name);
        setField(props.field);
      }
      if (props.filterInfoToShow !== undefined && props.filterInfoToShow.some(item => (item.column === "Date"))) {
        setLabelName("Date");
        props.filterInfoToShow.filter(item => item.column === "Date").map(item =>
          setField(item.field))
      }
    }
  }, [props]);

  const closeDate = () => {
    setLabelName("");
    setField("");
  };

  const enableSwitchChange = (e) => {
    setEnabled(e.target.checked);
    if (!enabled) {
      setTextStatus(false);
    } else {
      setTextStatus(true);
    }
  };

  if (labelName === DATE) {
    var toDateValue = "", fromDateValue = "";
    if (props.filterInfoToShow !== undefined) {
      props.filterInfoToShow.forEach(item => {
        if (item.column === "Date") {
          item.field.forEach(subItem => {
            if (subItem.column === "From Date & Time") {
              fromDateValue = subItem.value
              props.dateSave(fromDateValue, subItem.column, labelName, enabled);
            }
            if (subItem.column === "To Date & Time") {
              toDateValue = subItem.value
              props.dateSave(toDateValue, subItem.column, labelName, enabled);
            }
          })
        }
      })
    }
    return (
      <div className="filter__input">
        <div className="filter__input-title" key={1}>
          <div className="filter__label">
            <Form.Label>
              <strong>{labelName}</strong>
            </Form.Label>
          </div>
          <div className="filter__control">
            <Form.Check
              type="switch"
              id="date"
              label=""
              defaultChecked={enabled}
              onClick={(e) => {
                enableSwitchChange(e);
                props.dateEnabledSave(e.target.checked);
              }}
            />

            <FontAwesomeIcon
              className="fontIcons"
              icon={faTimes}
              onClick={() => {
                closeDate();
                props.clearValue();
              }}
            />
          </div>
        </div>
        {field.map((field, index) => { 
           return (
            <div key={`${index}-${field.name}`}>
              <div className="displayFlex" key={`${index},${field.name}`}>
                <Form.Text>{field.name}</Form.Text>
              </div>
              <div className="filter__split" key={index}>
                <div className="date-wrap">
                  <Form.Control
                    disabled={textStatus}
                    required
                    type="date"
                    defaultValue={field.name === "From Date & Time" || field.column === "From Date & Time" ? fromDateValue : toDateValue}
                    className="date"
                    onChange={(e) => {
                      props.dateSave(e.target.value, field.column, labelName, enabled);
                    }}
                  />
                  {/* <span className="date-button">
                    <button type="button"></button>
                  </span> */}
                </div>
                <div className="time-wrap">
                  <input className="time" type="time" />
                </div>
              </div>
            </div>
           ); 
         })} 
      </div>
    );
  } else if (props.isReset === true) {
    return <div></div>;
  } else {
    return <div></div>;
  }
};

export default DateComponent;
