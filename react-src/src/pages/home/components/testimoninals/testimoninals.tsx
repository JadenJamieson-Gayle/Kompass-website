import React, { useEffect, useState } from "react";
import "./testimoninals.css";
import Score from "./components/score/score";
import { Card, Col, Row } from "react-bootstrap";
import axios from "axios";

interface Props {
  id: number;
  title: string;
  acf: {
    name: string;
    review_text: string;
    rating: number;
  };
}

const Testimoninals = () => {
  const [reviewData, setReviewData] = useState<Props[]>([]);

  useEffect(() => {
    axios
      .get(
        "http://localhost:8080/wp-json/wp/v2/reviews?acf_format=standard&_fields=id,title,acf"
      )
      .then((response) => {
        setReviewData(response.data);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="testi mx-md-5 mx-3 p-4 pb-5 d-flex flex-column  align-items-center">
      <h1 className="mb-5 mt-4">What our members are saying</h1>
      <Row className=" mx-0  d-flex flex-row-reverse w-100 justify-content-center align-items-center">
        {reviewData.map((item, index) => {
          return (
            <Card className="mx-4 review-card my-2" id={`review-card-${index}`}>
              <Card.Body>
                <Score rating={item.acf.rating} />
                <Col className="mt-5">
                  <Card.Text>"{item.acf.review_text}"</Card.Text>
                </Col>
              </Card.Body>

              <Col className="d-flex flex-column justify-content-center align-items-center">
                <Row>
                  <Card.Text className="review-name">{item.acf.name}</Card.Text>
                </Row>
                <Row>Software engineer</Row>
              </Col>
            </Card>
          );
        })}
      </Row>
    </div>
  );
};

export default Testimoninals;
