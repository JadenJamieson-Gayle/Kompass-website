import React from "react";
import { Card, Col } from "react-bootstrap";
import "./featureCard.css";

interface Props {
  text: string;
  title: string;
  imageSrc: string;
}

const featureCard: React.FC<Props> = ({ text, title, imageSrc }) => {
  return (
    <Card className="feature-card d-flex h-100 flex-row align-items-center mx-3 p-3 shadow-sm border-0">
      <Card.Body className="d-flex flex-column">
        <div className="d-flex align-items-center mb-3">
          <img
            className="feature-icon me-2"
            src={imageSrc}
            alt="icon"
            height="24"
            width="24"
          />
          <h4
            className="mb-0"
            style={{ color: "rgb(12, 46, 80)", textAlign: "left" }}
          >
            {title}
          </h4>
        </div>

        <p
          className="text-muted text-start mt-2 "
          style={{ marginLeft: "32px" }}
        >
          {text}
        </p>
      </Card.Body>
    </Card>

    /*<Card className=" h-100">
      <img
        className="feature-icon card-img-top mt-4"
        src={imageSrc}
        alt="icon"
      />
      <Card.Title
        className="mt-3 "
        style={{ color: "rgb(0, 166, 162)", minHeight: "48px" }}
      >
        {title}
      </Card.Title>
      <Card.Body className="boxEndorse d-flex justify-content-center align-items-start mt-0 pt-0">
        <CardText className="text mt-2">{text}</CardText>
      </Card.Body>
    </Card>*/
  );
};

export default featureCard;
