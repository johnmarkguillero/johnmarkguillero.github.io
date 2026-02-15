import React from "react";

function About({ theme }) {
  return (
    <section
      id="about"
      style={{ color: theme.text, backgroundColor: theme.colors[0] }}
      className="py-5"
    >
      <div className="container">
        <h2 className="fw-bold mb-3">About Me</h2>
        <p>
          As a dedicated and detail-oriented, I am honing my skills in both
          engineering and web development. My proficiency spans across various
          programming languages and technologies including SQL, jQuery, HTML,
          CSS, and JavaScript. With a strong foundation in communication and a
          passion for problem-solving, I am keen to leverage my technical
          expertise and academic background to excel as a Web and SQL Developer.
        </p>
      </div>
    </section>
  );
}

export default About;
