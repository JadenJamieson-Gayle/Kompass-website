import React, { useEffect, useState } from "react";
import "./testimoninals.css";
import Score from "./components/score/score";
import { Card, Col, Row } from "react-bootstrap";
import axios from "axios";

interface Props {
  id: number;
  title: string;
  acf: {
    testimonial_role: string;
    testimonial_name: string;
    testimonial_rating: number;
    testimonial_text: string;
    testimonial_image: {
      url: string;
    };
  };
}

const Testimoninals = () => {
  const [reviewData, setReviewData] = useState<Props[]>([]);

  useEffect(() => {
    axios
      .get(
        "http://localhost:8000/wp-json/wp/v2/testimonial?acf_format=standard&_fields=id,title,acf"
      )
      .then((response) => {
        setReviewData(response.data);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="testi mx-md-5 mx-3 p-4 pb-5 d-flex flex-column align-items-center">
      <div
        className="mb-4 mb-md-0"
        style={{ textAlign: "center", marginTop: "50px" }}
      >
        {" "}
        <h3
          style={{
            color: "rgb(0, 166, 162)",
            textAlign: "center",
          }}
        >
          Testimonials
        </h3>
        <h1 style={{ color: "black" }}>
          We have worked with thousands of amazing people{" "}
        </h1>
      </div>
      <Row className="mx-0 mt-5 d-flex flex-wrap w-100 justify-content-center">
        {reviewData.slice(0, 3).map((item, index) => {
          return (
            <Col
              key={index}
              xs={12}
              md={6}
              lg={4}
              className="my-3 d-flex"
              style={{ minHeight: "100%" }}
            >
              <Card
                className="mx-md-4 my-md-3 p-4 h-100 shadow-lg border-0 rounded-lg bg-white card-hover"
                id={`review-card-${index}`}
                style={{ minHeight: "100%", borderRadius: "1rem" }}
              >
                <Card.Body className="d-flex flex-column flex-grow-1 p-4">
                  <Card.Text
                    className="text-start flex-grow-1 my-4"
                    style={{
                      fontStyle: "italic",
                      color: "#333",
                      fontSize: "1.1rem",
                    }}
                  >
                    "{item.acf.testimonial_text}"
                  </Card.Text>
                  <div className="d-flex flex-md-row flex-column align-items-center mt-auto">
                    <img
                      src={item.acf.testimonial_image.url}
                      alt={item.acf.testimonial_name}
                      className="rounded-circle me-3 shadow"
                      style={{
                        width: "60px",
                        height: "60px",
                        objectFit: "cover",
                        border: "3px solid #fff",
                        boxShadow: "0 0 0 2px #e5e7eb",
                      }}
                    />
                    <div className="d-flex flex-column text-start">
                      <Card.Text
                        className="font-weight-bold mb-1"
                        style={{ fontSize: "1.125rem", color: "#000" }}
                      >
                        {item.acf.testimonial_name}
                      </Card.Text>
                      <Card.Text
                        className="text-muted"
                        style={{ fontSize: "0.875rem", color: "#555" }}
                      >
                        {item.acf.testimonial_role}
                      </Card.Text>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default Testimoninals;
