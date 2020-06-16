import React from "react";
import { Button } from "react-bootstrap";
import ArrivalPort from "../types/arrivalport";
import DeparturePort from "../types/departureport";
import Date from "../types/date";
import Revenue from "../types/revenue";

const rightDrawer = (props) => {
  return (
    <React.Fragment>
      <div className="rightDrawer">
        <DeparturePort
          name={props.name}
          type={props.type}
          clearValues={props.clearValues}
        />
        <ArrivalPort
          name={props.name}
          type={props.type}
          clearValues={props.clearValues}
        />
        <Date name={props.name} clearValue={props.clearValue} />
        <Revenue name={props.name} clearValue={props.clearValue} />
      </div>
      <div className="">
        <Button variant="primary">Save</Button>{" "}
        <Button variant="primary">Reset</Button>{" "}
        <Button variant="primary">Apply Filter</Button>{" "}
      </div>
    </React.Fragment>
  );
};

export default rightDrawer;
