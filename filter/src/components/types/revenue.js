import React, { useState, useEffect } from "react";
import { faTimes} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Form } from "react-bootstrap";
import { REVENUE } from "../../constants/filtertypeconstants";

const Revenue = (props) => {
  const [labelName, setLabelName] = useState();
  const [condition, setCondition] = useState();
  const [enabled, setEnabled] = useState(true);
  const [textStatus, setTextStatus] = useState(false);
  const [allowEdit, setAllowEdit] = useState(true); 

  useEffect(() => {
    if (props.name) {
      if (props.isReset === true) {
        setLabelName("");
        setCondition("");
      } else if (props.name === REVENUE) {
        setLabelName(props.name);
        setCondition(props.condition);
      }
      else if (props.filterInfoToShow!== undefined && 
        props.filterInfoToShow.some(item => (item.column === "Revenue"))) {
        setLabelName("Revenue");

        props.filterInfoToShow.filter(item => item.column === "Revenue").map(() =>
          setCondition(props.condition));


        //       props.filterInfoToShow.map(item=>{
        //         if(item.column === "Revenue"){
        //            setCondition(props.condition)
        // }
        //       })
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
    var amountValueOnEditFilter="", conditionValueOnEditFilter="";
    if(props.filterInfoToShow!==undefined){

      amountValueOnEditFilter = props.filterInfoToShow.filter(item =>
        item.column === "Revenue")[0].value;
      conditionValueOnEditFilter = props.filterInfoToShow.filter(item =>
        item.column === "Revenue")[0].condition;
    }
    
    return (
      <div className="filter__input">
        <div className="filter__input-title">
          <div className="filter__label">
            <Form.Label>
              <strong>{labelName}</strong>
            </Form.Label>
          </div>
          <div className="filter__control">
            <Form.Check
              type="switch"
              id="revenue"
              label=""
              defaultChecked={enabled}
              onClick={(e) => {
                enableSwitchChange(e);
                props.revenueEnabledSave(e.target.checked);
              }}
            />
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
              defaultValue={conditionValueOnEditFilter !=="" ? conditionValueOnEditFilter : null}
              onChange={(e) => {
                props.revenueConditionSave(e);
              }}
            >
              {condition.map((condition, index) => {
                return <option key={index}>{condition.value}</option>;
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
              defaultValue= {allowEdit && 
                amountValueOnEditFilter !== "" ? amountValueOnEditFilter : null}
              onChange={(e) => {
                setAllowEdit(false);
                props.revenueAmountSave(e, labelName, enabled);
              }}
            />
          </Form.Group>
        </div>
      </div>
    );
  } else if (props.isReset === true) {
    return <div></div>;
  } else return <div></div>;
};

export default Revenue;
