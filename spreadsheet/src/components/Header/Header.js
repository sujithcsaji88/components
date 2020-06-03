import React from "react";
import classes from "../Header/Header.css";
import { Navbar, Nav, Form, FormControl } from "react-bootstrap";
import Logo from "../../assets/images/logo.png";
import {
  faBell,
  faQuestionCircle,
  faEllipsisV,
  faPlusCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const header = (props) => {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">
        <img style={{ width: "80px" }} src={Logo} alt="iCargo"></img>
      </Navbar.Brand>
      <Nav className="mr-auto"></Nav>
      <Form inline>
        <FormControl type="text" placeholder="Search a screen" className="mr-sm-2" />
        <FontAwesomeIcon style={{fontSize: '18px', color: '#fff', margin: '0px 30px'}} icon={faPlusCircle} />
        <FontAwesomeIcon style={{fontSize: '18px', color: '#fff', margin: '0px 30px'}} icon={faBell} />
        <FontAwesomeIcon style={{fontSize: '18px', color: '#fff', margin: '0px 30px'}} icon={faQuestionCircle} />
        <FontAwesomeIcon style={{fontSize: '18px', color: '#fff', margin: '0px 30px'}} icon={faEllipsisV} />
      </Form>
    </Navbar>
  );
};

export default header;
