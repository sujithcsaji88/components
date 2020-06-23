import React from "react";
import FilterData from "../../stubs/FilterData.json";
import Card from "react-bootstrap/Card";
import { Accordion, Form } from "react-bootstrap";
import {
  DEPARTURE_PORT,
  ARRIVAL_PORT,
} from "../../constants/filtertypeconstants";

const LeftDrawer = (props) => {
  const loadedData = FilterData.filter.map((filterData, index) => {
    if (
      filterData.name === DEPARTURE_PORT ||
      filterData.name === ARRIVAL_PORT
    ) {
      return (
        <li key={index}>
          <Accordion>
            <Card>
              <Accordion.Toggle className="show" as={Card.Header} eventKey="0">
                {filterData.name}
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  <ul className="firstAccordion" key={index}>
                    {filterData.types &&
                      filterData.types.map((type, index) => {
                        return (
                          <li
                            onClick={(e) => {
                              props.handleValue(
                                filterData.name,
                                type.name,
                                filterData.enabled
                              );
                            }}
                            key={index}
                          >
                            {type.name}
                          </li>
                        );
                      })}
                  </ul>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </li>
      );
    } else if (filterData.field) {
      return (
        <li
          onClick={(e) => {
            props.handleDate(
              filterData.name,
              filterData.field,
              filterData.enabled
            );
          }}
          key={index}
        >
          {filterData.name}
        </li>
      );
    } else if (filterData.condition) {
      return (
        <li
          onClick={(e) => {
            props.handleRevenue(
              filterData.name,
              filterData.condition,
              filterData.enabled
            );
          }}
          key={index}
        >
          {filterData.name}
        </li>
      );
    } else {
      return <li key={index}>{filterData.name}</li>;
    }
  });

  return (
    <div className="">
      <Form.Row>
        <Form.Control
          required
          type="text"
          placeholder="Search a Filter"
          defaultValue=""
          className="customControl"
        />
      </Form.Row>
      <div className="row">
        <div className="col-md-5 col-lg-5">
          <ul className="leftDrawer">{loadedData}</ul>
        </div>
      </div>
    </div>
  );
};

export default LeftDrawer;
