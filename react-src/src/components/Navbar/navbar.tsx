import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Button, Offcanvas } from "react-bootstrap";
import "./navbar.css";
import logo from "./komapss_logo.png";
import logoWhite from "./Logologo_white.svg";
import NavDropdown from "../nav-dropdown/nav-dropdown";
import { Link } from "react-router-dom";

const CustomNavbar = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Navbar
        className="bg-body-tertiary"
        expand="lg"
        fixed="top"
        style={{ maxHeight: "500px" }}
      >
        <Container className="mx-md-5 mx-3 p-0" fluid>
          <Navbar.Brand href="#home">
            <Link to="/" className="d-flex justify-content-start">
              <img
                alt="logo"
                src={logo}
                width="200px"
                height="fit-content"
                className="d-inline-block align-top me-md-5"
                style={{
                  maxHeight: "300px",
                  minHeight: "50px",
                  minWidth: "18%",
                  cursor: "pointer",
                }}
              />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            onClick={handleShow}
          />
          <Navbar.Collapse id="basic-navbar-nav" className="d-none d-lg-flex">
            <Nav className="ms-auto me-5 text-center d-flex justify-content-end">
              <NavDropdown
                title={"About Us"}
                childtitles={["About Kompass", "The Team", "Our Purpose"]}
              />
              <NavDropdown
                title={"Research"}
                childtitles={[
                  "Current Research",
                  "Past Research",
                  "Collaborators & Partners",
                ]}
              />
              <NavDropdown
                title={"Support"}
                childtitles={["Support Packages", "Contact Us", "FAQs"]}
              />
              <Nav.Link className="mx-3" href="/pricing">
                Pricing
              </Nav.Link>
            </Nav>
            <Button
              variant="primary"
              style={{ backgroundColor: "#00a6a2", borderColor: "#00a6a2" }}
              href="https://ktest.co.uk/"
              className="px-3 py-2"
            >
              Login
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <Link to="/" className="d-flex justify-content-start">
              <img
                alt="logo"
                src={logoWhite}
                width="200px"
                height="fit-content"
                className="d-inline-block align-top me-md-5"
                style={{
                  maxHeight: "300px",
                  minHeight: "50px",
                  minWidth: "18%",
                  cursor: "pointer",
                }}
              />
            </Link>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="text-start pt-5 text-white">
          <Nav className=" d-flex flex-column">
            <div>
              <h5 className="text-start">About us</h5>
              <div className="border-top  text-start py-2">
                {" "}
                <Nav.Item>
                  {" "}
                  <Nav.Link className="p-1 ps-4 my-2 " href="/about-us">
                    About Kompass
                  </Nav.Link>
                </Nav.Item>
                <Nav.Link className="p-1 ps-4 my-2" href="/the-team">
                  The team
                </Nav.Link>
                <Nav.Link className="p-1 ps-4 my-2" href="/our-purpose">
                  Our purpose
                </Nav.Link>
              </div>
            </div>
            <div>
              <h5 className="text-start">Research</h5>
              <div className="border-top  text-start py-2">
                {" "}
                <Nav.Item>
                  {" "}
                  <Nav.Link className="p-1 ps-4 my-2 " href="/current-research">
                    Current research
                  </Nav.Link>
                </Nav.Item>
                <Nav.Link className="p-1 ps-4 my-2" href="/past-research">
                  Past research
                </Nav.Link>
                <Nav.Link
                  className="p-1 ps-4 my-2"
                  href="/collaborators-partners"
                >
                  Collaborators & partners
                </Nav.Link>
              </div>
            </div>
            <div>
              <h5 className="text-start">Support</h5>
              <div
                className="border-top 
             text-start py-2"
              >
                {" "}
                <Nav.Item>
                  {" "}
                  <Nav.Link className="p-1 ps-4 my-2 " href="/support-packages">
                    Support packages
                  </Nav.Link>
                </Nav.Item>
                <Nav.Link className="p-1 ps-4 my-2" href="/contact-us">
                  Contact us
                </Nav.Link>
                <Nav.Link className="p-1 ps-4 my-2" href="/faqs">
                  FAQ
                </Nav.Link>
              </div>
            </div>
            <div className="border-top">
              {" "}
              <Nav.Link className="p-1 ps-4 my-2" href="/pricing">
                Pricing
              </Nav.Link>
            </div>

            <Button
              variant="primary"
              style={{ backgroundColor: "#00a6a2", borderColor: "#00a6a2" }}
              href="https://ktest.co.uk/"
              className="px-3 py-2 mt-3"
            >
              Login
            </Button>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default CustomNavbar;
