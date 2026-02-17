import React, { useState } from "react";

function Navbar({ darkMode, themeColor, setThemeColor }) {
  const [showModal, setShowModal] = useState(false);
  const [selectedTheme, setSelectedTheme] = useState("");

  const colors = [
    {
      name: "Ocean Theme",
      value: ["#0077be", "#00aaff", "#00d4ff"],
      text: "#ffffff",
    },
    {
      name: "Sunset Theme",
      value: ["#ff5e5b", "#ffb400", "#ff8c42"],
      text: "#333333",
    },
    {
      name: "Forest Theme",
      value: ["#2d6a4f", "#52b788", "#95d5b2"],
      text: "#ffffff",
    },
    {
      name: "Lavender Theme",
      value: ["#9b5de5", "#f15bb5", "#fee440"],
      text: "#333333",
    },
    {
      name: "Moon Theme",
      value: ["#1a1a2e", "#162447", "#1f4068"],
      text: "#ffffff",
    },
  ];

  // Navbar class dynamically updates based on dark mode + theme color
  const navbarStyle = {
    background:
      themeColor.colors.length > 1
        ? `linear-gradient(90deg, ${themeColor.colors.join(", ")})`
        : themeColor.colors[0],
    color: themeColor.text, // apply text color dynamically
    transition: "background 0.3s, color 0.3s",
  };

  return (
    <>
      <nav
        className={`navbar navbar-expand-lg sticky-top shadow-sm navbar-${darkMode ? "dark" : "light"}`}
        style={navbarStyle}
      >
        <div className="container">
          <a
            className="navbar-brand fw-bold"
            href="#home"
            style={{ color: themeColor.text }}
          >
            Portfolio
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            style={{
              borderColor: themeColor.text,
            }}
          >
            <span
              className="navbar-toggler-icon"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='${encodeURIComponent(
                  themeColor.text,
                )}' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e")`,
              }}
            />
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center">
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#home"
                  style={{ color: themeColor.text }}
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#about"
                  style={{ color: themeColor.text }}
                >
                  About
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#projects"
                  style={{ color: themeColor.text }}
                >
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#contact"
                  style={{ color: themeColor.text }}
                >
                  Contact
                </a>
              </li>

              {/* Open Theme Modal */}
              <li className="nav-item ms-2">
                <button
                  className="btn"
                  style={{
                    color: themeColor.text, // button text color
                    borderColor: themeColor.text, // button border color
                    backgroundColor: "transparent", // keep transparent like outline button
                  }}
                  onClick={() => setShowModal(true)}
                >
                  Theme
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Theme Modal */}
      <div
        className={`modal fade ${showModal ? "show d-block" : ""}`}
        tabIndex="-1"
        style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
        onClick={() => setShowModal(false)}
      >
        <div
          className="modal-dialog modal-dialog-centered"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Select Theme Color</h5>
              <button
                type="button"
                className="btn-close"
                onClick={() => setShowModal(false)}
              ></button>
            </div>
            <div className="modal-body d-flex flex-wrap gap-3 justify-content-center">
              {colors.map((theme) => (
                <div
                  key={theme.name}
                  className="theme-card"
                  style={{
                    width: "150px",
                    borderRadius: "12px",
                    overflow: "hidden",
                    cursor: "pointer",
                    boxShadow:
                      selectedTheme === theme.name
                        ? "0 0 0 3px #00d4ff, 0 6px 15px rgba(0,0,0,0.2)"
                        : "0 4px 10px rgba(0,0,0,0.1)",
                    position: "relative",
                    transition: "transform 0.2s, box-shadow 0.2s",
                  }}
                  onClick={() => {
                    setSelectedTheme(theme.name);
                    setThemeColor({
                      colors: theme.value, // array of colors
                      text: theme.text, // corresponding text color
                    });
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-4px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  {/* Color Palette Preview */}
                  <div style={{ display: "flex", height: "70px" }}>
                    {theme.value.map((color, idx) => (
                      <div
                        key={idx}
                        style={{
                          background: color,
                          flex: 1,
                          transition: "opacity 0.2s",
                        }}
                      />
                    ))}
                  </div>

                  {/* Theme Name */}
                  <div
                    style={{
                      padding: "10px",
                      textAlign: "center",
                      background: `linear-gradient(90deg, ${theme.value.join(", ")})`, // dynamic gradient
                      fontWeight: "600",
                      color: "#fff",
                    }}
                  >
                    {theme.name}
                  </div>

                  {/* Checkmark overlay if selected */}
                  {selectedTheme === theme.name && (
                    <div
                      style={{
                        position: "absolute",
                        top: "8px",
                        right: "8px",
                        backgroundColor: "#00d4ff",
                        borderRadius: "50%",
                        width: "24px",
                        height: "24px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#fff",
                        fontWeight: "bold",
                      }}
                    >
                      ✓
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
