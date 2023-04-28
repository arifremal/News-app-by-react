// import React from "react";

import { Col, Container, Row } from "react-bootstrap";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import RightNav from "./RightNav";

// import Header from "./Shared/Header";
// // import Footer from "./Shared/Footer";
// import { Col, Container, Row } from "react-bootstrap";
// // import LeftNav from "./Shared/LeftNav";
// import RightNav from "./Shared/RightNav";
// import { Outlet } from "react-router-dom";

const NewsLayout = () => {
  return (
    <div>
     <Header></Header>
      <Container>
        <Row>
          <Col lg={9}>
            {" "}
            <Outlet></Outlet>{" "}
          </Col>
          <Col lg={3}>
            {" "}
          <RightNav></RightNav>{" "}
          </Col>
        </Row>
      </Container>
     <Footer></Footer>
    </div>
  );
};

export default NewsLayout;
