import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import crown from "../../../images/logo/Crown.png";
import farms from "../../../images/logo/farms.jpg";
import kukd from "../../../images/logo/kukd_logo.svg";
import masalla from "../../../images/logo/mb-logo1x.png";
import rosemco from "../../../images/logo/Rosemco-LOGO.png";
import "./Quality.css";
const Quality = () => {
  return (
    <div>
      <OwlCarousel
        className='owl-theme'
        items={3}
        autoplay={true}
        autoplayTimeout={2000}
        margin={20}
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
      </OwlCarousel>
    </div>
  );
};

export default Quality;
