import React from "react";
import Navbar from "../../components/Navbar/navbar";
import Footer from "../../components/footer/footer";
import About from "./components/about/about";

const About_kompass = () => {
  return (
    <div className="App pb-3">
      <section className="mb-5" style={{ marginTop: "150px" }}>
        <Navbar />
        <About />
      </section>
      <section className="my-5">
        {" "}
        <Footer />
      </section>
    </div>
  );
};

export default About_kompass;
