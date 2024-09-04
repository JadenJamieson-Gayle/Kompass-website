import React from "react";
import "./about.css";
import Img from "./pexels-shkrabaanthony-5214997.jpg";
import Img2 from "./pexels-polina-tankilevitch-5234583.jpg";
import { Col, Row } from "react-bootstrap";

const About = () => {
  return (
    <div className="container-fluid" style={{ overflow: "visible" }}>
      <div className="row min-vh-100" style={{ overflow: "visible" }}>
        <div className="col-md-12 p-4 text-start">
          <Row className="mx-md-4 mb-md-5 pb-5">
            <Col sm={6} className="d-flex flex-column">
              <h3
                className="px-0"
                style={{ color: "rgb(0, 166, 162)", textAlign: "left" }}
              >
                About
              </h3>
              <h1 className="px-0"> The Kompass platform</h1>
              <div
                className="mt-2 mb-3"
                style={{
                  borderBottom: "1px solid rgb(0, 166, 162)",
                  width: "10%",
                }}
              ></div>
              <p
                className="mt-4 px-0"
                style={{ textAlign: "left", fontSize: "18px" }}
              >
                Kompass stands out as a uniquely tailored platform designed
                exclusively for clinical practice, setting it apart from generic
                goal-setting software. While other platforms may offer broad
                applications, Kompass has been intricately crafted to address
                the specific and nuanced needs within the realm of clinical
                practice, particularly in the field of neurorehabilitation.
              </p>

              <p
                className="mt-4 px-0"
                style={{ textAlign: "left", fontSize: "18px" }}
              >
                The inclusion of the World Health Organisation’s (WHO)
                International Classification of Functioning (ICF) and Goal
                Attainment Scaling (GAS) within the platform solidify its
                clinical use-case. In incorporating these elements, Kompass
                emerges as the comprehensive solution for rehabilitation goal
                setting and management.
              </p>

              <p
                className="mt-4 px-0"
                style={{ textAlign: "left", fontSize: "18px" }}
              >
                It amalgamates assessment and goal management, enabling the
                continuous tracking of clients throughout their rehabilitative
                journey. This holistic approach transforms Kompass into a
                cyclical, all-encompassing care tracking program, ensuring a
                unified and efficient system for managing and enhancing the
                rehabilitation process.
              </p>
            </Col>
            <Col sm={6} className="d-flex align-items-center">
              <div className="d-flex align-items-stretch w-100">
                <img
                  src={Img}
                  alt="Sticky Image"
                  className="rounded"
                  style={{
                    width: "100%",
                    objectFit: "cover",
                    maxHeight: "600px",
                  }}
                />
              </div>
            </Col>
          </Row>
          <Row className="mx-md-4 my-md-5 py-5">
            <Col sm={6} className="d-flex flex-column">
              <h3
                className="px-0"
                style={{ color: "rgb(0, 166, 162)", textAlign: "left" }}
              >
                Background
              </h3>
              <h1 className="px-0">The origins of Kompass</h1>
              <div
                className="mt-2 mb-3"
                style={{
                  borderBottom: "1px solid rgb(0, 166, 162)",
                  width: "10%",
                }}
              ></div>
              <p
                className="mt-4 px-0"
                style={{ textAlign: "left", fontSize: "18px" }}
              >
                Kompass was founded by Dr. Penny Trayner in 2018 in Manchester,
                UK, within a paediatric neuropsychology service. After 10 years
                of working in independent practice, goal setting remained a
                complex and time-consuming process, which was difficult to
                coordinate with busy multi-disciplinary teams.
              </p>

              <p
                className="mt-4 px-0"
                style={{ textAlign: "left", fontSize: "18px" }}
              >
                An extensive review of the literature on best-practice goal
                setting was conducted and culminated in a software application
                designed to take the gold-standard goal setting processes and
                streamline them into one system. The software was originally
                designed for use within its founding service, allowing the
                clinicians to spend more time with clients and less time on
                administrative tasks.
              </p>

              <p
                className="mt-4 px-0"
                style={{ textAlign: "left", fontSize: "18px" }}
              >
                After colleagues and peers within neurorehabilitation became
                interested and excited by the move towards innovative solutions
                to clinical problems, Kompass was born. Originally conceived to
                enhance the efficiency of the founding service, Kompass quickly
                gained traction within the neurorehabilitation community.
              </p>

              <p
                className="mt-4 px-0"
                style={{ textAlign: "left", fontSize: "18px" }}
              >
                Colleagues and peers in the field became intrigued and excited
                by the prospect of innovative solutions to clinical challenges.
                As a result, Kompass evolved into an online platform that
                facilitates time-efficient, cost-effective, and meaningful goal
                setting within teams, transcending geographical boundaries to
                impact services across Europe and North America.
              </p>
            </Col>
            <Col sm={6} className="d-flex align-items-center">
              <div className="d-flex align-items-stretch w-100">
                {" "}
                <img
                  src={Img2}
                  alt="Sticky Image"
                  className="img-fluid rounded"
                  style={{
                    width: "100%",
                    objectFit: "cover",
                    maxHeight: "700px",
                  }}
                />
              </div>
            </Col>
          </Row>
          <Row className="mx-md-4 my-md-5 py-5">
            <h3
              className="px-0"
              style={{ color: "rgb(0, 166, 162)", textAlign: "left" }}
            >
              Future goals
            </h3>
            <h1 className="px-0"> Looking forward</h1>
            <div
              className="mt-2 mb-3"
              style={{
                borderBottom: "1px solid rgb(0, 166, 162)",
                width: "10%",
              }}
            ></div>
            <p
              className="mt-4 px-0"
              style={{ textAlign: "left", fontSize: "18px" }}
            >
              Looking forward, Kompass envisions dynamic growth through
              strategic initiatives aimed at ensuring widespread accessibility.
              Collaborations with Health Innovation Manchester and Innovate UK
              provide valuable insights, guiding the platform's expansion into
              diverse healthcare ecosystems.
            </p>

            <p
              className="mt-4 px-0"
              style={{ textAlign: "left", fontSize: "18px" }}
            >
              The software's adaptability within the NHS trial sets a solid
              foundation for scaling its impact, and continuous user feedback
              loops, iterative development, and ongoing research will further
              fortify Kompass's efficacy and relevance.
            </p>

            <p
              className="mt-4 px-0"
              style={{ textAlign: "left", fontSize: "18px" }}
            >
              The platform's commitment to inclusivity involves refining for
              international markets and adapting to emerging healthcare
              technologies. By combining innovative features with a user-centric
              approach, Kompass is poised to scale organically, empowering
              healthcare professionals and transforming rehabilitation practices
              on a global scale.
            </p>

            <p
              className="mt-4 px-0"
              style={{ textAlign: "left", fontSize: "18px" }}
            >
              The vision of Kompass extends beyond being a mere tool; it is a
              catalyst for positive change, breaking barriers, and ushering in a
              new era of holistic, accessible, and effective
              neurorehabilitation.
            </p>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default About;
