import React from "react";
import "./ethos.css";
import Penny from "./penny.png";
import { Col, Image, Row } from "react-bootstrap";

const Ethos = () => {
  return (
    <div className=" mx-md-5 mx-3 px-md-5 p-3  ethos d-flex justify-content-center algin-items-center flex-md-row flex-column">
      <Col sm={5} className="me-3 d-flex justify-content-center">
        <div className="m-md-4">
          {" "}
          <Image
            src={Penny}
            fluid
            className="penny d-flex align-items-center"
            thumbnail
          />
        </div>
      </Col>
      <Col className="d-flex justify-content-center align-items-center mt-5 mt-md-0 ms-md-3">
        <div className="m-md-4" style={{ textAlign: "left" }}>
          {" "}
          <h3
            style={{
              color: "rgb(0, 166, 162)",
              textAlign: "left",
            }}
          >
            Company values
          </h3>
          <h1>
            Kompass embodies a transformative vision for neurorehabilitation{" "}
          </h1>
          <div
            style={{
              borderBottom: "1px solid rgb(0, 166, 162) ",
              width: "10%",
            }}
            className="mt-2 mb-3"
          ></div>
          <div className="mt-5 ">
            {" "}
            <p className="mt-4">
              Transcending traditional boundaries to redefine the essence of
              care. More than a software solution, it's a commitment to empower
              individuals on their rehabilitation journey. Conceived by Dr Penny
              Trayner, a trailblazer in paediatric clinical neuropsychology,
              Kompass is a testament to innovation, inclusivity, and
              collaborative progress.{" "}
            </p>
            <p className="mt-4">
              Our ethos centres around simplifying the complex, fostering
              interdisciplinary connections, and amplifying the voices of those
              in need. We believe in a future where rehabilitation is not just a
              process but a personalised, empowering experience. Kompass is more
              than a platform; it's a catalyst for positive change, breaking
              barriers, and ushering in a new era of holistic, accessible, and
              effective neurorehabilitation. Join us in shaping a world where
              every individual can strive, achieve, and surpass their goals with
              confidence and dignity.
            </p>
          </div>
        </div>
      </Col>
    </div>
  );
};
export default Ethos;
