import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import ProductPage from "./pages/ProductPage";
import HeroSection from "./components/Hero";

function App() {
  return (
    <Router>
      <div className="font-sans">
        <Header />
        <Routes>
          <Route path="/" element={<HeroSection/>} />   {/* Home Page */}
          <Route path="/product" element={<ProductPage />} /> {/* Product Page */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
