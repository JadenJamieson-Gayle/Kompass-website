import React from "react";
import "./FAQ.css";
import Navbar from "../../components/Navbar/navbar";
import Footer from "../../components/footer/footer";
import QA from "./components/QA/QA";
import { Row } from "react-bootstrap";
import Data from "./FAQ-data.json";

const FAQ = () => {
  return (
    <div className="App pb-3">
      <section className="mb-5">
        <Navbar />
      </section>
      <section style={{ marginTop: "125px" }}>
        <FAQCompnent />
      </section>
      <section className="my-5">
        {" "}
        <Footer />
      </section>
    </div>
  );
};

const FAQCompnent = () => {
  return (
    <div className="container-fluid" style={{ overflow: "visible" }}>
      {" "}
      <Row className="">
        <div className="text-center" style={{}}>
          <h1>
            <strong>Frequently asked questions</strong>
          </h1>
          <p className="m-0 mt-4">
            Have a different question?{" "}
            <a href="your-contact-page-url-here" className="a-link">
              Contact us here
            </a>
            , and we'll get back to you as soon as possible.
          </p>
        </div>
      </Row>
      <Row
        style={{ minHeight: "50vh" }}
        className="p-5 pt-0 d-flex justify-content-center align-items-center mt-5"
      >
        <QA data={Data} />
      </Row>
    </div>
  );
};

export default FAQ;
