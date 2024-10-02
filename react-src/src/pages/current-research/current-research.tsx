import React from "react";
import childImg from "./child.jpg";
import "./current-research.css";
import NavBar from "../../components/Navbar/navbar";
import { Col, Row, Button } from "react-bootstrap";
import Footer from "../../components/footer/footer";

const researchData = [
  {
    id: 1,
    title: "Developing a Patient-Centered Portal",
    description: `The Kompass Team are presently delivering an Innovate UK-funded grant, as part of the
Biomedical Catalyst, to develop a new addition to the system; The Patient Portal. This
project involves the co-design of initial wireframes and design refinement within focus group
settings held with paediatric rehabilitation patients, their parents/guardians, and clinicians
involved with this population.`,
    date: "2023-05-15",
    author: "John Doe",
    content: "Developing a Patient-Centered Portal",
    current: true,
  },
];

const CurrentResearch = () => {
  return (
    <div className="App pb-3">
      <NavBar />
      <section style={{ marginTop: "10vh" }} className="">
        <div className="currentResearchHero p-3 py-4 p-md-5">
          <div
            className="mb-3 mb-md-0 d-flex flex-column justify-content-center  "
            style={{ textAlign: "center", color: "#fff" }}
          >
            <h3
              style={{
                color: "rgb(0, 166, 162)",
                textAlign: "center",
              }}
            >
              Current Research
            </h3>
            <h1>Continuously Innovating and Evolving</h1>
            <div
              className="mt-3 mb-4 mx-auto"
              style={{
                borderBottom: "1px solid rgb(0,166,162)",
                width: "10%",
              }}
            ></div>
            <p
              className="px-3 px-md-5 text-center"
              style={{ fontSize: "1.2rem" }}
            >
              Research in clinical neuropsychology is vital for understanding
              how brain function impacts behavior and mental health. By
              exploring the connections between neurological processes and
              disorders, we aim to develop better diagnostics, treatments, and
              interventions for conditions like brain injuries and
              neurodegenerative diseases. We're committed to this work because
              each discovery helps improve patient care, offering new hope and
              transforming lives affected by neurological conditions
            </p>
            <Button
              variant="primary"
              style={{
                backgroundColor: "#00a6a2",
                borderColor: "#00a6a2",
                maxWidth: "fit-content",
              }}
              href="/contact-us"
              className="px-3 py-2 mt-3 main-btn mx-auto "
            >
              Get involved
            </Button>
            <a href="/past-research" className="mt-5 a-research">
              {" "}
              View Previous Research{" "}
            </a>
          </div>
        </div>
      </section>
      <section
        className="mb-5 p-5 px-md-5 px-2 pt-0"
        style={{ marginTop: "7em" }}
      >
        {researchData.map((item) => (
          <div className="mt-5">
            {" "}
            <div className="" style={{ textAlign: "left", marginTop: "50px" }}>
              <h1>{item.title}</h1>
              <div
                className="mt-3 mb-3 me-auto"
                style={{
                  borderBottom: "1px solid rgb(0,166,162)",
                  width: "10%",
                }}
              ></div>
            </div>
            <Row className="mt-4 d-flex flex-md-row flex-column-reverse ">
              <Col
                sm={6}
                className="d-flex flex-column justify-content-between align-items-center p-3"
              >
                <p
                  className="m-0 mt-2  my-auto"
                  style={{
                    fontSize: "16px",
                    textAlign: "justify",
                    lineHeight: "1.75rem",
                  }}
                >
                  {item.description}
                </p>
                <div
                  className=" mt-5"
                  style={{
                    backgroundColor: "#f8f9fa",
                    color: "black",
                    padding: "20px",
                    borderRadius: "10px",
                    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                    display: "inline-block",
                    maxWidth: "500px",
                  }}
                >
                  <h2
                    style={{
                      marginBottom: "15px",
                      fontWeight: "bold",
                      color: "rgb(0, 166, 162)",
                    }}
                  >
                    Want to Get Involved?
                  </h2>
                  <p className="mb-1" style={{ fontSize: "16px" }}>
                    We’d love to hear from you! Contact us, to get involved in
                    our exciting projects!
                  </p>
                  <Button
                    variant="primary"
                    style={{
                      backgroundColor: "#00a6a2",
                      borderColor: "#00a6a2",
                    }}
                    href="/contact-us"
                    className="px-3 py-2 mt-3 main-btn"
                  >
                    Get involved
                  </Button>
                </div>
              </Col>
              <Col sm={6} className="d-flex align-items-center">
                <img
                  className="rounded img-fluid mb-3 mb-md-0"
                  src={childImg}
                  width={"100%"}
                  height={"auto"}
                />
              </Col>
            </Row>
          </div>
        ))}
      </section>
      <section className="my-5">
        {" "}
        <Footer />
      </section>
    </div>
  );
};

export default CurrentResearch;
