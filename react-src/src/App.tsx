import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PricingPage from "./pages/pricing/pricing";
import Home from "./pages/home/home";
import About_kompass from "./pages/about-kompass/about-kompass";
import The_team from "./pages/the-team/the-team";
import FAQ from "./pages/FAQ/FAQ";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/pricing" element={<PricingPage />} />{" "}
        <Route path="/" element={<Home />} />{" "}
        <Route path="/about-kompass" element={<About_kompass />} />{" "}
        <Route path="/the-team" element={<The_team />} />{" "}
        <Route path="/faqs" element={<FAQ />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
