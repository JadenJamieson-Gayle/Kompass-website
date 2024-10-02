import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PricingPage from "./pages/pricing/pricing";
import Home from "./pages/home/home";
import About_kompass from "./pages/about-kompass/about-kompass";
import The_team from "./pages/the-team/the-team";
import FAQ from "./pages/FAQ/FAQ";
import RequestDemoPage from "./pages/request-demo-page/request-demo-page";
import ContactUs from "./pages/contact-us/contact-us";
import WhoIsItfor from "./pages/whos-it-for/whos-it-for";
import CurrentResearch from "./pages/current-research/current-research";
import PastResearch from "./pages/past-research/past-research";
import CollabAndPartners from "./pages/collab-and-partners/collab-and-partners";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/pricing" element={<PricingPage />} />{" "}
        <Route path="/" element={<Home />} />{" "}
        <Route path="/about-kompass" element={<About_kompass />} />{" "}
        <Route path="/the-team" element={<The_team />} />{" "}
        <Route path="/current-research" element={<CurrentResearch />} />
        <Route path="/past-research" element={<PastResearch />} />
        <Route path="/collaborators-partners" element={<CollabAndPartners />} />
        <Route path="/faqs" element={<FAQ />} />
        <Route path="/request-a-demo" element={<RequestDemoPage />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/who-is-it-for" element={<WhoIsItfor />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
