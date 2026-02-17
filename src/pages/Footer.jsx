/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

function Footer({ theme }) {
  const socialLinks = [
    {
      icon: FaGithub,
      url: "https://github.com/johnmarkguillero?tab=repositories",
      label: "GitHub",
    },
    {
      icon: FaLinkedin,
      url: "https://www.linkedin.com/in/john-mark-guillero-b836902a8/",
      label: "LinkedIn",
    },
  ];

  return (
    <footer
      style={{
        background: theme.colors[0],
        color: theme.text,
        borderTop: `1px solid ${theme.colors[2]}`,
        overflowX: "hidden", // 🔥 prevents horizontal overflow
      }}
      className="py-5 mt-5"
    >
      <div className="container" id="contact">
        {/* 🔥 Removed gy-4 (gutters cause overflow) */}
        <div className="row">
          {/* About */}
          <div className="col-12 col-md-4 mb-4">
            <h5 className="fw-bold mb-3">Guillero, John Mark</h5>
            <p className="mb-0" style={{ opacity: 0.8 }}>
              Frontend Developer building modern, responsive, and user-focused
              web applications.
            </p>
          </div>

          {/* Contact */}
          <div className="col-12 col-md-4 mb-4">
            <h6 className="fw-bold mb-3">Contact</h6>

            <p className="mb-2 d-flex align-items-center gap-2">
              <FaEnvelope />
              <a
                href="mailto:johnmarkguillero1@gmail.com"
                style={{
                  color: theme.text,
                  textDecoration: "none",
                  wordBreak: "break-word", // 🔥 prevents email overflow
                }}
              >
                johnmarkguillero1@gmail.com
              </a>
            </p>

            <p className="mb-0 d-flex align-items-center gap-2">
              <FaPhoneAlt />
              <a
                href="tel:+639999624267"
                style={{
                  color: theme.text,
                  textDecoration: "none",
                }}
              >
                +63 9999 624 267
              </a>
            </p>
          </div>

          {/* Social */}
          <div className="col-12 col-md-4 mb-4">
            <h6 className="fw-bold mb-3">Connect</h6>

            <div className="d-flex gap-4 fs-4">
              {socialLinks.map(({ icon: Icon, url, label }, index) => (
                <motion.a
                  key={index}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  whileHover={{ scale: 1.15, y: -4 }}
                  transition={{ type: "spring", stiffness: 260 }}
                  style={{ color: theme.text }}
                >
                  <Icon />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <hr
          style={{
            borderColor: theme.colors[2],
            marginTop: 40,
          }}
        />

        <div className="text-center small" style={{ opacity: 0.7 }}>
          © {new Date().getFullYear()} Guillero, John Mark. Built with React &
          passion.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
