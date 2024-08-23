import React from "react";
import Navbar from "../../components/Navbar/navbar";
import Footer from "../../components/footer/footer";
import Team_Card from "./components/team-item/team-item";
import { Col } from "react-bootstrap";
import PennyImage from "../../assets/team-Images/penny.png";
import SimonImage from "../../assets/team-Images/simonTeam.jpeg";
import Support from "../../assets/team-Images/supportStock.svg";

const The_team = () => {
  const TeamData = [
    {
      name: "Dr Penny Trayner BSc (Hons), PGDip, DClinPsy, CPsychol, AFBPsS ",
      role: "Founder, CEO, Clinical Neuropsychologist, Clinical Director",
      about: `Dr Trayner has 15 years of experience within neurorehabilitation
                  as a clinician, holding the UK’s highest and gold-standard
                  qualification in paediatric clinical neuropsychology. She
                  specialises in community-based work, predominantly for children
                  and adolescents who have experienced catastrophic brain injuries.
                  Dr Trayner’s passion for enhancing rehabilitative care and
                  recognition of a lack of infrastructure to set and manage
                  rehabilitation goals, led to the development of Kompass`,
      src: PennyImage,
    },
    {
      name: "Simon Kelly BSc (Hons)",
      role: "Chief Technical Officer, Software Developer",
      about: `Simon is a highly experienced full-stack software developer, who has made extensive contributions to Kompass. Simon has contributed to numerous analogous projects, including a UKRI funded project developing a Data Dashboard, complementing the Kompass platform, showcasing his expertise and understanding of platform functionality. He has been involved with all initial developments to date, hence his continued collaboration on this project.`,
      src: SimonImage,
    },
    {
      name: "Support Staff",
      role: "",
      about:
        "Included in our team is a core delivery unit comprised of individuals with expertise in clinical, technical, and marketing support fields. The unity of clinical and technical roles has allowed us to provide a comprehensive and integrated approach to addressing the needs of our user base, ensuring that Kompass has remained best-practise, continuing the evidenced and literature-supported basis on which the software was founded. Consistent collaboration since the software's creation in 2019 has ensured that Kompass has remained innovative and quick to iterate, also supported by our involvement with major research and academic institutions including Health Innovation Manchester and the University of Essex.",
      src: Support,
    },
  ];
  return (
    <div className="App pb-3">
      <section className="mb-5">
        <Navbar />
      </section>
      <section style={{ marginBottom: "125px" }}>
        <div
          className="mb-4 mb-md-0"
          style={{ textAlign: "center", marginTop: "150px" }}
        >
          <h1 style={{ color: "black" }}>Meet the team</h1>
        </div>
        <div style={{ marginTop: "50px" }} className="d-flex flex-column">
          {TeamData.map((item, index) => (
            <Col>
              <Team_Card
                key={index}
                name={item.name}
                role={item.role}
                about={item.about}
                src={item.src}
                index={index}
              />
            </Col>
          ))}
          ;
        </div>
      </section>
      <section className="mb-5">
        <Footer />
      </section>
    </div>
  );
};

export default The_team;
