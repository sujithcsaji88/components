import React, { useState, useEffect } from "react";
import { faTimes, faSortAmountDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Form } from "react-bootstrap";
import { DATE } from "../../constants/filtertypeconstants";

const Date = (props) => {
  const [labelName, setLabelName] = useState();

  useEffect(() => {
    if (props.name === DATE) {
      setLabelName(props.name);
    }
  }, [props]);

  const closeDate = () => {
    setLabelName("");
  };

  if (labelName === DATE) {
    return (
      <div>
        <div className="displayFlex">
          <div className="alignLeft">
            <Form.Label>
              <strong>Date</strong>
            </Form.Label>
          </div>
          <div className="marginLeft">
            <Form.Check type="switch" id="date" label="" />
            <FontAwesomeIcon className="fontIcons" icon={faSortAmountDown} />
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
        <div className="displayFlex">
          <Form.Text className="text-muted">Date from and Time</Form.Text>
        </div>
        <div className="displayFlex">
          <Form.Control
            required
            type="text"
            placeholder="Filter"
            defaultValue=""
            className="col-lg-7 mr-3"
          />
          <Form.Control
            required
            type="text"
            placeholder="Filter"
            defaultValue=""
            className="col-lg-4"
          />
        </div>
        <div className="displayFlex">
          <Form.Text className="text-muted">To Date and Time</Form.Text>
        </div>
        <div className="displayFlex">
          <Form.Control
            required
            type="text"
            placeholder="Filter"
            defaultValue=""
            className="col-lg-7 mr-3"
          />
          <Form.Control
            required
            type="text"
            placeholder="Filter"
            defaultValue=""
            className="col-lg-4"
          />
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default Date;
