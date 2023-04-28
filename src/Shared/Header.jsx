import React, { useContext } from "react";
import logo from "../../../the-news-dragon/src/assets/logo.png";
import moment from "moment";
import Button from "react-bootstrap/Button";
import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";


const Header = () => {

  return (
    <Container className="mt-4">
      <div className="text-center">
        <img src={logo} alt="" />
        <p className="text-secondary">
          <small>Journalism Without Fear or Favour</small>
        </p>
        <p>{moment().format("dddd, MMMM D, YYYY")}</p>
      </div>
      <div className="d-flex">
        <Button variant="danger">Danger</Button>
        <Marquee className="text-danger" speed={80}>
          I can be a React component, multiple React components, or just some
          text.
        </Marquee>
      </div>
 
    </Container>
  );
};

export default Header;
