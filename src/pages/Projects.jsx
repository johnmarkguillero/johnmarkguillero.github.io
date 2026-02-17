// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaDatabase,
  FaReact,
  FaNodeJs,
  FaBootstrap,
  FaPhp,
  FaPython,
  FaWindows,
} from "react-icons/fa";

function Projects({ theme }) {
  const projects = [
    {
      title: "QwickId Website",
      description:
        "QwickId is a Watson-based digital ID management system that enables instant identity verification through QR code scanning. Each physical ID card contains a unique QR code on the back, which when scanned securely retrieves and displays the user's profile information in real-time. The system is built with a modern React frontend and an Express.js backend, integrated with AWS cloud services for hosting and deployment.",
      images: ["/Project_image/qwickid.png"],
      github: "#",
      techIcons: [FaReact, FaHtml5, FaCss3Alt, FaJs],
    },
    {
      title: "T.P.M (Online Timekeeping Payroll Management)",
      description:
        "A web-based Timekeeping and Payroll Management System developed using PHP, MySQL, JavaScript, jQuery, HTML, CSS, and Bootstrap. The system includes employee attendance tracking, payroll computation, authentication, and administrative reporting. Built and tested locally using XAMPP.",
      images: [
        "/Project_image/tpms1.png",
        "/Project_image/tpms2.png",
        "/Project_image/tpms3.png",
      ],
      github: "#",
      techIcons: [FaPhp, FaHtml5, FaCss3Alt, FaBootstrap, FaJs, FaDatabase],
    },
    {
      title:
        "Agricultural Rice Leaf Diseases Detection Using Convolutional Neural Networks",
      description:
        "An AI-powered image recognition system developed to detect and classify rice leaf diseases using Convolutional Neural Networks (CNN). The project focused on training and optimizing multiple VGG16-based deep learning models to improve classification accuracy. We analyzed the impact of training epochs, test size ratios, and validation splits on overall model performance. Results showed that increasing epochs generally improved accuracy, while balancing test size and validation splits was critical for preventing overfitting and underfitting. ",
      images: ["/Project_image/rice_leaf.png", "/Project_image/rice_leaf2.png"], // change to your actual image path
      github: "#",
      techIcons: [FaPython], // add TensorFlow / AI icons if you have them
    },

    {
      title: "E-Commerce Windows Application",
      description:
        "A desktop-based E-Commerce management system developed using Visual Basic and MySQL. The application features product catalog browsing, shopping cart functionality, secure checkout processing, receipt generation, and geolocation tagging during purchases.",
      images: ["/Project_image/Ecomm.png"],
      github: "#",
      techIcons: [FaWindows, FaDatabase],
    },
  ];

  return (
    <section
      id="projects"
      style={{ backgroundColor: theme.colors[3] }}
      className="py-5"
    >
      <div className="container">
        <div className="text-center mb-5 position-relative">
          <motion.h2
            className="fw-bold display-5"
            style={{
              color: theme.text,
            }}
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            My Projects
          </motion.h2>

          {/* Animated underline */}
          <motion.div
            style={{
              height: "4px",
              margin: "20px auto 0",
              borderRadius: "10px",
              background: `linear-gradient(90deg, ${theme.text}, ${theme.colors[2]}, ${theme.text})`,
            }}
            initial={{ width: 0 }}
            whileInView={{ width: "70%" }}
            transition={{ duration: 0.6, delay: 0.3 }}
          />
        </div>

        <div className="row g-3">
          {projects.map((proj, idx) => (
            <div className="col-lg-6" key={idx}>
              <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                whileHover={{ y: -8 }}
                viewport={{ once: true }}
                style={{
                  background: theme.colors[0],
                  borderRadius: "20px",
                  overflow: "hidden",
                  boxShadow: `0 20px 40px ${theme.colors[1]}30`,
                  transition: "0.4s ease",
                  height: "100%", // important
                  marginTop: "1%",
                }}
              >
                {/* Carousel */}
                <div
                  id={`carousel-${idx}`}
                  className="carousel slide"
                  data-bs-ride="carousel"
                >
                  <div className="carousel-inner">
                    {proj.images.map((img, i) => (
                      <div
                        key={i}
                        className={`carousel-item ${i === 0 ? "active" : ""}`}
                      >
                        <img
                          src={img}
                          className="d-block w-100"
                          alt={proj.title}
                          style={{
                            height: "300px",
                            objectFit: "cover",
                            transition: "0.4s ease",
                          }}
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Content */}
                <div className="p-4">
                  {/* Type Badge */}
                  {/* 🚀 Animated Tech Stack */}
                  <div className="d-flex gap-4 mt-1 fs-3">
                    {proj.techIcons?.map((Icon, i) => (
                      <motion.div
                        key={i}
                        whileHover={{ scale: 1.2, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        style={{ color: theme.text }}
                      >
                        <Icon />
                      </motion.div>
                    ))}
                  </div>

                  <h4 className="fw-bold mt-3" style={{ color: theme.text }}>
                    {proj.title}
                  </h4>

                  <p
                    style={{
                      color: theme.text,
                      opacity: 0.8,
                    }}
                  >
                    {proj.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="d-flex flex-wrap gap-2 mt-3">
                    {proj.tech?.map((tech, i) => (
                      <span
                        key={i}
                        style={{
                          fontSize: "0.75rem",
                          padding: "6px 14px",
                          borderRadius: "50px",
                          background: theme.colors[2],
                          color: theme.text,
                          border: `1px solid ${theme.colors[1]}`,
                          transition: "0.3s ease",
                        }}
                        onMouseEnter={(e) =>
                          (e.target.style.background = theme.colors[1])
                        }
                        onMouseLeave={(e) =>
                          (e.target.style.background = theme.colors[2])
                        }
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* GitHub Button */}
                  {/* <div className="mt-4">
                    <a
                      href={proj.github}
                      target="_blank"
                      rel="noreferrer"
                      style={{
                        padding: "8px 18px",
                        borderRadius: "10px",
                        border: `1px solid ${theme.text}`,
                        color: theme.text,
                        textDecoration: "none",
                        transition: "0.3s ease",
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.background = theme.colors[2];
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.background = "transparent";
                      }}
                    >
                      View Code
                    </a>
                  </div> */}
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>

      {/* Styles */}
      <style>{`
      .project-card-new {
        background: rgba(255, 255, 255, 0.05);
        border-radius: 20px;
        overflow: hidden;
        backdrop-filter: blur(12px);
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
        transition: 0.4s ease;
      }

      .project-card-new:hover {
        box-shadow: 0 30px 60px rgba(0, 0, 0, 0.25);
      }

        .project-image {
          height: 300px;
          object-fit: cover;
          transition: 0.4s ease;
        }

        .project-card-new:hover .project-image {
          transform: scale(1.05);
        }

        .project-type {
          font-size: 0.75rem;
          font-weight: 600;
          padding: 5px 12px;
          border-radius: 50px;
        }

        .tech-badge {
          font-size: 0.75rem;
          padding: 6px 12px;
          border-radius: 50px;
          background: rgba(0, 0, 0, 0.08);
          transition: 0.3s ease;
        }

        .tech-badge:hover {
          background: #6366f1;
          color: white;
        }
          
        .project-card {
          position: relative;
          overflow: hidden;
          border-radius: 20px;
          backdrop-filter: blur(10px);
          background: rgba(255,255,255,0.05);
          box-shadow: 0 20px 40px rgba(0,0,0,0.2);
          transition: 0.4s ease;
        }

        .project-image {
          height: 350px;
          object-fit: cover;
          transition: 0.4s ease;
        }

        .project-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to top,
            rgba(0,0,0,0.8),
            rgba(0,0,0,0.2)
          );
          padding: 30px;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          opacity: 0;
          transition: 0.4s ease;
        }

        .project-card:hover .project-overlay {
          opacity: 1;
        }

        .project-card:hover .project-image {
          transform: scale(1.08);
        }
          
      `}</style>
    </section>
  );
}

export default Projects;
