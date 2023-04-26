import React from "react";
import Header from "./Shared/Header";
import Footer from "./Shared/Footer";
import { Col, Container, Row } from "react-bootstrap";
import LeftNav from "./Shared/LeftNav";
import RightNav from "./Shared/RightNav";

const Layout = () => {
  return (
    <div>
      <Header></Header>
      <Container>
     
      <Row>
        <Col lg={3}> <LeftNav></LeftNav> </Col>
        <Col lg={3}> <h2>main</h2></Col>
        <Col lg={3}> <RightNav></RightNav> </Col>
      </Row>
    </Container>
      <Footer></Footer>
    </div>
  );
};

export default Layout;
