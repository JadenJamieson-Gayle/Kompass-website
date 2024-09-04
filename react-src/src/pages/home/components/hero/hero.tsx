import React from "react";
import "./hero.css";
import { Row, Col, Button } from "react-bootstrap";
import image from "./Home.png";

const Hero = () => {
  const handleButtonClick = () => {
    window.location.href = "/request-a-demo";
  };
  return (
    <div
      style={{ position: "relative", maxHeight: "90vh" }}
      className="hero p-md-5 mb-5  py-5 boxcontainer d-flex justify-content-center align-items-center"
    >
      <Row className="h-100 mx-2 d-flex flex-column  pt-md-0 ">
        <Col className="d-flex justify-content-center align-items-center">
          <div className="text-white d-flex justify-content-center align-items-center mt-3 mt-md-5  flex-column p-2">
            <h1
              className=" text-center mb-3 heroHeader"
              style={{ fontWeight: 700 }}
            >
              Streamlined Rehab Goal-Setting
            </h1>
            <h5
              className=" text-center mb-4 heroText"
              style={{ fontWeight: 500 }}
            >
              An online platform designed to deliver time efficient, cost
              effective and meaningful goal-setting for rehabilitation
              healthcare teams.
            </h5>
            <div className="button-container mt-3">
              <Button
                variant="primary"
                className="btn demo-btn"
                onClick={handleButtonClick} // Ensure onClick handler is added
              >
                Request a demo
              </Button>
            </div>
          </div>
        </Col>
        <Col className="d-flex justify-content-center align-items-center mt-5 ">
          <div className="mockup-container w-50">
            <img
              src={image}
              alt="SaaS Product Screenshot"
              className="mockup-image"
              width={"100%"}
              height={"auto"}
            />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Hero;
