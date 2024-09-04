import React from "react";
import "./whos-it-for.css";
import Navbar from "../../components/Navbar/navbar";
import Footer from "../../components/footer/footer";
import Hero from "./components/hero/hero";
import Role from "./components/role-section/role-section";
import Demo from "../../components/demo-section/demo-section";

const WhoIsItfor = () => {
  return (
    <div className="App pb-3">
      <Navbar />
      <section style={{ marginTop: "10vh" }}>
        <Hero />
      </section>
      <section className="mb-5">
        <Role />
      </section>
      <Demo />
      <Footer />
    </div>
  );
};

export default WhoIsItfor;
