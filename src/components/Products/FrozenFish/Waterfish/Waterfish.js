import React, { useState } from "react";
import ayer from "../../../../images/fresh_water_fish/large/Ayer.png";
import pangush from "../../../../images/fresh_water_fish/large/pangush.png";
import ruhu from "../../../../images/fresh_water_fish/large/ruhu.png";
import foly from "../../../../images/fresh_water_fish/medium/foly.png";
import loita from "../../../../images/fresh_water_fish/medium/loita.png";
import pabda from "../../../../images/fresh_water_fish/medium/pabda.png";
import batashi from "../../../../images/fresh_water_fish/small/batashi.png";
import chapila from "../../../../images/fresh_water_fish/small/chapila.png";
import puti from "../../../../images/fresh_water_fish/small/puti.png";
const Waterfish = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <div>
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
