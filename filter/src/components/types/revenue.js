import React, { useState, useEffect } from "react";
import { faTimes, faSortAmountDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Form } from "react-bootstrap";
import { REVENUE } from "../../constants/filtertypeconstants";

const Revenue = (props) => {
  const [labelName, setLabelName] = useState();
  const[condition,setCondition]=useState();
  useEffect(() => {
    if (props.name === REVENUE) {
      setLabelName(props.name);
      setCondition(props.condition)
     
    }
  }, [props]);

  const closeRevenue = () => {
    setLabelName("");
  };

  if (labelName === REVENUE) {
    return (
      <div>
        <div className="displayFlex">
          <div className="alignLeft">
            <Form.Label>
              <strong>{labelName}</strong>
            </Form.Label>
          </div>
          <div className="marginLeft">
            <Form.Check type="switch" id="revenue" label="" />
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
            <Form.Control as="select" onChange={(e)=>{props.revenueConditionSave(e)}}>
            {condition.map((condition,index)=>{return <option>{condition.value}</option>})}
            </Form.Control>
          </Form.Group>
        </div>
        <div className="displayFlex">
          <Form.Group>
            <Form.Text className="text-muted">Amount</Form.Text>
            <Form.Control
              required
              type="text"
              placeholder="Amount"
              defaultValue=""
              onChange={(e)=>{props.revenueAmountSave(e)}}
            />
          </Form.Group>
        </div>
      </div>
    );
  } else return <div></div>;
};

export default Revenue;
