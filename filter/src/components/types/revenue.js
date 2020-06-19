import React, { useState, useEffect } from "react";
import { faTimes, faSortAmountDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Form } from "react-bootstrap";
import { REVENUE } from "../../constants/filtertypeconstants";

const Revenue = (props) => {
  const [labelName, setLabelName] = useState();
  const [condition, setCondition] = useState();
  const [enabled, setEnabled] = useState(true);
  const [textStatus, setTextStatus] = useState(false);
  useEffect(() => {
    if (props.name) {
      if(props.isReset === true){
      setLabelName("")
      setCondition("")
      }
      else if(props.name === REVENUE){
      setLabelName(props.name);
      setCondition(props.condition)
     
    } 
    }
  }, [props]);

  const closeRevenue = () => {
    setLabelName("");
  };

  const enableSwitchChange = (e) => {
    setEnabled(e.target.checked);
    if (!enabled) {
      setTextStatus(false);
    } else {
      setTextStatus(true);
    }
  };

  if (labelName === REVENUE) {
    return (
      <div className="filter__input">
        <div className="displayFlex">
          <div className="alignLeft">
            <Form.Label>
              <strong>{labelName}</strong>
            </Form.Label>
          </div>
          <div className="marginLeft">
            <Form.Check
              type="switch"
              id="revenue"
              label=""
              checked={enabled}
              onClick={(e) => {
                enableSwitchChange(e);
                props.revenueEnabledSave(e.target.checked);
              }}
            />
            <FontAwesomeIcon className="fontIcons" icon={faSortAmountDown} />
            <FontAwesomeIcon
              className="fontIcons"
              icon={faTimes}
              onClick={() => {
                closeRevenue();
                props.clearValue();
              }}
            />
          </div>
        </div>
        <div className="displayFlex">
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Text className="text-muted">Condition</Form.Text>
            <Form.Control
              disabled={textStatus}
              as="select"
              onChange={(e) => {
                props.revenueConditionSave(e);
              }}
            >
              {condition.map((condition, index) => {
                return <option>{condition.value}</option>;
              })}
            </Form.Control>
          </Form.Group>
        </div>
        <div className="displayFlex">
          <Form.Group>
            <Form.Text className="text-muted">Amount</Form.Text>
            <Form.Control
              disabled={textStatus}
              required
              type="text"
              placeholder="Amount"
              defaultValue=""
              onChange={(e) => { props.revenueAmountSave(e,labelName,enabled) }}
            />
          </Form.Group>
        </div>
      </div>
    );
  } else return <div></div>;
};

export default Revenue;
