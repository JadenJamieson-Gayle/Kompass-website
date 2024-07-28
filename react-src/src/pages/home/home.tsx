import React, { useRef, useEffect } from "react";
import Navbar from "../../components/Navbar/navbar";
import Hero from "./components/hero/hero";
import Endorsment from "./components/endorsments/endorsment";
import Features from "./components/features/features";
import Footer from "../../components/footer/footer";
import Affliations from "./components/affiliations/affliations";
import Testimoninals from "./components/testimoninals/testimoninals";
import Ethos from "./components/ethos/ethos";
import { gsap } from "gsap";

const Home = () => {
  const containerRef = useRef(null);
  useEffect(() => {
    const container = containerRef.current;

    gsap.to(container, {
      scrollTrigger: {
        trigger: container,
        start: "top center",
        end: "bottom center",
        scrub: true,
      },
      ease: "none",
    });
  }, []);

  return (
    <div className="App pb-3" ref={containerRef}>
      <section className="mb-5">
        <Navbar />
        <Hero />
      </section>
      <section className="my-5">
        <Ethos />
      </section>
      <section className="my-5">
        <Features />
      </section>
      <section className="my-5">
        <Endorsment />
      </section>
      <section className="my-5">
        <Testimoninals />
      </section>
      <section className="my-5" hidden>
        <Affliations />
      </section>
      <section className="my-5">
        {" "}
        <Footer />
      </section>
    </div>
  );
};

export default Home;
