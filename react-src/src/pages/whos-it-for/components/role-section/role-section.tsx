import React, { useEffect } from "react";
import "./role-section.css";
import { Row, Col } from "react-bootstrap";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import RoleData from "./role-data.json";
import images from "../hero/collab.jpg";

gsap.registerPlugin(ScrollTrigger);

const Role: React.FC = () => {
  const sections = gsap.utils.toArray(".content-section") as HTMLElement[];

  console.log(sections);
  useEffect(() => {
    sections.forEach((section) => {
      // Cast section to HTMLElement to ensure correct type
      gsap.from(section, {
        opacity: 0,
        y: 50,
        duration: 1,
        scrollTrigger: {
          trigger: section,
          start: "top top", // When the top of the section reaches 80% of the viewport height
          toggleActions: "play none none reverse",
        },
      });
    });
  }, []);

  return (
    <div className="container-fluid p-md-5" id="roles">
      <Row>
        <Col md={3} className="mt-3 mt-md-3">
          <div className="sticky-menu sticky-top" style={{ top: "15vh" }}>
            <ul className="menu-list">
              {RoleData.map((item, index) => (
                <li key={index} className="menu-item">
                  <a
                    href={`#${item.title.toLowerCase().replace(/\s+/g, "-")}`}
                    className="menu-link ps-2"
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </Col>
        <Col md={9}>
          {RoleData.map((item, index) => (
            <section
              key={item.id}
              id={item.title.toLowerCase().replace(/\s+/g, "-")}
              className="content-section  px-3"
              style={{ top: "10vh" }}
            >
              <div className="row  " style={{ backgroundColor: "transparent" }}>
                <h1 className="text-kompass-brand mb-5">{item.title}</h1>
                <Col sm={6} className="d-flex flex-column  align-items-center">
                  {" "}
                  {item.content.map((paragraph) => (
                    <div className=" text-start my-3">{paragraph}</div>
                  ))}
                </Col>
                <Col sm={6} className="mt-3 mt-md-0">
                  <img
                    src={images}
                    alt="Social Worker assisting a community"
                    className="img-fluid rounded shadow"
                  />
                </Col>
              </div>
            </section>
          ))}
        </Col>
      </Row>
    </div>
  );
};

export default Role;
