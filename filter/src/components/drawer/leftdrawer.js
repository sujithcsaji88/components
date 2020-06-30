import React, { useState } from "react";
import FilterData from "../../stubs/FilterData.json";
import Card from "react-bootstrap/Card";
import { Accordion, Form } from "react-bootstrap";
import {
  DEPARTURE_PORT,
  ARRIVAL_PORT,
} from "../../constants/filtertypeconstants";

const LeftDrawer = (props) => {
  const [departureAccordian, setDepartureAccordian] = useState(false);
  const [arrivalAccordian, setArrivalAccordian] = useState(false);
  const [departureAccordianShow, setDepartureAccordianShow] = useState("");
  const [arrivalAccordianShow, setArrivalAccordianShow] = useState("")
  const [filteredFilterData, setFilteredFilterData] = useState(FilterData);
  const accordianArrowToggle = (name) => {
    if (name === DEPARTURE_PORT) {
      setDepartureAccordian(!departureAccordian);
      if (departureAccordian) {
        setDepartureAccordianShow("")
      }
      else {
        setDepartureAccordianShow("show")
      }
    }
    else {
      setArrivalAccordian(!arrivalAccordian);
      if (arrivalAccordian) {
        setArrivalAccordianShow("")
      }
      else {
        setArrivalAccordianShow("show")
      }

    }

  }
  const searchFilterHandler = (e) => {
    let filteredList = {};
    const searchKey = e.target.value;
    console.log(searchKey)
    if (FilterData) {
      FilterData.filter.map((filterData, index) => (
        filteredList["filter"] = FilterData.filter.filter((filterData) => (
          (filterData.name && filterData.name.toLowerCase().includes(searchKey.toLowerCase()))
        ))
      ))
    }
    setFilteredFilterData(filteredList)
  }
  const loadedData = filteredFilterData.filter.map((filterData, index) => {
    if (filterData.name === DEPARTURE_PORT) {
      return (
        <div key={index}>
          <Accordion>
            <Card>
              <Accordion.Toggle className={departureAccordianShow} as={Card.Header} eventKey="0" onClick={(e) => accordianArrowToggle(filterData.name)}>
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
                              props.addedFilterCount();
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
        </div>
      );
    }
    else if (filterData.name === ARRIVAL_PORT) {
      return (
        <div key={index}>
          <Accordion>
            <Card>
              <Accordion.Toggle className={arrivalAccordianShow} as={Card.Header} eventKey="0" onClick={(e) => accordianArrowToggle(filterData.name)}>
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
                              props.addedFilterCount();
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
        </div>
      );
    }
    else if (filterData.field) {
      return (
        <li
          onClick={(e) => {
            props.handleDate(
              filterData.name,
              filterData.field,
              filterData.enabled
            );
            props.addedFilterCount();
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
            props.addedFilterCount();
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
          onChange={searchFilterHandler}
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
