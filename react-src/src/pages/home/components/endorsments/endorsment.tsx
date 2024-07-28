import React from "react";
import "./endorsment.css";
import { Col, Row } from "react-bootstrap";
import logo from "./logos-kompass/komapss_logo.png";
import logo2 from "./logos-kompass/University_of_Essex_logo.png";
import logo3 from "./logos-kompass/HIM_logo.png";

const endorsment = () => {
  return (
    <div className="Endorsment mx-md-5 mx-3 p-5  d-flex justify-content-center align-items-center">
      <Col sm={4}>
        <Row>
          {" "}
          <h3 style={{ color: "rgb(0, 166, 162)", textAlign: "left" }}>
            OUR ENDORSEMENTS
          </h3>
        </Row>
        <Row>
          <h1 style={{ textAlign: "left" }}>
            Supported By Various Market Leading Companies
          </h1>
        </Row>
        <div
          style={{ borderBottom: "1px solid rgb(0, 166, 162) ", width: "10%" }}
          className="mt-2 mb-3"
        ></div>
        <Row>
          <p style={{ textAlign: "left" }}>
            Arcade game frame Animal Crossing Sonic the Hedgehog The Legend of
            Zelda: A Link to the Past battle pass HP horde mode attract mode
            grind headshot.
          </p>
        </Row>
      </Col>
      <Col sm={8}>
        <Row className="ps-4">
          <Col className="my-5 d-flex justify-content-center align-items-center">
            <img src={logo} height={"auto"} width={200} />
          </Col>
          <Col className="my-5 d-flex justify-content-center align-items-center">
            <img src={logo2} height={"auto"} width={200} />
          </Col>{" "}
          <Col className="my-5 d-flex justify-content-center align-items-center">
            <img src={logo3} height={"auto"} width={200} />
          </Col>{" "}
          <Col className="my-5 d-flex justify-content-center align-items-center">
            <img src={logo2} height={"auto"} width={200} />
          </Col>{" "}
          <Col className="my-5 d-flex justify-content-center align-items-center">
            <img src={logo3} height={"auto"} width={200} />
          </Col>
        </Row>
      </Col>
    </div>
  );
};

export default endorsment;
