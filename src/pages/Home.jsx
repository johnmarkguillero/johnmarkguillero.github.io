import { useEffect, useState } from "react";
import AOS from "aos";
import MyImage from "../assets/Me.png";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

function Home({ theme }) {
  const [text, setText] = useState("");
  const fullText = "Fullstack Developer";
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    let i = 0;
    const typing = setInterval(() => {
      setText(fullText.slice(0, i + 1));
      i++;
      if (i === fullText.length) clearInterval(typing);
    }, 80);

    return () => clearInterval(typing);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY * 0.1);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        padding: "40px 20px",
        background: `linear-gradient(135deg, ${theme.colors[0]}, ${theme.colors[1]})`,
        color: theme.text,
      }}
    >
      {/* Background Glow */}
      <div
        style={{
          position: "absolute",
          width: "400px",
          height: "400px",
          background: theme.colors[2],
          borderRadius: "50%",
          top: "-150px",
          right: "-150px",
          filter: "blur(150px)",
          opacity: 0.25,
          transform: `translateY(${offset}px)`,
        }}
      />

      {/* Main Content */}
      <div
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "40px",
          maxWidth: "1100px",
          width: "100%",
          zIndex: 2,
        }}
      >
        {/* LEFT SIDE - TEXT */}
        <div style={{ flex: "1 1 500px" }}>
          <h1
            style={{
              fontSize: "2.8rem",
              fontWeight: 700,
              lineHeight: "1.2",
            }}
          >
            Hi, I'm{" "}
            <span
              style={{
                color: theme.colors[2],
                WebkitTextStroke: `1px ${theme.text === "#ffffff" ? "#ffffff" : "#000000"}`,
                textShadow: `
                  0 0 10px ${theme.colors[2]}80,
                  0 4px 20px ${theme.colors[2]}40
                `,
                letterSpacing: "1px",
              }}
            >
              GUILLERO, JOHN MARK12321313
            </span>
          </h1>

          <h2
            style={{
              marginTop: "10px",
              minHeight: "40px",
              fontSize: "1.4rem",
              fontWeight: 400,
              opacity: 0.9,
            }}
          >
            {text}
            <span className="typing-cursor">|</span>
          </h2>

          <p style={{ marginTop: "20px", opacity: 0.8 }}>
            I build modern, scalable, and responsive web applications with clean
            code and beautiful UI.
          </p>

          {/* Buttons */}
          <div style={{ marginTop: "30px", display: "flex", gap: "15px" }}>
            <a
              href="#projects"
              style={{
                padding: "12px 28px",
                borderRadius: "30px",
                background: theme.colors[2],
                color: "#fff",
                textDecoration: "none",
                fontWeight: 600,
                boxShadow: `0 5px 15px ${theme.colors[2]}60`,
              }}
            >
              View Projects
            </a>

            <a
              href="#contact"
              style={{
                padding: "12px 28px",
                borderRadius: "30px",
                border: `1px solid ${theme.text}`,
                color: theme.text,
                textDecoration: "none",
                fontWeight: 500,
              }}
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* RIGHT SIDE - IMAGE */}
        <div
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-delay="300"
          style={{
            flex: "1 1 350px",
            display: "flex",
            justifyContent: "center",
            perspective: "1000px", // needed for 3D
          }}
        >
          <motion.div
            className="image-wrapper"
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            whileHover={{
              scale: 1.05,
              rotate: 1.5,
            }}
            style={{
              display: "inline-block",
              borderRadius: "24px",
            }}
          >
            <motion.img
              src={MyImage}
              alt="John Mark"
              initial={{ scale: 0.9 }}
              animate={{
                scale: 1,
                y: [0, -8, 0], // floating animation
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              whileHover={{
                boxShadow: `
                  0 30px 60px rgba(0,0,0,0.35),
                  0 0 60px rgba(255,255,255,0.25)
                `,
              }}
              style={{
                width: "320px",
                height: "380px",
                objectFit: "cover",
                borderRadius: "20px",
                boxShadow: `
                  0 20px 40px rgba(0,0,0,0.25),
                  0 0 40px rgba(255,255,255,0.15)
                `,
              }}
            />
          </motion.div>
        </div>
      </div>

      {/* Cursor Animation */}
      <style>
        {`
          .typing-cursor {
            animation: blink 1s infinite;
          }

          @keyframes blink {
            0%, 50%, 100% { opacity: 1; }
            25%, 75% { opacity: 0; }
          }
        `}
        {`
        .animated-image {
          animation: float 5s ease-in-out infinite;
        }

        .image-wrapper:hover .animated-image {
          transform: scale(1.05);
          box-shadow:
            0 25px 50px rgba(0,0,0,0.35),
            0 0 60px rgba(255,255,255,0.25);
        }

        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
          100% { transform: translateY(0px); }
        }
      `}
      </style>
    </section>
  );
}

export default Home;
