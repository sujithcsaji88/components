import React from "react";
import { faTimes, faSortAmountDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Form, Button } from "react-bootstrap";

const rightSideDrawer = (props) => {
  return (
    <React.Fragment>
      <Form.Label className="downBorder">Searched Filter</Form.Label>
      <div className="rightSideDrawer">
        <div className="displayFlex">
          <div className="alignLeft">
            <p>{props.name}</p>
            <span>&gt;</span>
            <p>{props.type}</p>
          </div>
          <div className="marginLeft">
            <FontAwesomeIcon icon={faTimes} />
          </div>
        </div>
        <div className="displayFlex">
          <input
            type="text"
            placeholder="filter"
            className="form-control"
          ></input>
        </div>
        <div className="displayFlex">
          <div className="alignLeft">
            <Form.Label>
              <strong>Date</strong>
            </Form.Label>
          </div>
          <div className="marginLeft">
            <Form.Check type="switch" id="date" label="" />
            <FontAwesomeIcon className="fontIcons" icon={faSortAmountDown} />
            <FontAwesomeIcon className="fontIcons" icon={faTimes} />
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
        <div className="displayFlex">
          <div className="alignLeft">
            <Form.Label>
              <strong>Revenue</strong>
            </Form.Label>
          </div>
          <div className="marginLeft">
            <Form.Check type="switch" id="revenue" label="" />
            <FontAwesomeIcon className="fontIcons" icon={faSortAmountDown} />
            <FontAwesomeIcon className="fontIcons" icon={faTimes} />
          </div>
        </div>
        <div className="displayFlex">
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Text className="text-muted">Condition</Form.Text>
            <Form.Control as="select">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
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
      <div className="">
        <Button variant="primary">Save</Button>{" "}
        <Button variant="primary">Reset</Button>{" "}
        <Button variant="primary">Apply Filter</Button>{" "}
      </div>
    </React.Fragment>
  );
};

export default rightSideDrawer;
