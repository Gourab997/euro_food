import React from "react";
import "./News.css";
const News = () => {
  return (
    <div>
      <div class='lending-information position-relative'>
        <div class='lending-information-title'>Update</div>
        <marquee
          class='lending-marquee text-white'
          behavior=''
          direction='left'
        >
          Hurry up!!! EuroFoods offer 20% discount.
        </marquee>
      </div>
    </div>
  );
};

export default News;
