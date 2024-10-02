import React from "react";
import "./collab-and-partners.css";
import Navbar from "../../components/Navbar/navbar";
import Footer from "../../components/footer/footer";
import erdf from "./logos/erdf.png";
import nihr from "./logos/nihr.png";
import salfordNHS from "./logos/salfordNhs.png";
import ukri from "./logos/ukri.png";
import him from "./logos/him.png";
import { Col, Row, Button } from "react-bootstrap";
import CollabInfo from "./logos/collabInfo/collabinfo";
import DemoSection from "../../components/demo-section/demo-section";
import CollabInfoData from "./collabinfoUpdate.json";

const CollabAndPartners = () => {
  const logos = [
    {
      id: 1,
      name: "erdf",
      url: erdf,
    },
    {
      id: 2,
      name: "nihr",
      url: nihr,
    },
    {
      id: 3,
      name: "salfordNHS",
      url: salfordNHS,
    },
    {
      id: 4,
      name: "ukri.png",
      url: ukri,
    },
    {
      id: 5,
      name: "him.png",
      url: him,
    },
  ];

  return (
    <div className="App pb-3">
      <Navbar />
      <section className="" style={{ marginTop: "10vh" }}>
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
              Collaborators & Partners
            </h3>
            <h1>Driving Innovation Through Partnerships</h1>
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
              Our work in clinical neuropsychology is strengthened by our
              collaborations with leading institutions, healthcare providers,
              and technology innovators. Together, we are pushing the boundaries
              of research, developing cutting-edge solutions to improve patient
              care, and expanding our understanding of brain health. By
              partnering with experts across disciplines, we ensure that our
              innovations are both impactful and far-reaching, accelerating
              progress in neurorehabilitation and beyond.
            </p>
            {/* <Button
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
            </Button> */}
          </div>
        </div>
      </section>
      <section style={{ marginTop: "7rem" }}>
        <CollabInfo collabs={CollabInfoData} />
      </section>
      <section style={{ marginTop: "7rem" }}>
        <DemoSection />
      </section>

      <section className="p-md-5 p-4">
        {" "}
        <Row className="d-flex flex-row">
          {logos.map((logo, index) => (
            <Col
              key={index}
              className="d-flex justify-content-center align-items-center"
            >
              <img
                src={logo.url}
                alt={logo.name}
                className="img-fluid"
                style={{ maxWidth: "100%" }} // Apply grayscale filter
              />
            </Col>
          ))}
        </Row>
      </section>
      <section>
        <Footer />
      </section>
    </div>
  );
};
export default CollabAndPartners;
