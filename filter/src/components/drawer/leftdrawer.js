import React from "react";
import FilterData from "../../stubs/FilterData.json";
import Card from "react-bootstrap/Card";
import { Accordion, Form } from "react-bootstrap";

const leftDrawer = (props) => {
  const loadedData = FilterData.filter.map((filterData) => {
    if (
      filterData.name === "Departure Port" ||
      filterData.name === "Arrival Port"
    ) {
      return (
        <li>
          <Accordion>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="0">
                <strong>{filterData.name}</strong>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  <ul className="firstAccordion">
                    {filterData.types &&
                      filterData.types.map((type) => {
                        return (
                          <li
                            onClick={(e) => {
                              props.handleValue(filterData.name, type.name);
                            }}
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
    } else {
      return (
        <li
          onClick={(e) => {
            props.handleDate(filterData.name);
          }}
        >
           <strong>{filterData.name}</strong>
        </li>
      );
    }
  });

  return (
    <div className="sideDrawer">
      <Form.Row>
        <Form.Control
          required
          type="text"
          placeholder="Filter"
          defaultValue=""
          className="customControl col-md-5 col-lg-5"
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

export default leftDrawer;
