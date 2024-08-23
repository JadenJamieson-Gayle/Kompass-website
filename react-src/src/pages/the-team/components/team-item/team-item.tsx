import React from "react";
import { Card, CardBody, Col, Image } from "react-bootstrap";

interface Props {
  index: number;
  name: string;
  role: string;
  about: string;
  src: string;
}

const Team_Card: React.FC<Props> = ({ index, name, role, about, src }) => {
  return (
    <Card
      className={`mx-5 my-5 p-5 h-100 shadow-lg border-0 rounded-lg bg-white d-flex flex-column ${
        index % 2 === 0 ? "flex-md-row" : " flex-md-row-reverse "
      }`}
      style={{
        overflow: "hidden",
        transition: "transform 0.3s ease-in-out",
      }}
    >
      <Col className="justify-content-center d-flex align-items-center ">
        {" "}
        <Image
          src={src}
          fluid
          className="penny d-flex align-items-center"
          rounded
          style={{
            height: "auto",
            maxWidth: "300px",
            transition: "transform 0.3s ease-in-out",
          }}
        />
      </Col>

      <CardBody className="justify-content-center d-flex align-items-center text-start">
        {" "}
        <Col>
          <div className="px-4">
            {" "}
            <h3 className="my-3">{name}</h3>
            {role !== "" && <h5 className="my-3 mb-4 text-muted">{role}</h5>}
            <div
              style={{
                borderBottom: "1px solid rgb(0, 166, 162) ",
                width: "10%",
                transition: "transform 0.3s ease-in-out",
                transformOrigin: "left",
              }}
              className="mt-1 mb-3 line-name"
            ></div>
            <p className="mt-3 mb-0">{about}</p>
          </div>
        </Col>
      </CardBody>
      <style>{`
        

        .card:hover img {
          transform: scale(1.1);
        }

        .card:hover .text-muted {
          color: #0056b3;
        }
        
        .card:hover .line-name{
          transform: scaleX(1.2);
          transform-origin: left;
        }

        .card:hover {
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
        }
      `}</style>
    </Card>
  );
};

export default Team_Card;
