import React, { useState, useEffect } from "react";
import { faTimes} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Form } from "react-bootstrap";
import { DATE } from "../../constants/filtertypeconstants";

const Date = (props) => {
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
                  defaultValue=""
                  className="date"
                  onChange={(e) => {
                    props.dateSave(e, field.name, labelName, enabled);
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
      </div>
    );
  } else if (props.isReset === true) {
    return <div></div>;
  } else {
    return <div></div>;
  }
};

export default Date;
