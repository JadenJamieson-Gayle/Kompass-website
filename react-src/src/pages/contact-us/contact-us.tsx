import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import logo from "../../components/Navbar/komapss_logo.png";
import axios from "axios";
import Footer from "../../components/footer/footer";
import "./contact-us.css";
import Navbar from "../../components/Navbar/navbar";
interface Post {
  id: number;
  acf: {
    logo_home: {
      url: string;
    };
  };
}

const ContactUs = () => {
  const [LogoUrl, setLogoUrl] = useState<Post[]>([]);

  useEffect(() => {
    axios
      .get(
        "http://localhost:8000/wp-json/wp/v2/endorsement-logo?acf_format=standard&_fields=id,acf"
      )
      .then((response) => {
        setLogoUrl(response.data);
      })
      .catch((error) => console.error(error));
  }, []);
  return (
    <>
      {/* <Row className="px-5">
        <Link to="/" className="d-flex justify-content-start px-0 mx-0">
          <img
            alt="logo"
            src={logo}
            width="200px"
            height="fit-content"
            className="d-inline-block align-top "
            style={{
              maxHeight: "300px",
              minHeight: "50px",
              minWidth: "18%",
              cursor: "pointer",
            }}
          />
        </Link>
      </Row> */}
      <section className="mt-5">
        <Navbar />
      </section>

      <Container
        fluid
        className="p-5 mt-1 pt-3 pt-md-0 d-flex flex-md-row flex-column"
      >
        <Col className="p-md-5 pt-md-7 pt-3 my-md-0 my-3 d-flex flex-column align-items-start justify-content-center">
          <h1
            className=""
            style={{ fontSize: "4rem !important", fontWeight: "600" }}
          >
            <span style={{ color: "rgb(0, 166, 162)", fontSize: "23.284px" }}>
              Contact us
            </span>
            <br /> Get in touch with Kompass
          </h1>
          <div
            className="mt-2 mb-3"
            style={{ borderBottom: "1px solid rgb(0,166,162)", width: "10%" }}
          ></div>
          <p className="m-0 mt-4 me-3" style={{ fontWeight: "400" }}>
            {" "}
            Connect with our team today, and we'll help you implement solutions
            that streamline patient goal tracking and improve rehabilitation
            outcomes. Whether you're ready to optimize your process or just want
            to learn more about how we can support your efforts, we're here to
            help.
          </p>
          <Row className="mt-5">
            {LogoUrl.map((item, index) => {
              if (index < 3) {
                return (
                  <Col
                    xs={12}
                    sm={6}
                    md={4}
                    className="px-4 my-3 d-flex justify-content-center align-items-center"
                    key={index}
                  >
                    <img
                      src={item.acf.logo_home.url}
                      style={{
                        maxWidth: "100%", // Makes sure the image is responsive within the column
                        maxHeight: "100px", // Keeps the height under control
                        objectFit: "contain", // Ensures the entire logo fits without distortion
                      }}
                      alt={`logo-${index}`}
                    />
                  </Col>
                );
              }
              return null;
            })}
          </Row>
        </Col>
        <Col className="p-md-5 pt-7 my-md-0 mb-3">
          <form className="d-flex flex-column w-100">
            <div className="form-floating mb-4">
              <input
                type="text"
                className="form-control demo-input-form"
                id="full-name"
                placeholder=""
              />
              <label htmlFor="floatingInput" className="demo-input-form-label">
                Full name
              </label>
            </div>
            <div className="form-floating mb-4">
              <input
                type="email"
                className="form-control demo-input-form"
                id="floatingInput"
                placeholder=""
              />
              <label htmlFor="floatingInput" className="demo-input-form-label">
                Email address
              </label>
            </div>
            <div className="form-floating mb-4">
              <input
                type="text"
                className="form-control demo-input-form"
                id="company-name"
                placeholder=""
              />
              <label htmlFor="floatingInput" className="demo-input-form-label">
                Company name
              </label>
            </div>
            <div className="form-floating mb-4">
              <input
                type="text"
                className="form-control demo-input-form"
                id="job-title"
                placeholder=""
              />
              <label htmlFor="floatingInput" className="demo-input-form-label">
                Job title
              </label>
            </div>
            <div className="form-floating mb-4">
              <input
                type="tel"
                className="form-control demo-input-form"
                id="phone-number"
                placeholder=""
              />
              <label htmlFor="floatingInput" className="demo-input-form-label">
                Phone number
              </label>
            </div>
            <div className="form-floating mb-4">
              <textarea
                className="form-control demo-input-form"
                id="comment"
                placeholder=""
                style={{ height: "150px" }}
              ></textarea>
              <label htmlFor="comment" className="demo-input-form-label">
                Comment
              </label>
            </div>

            <button
              type="submit"
              className="btn main-btn mt-5"
              style={{ width: "fit-content" }}
            >
              Contact us
            </button>
          </form>
        </Col>
      </Container>
      <Footer />
    </>
  );
};

export default ContactUs;
