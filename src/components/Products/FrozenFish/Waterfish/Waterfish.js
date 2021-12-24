import React, { useState } from "react";
import { Parallax } from "react-parallax";
import ayer from "../../../../images/fresh_water_fish/large/Ayer-removebg-preview.png";
import pangush from "../../../../images/fresh_water_fish/large/pangush-removebg-preview.png";
import ruhu from "../../../../images/fresh_water_fish/large/ruhu-removebg-preview.png";
import foly from "../../../../images/fresh_water_fish/medium/foly-removebg-preview.png";
import loita from "../../../../images/fresh_water_fish/medium/loita-removebg-preview.png";
import pabda from "../../../../images/fresh_water_fish/medium/pabda-removebg-preview.png";
import batashi from "../../../../images/fresh_water_fish/small/batashi-removebg-preview.png";
import chapila from "../../../../images/fresh_water_fish/small/chapila-removebg-preview.png";
import puti from "../../../../images/fresh_water_fish/small/puti-removebg-preview.png";
import cover from "../../../../images/fresh_water_fish/raw-fish-market.jpg";

const Waterfish = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };
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
      <Parallax bgImage={cover} y={[-30, 20]} blur={{ min: -1, max: 4 }}>
        <div style={{ height: 500 }}>
          <div style={inlineStyle}>
            <h1 className='' style={{ color: "#92DC39", fontWeight: "900" }}>
              Serving quality <span> fresh and frozen Fish </span>
            </h1>
            <p className='' style={{ color: "#00D7B5", fontWeight: "600" }}>
              Euro Foods Group is a leading international manufacturer and
              distributor of frozen and fresh foods, serving the restaurant,
              catering and specialist supermarket sectors.
            </p>
          </div>
        </div>
      </Parallax>
      <div className='container py-3'>
        <div className='bloc-tabs'>
          <button
            id='buttons'
            className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(1)}
          >
            Large
          </button>
          <button
            id='buttons'
            className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(2)}
          >
            Medium
          </button>
          <button
            id='buttons'
            className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(3)}
          >
            Small
          </button>
        </div>

        <div className='content-tabs'>
          <div
            className={
              toggleState === 1 ? "content  active-content" : "content"
            }
          >
            <h2> Large</h2>
            <hr />
            <div class='row row-cols-1 row-cols-md-2 g-4'>
              <div class='col'>
                <div class='card product-card'>
                  <img
                    src={ayer}
                    class='card-img-top products-image'
                    alt='...'
                  />
                  <div class='card-body product-card-body'>
                    <h5 class='card-title'>Frozen Finger</h5>
                    <p class='card-text'>
                      Ready to cook frozen foods for daily consumption like
                      Frozen Paratha (various types), Roti, Frozen Snacks (Flour
                      made like singhara, puri, Samosa)
                    </p>
                    <button className='btn btn-info'>See more</button>
                  </div>
                </div>
              </div>
              <div class='col'>
                <div class='card product-card'>
                  <img
                    src={pangush}
                    class='card-img-top products-image'
                    alt='...'
                  />
                  <div class='card-body product-card-body'>
                    <h5 class='card-title'>Frozen vegetables</h5>
                    <p class='card-text'>
                      Frozen vegetables (Root & Leafy), Frozen fruits (Seasonal:
                      Olive, Black berry, Chalta etc),
                    </p>
                    <button className='btn btn-info'>See more</button>
                  </div>
                </div>
              </div>
              <div class='col'>
                <div class='card product-card'>
                  <img
                    src={ruhu}
                    class='card-img-top products-image'
                    alt='...'
                  />
                  <div class='card-body product-card-body'>
                    <h5 class='card-title'>Frozen vegetables</h5>
                    <p class='card-text'>
                      Frozen vegetables (Root & Leafy), Frozen fruits (Seasonal:
                      Olive, Black berry, Chalta etc),
                    </p>
                    <button className='btn btn-info'>See more</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className={
              toggleState === 2 ? "content  active-content" : "content"
            }
          >
            <h2>Medium</h2>
            <hr />
            <div class='row row-cols-1 row-cols-md-2 g-4'>
              <div class='col'>
                <div class='card product-card'>
                  <img
                    src={foly}
                    class='card-img-top products-image'
                    alt='...'
                  />
                  <div class='card-body product-card-body'>
                    <h5 class='card-title'>Fresh Water Fish</h5>
                    <p class='card-text'>
                      Frozen Fresh Water Fish (Block Fish, Clean & gutted, Whole
                      Fish)
                    </p>
                    <button className='btn btn-info'>See more</button>
                  </div>
                </div>
              </div>
              <div class='col'>
                <div class='card product-card'>
                  <img
                    src={loita}
                    class='card-img-top products-image'
                    alt='...'
                  />
                  <div class='card-body product-card-body'>
                    <h5 class='card-title'>Frozen Sea fish</h5>
                    <p class='card-text'>Frozen Prawn, Shrimps</p>
                    <button className='btn btn-info'>See more</button>
                  </div>
                </div>
              </div>
              <div class='col'>
                <div class='card product-card'>
                  <img
                    src={pabda}
                    class='card-img-top products-image'
                    alt='...'
                  />
                  <div class='card-body product-card-body'>
                    <h5 class='card-title'>Frozen Sea fish</h5>
                    <p class='card-text'>Frozen Prawn, Shrimps</p>
                    <button className='btn btn-info'>See more</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className={toggleState === 3 ? "content  active-content" : "content"}
        >
          <h2>Small</h2>
          <hr />
          <div class='row row-cols-1 row-cols-md-2 g-4'>
            <div class='col'>
              <div class='card product-card'>
                <img
                  src={batashi}
                  class='card-img-top products-image'
                  alt='...'
                />
                <div class='card-body product-card-body'>
                  <h5 class='card-title'>Fresh Water Fish</h5>
                  <p class='card-text'>
                    Frozen Fresh Water Fish (Block Fish, Clean & gutted, Whole
                    Fish)
                  </p>
                  <button className='btn btn-info'>See more</button>
                </div>
              </div>
            </div>
            <div class='col'>
              <div class='card product-card'>
                <img
                  src={chapila}
                  class='card-img-top products-image'
                  alt='...'
                />
                <div class='card-body product-card-body'>
                  <h5 class='card-title'>Frozen Sea fish</h5>
                  <p class='card-text'>Frozen Prawn, Shrimps</p>
                  <button className='btn btn-info'>See more</button>
                </div>
              </div>
            </div>
            <div class='col'>
              <div class='card product-card'>
                <img src={puti} class='card-img-top products-image' alt='...' />
                <div class='card-body product-card-body'>
                  <h5 class='card-title'>Frozen Sea fish</h5>
                  <p class='card-text'>Frozen Prawn, Shrimps</p>
                  <button className='btn btn-info'>See more</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Waterfish;
