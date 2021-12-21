import React from "react";
import image1 from "../../../images/image1.jpg";
import image2 from "../../../images/image2.jpg";
import image3 from "../../../images/image3.jpg";
import "./TopBanner.css";
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

      <div className='quality-section container'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione libero
        at officia tempora enim quasi repudiandae minus possimus explicabo
        repellendus earum laudantium rem, amet alias adipisci eum iste est
        delectus?
      </div>
    </div>
  );
};

export default TopBanner;
