import React, { useEffect, useState } from "react";
import "./affliations.css";
import { Row, Col, Card } from "react-bootstrap";
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

const Affliations = () => {
  const [customData, setCustomData] = useState<post[]>([]);
  useEffect(() => {
    axios
      .get(
        "http://localhost:8000/wp-json/wp/v2/affiliations-logo?acf_format=standard&_fields=id,title,acf"
      )
      .then((response) => {
        // Update the state with the fetched data
        console.log(response); // This will log the entire response object
        console.log(response.data);
        setCustomData(response.data);
      })
      .catch((error) => console.error(error));
  }, []);

  console.log(customData);
  return (
    <div className="mx-md-5 mx-3 p-5 pt-0 mt-5 d-flex flex-column justify-content-start align-items-center affliations">
      <h1 className="mt-5">
        <span style={{ color: "rgb(0, 166, 162)", fontSize: "23.284px" }}>
          Featured by
        </span>
        <br /> Industry leaders and top brands
      </h1>
      <div
        className="mt-2 mb-3"
        style={{ borderBottom: "1px solid rgb(0,166,162", width: "10%" }}
      ></div>
      <Row className="mt-4">
        {customData.map((item, index) => {
          return (
            <Col
              key={index}
              className="my-5 d-flex justify-content-center align-items-center"
            >
              <Card className="bg-light shadow-sm affiliations-card">
                <Card.Body className="d-flex justify-content-center align-items-center p-3">
                  <img
                    src={item.acf.logo_home.url}
                    alt={`Logo ${index}`}
                    height={"auto"}
                    width={200}
                    style={{ maxHeight: "100px" }}
                  />
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default Affliations;
