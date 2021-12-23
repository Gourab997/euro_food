import React from "react";
import "./News.css";
const News = () => {
  return (
    <div>
      <div class='lending-information position-relative'>
        <div class='lending-information-title text-white'>Update</div>
        <marquee
          class='lending-marquee '
          behavior=''
          direction='left'
          style={{ color: "#F5FCEB" }}
        >
          Hurry up!!! EuroFoods offer 20% discount.
        </marquee>
      </div>
    </div>
  );
};

export default News;
