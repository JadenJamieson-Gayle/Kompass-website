import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PricingPage from "./pages/pricing/pricing";
import Home from "./pages/home/home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/pricing" element={<PricingPage />} />{" "}
        <Route path="/" element={<Home />} />{" "}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
