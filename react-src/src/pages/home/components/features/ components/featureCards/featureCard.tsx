import React from "react";
import { Card, CardText } from "react-bootstrap";
import "./featureCard.css";

interface Props {
  text: string;
  title: string;
  imageSrc: string;
}

const featureCard: React.FC<Props> = ({ text, title, imageSrc }) => {
  return (
    <Card className=" h-100">
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
    </Card>
  );
};

export default featureCard;
