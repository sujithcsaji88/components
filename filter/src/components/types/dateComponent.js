import React, { useState, useEffect } from "react";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Form } from "react-bootstrap";
import { DATE } from "../../constants/filtertypeconstants";

let fromDate, toDate;
let toDateValue = "", fromDateValue = "";
let dateFormat = require('dateformat');
const DateComponent = (props) => {
  const [labelName, setLabelName] = useState();
  const [field, setField] = useState();
  const [enabled, setEnabled] = useState(true);
  const [textStatus, setTextStatus] = useState(false);
  useEffect(() => {
    if (props.name) {
      if (props.isReset === true) {
        setLabelName("");
        setField("");
      } else if (props.name === DATE) {
        setLabelName(props.name);
        setField(props.field);
      }

    }
  }, [props.name, props.isReset, props.field]);

  useEffect(
    () => {
      if (props.filterInfoToShow !== undefined && props.filterInfoToShow.some(item => (item.column === "Date"))) {
        setLabelName("Date");
        props.filterInfoToShow.filter(item => item.column === "Date").map(item =>
          setField(item.field))
      }
    }
    , [props.filterInfoToShow]);
  useEffect(
    () => {
      if (props.filterInfoToShow !== undefined) {
        props.filterInfoToShow.forEach(item => {
          if (item.column === "Date") {
            item.field.forEach(subItem => {
              if (subItem.column === "From Date & Time") {
                fromDateValue = subItem.value;
                fromDate = subItem.value;
                props.dateSave(fromDateValue, subItem.column, labelName, enabled);
              }
              if (subItem.column === "To Date & Time") {
                toDateValue = subItem.value;
                toDate = subItem.value
                props.dateSave(toDateValue, subItem.column, labelName, enabled);
              }
            })
          }
        })
      }
    }
    , []);
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
  }
  const addThisMonth = () => {
    let today = new Date();
    fromDate = new Date(today.getFullYear(), today.getMonth(), 1);
    toDate = new Date(today.getFullYear(), today.getMonth() + 1, 0);
    fromDate = dateFormat(fromDate, "yyyy-mm-dd")
    toDate = dateFormat(toDate, "yyyy-mm-dd")
    props.dateSave(fromDate, "From Date & Time", "Date", true);
    props.dateSave(toDate, "To Date & Time", "Date", true);
    fromDateValue = fromDate;
    toDateValue = toDate;
  }
  const addForteeenDays = () => {
    fromDate = new Date();
    toDate = new Date();
    fromDate.setDate(fromDate.getDate() + 1)
    toDate.setDate(toDate.getDate() + 14)
    fromDate = dateFormat(fromDate, "yyyy-mm-dd")
    toDate = dateFormat(toDate, "yyyy-mm-dd")
    props.dateSave(fromDate, "From Date & Time", "Date", true);
    props.dateSave(toDate, "To Date & Time", "Date", true);
    fromDateValue = fromDate;
    toDateValue = toDate;
  }
  const addSevenDays = () => {
    fromDate = new Date();
    toDate = new Date();
    fromDate.setDate(fromDate.getDate() + 1)
    toDate.setDate(toDate.getDate() + 7)
    fromDate = dateFormat(fromDate, "yyyy-mm-dd")
    toDate = dateFormat(toDate, "yyyy-mm-dd")
    props.dateSave(fromDate, "From Date & Time", "Date", true);
    props.dateSave(toDate, "To Date & Time", "Date", true);
    fromDateValue = fromDate;
    toDateValue = toDate;
  }
  const addTomorrow = () => {
    fromDate = new Date();
    toDate = new Date();
    fromDate.setDate(fromDate.getDate() + 1)
    toDate.setDate(toDate.getDate() + 1)
    fromDate = dateFormat(fromDate, "yyyy-mm-dd")
    toDate = dateFormat(toDate, "yyyy-mm-dd")
    props.dateSave(fromDate, "From Date & Time", "Date", true);
    props.dateSave(toDate, "To Date & Time", "Date", true);
    fromDateValue = fromDate;
    toDateValue = toDate;
  }
  const addToday = () => {
    fromDate = new Date();
    toDate = new Date();
    fromDate = dateFormat(fromDate, "yyyy-mm-dd")
    toDate = dateFormat(toDate, "yyyy-mm-dd")
    props.dateSave(fromDate, "From Date & Time", "Date", true);
    props.dateSave(toDate, "To Date & Time", "Date", true);
    fromDateValue = fromDate;
    toDateValue = toDate;
  }
  const addThisWeek = () => {
    let today = new Date();
    let from = today.getDate() - today.getDay();
    let to = from + 6;
    fromDate = new Date(today.setDate(from)).toUTCString();
    toDate = new Date(today.setDate(to)).toUTCString();
    fromDate = dateFormat(fromDate, "yyyy-mm-dd")
    toDate = dateFormat(toDate, "yyyy-mm-dd")
    props.dateSave(fromDate, "From Date & Time", "Date", true);
    props.dateSave(toDate, "To Date & Time", "Date", true);
    fromDateValue = fromDate;
    toDateValue = toDate;
  }
  const addThirtyDays = () => {
    let from = new Date();
    let to = new Date();
    from.setDate(from.getDate() + 1);
    to.setDate(to.getDate() + 30);
    fromDate = dateFormat(from, "yyyy-mm-dd")
    toDate = dateFormat(to, "yyyy-mm-dd")
    props.dateSave(fromDate, "From Date & Time", "Date", true);
    props.dateSave(toDate, "To Date & Time", "Date", true);
    fromDateValue = fromDate;
    toDateValue = toDate;
  }
  const handleDateSave = (value, name) => {
    if (name === "From Date & Time") {
      fromDateValue = value;
    }
    else {
      toDateValue = value;
    }

  }
  const nextDayChange =(value)=>{
    fromDate = new Date();
    toDate = new Date();
    fromDate.setDate(fromDate.getDate() + 1);
    toDate.setDate(toDate.getDate() + parseInt(value));
    fromDate = dateFormat(fromDate, "yyyy-mm-dd")
    toDate = dateFormat(toDate, "yyyy-mm-dd")
    props.dateSave(fromDate, "From Date & Time", "Date", true);
    props.dateSave(toDate, "To Date & Time", "Date", true);
    fromDateValue = fromDate;
    toDateValue = toDate;
  }
  const lastDayChange=(value)=>{
    fromDate = new Date();
    toDate = new Date();
    fromDate.setDate(fromDate.getDate() - parseInt(value))
    toDate.setDate(toDate.getDate()-1)
    fromDate = dateFormat(fromDate, "yyyy-mm-dd")
    toDate = dateFormat(toDate, "yyyy-mm-dd")
    props.dateSave(fromDate, "From Date & Time", "Date", true);
    props.dateSave(toDate, "To Date & Time", "Date", true);
    fromDateValue = fromDate;
    toDateValue = toDate;
  }
  if (labelName === DATE) {
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
                    value={field.name === "From Date & Time" || field.column === "From Date & Time" ? fromDateValue : toDateValue}
                    className="date"
                    onChange={(e) => {
                      handleDateSave(e.target.value, field.column);
                      props.dateSave(e.target.value, field.column, labelName, enabled);
                    }}
                  />
                  <span className="date-button">
                    <button type="button"></button>
                  </span>
                </div>
                <div className="time-wrap">
                  <input className="time" type="time" />
                </div>
              </div>
            </div>
          );
        })}
        <button type="button" onClick={(e) => { addToday() }}>Today</button>
        <button type="button" onClick={(e) => { addTomorrow() }}>Tomorrow</button>
        <button type="button" onClick={(e) => { addThisWeek() }}>This Week</button>
        <button type="button" onClick={(e) => { addSevenDays() }}>Next 7 days</button>
        <button type="button" onClick={(e) => { addForteeenDays() }}>Next 14 days</button>
        <button type="button" onClick={(e) => { addThisMonth() }}>This Month</button>
        <button type="button" onClick={(e) => { addThirtyDays() }}>Next 30 days</button>
        <br/>
        Next <input type="text" onChange={(e)=>{nextDayChange(e.target.value);}} /> Days
        <br/>
        Last <input type="text" onChange={(e)=>{lastDayChange(e.target.value);}}/> Days
      </div>
    );
  } else if (props.isReset === true) {
    return <div></div>;
  } else {
    return <div></div>;
  }
};

export default DateComponent;
