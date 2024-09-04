import React, { useState, useEffect } from "react";
import "./features.css";
import { Col, Container, Row } from "react-bootstrap";
import FeatureCard from "./ components/featureCards/featureCard";
import axios from "axios";
import image from "../hero/Home.png";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface Post {
  id: number;

  title: {
    rendered: string;
  };

  acf: {
    feature_text: string;
    feature_name: string;
    feature_image: {
      url: string;
    };
    feature_icon: {
      url: string;
    };
  };
}
gsap.registerPlugin(ScrollTrigger);

const Features = () => {
  const [customData, setCustomData] = useState<Post[]>([]);

  useEffect(() => {
    axios
      .get(
        "http://localhost:8000/wp-json/wp/v2/features?acf_format=standard&_fields=id,title,acf"
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
        <div
          className="mb-5 mb-md-0"
          style={{ textAlign: "center", marginTop: "50px" }}
        >
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
        <div className="d-flex flex-row mt-">
          <Row className="my-md-5 d-flex flex-column w-100 px-0 mx-0 justify-content-center ">
            {customData.map((item, index) => {
              return (
                <Row className="my-5 mx-auto" key={index}>
                  <FeatureCard
                    title={item.acf.feature_name}
                    text={item.acf.feature_text}
                    imageSrc={item.acf.feature_image.url}
                    iconSrc={item.acf.feature_icon.url}
                    index={index}
                  />
                </Row>
              );
            })}
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Features;
