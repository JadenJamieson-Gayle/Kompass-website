import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./footer.css";
import logo from "../Navbar/komapss_logo.png";
import { Button } from "react-bootstrap";
// Assuming your CSS is applicable for React as well

// Define the props for the Footer component if needed
type FooterProps = {
  // Define any props here
};

const Footer: React.FC<FooterProps> = (props) => {
  // Define any state or functions here

  return (
    <footer className="m-md-5 m-3">
      <Container
        fluid
        className="footer d-flex flex-column justify-content-between p-3"
        id="footer-container"
        style={{
          marginTop: "auto",
          clear: "both",
          minHeight: "fit-content",
        }}
        data-aos="fade-up"
        data-aos-duration="500"
        data-aos-delay="300"
      >
        <Row className="d-flex  mb-4 flex-md-row flex-column px-4 py-3">
          <Col sm={4} className="d-flex flex-column ">
            <img
              alt="logo"
              src={logo}
              height="fit-content"
              className="d-inline-block align-top me-5 kompass-footer-img img-fulid align-self-start ps-0  w-auto"
              style={{ maxWidth: "400px !important" }}
            />{" "}
            <h4
              className="text-start mt-3 ms-2 fw-bold "
              style={{ letterSpacing: "1px", fontSize: "1.25rem" }}
            >
              Empowering Innovation and Transforming Healthcare: A Future Driven
              by Technology and Focused on Patients.
            </h4>
            <Button
              variant="primary"
              href="/request-a-demo"
              className=" px-3 py-2 mt-4 ms-2 demo-btn w-50 align-self-start"
            >
              Request a Demo
            </Button>
          </Col>
          <Col className=" d-flex offset-md-1 mb-3 mt-3 align-items-center ">
            {/* <Row>
              <form>
                <h5>Subscribe to our newsletter</h5>
                <p>Monthly digest of what's new and exciting from us.</p>
                <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                  <label htmlFor="newsletter1" className="visually-hidden">
                    Email address
                  </label>
                  <input
                    id="newsletter1"
                    type="text"
                    className="form-control align-self-center text-start "
                    placeholder="Email address"
                    style={{ maxHeight: "30px", maxWidth: "100%" }}
                  />
                  <Button id="subButton" type="button" className="main-btn">
                    Subscribe
                  </Button>
                </div>
              </form>
            </Row> */}

            <Col className="d-flex flex-column  justify-content-center">
              <h3>About us</h3>
              <ul className="list-unstyled mt-2">
                <li className="my-2">About Kompass</li>
                <li className="my-2">The team</li>
                <li className="my-2">Who is it for</li>
              </ul>
            </Col>
            <Col className="d-flex flex-column  justify-content-center">
              {" "}
              <h3>Research</h3>
              <ul className="list-unstyled mt-2">
                <li className="my-2">Current Research</li>
                <li className="my-2">Past Research</li>
                <li className="my-2">Collaborators & Partners</li>
              </ul>
            </Col>
            <Col className="d-flex flex-column  justify-content-center">
              {" "}
              <h3>Support</h3>
              <ul className="list-unstyled mt-2">
                <li className="my-2">Support Packages</li>
                <li className="my-2">Contact Us</li>
                <li className="my-2">FAQ's</li>
              </ul>
            </Col>
          </Col>
        </Row>
        <Row className="SocialRow m-3 pt-2 mt-auto fixed-bottom d-flex flex-md-row flex-column">
          <Col className="mt-2 px-0 d-flex align-items-center justify-content-md-start justify-content-center  ">
            <p className="text-start">© 2024 Kompass®. All rights reserved.</p>
          </Col>
          <Col className=" px-0 ">
            <ul className="list-unstyled d-flex justify-content-md-end justify-content-center">
              <li className="ms-1">
                <a
                  href="https://www.instagram.com/goal_manager_/"
                  className="btn "
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://gmtest.co.uk/goal-manager/wp-content/themes/GoalManager/assets/images/icons8-instagram.svg"
                    alt="instagram"
                  />
                </a>
              </li>
              <li className="ms-1">
                <a
                  href="https://twitter.com/Goal_Manager_"
                  className="btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://gmtest.co.uk/goal-manager/wp-content/themes/GoalManager/assets/images/icons8-twitter.svg"
                    alt="twitter"
                  />
                </a>
              </li>
              <li className="ms-1">
                <a
                  href="https://www.linkedin.com/company/goalmanager/?viewAsMember=true"
                  className="btn "
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://gmtest.co.uk/goal-manager/wp-content/themes/GoalManager/assets/images/icons8-linkedin.svg"
                    alt="linkedin"
                  />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
