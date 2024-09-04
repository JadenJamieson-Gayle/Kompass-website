import React from "react";
import heroImg from "./collab.jpg";
import "./hero.css";

const Hero = () => {
  return (
    <div className="container-fluid bg-kompass p-5">
      <div className="row align-items-center">
        <div className="col-md-6 text-center text-md-left">
          <h3
            style={{
              color: "rgb(0, 166, 162)",
              textAlign: "center",
            }}
          >
            Who is it for
          </h3>
          <h1 className="text-white">
            Empowering Every Role in Rehabilitation Care
          </h1>
          <div
            style={{
              borderBottom: "1px solid rgb(0, 166, 162) ",
              width: "10%",
            }}
            className="mt-2 mb-4 mx-auto"
          ></div>
          <p className="lead text-white ">
            Kompass is designed to streamline and enhance the work of healthcare
            professionals across disciplines. Discover how our platform can
            support your role in delivering personalized, effective care.
          </p>
          <button className="btn  btn-lg main-btn btn-primary mt-3">
            Request a Demo
          </button>
        </div>
        <div className="col-md-6 text-center mt-3 mt-md-0">
          <img
            src={heroImg}
            className="img-fluid rounded"
            alt="Healthcare professionals collaborating"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
