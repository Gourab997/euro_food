import React from "react";
import image1 from "../../../images/image1.jpg";
import image2 from "../../../images/image2.jpg";
import image3 from "../../../images/image3.jpg";
import "./TopBanner.css";
import halal from "../../../images/logo/halal-removebg-preview.png";
import brc from "../../../images/logo/brc.png";
import usfda from "../../../images/logo/usfda.png";
import haccp from "../../../images/logo/haccp.png";
const TopBanner = () => {
  return (
    <div>
      <div
        id='carouselExampleControls'
        class='carousel slide '
        data-bs-ride='carousel'
      >
        <div class='carousel-inner banner '>
          <div class='carousel-item   active'>
            <img src={image1} class='d-block w-100 images' alt='...' />
          </div>
          <div class='carousel-item'>
            <img src={image2} class='d-block w-100 images' alt='...' />
          </div>
          <div class='carousel-item'>
            <img src={image3} class='d-block w-100  images' alt='...' />
          </div>
        </div>
        <button
          class='carousel-control-prev'
          type='button'
          data-bs-target='#carouselExampleControls'
          data-bs-slide='prev'
        >
          <span class='carousel-control-prev-icon' aria-hidden='true'></span>
          <span class='visually-hidden'>Previous</span>
        </button>
        <button
          class='carousel-control-next'
          type='button'
          data-bs-target='#carouselExampleControls'
          data-bs-slide='next'
        >
          <span class='carousel-control-next-icon' aria-hidden='true'></span>
          <span class='visually-hidden'>Next</span>
        </button>
      </div>

      <div className='quality-section container p-3'>
        <h6>
          We are different from our competitors in many ways like we chose best
          quality raw materials and sort out those very carefully, our products
          are free from foreign particles, we maintain high hygiene production
          floor,
        </h6>
        <div>
          <h4 className='py-2 ' style={{ color: "#ad652b" }}>
            Our Certification
          </h4>

          <div className='certification'>
            <div>
              <img className='logos' src={halal} alt='' />
              <p>100% Halal</p>
            </div>
            <div>
              <img className='logos' src={brc} alt='' />
              <p>BRC (British Retailer Consortium) certified</p>
            </div>
            <div>
              <img className='logos' src={usfda} alt='' />
              <p>USFDA certified</p>
            </div>
            <div>
              <img className='logos' src={haccp} alt='' />
              <p>HACCP certified</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBanner;
