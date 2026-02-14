import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [themeColor, setThemeColor] = useState({
  colors: ["#0077be", "#00aaff", "#00d4ff"],
    text: "#ffffff",
  }); // default to first color

  useEffect(() => {
    document.body.classList.toggle("dark-mode", darkMode);
  }, [darkMode]);

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
        <Home theme={themeColor}/>
        <About />
        <Projects />
      </main>

    </>
  );
}

export default App;