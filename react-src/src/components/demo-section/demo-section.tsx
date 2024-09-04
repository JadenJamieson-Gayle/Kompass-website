import React from "react";
import "./demo-section.css";
import { Button, Col } from "react-bootstrap";

const DemoSection = () => {
  return (
    <div className="d-flex align-items-center justify-content-center w-100 px-md-4 ">
      <Col sm={12} className="demo-section mx-md-5 py-5  ">
        <h1 className="demo-section-header m-0">
          Are you ready to streamline goal-setting?
        </h1>

        <Button
          variant="primary"
          href="/request-a-demp"
          className="my-4 mt-5 px-3 py-2 demo-btn"
        >
          Request a demo
        </Button>
      </Col>
    </div>
  );
};

export default DemoSection;
