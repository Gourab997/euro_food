import React from "react";
import { Parallax } from "react-parallax";
import image from "../../../images/parallexImage.png";
const Parallex = () => {
  const inlineStyle = {
    background: "#fff",
  
    left: "50%",
    top: "50%",
    position: "absolute",
    padding: "20px",
    transform: "translate(-50% ,-50%)",
  };

  return (
    <div>
      <Parallax bgImage={image} strength={500}>
        <div style={{ height: 500 }}>
          <div style={inlineStyle}>Html inside</div>
        </div>
      </Parallax>
      <div style={{ height: "10vh" }}></div>
    </div>
  );
};

export default Parallex;
