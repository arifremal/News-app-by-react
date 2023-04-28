import React from "react";
import Header from "./Shared/Header";
import Footer from "./Shared/Footer";
import { Col, Container, Row } from "react-bootstrap";
import LeftNav from "./Shared/LeftNav";
import RightNav from "./Shared/RightNav";
import { Outlet } from "react-router-dom";
import NavigationBar from "./Shared/NavigationBar";

const Layout = () => {
  return (
    <div>
      <Header></Header>
      <NavigationBar></NavigationBar>
      <Container>
     
      <Row>
        <Col lg={3}> <LeftNav></LeftNav> </Col>
        <Col lg={6}> <Outlet></Outlet> </Col>
        <Col lg={3}> <RightNav></RightNav> </Col>
      </Row>
    </Container>
      <Footer></Footer>
    </div>
  );
};

export default Layout;
