import React from "react";
import { Parallax } from "react-parallax";
import image from "../../../images/parallexImage.png";
const Parallex = () => {
  const inlineStyle = {
    left: "50%",
    top: "50%",
    position: "absolute",
    padding: "20px",
    transform: "translate(-50% ,-50%)",
  };

  return (
    <div className='my-5'>
      <Parallax bgImage={image} strength={500}>
        <div style={{ height: 500 }}>
          <div style={inlineStyle}>
            <h1 className='' style={{ color: "#A06238", fontWeight: "900" }}>
              A proud history of{" "}
              <span style={{ color: "#FFE9D0" }}> service and quality </span>
            </h1>
            <p className='text-white'>
              Euro Foods Group is a leading international manufacturer and
              distributor of frozen and fresh foods, serving the restaurant,
              catering and specialist supermarket sectors.
            </p>
          </div>
        </div>
      </Parallax>
      <div style={{ height: "10vh" }}></div>
    </div>
  );
};

export default Parallex;
