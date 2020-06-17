import React, { useState, useEffect } from "react";
import { faTimes, faSortAmountDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Form } from "react-bootstrap";
import { REVENUE } from "../../constants/filtertypeconstants";

const Revenue = (props) => {
  const [labelName, setLabelName] = useState();

  useEffect(() => {
    if (props.name === REVENUE) {
      setLabelName(props.name);
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
              <strong>Revenue</strong>
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
            <Form.Control as="select">
              <option>equals</option>
              <option>not equals to</option>
              <option>less than</option>
              <option>greater than</option>
              <option>less or equal</option>
              <option>greater or equal</option>
              <option>contains</option>
              <option>does not match</option>
              <option>starts with</option>
              <option>in between</option>
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
            />
          </Form.Group>
        </div>
      </div>
    );
  } else return <div></div>;
};

export default Revenue;
