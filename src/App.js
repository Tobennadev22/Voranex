import Navbar from "./layout/Navbar";
import Home from "./pages/Home";
import { Box } from "@chakra-ui/react";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

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
      <Navbar />
      <Home />
    </Box>
  );
}

export default App;
