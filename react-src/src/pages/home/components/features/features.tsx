import React, { useState, useEffect } from "react";
import "./features.css";
import { Col, Container, Row } from "react-bootstrap";
import FeatureCard from "./ components/featureCards/featureCard";
import axios from "axios";

interface Post {
  id: number;

  title: {
    rendered: string;
  };

  acf: {
    content_1: string;
    title_1: string;
    icon_1: string;
  };
}

const Features = () => {
  const [customData, setCustomData] = useState<Post[]>([]);

  useEffect(() => {
    axios
      .get(
        "http://localhost:8080/wp-json/wp/v2/feature?acf_format=standard&_fields=id,title,acf"
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
    <div className="Features mx-md-5 mx-3 my-5 d-flex justify-content-center align-items-center">
      <Container>
        <div className="" style={{ textAlign: "center", marginTop: "50px" }}>
          {" "}
          <h3
            style={{
              color: "rgb(0, 166, 162)",
              textAlign: "center",
            }}
          >
            Key features
          </h3>
          <h1>Everything you need to manage your clients </h1>
        </div>
        <Row className="my-5 d-flex flex-column flex-md-row">
          {customData.map((item, index) => {
            return (
              <Col className="my-4" key={index}>
                <FeatureCard
                  title={item.acf.title_1}
                  text={item.acf.content_1}
                  imageSrc={item.acf.icon_1}
                />
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default Features;
