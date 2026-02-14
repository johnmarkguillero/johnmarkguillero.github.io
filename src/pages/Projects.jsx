import React from "react";

function Projects() {
  const projects = [
    { title: "Portfolio Website", description: "My own portfolio built with React & Bootstrap" },
    { title: "E-commerce App", description: "A fullstack shopping platform" },
    { title: "Blog Platform", description: "A CMS-style React blog application" },
  ];

  return (
    <section id="projects" className="py-5 bg-light">
      <div className="container">
        <h2 className="fw-bold mb-4">Projects</h2>
        <div className="row g-4">
          {projects.map((proj, idx) => (
            <div className="col-md-4" key={idx}>
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">{proj.title}</h5>
                  <p className="card-text">{proj.description}</p>
                  <a href="#" className="btn btn-primary">View Project</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;