import React from "react";
import "./hero.css";
import { Row, Col, Button } from "react-bootstrap";
import image from "./image1.png";

const Hero = () => {
  const handleButtonClick = () => {
    // Add your logic here
    console.log("Button clicked!");
    // Example: Redirect to another page
    window.location.href = "/about";
  };
  return (
    <div
      style={{ position: "relative", minHeight: "100vh" }}
      className="hero mb-5 p-lg-0 py-5 boxcontainer d-flex justify-content-center align-items-center"
    >
      <Row className="h-100 mx-2 d-flex flex-column-reverse flex-lg-row flex-nowrap pt-5 pt-md-0">
        <Col className="d-flex justify-content-center align-items-center">
          <div className="text-white d-flex justify-content-center align-items-center mt-5 mt-md-0  flex-column p-3">
            <h1 className=" text-center mb-4">
              An online platform designed to deliver time efficient, cost
              effective and meaningful goal-setting for rehabilitation
              healthcare teams.
            </h1>
            <div className="button-container">
              <Button
                variant="primary"
                style={{
                  backgroundColor: "#0c2c54",
                  borderColor: "#0c2c54",
                  color: "white",
                }}
                onClick={handleButtonClick} // Ensure onClick handler is added
              >
                Find Out More
              </Button>
            </div>
          </div>
        </Col>
        <Col className="d-flex justify-content-center align-items-center">
          <img
            alt=" software on ipad"
            className="img-fluid-hero img-fluid "
            src={image}
            height="fit-content"
            style={{
              objectFit: "cover",
              outline: "none",
              overflow: "hidden",
            }}
          />
        </Col>
      </Row>
    </div>
  );
};

export default Hero;
