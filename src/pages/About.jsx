// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import developerImg from "../assets/character.png";
import { FaHtml5, FaCss3Alt, FaJs, FaDatabase } from "react-icons/fa";
import acipLogo from "../assets/Acip_International.jfif";
import jcbaLogo from "../assets/jcba.jfif";
import birLogo from "../assets/birpasig.jfif";

function About({ theme }) {
  return (
    <section
      id="about"
      className="position-relative py-5 overflow-hidden"
      style={{
        background: `linear-gradient(135deg, ${theme.colors[0]}, ${theme.colors[1]}, ${theme.colors[2]})`,
        color: theme.text,
      }}
    >
      <div className="container">
        {/* ================= ABOUT TOP SECTION ================= */}
        <div className="row align-items-center mb-5">
          {/* Character SVG */}
          <motion.div
            className="col-md-6 text-center"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.img
              src={developerImg}
              alt="Developer Illustration"
              className="img-fluid"
              style={{
                maxHeight: "420px",
                transformOrigin: "60% 35%",
              }}
              animate={{ y: [0, -15, 0] }}
              transition={{
                y: {
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
              whileHover={{
                rotate: [0, 10, -8, 10, -5, 0],
              }}
            />
          </motion.div>

          {/* About Me Information */}
          <motion.div
            className="col-md-6 mb-4 mb-md-0"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div
              style={{
                backdropFilter: "blur(15px)",
                background: "rgba(255,255,255,0.1)",
                padding: "40px",
                borderRadius: "20px",
                boxShadow: "0 8px 32px rgba(0,0,0,0.2)",
              }}
            >
              <h2 className="fw-bold mb-4 display-5">About Me</h2>

              <p className="lead">
                I am a detail-oriented engineer and web developer passionate
                about building scalable and efficient applications.
              </p>

              <p>
                My expertise includes SQL, JavaScript, HTML, CSS, and backend
                systems. I enjoy transforming ideas into real-world digital
                solutions.
              </p>

              {/* 🚀 Animated Tech Stack */}
              <div className="d-flex gap-4 mt-4 fs-2">
                {[FaHtml5, FaCss3Alt, FaJs, FaDatabase].map((Icon, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Icon />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* ================= EXPERIENCE SECTION ================= */}

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
        >
          <h3 className="fw-bold mb-5 text-center display-6">
            Work Experience
          </h3>

          <div className="row g-4">
            <ExperienceCard
              theme={theme}
              logo={acipLogo}
              title="ACIP INTL PHILS INC"
              date="August 19, 2025 - February 11, 2026"
              description={[
                "Develop software tailored to client preferences.",
                "Handle client queries and technical concerns.",
                "Develop and optimize databases and backend servers.",
                "Implement and assign security features.",
                "Develop and enhance Timekeeping & Payroll Systems.",
              ]}
            />

            <ExperienceCard
              theme={theme}
              logo={jcbaLogo}
              title="JCBA Solutions and Consultancy, Inc"
              date="Internship"
              description={[
                "SAP B1 installation, maintenance, and customization.",
                "Full Stack Development and application maintenance.",
                "Windows App development and SQL database management.",
                "Crystal Reports development.",
              ]}
            />

            <ExperienceCard
              theme={theme}
              logo={birLogo}
              title="BIR PASIG"
              date="Internship"
              description={[
                "Assisted taxpayers with concerns and inquiries.",
                "Managed TIN ID applications.",
                "Ensured data accuracy and organized records.",
              ]}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ================= REUSABLE EXPERIENCE CARD ================= */

function ExperienceCard({ theme, logo, title, date, description }) {
  return (
    <motion.div
      className="col-md-4"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -10 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <motion.div
        style={{
          backdropFilter: "blur(12px)",
          background: "rgba(255,255,255,0.08)",
          padding: "30px",
          borderRadius: "20px",
          height: "100%",
          boxShadow: "0 8px 30px rgba(0,0,0,0.2)",
          border: `1px solid rgba(255,255,255,0.15)`,
          transition: "all 0.3s ease",
        }}
        whileHover={{
          boxShadow: `0 12px 40px ${theme.colors[2]}40`,
        }}
      >
        {/* Logo */}
        <div className="text-center mb-3">
          <img
            src={logo}
            alt={title}
            style={{
              width: "70px",
              height: "70px",
              objectFit: "contain",
              borderRadius: "12px",
              background: "#fff",
              padding: "5px",
            }}
          />
        </div>

        {/* Title */}
        <h5 className="fw-bold text-center">{title}</h5>
        <p className="small text-center opacity-75">{date}</p>

        {/* Description */}
        <ul className="mt-3 ps-3">
          {description.map((item, index) => (
            <motion.li
              key={index}
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
              style={{ marginBottom: "8px" }}
            >
              {item}
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </motion.div>
  );
}

export default About;
