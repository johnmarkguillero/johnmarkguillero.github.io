import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Footer from "./pages/Footer";

import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [themeColor, setThemeColor] = useState({
    colors: ["#1a1a2e", "#162447", "#1f4068"],
    text: "#ffffff",
  }); // default to first color

  useEffect(() => {
    document.body.classList.toggle("dark-mode", darkMode);
  }, [darkMode]);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        themeColor={themeColor}
        setThemeColor={setThemeColor}
      />

      <main
        style={{
          background: `linear-gradient(90deg, ${themeColor.colors.join(", ")})`, // use colors array
          color: themeColor.text, // use text color for all text inside main
          minHeight: "100vh",
          transition: "background 0.3s, color 0.3s", // smooth transition for background & text
        }}
      >
        <Home theme={themeColor} />
        <About theme={themeColor} />
        <Projects theme={themeColor} />
        
        <Footer theme={themeColor} />

      </main>
    </>
  );
}

export default App;
