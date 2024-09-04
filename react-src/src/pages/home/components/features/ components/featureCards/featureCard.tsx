import React from "react";
import { Card, Col, Container } from "react-bootstrap";
import "./featureCard.css";

interface Props {
  text: string;
  title: string;
  iconSrc: string;
  imageSrc: string;
  index: number;
}

const featureCard: React.FC<Props> = ({
  text,
  title,
  index,
  iconSrc,
  imageSrc,
}) => {
  console.log(index);
  return (
    <Card className="feature-card d-flex h-100 flex-row align-items-center  p-3 border-0">
      <Card.Body
        className={`d-flex  ${
          index % 2 == 0 ? "flex-md-row" : "flex-md-row-reverse"
        } justify-content-between flex-column`}
      >
        <Col
          sm={4}
          className={`d-flex flex-md-row flex-column align-items-md-start align-items-center justify-content-center p-3 ${
            index % 2 == 0 ? "me-md-5" : "ms-md-5"
          } `}
        >
          <Container fluid className="mx-0 px-0 ms-md-auto w-auto me-2 ">
            <img
              className="feature-icon  "
              src={iconSrc}
              alt="icon"
              height="48"
              width="48"
            />
          </Container>
          <Container fluid className="mx-0 px-0 me-auto  ">
            {" "}
            <h4 className="mb-0 feature-card-header text-md-start text-center">
              {title}
            </h4>
            <p className=" text-md-start text-center mt-3">{text}</p>
          </Container>
        </Col>
        <Col sm={8} className="ms-md-5 d-flex justify-content-center">
          {" "}
          <div className="mockup-container w-100  ">
            <img
              src={imageSrc}
              alt="SaaS Product Screenshot"
              className="mockup-image mockup-image-features"
            />
          </div>
        </Col>
      </Card.Body>
    </Card>
  );
};

export default featureCard;
