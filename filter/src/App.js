import React, { useState } from "react";
import "./scss/filter.scss";
import { Container, Form } from "react-bootstrap";
import RightSideDrawer from "./components/RightSideDrawer";
import LeftSideDrawer from "./components/LeftSideDrawer";

function App() {
  const [labelName, setLabelName] = useState();
  const [labelType, setLabelType] = useState();

  const passValues = (filterName, filterType) => {
    setLabelName(filterName);
    setLabelType(filterType);
  };

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
              <LeftSideDrawer handleValue={passValues} />
            </div>
            <div className="col-md-7 col-lg-7">
              <RightSideDrawer name={labelName} type={labelType} />
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