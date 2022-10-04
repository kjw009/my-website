import React from "react";
import About from "./About";

function Content() {
  // Content Syling
  const contentStyle: React.CSSProperties = {
    display:"flex",
    flexDirection:"column"
  }
  // Nav-Bar styling
  const navBarStyle: React.CSSProperties = {
    display: "flex",
    justifyContent: "center",
    width: "auto",
    gap: "204px",
    marginTop:"10px",
    marginLeft:"5px"
  };

  // Nav icon styling
  const circleStyle: React.CSSProperties = {
    height: "70px",
    width: "70px",
    backgroundColor: "#bbb",
    borderRadius: "50%",
  };

  // Return
  return (
    <div className="Content" style={contentStyle}>
      <div className="NavBar" style={navBarStyle}>
        <div id="Circle" style={circleStyle}></div>
        <div id="Circle" style={circleStyle}></div>
        <div id="Circle" style={circleStyle}></div>
        <div id="Circle" style={circleStyle}></div>
      </div>
      <About />
    </div>
  );
}

export default Content;
