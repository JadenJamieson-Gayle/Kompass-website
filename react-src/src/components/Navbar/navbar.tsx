import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Button } from "react-bootstrap";
import "./navbar.css";
import logo from "./komapss_logo.png";
import NavDropdown from "../nav-dropdown/nav-dropdown";
import { Link } from "react-router-dom";

const navbar = () => {
  return (
    <Navbar className="bg-body-tertiary" expand="lg" fixed="top">
      <Container className="mx-md-5 mx-3 p-0" fluid>
        <Navbar.Brand href="#home">
          <Link to="/" className="d-flex justify-content-start">
            {" "}
            <img
              alt="logo"
              src={logo}
              width="200px"
              height="fit-content"
              className="d-inline-block align-top me-md-5"
              style={{ maxHeight: "300px", minHeight: "50px", minWidth: "18%" }}
            />{" "}
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto me-5 text-center d-flex justify-content-end">
            <NavDropdown
              title={"About Us"}
              childtitles={["The Kompass Platform", "The Team", "Our Purpose"]}
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
          </Button>{" "}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default navbar;
