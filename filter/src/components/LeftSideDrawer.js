import React from "react";
import FilterData from "../stubs/FilterData.json";
import Card from "react-bootstrap/Card";
import { Container, Accordion, Form } from "react-bootstrap";

const leftSideDrawer = (props) => {
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
      return <li
      onClick={(e) => {
        props.handleDate(filterData.name);
      }}>{filterData.name}</li>;
    }
  });

  return (
    <div className="App">
      <Container className="container">
        <div className="sideDrawer">
          <Form.Row>
            <Form.Control
              required
              type="text"
              placeholder="Filter"
              defaultValue=""
              className="customControl col-md-5 col-lg-5"
            />
            <Form.Control
              required
              type="text"
              placeholder="Filter"
              defaultValue=""
              className="customControl col-md-7 col-lg-7"
            />
          </Form.Row>
          <div className="row">
            <div className="col-md-5 col-lg-5">
              <ul className="leftSideDrawer">{loadedData}</ul>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default leftSideDrawer;
