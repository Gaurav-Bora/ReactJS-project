import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Assistant from "./Assistant";

const Social = () => {
  return (
    <>
      <b style={{ margin: 30, fontSize: 20 }}>Home/Writing Assistant</b>
      <p style={{ margin: 30 }}>
        Enter input to get{" "}
        <span style={{ color: "blue" }}>Writing Assistant</span>
      </p>
      <Container>
        <Row>
          <Col sm={8}>
            <Assistant/>
          </Col>
          <Col sm={4}>sm=4</Col>
        </Row>
      </Container>
    </>
  );
};

export default Social;
