import React from "react";
import FilterData from './stubs/FilterData.json';
import Card from "react-bootstrap/Card";
import "./scss/filter.scss";
import { Container, Accordion, Form, Button } from "react-bootstrap";
import { faTimes, faSortAmountDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function App() {
  const handleClick=(e)=>{
    console.log("clicked")
  }
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
              <ul className="leftSideDrawer">
                {FilterData.filter.map((filterData,index)=>{
                  if(filterData.name==="Departure Port"||filterData.name==="Arrival Port"){
                return (<li>
                  <Accordion>
                    <Card>
                      <Accordion.Toggle as={Card.Header} eventKey="0">
                        <strong>{filterData.name}</strong>
                      </Accordion.Toggle>
                      <Accordion.Collapse eventKey="0">
                        <Card.Body>
                          <ul className="firstAccordion">
                            {filterData.types && filterData.types.map((type,index)=>{
                           return <li>{type.name}</li>
                          })}
                          </ul>
                        </Card.Body>
                      </Accordion.Collapse>
                    </Card>
                  </Accordion>
                </li>)
                }
                else
                {
                return <p>{filterData.name}</p>
                }
                })}
              </ul>
            </div>
            <div className="col-md-7 col-lg-7">
              <div className="rightSideDrawer">
                <div className="displayFlex">
                  <div className="displayFlex">
                    <p>Departure Port</p>
                    <span>&gt;</span>
                    <p>Airport</p>
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
                  <div className="displayFlex">
                    <Form.Label>
                      <strong>Date</strong>
                    </Form.Label>
                  </div>
                  <div className="marginLeft">
                    <Form.Check type="switch" id="custom-switch" label="" />
                    <FontAwesomeIcon
                      className="fontIcons"
                      icon={faSortAmountDown}
                    />
                    <FontAwesomeIcon className="fontIcons" icon={faTimes} />
                  </div>
                </div>
                <div className="displayFlex">
                  <Form.Text className="text-muted">
                    Date from and Time
                  </Form.Text>
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
                  <Form.Text className="text-muted">
                    Date from and Time
                  </Form.Text>
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
                  <div className="displayFlex">
                    <Form.Label>
                      <strong>Revenue</strong>
                    </Form.Label>
                  </div>
                  <div className="marginLeft">
                    {/* <Form.Check type="switch" id="custom-switch" label="" /> */}
                    <FontAwesomeIcon
                      className="fontIcons"
                      icon={faSortAmountDown}
                    />
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
              <Button variant="primary">Save</Button>{' '}
              <Button variant="primary">Reset</Button>{' '}
              <Button variant="primary">Apply Filter</Button>{' '}
              </div>
            </div>
          </div>
        </div>
      </Container>
      <div className="right">
       <SecondPanel/>
    </div>
    </div>
  );
}

export default App;

function SecondPanel(){
  return (
    <div>Hai</div>
  )
}