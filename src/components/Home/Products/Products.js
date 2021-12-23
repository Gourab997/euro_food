import React, { useState } from "react";
import "./Product.css";
import Snacks from "../../../images/Frozen_finger/cover_finger.png";
import vegetables from "../../../images/Frozen_vegetables/cover_vegetables.png";
import waterfish from "../../../images/fresh_water_fish/cover_fresh_water_fish.png";
import seafood from "../../../images/frozen_seafood/cover_seafood.png";
import garments from "../../../images/garments/cover.jpg";
import { Link } from "react-router-dom";
const Products = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <div>
      <h3> Product Category </h3>
      <div className='container py-3'>
        <div className='bloc-tabs'>
          <button
            id='buttons'
            className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(1)}
          >
            Frozen foods
          </button>
          <button
            id='buttons'
            className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(2)}
          >
            Frozen Fresh Water Fish
          </button>
          <button
            id='buttons'
            className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(3)}
          >
            Ready-made garments
          </button>
        </div>

        <div className='content-tabs'>
          <div
            className={
              toggleState === 1 ? "content  active-content" : "content"
            }
          >
            <h2> Frozen foods</h2>
            <hr />
            <div class='row row-cols-1 row-cols-md-2 g-4'>
              <div class='col'>
                <div class='card product-card'>
                  <img
                    src={Snacks}
                    class='card-img-top product-image'
                    alt='...'
                  />
                  <div class='card-body product-card-body'>
                    <h5 class='card-title'>Frozen Finger</h5>
                    <p class='card-text'>
                      Ready to cook frozen foods for daily consumption like
                      Frozen Paratha (various types), Roti, Frozen Snacks (Flour
                      made like singhara, puri, Samosa)
                    </p>
                  </div>
                  <Link to='/frozenfinger'>
                    <button className='btn btn-success my-2'>See more</button>
                  </Link>
                </div>
              </div>
              <div class='col'>
                <div class='card product-card'>
                  <img
                    src={vegetables}
                    class='card-img-top product-image'
                    alt='...'
                  />
                  <div class='card-body product-card-body'>
                    <h5 class='card-title'>Frozen vegetables</h5>
                    <p class='card-text'>
                      Frozen vegetables (Root & Leafy), Frozen fruits (Seasonal:
                      Olive, Black berry, Chalta etc),
                    </p>
                  </div>
                  <Link to='/frozenvegetables'>
                    <button className='btn btn-success my-2'>See more</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div
            className={
              toggleState === 2 ? "content  active-content" : "content"
            }
          >
            <h2>Frozen Fresh Water Fish</h2>
            <hr />
            <div class='row row-cols-1 row-cols-md-2 g-4'>
              <div class='col'>
                <div class='card product-card'>
                  <img
                    src={waterfish}
                    class='card-img-top product-image'
                    alt='...'
                  />
                  <div class='card-body product-card-body'>
                    <h5 class='card-title'>Fresh Water Fish</h5>
                    <p class='card-text'>
                      Frozen Fresh Water Fish (Block Fish, Clean & gutted, Whole
                      Fish)
                    </p>
                  </div>
                  <Link to='/waterfish'>
                    <button className='btn btn-success my-2'>See more</button>
                  </Link>
                </div>
              </div>
              <div class='col'>
                <div class='card product-card'>
                  <img
                    src={seafood}
                    class='card-img-top product-image'
                    alt='...'
                  />
                  <div class='card-body product-card-body'>
                    <h5 class='card-title'>Frozen Sea fish</h5>
                    <p class='card-text'>Frozen Prawn, Shrimps</p>
                  </div>
                  <Link to='/seafood'>
                    <button className='btn btn-success my-2'>See more</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div
            className={
              toggleState === 3 ? "content  active-content" : "content"
            }
          >
            <h2>Readymade garments </h2>
            <hr />
            <div class='row row-cols-1 row-cols-md-2 g-4'>
              <div class='col'>
                <div class='card product-card'>
                  <img
                    src={garments}
                    class='card-img-top product-image'
                    alt='...'
                  />
                  <div class='card-body product-card-body'>
                    <h5 class='card-title'>Readymade garments</h5>
                    <p class='card-text'>
                      Readymade garments which include: hoodie, trouser, cloth
                      mask (upcoming on demand t-shirt printing, custom
                      tailoring)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
