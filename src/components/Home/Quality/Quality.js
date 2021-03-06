import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import crown from "../../../images/logo/Crown.png";
import farms from "../../../images/logo/crownfarms1.png";
import kukd from "../../../images/logo/kukd_logo.svg";
import masalla from "../../../images/logo/mb-logo1x.png";
import rosemco from "../../../images/logo/Rosemco-LOGO.png";
import zoy from "../../../images/logo/zoy.png";
import alrohim from "../../../images/logo/al-rohim.png";
import "./Quality.css";
const Quality = () => {
  return (
    <div className='py-5'>
      <h1 className='my-3'>Collaboration</h1>
      <OwlCarousel
        className='owl-theme'
        items={6}
        autoplay={true}
        autoplayTimeout={2000}
        margin={60}
        dots
        nav
        loop
      >
        <div class='item '>
          <img className='owl' src={crown} alt='' />
        </div>
        <div class='item '>
          <img className='owl' src={farms} alt='' />
        </div>
        <div class='item '>
          <img className='owl' src={kukd} alt='' />
        </div>
        <div class='item '>
          <img className='owl' src={masalla} alt='' />
        </div>
        <div class='item '>
          <img className='owl' src={rosemco} alt='' />
        </div>
        <div class='item '>
          <img className='owl' src={zoy} alt='' />
        </div>
        <div class='item '>
          <img className='owl' src={alrohim} alt='' />
        </div>
      </OwlCarousel>
    </div>
  );
};

export default Quality;
