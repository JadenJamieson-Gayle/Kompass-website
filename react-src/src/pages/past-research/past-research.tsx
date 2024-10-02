import React from "react";
import medTech from "./medtech.jpg";
import "./past-research.css";
import { Button, Row, Col } from "react-bootstrap";
import Footer from "../../components/footer/footer";
import NavBar from "../../components/Navbar/navbar";

const PastResearch = () => {
  const researchData = [
    {
      id: 1,
      title:
        "Enhancing Neurorehabilitation through Data-Driven Innovation: The Development of the Kompass Data Dashboard",
      description: `Funding from Innovate UK aided the development of a Data Dashboard within the Kompass
platform, enabling institutions to access and analyse data with ease, fostering research into
rehabilitative practices and enhancing knowledge across disciplines. To establish the data
needs and potential applications of the Data Dashboard, seven focus group discussions
were held with twelve neurorehabilitation professionals, including both current and
prospective Kompass users. Thematic analysis of these discussions revealed key themes:
The Fundamental Nature of Outcome Tracking, Clinical Reasoning in Care, Data-Driven
Treatment Plans, Holistic Care, Idiosyncratic Reporting Needs and Attitudes Towards
Technology. Focus group outputs directly influenced the design and functionality of the Data
Dashboard, valued as an advance to current systems, replacing inefficient paper-based
methods or legacy technology to boost efficiency, saving time and resources. Participants
highlighted the Dashboard's potential to aid service-wide monitoring, funding applications,
and address legal considerations, with the ability to input and track various outcome data.
Future research applications were positively regarded, with substantial demand for literature
addressing rehabilitation practices, to promote shared knowledge amongst rehabilitation
services across various disciplines.`,
      date: "2023-05-15",
      author: "John Doe",
      content: "",
      current: false,
    },
  ];

  return (
    <div className="App pb-3">
      <NavBar />
      <section style={{ marginTop: "10vh" }} className="">
        <div className="pastResearchHero p-3 py-4 p-md-5">
          <div
            className="mb-3 mb-md-0 d-flex flex-column justify-content-center"
            style={{ textAlign: "center", color: "#fff" }}
          >
            <h3
              style={{
                color: "rgb(0, 166, 162)",
                textAlign: "center",
              }}
            >
              Past Research
            </h3>
            <h1>Building on a Legacy of Innovation</h1>
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
              Our past research in clinical neuropsychology has played a
              critical role in advancing patient care by improving our
              understanding of how brain function affects behavior and
              cognition. We’ve pioneered the use of technology to track
              neurological health, enabling more accurate diagnostics and
              personalized treatments for conditions like neurodegenerative
              diseases and brain injuries. These innovations have not only
              enhanced the quality of care but have also empowered clinicians to
              monitor progress and adjust treatments in real time. Our
              achievements continue to guide future research as we push the
              boundaries of what’s possible in patient care and neurological
              health.
            </p>
            <Button
              variant="primary"
              style={{
                backgroundColor: "#00a6a2",
                borderColor: "#00a6a2",
                maxWidth: "fit-content",
              }}
              href="/contact-us"
              className="px-3 py-2 mt-3 main-btn mx-auto"
            >
              Get Involved
            </Button>
            <a href="/current-research" className="mt-5 a-research">
              Explore Current Research
            </a>
          </div>
        </div>
      </section>
      <section
        className="mb-5 p-5 px-md-5 px-2 pt-0"
        style={{ marginTop: "7rem" }}
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
            <Row className="mt-5 d-flex flex-md-row flex-column-reverse ">
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
                <Button
                  className="px-3 py-2 mt-3 main-btn"
                  variant="primary"
                  style={{
                    backgroundColor: "#00a6a2",
                    borderColor: "#00a6a2",
                  }}
                >
                  Download Research Booklet
                </Button>
              </Col>
              <Col sm={6} className="d-flex align-items-start">
                <img
                  className="rounded img-fluid mb-3 mb-md-0"
                  src={medTech}
                  width={"100%"}
                  height={"auto"}
                />
              </Col>
            </Row>
            <div
              className=" mt-5"
              style={{
                backgroundColor: "#f8f9fa", // Teal background
                color: "black", // White text
                padding: "20px",
                borderRadius: "10px",
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)", // Subtle shadow for depth
                display: "inline-block",
                maxWidth: "500px", // Width to fit within different screen sizes
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
                We’d love to hear from you! Contact us, to get involved in our
                exciting projects!
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
          </div>
        ))}
      </section>

      <section className="my-5">
        <Footer />
      </section>
    </div>
  );
};

export default PastResearch;
