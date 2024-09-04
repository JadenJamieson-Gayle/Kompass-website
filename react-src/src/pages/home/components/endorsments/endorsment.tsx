import React, { useState, useEffect } from "react";
import "./endorsment.css";
import { Col, Row } from "react-bootstrap";
import axios from "axios";

interface post {
  id: number;
  title: {
    rendered: string;
  };
  acf: {
    logo_home: {
      url: string;
    };
  };
}

const Endorsment = () => {
  const [customData, setCustomData] = useState<post[]>([]);
  useEffect(() => {
    axios
      .get(
        "http://localhost:8000/wp-json/wp/v2/endorsement-logo?acf_format=standard&_fields=id,title,acf"
      )
      .then((response) => {
        // Update the state with the fetched data
        console.log(response); // This will log the entire response object
        console.log(response.data);
        setCustomData(response.data);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="Endorsment mx-md-5 px-md-5 p-3 pb-0 d-flex flex-md-row flex-column justify-content-center align-items-center">
      <Col sm={12} md={4}>
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
            We are proud to have the backing of top companies across the
            industry. Our commitment to excellence is reflected in the trust and
            support we receive from these market leaders, ensuring we bring you
            the best in quality and innovation.
          </p>
        </Row>
      </Col>
      <Col sm={12} md={8}>
        <Row className="ps-md-4">
          {customData.map((item, index) => {
            return (
              <Col className="my-md-5 mx-md-4 my-3 mx-2 d-flex justify-content-center align-items-center">
                <img
                  key={index}
                  src={item.acf.logo_home.url}
                  height={"auto"}
                  width={200}
                  style={{ maxHeight: "150px" }}
                  className="endorseImg"
                />
              </Col>
            );
          })}
        </Row>
      </Col>
    </div>
  );
};

export default Endorsment;
