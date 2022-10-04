import React from "react";

const About = () => {
  const aboutStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    marginLeft: "20px",
    marginTop: "25px",
  };

  const containerStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    height: "50%",
    width: "50%",
  };

  // Title Style
  const titleStyle: React.CSSProperties = {
    fontSize: "30px",
    fontFamily: "cursive",
  };

  // Paragraph styling
  const pStyle: React.CSSProperties = {
    fontFamily: "sans-serif",
    fontSize: "20px",
  };

  return (
    <div className="About" style={aboutStyle}>
      <div className="aboutMeContainer" style={containerStyle}>
        <h2 style={titleStyle}>About Me</h2>
        <p style={pStyle}>
          I am a master's graduate from the University of Manchester studying
          Chemisty (MChem). I specialised in computation chemistry, which
          involved developing and applying MATLAB and python skills for handling
          enoumous amounts of data that was produced by simulating biological
          molecules computationally.
          <p style={pStyle}>
            My third and fourth year projects involved Machine learning which
            sparked my interrest and passion for the subject.
          </p>
          <p style={pStyle}>
            I am currently looking for machine learning engineering roles,
            however I am still open to software engineering aswell.
          </p>
        </p>
      </div>
    </div>
  );
};

export default About;
