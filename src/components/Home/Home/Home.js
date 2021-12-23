import React from "react";
import Contactus from "../../Contactus/Contactus";
import FrozenFinger from "../../Products/FrozenFoods/FrozenFinger/FrozenFinger";
import News from "../News/News";
import Parallex from "../Parallex/Parallex";
import Products from "../Products/Products";
import Quality from "../Quality/Quality";
import TopBanner from "../TopBanner/TopBanner";

const Home = () => {
  return (
    <div>
      <News></News>
      <TopBanner></TopBanner>
      <Products></Products>
      <Parallex></Parallex>
      <Quality></Quality>
      <Contactus></Contactus>
    </div>
  );
};

export default Home;
