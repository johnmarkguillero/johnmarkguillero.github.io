import React from "react";

function Home({ theme }) {
  return (
    <section id="home" className="py-5 text-center ">
      <div className="container">
        <h1
          className="display-4 fw-bold"
          style={{ color: theme.text }}
        >
          TEST
        </h1>
        <p className="lead" style={{ color: theme.text }}>
          Fullstack Developer | React & Bootstrap Enthusiast
        </p>
      </div>
    </section>
  );
}

export default Home;