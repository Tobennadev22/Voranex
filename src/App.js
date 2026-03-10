import Navbar from "./layout/Navbar";
import Home from "./pages/Home";
import { Box } from "@chakra-ui/react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/About";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Footer from "./layout/Footer";
import Cta from "./layout/Cta";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800, // animation duration (ms)
      easing: "ease-in-out",
      once: true, // animate only once
      offset: 120, // trigger point
    });
    console.log("AOS initialized");
  }, []);

  return (
    <Box>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
      <Cta />
      <Footer />
    </Box>
  );
}

export default App;
