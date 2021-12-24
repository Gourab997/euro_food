import React from "react";
import { Parallax } from "react-parallax";
import cover from "../../images/about/cover.jpeg";
import shelim from "../../images/about/shelim2.png";
import siful from "../../images/about/SIful_Headshot_v1.png";
import rahim from "../../images/about/Rahim_Headshot_v1.png";
import jahan from "../../images/about/Shah_Headshot_v2_bg.png";
import paul from "../../images/about/Paul_Headshot_v1.png";
import evans from "../../images/about/Marion-website-image.png";
import aherne from "../../images/about/Sian_Headshot_v1.png";
import neil from "../../images/about/Neil-Website-image.png";
import bangladesh from "../../images/about/bangladesh.png";
import "./About.css";
import vege from "../../images/Frozen_vegetables/cover_vage-removebg-preview.png";
const About = () => {
  const inlineStyle = {
    left: "50%",
    top: "50%",
    objectFit: "cover",
    position: "absolute",
    padding: "20px",
    transform: "translate(-50% ,-50%)",
  };
  return (
    <div>
      <Parallax bgImage={cover} y={[-30, 20]} blur={{ min: -1, max: 2 }}>
        <div style={{ height: 500 }}>
          <div style={inlineStyle}>
            <h1 className='' style={{ color: "#FBEAFF", fontWeight: "900" }}>
              Our History
            </h1>
          </div>
        </div>
      </Parallax>

      <div className='d-md-flex container  justify-content-evenly align-items-center'>
        <div className='p-3'>
          <img src={bangladesh} alt='' />
          <p>Euro Foods depot in Dhaka, Bangladesh</p>
        </div>
        <div className='px-3'>
          <h3>Euro Foods</h3>
          <p>
            Euro Foods Group is a leading international manufacturer and
            distributor of frozen and fresh foods, serving the restaurant,
            catering and specialist supermarket sectors. Our business is founded
            on two key values: a clear focus on customer service and the
            provision of quality produce. We were founded in 1991 and have grown
            to become the UK’s largest supplier to the Asian food market, with a
            passion for high quality seafood, meat, poultry, vegetables and
            desserts. Employing over 1,500 people worldwide and working closely
            with our network of partner suppliers, we produce a number of brands
            well known in the industry including Zoy, Rohim and Crown Farms.
            Euro Foods also supplies a large number of Chinese, Thai and
            Indonesian catering businesses in the UK and Europe. We also supply
            direct to the public via our Masala Bazaar chain of specialist
            retail outlets.
          </p>
        </div>
      </div>

      <div>
        <div id='cards_landscape_wrap-2'>
          <h2>Meet The Team</h2>
          <div class='container'>
            <div class='row'>
              <div class='col-xs-12 col-sm-6 col-md-3 col-lg-3'>
                <a href=''>
                  <div class='card-flyer'>
                    <div class='text-box'>
                      <div class='image-box'>
                        <img src={shelim} alt='' />
                      </div>
                      <div class='text-container'>
                        <h6>Shelim Hussain MBE</h6>
                        <p>Managing Director</p>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div class='col-xs-12 col-sm-6 col-md-3 col-lg-3'>
                <a href=''>
                  <div class='card-flyer'>
                    <div class='text-box'>
                      <div class='image-box'>
                        <img src={siful} alt='' />
                      </div>
                      <div class='text-container'>
                        <h6>Siful Jabbar</h6>
                        <p>Operations Director</p>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div class='col-xs-12 col-sm-6 col-md-3 col-lg-3'>
                <a href=''>
                  <div class='card-flyer'>
                    <div class='text-box'>
                      <div class='image-box'>
                        <img src={rahim} alt='' />
                      </div>

                      <div class='text-container'>
                        <h6>Rahim Miah</h6>
                        <p>Wholesale Director</p>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div class='col-xs-12 col-sm-6 col-md-3 col-lg-3'>
                <a href=''>
                  <div class='card-flyer'>
                    <div class='text-box'>
                      <div class='image-box'>
                        <img src={jahan} alt='' />
                      </div>
                      <div class='text-container'>
                        <h6>Shah Jahan</h6>
                        <p>Restaurant Sales Director</p>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div class='col-xs-12 col-sm-6 col-md-3 col-lg-3'>
                <a href=''>
                  <div class='card-flyer'>
                    <div class='text-box'>
                      <div class='image-box'>
                        <img src={paul} alt='' />
                      </div>
                      <div class='text-container'>
                        <h6>Paul Meek</h6>
                        <p>Group Head of IT</p>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div class='col-xs-12 col-sm-6 col-md-3 col-lg-3'>
                <a href=''>
                  <div class='card-flyer'>
                    <div class='text-box'>
                      <div class='image-box'>
                        <img src={evans} alt='' />
                      </div>
                      <div class='text-container'>
                        <h6>Marion Evans</h6>
                        <p>Head of Technical</p>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div class='col-xs-12 col-sm-6 col-md-3 col-lg-3'>
                <a href=''>
                  <div class='card-flyer'>
                    <div class='text-box'>
                      <div class='image-box'>
                        <img src={aherne} alt='' />
                      </div>

                      <div class='text-container'>
                        <h6>Siân Aherne</h6>
                        <p>Head of Finance</p>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div class='col-xs-12 col-sm-6 col-md-3 col-lg-3'>
                <a href=''>
                  <div class='card-flyer'>
                    <div class='text-box'>
                      <div class='image-box'>
                        <img src={neil} alt='' />
                      </div>
                      <div class='text-container'>
                        <h6>Neill Cannell</h6>
                        <p>Transport Manager</p>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='container'>
        <h1>Meeting our Standards</h1>
        <img src={vege} alt='' />
        <div>
          Euro Foods imports a huge variety of produce into the UK and as such,
          we carry full liability for food safety, quality and labelling. All
          our suppliers comply with our high standards and controls, to ensure
          we fulfil these regulations correctly. We aim to ensure all our
          suppliers meet BRC (British Retail Consortium) standards as a minimum.
          When products arrive at our depots, we have in-house standards to
          guarantee the products make the grade. For every product we sell, we
          must have a product specification; this provides a contract between us
          and our suppliers, confirming exactly what is being made and what we
          are buying. A sample will be checked against the specification for
          each delivery we receive. We even cook the foods too, to make sure
          they taste good! We work closely with our suppliers to ensure the food
          authorities in the UK are happy with the foods we import. By keeping
          control of our supply chain, we ensure only the best quality produce
          reaches our customers.
        </div>
      </div>

      <div className='container my-5'>
        <h3 className='my-3'>Frequently Asked Questions</h3>
        <div class='accordion accordion-flush' id='accordionFlushExample'>
          <div class='accordion-item'>
            <h2 class='accordion-header' id='flush-headingOne'>
              <button
                class='accordion-button collapsed'
                type='button'
                data-bs-toggle='collapse'
                data-bs-target='#flush-collapseOne'
                aria-expanded='false'
                aria-controls='flush-collapseOne'
              >
                Is your website secure?
              </button>
            </h2>
            <div
              id='flush-collapseOne'
              class='accordion-collapse collapse'
              aria-labelledby='flush-headingOne'
              data-bs-parent='#accordionFlushExample'
            >
              <div class='accordion-body'>
                Yep! On any page where we ask you to enter your address, phone
                number, or credit card information, we use secure socket layer
                (SSL) to encrypt the communication.
              </div>
            </div>
          </div>
          <div class='accordion-item'>
            <h2 class='accordion-header' id='flush-headingTwo'>
              <button
                class='accordion-button collapsed'
                type='button'
                data-bs-toggle='collapse'
                data-bs-target='#flush-collapseTwo'
                aria-expanded='false'
                aria-controls='flush-collapseTwo'
              >
                When will my order ship?
              </button>
            </h2>
            <div
              id='flush-collapseTwo'
              class='accordion-collapse collapse'
              aria-labelledby='flush-headingTwo'
              data-bs-parent='#accordionFlushExample'
            >
              <div class='accordion-body'>
                After your payment is verified, it takes up to 24-48 hours to
                process and ship your order. This does not include weekends or
                holidays. Purchases made after 5 pm will not be shipped out
                until the next business day. If you order after 5 pm on a
                Friday, your order will likely be shipped out on the following
                day.
              </div>
            </div>
          </div>
          <div class='accordion-item'>
            <h2 class='accordion-header' id='flush-headingThree'>
              <button
                class='accordion-button collapsed'
                type='button'
                data-bs-toggle='collapse'
                data-bs-target='#flush-collapseThree'
                aria-expanded='false'
                aria-controls='flush-collapseThree'
              >
                How can I contact you?
              </button>
            </h2>
            <div
              id='flush-collapseThree'
              class='accordion-collapse collapse'
              aria-labelledby='flush-headingThree'
              data-bs-parent='#accordionFlushExample'
            >
              <div class='accordion-body'>
                You can always call 01633 636 000 or mail us at
                info@eurofoodsgroup.co.uk
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
