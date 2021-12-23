import React, { useState } from "react";
import alu from "../../../../images/Frozen_finger/parata/alu.png";
import bakarkhani from "../../../../images/Frozen_finger/parata/bakarkhani.png";
import chapti from "../../../../images/Frozen_finger/parata/chapati.png";
import dalparathe from "../../../../images/Frozen_finger/parata/dalparatha.png";
import riceflour from "../../../../images/Frozen_finger/parata/riceflour.png";
import mealroti from "../../../../images/Frozen_finger/parata/wholemealroti.png";
import alupuri from "../../../../images/Frozen_finger/snacks/alopuri.png";
import bhapapitha from "../../../../images/Frozen_finger/snacks/Bhapapitha.png";
import somosa from "../../../../images/Frozen_finger/snacks/bulkdalsomosa.png";
import peaju from "../../../../images/Frozen_finger/snacks/paeju.png";
import roll from "../../../../images/Frozen_finger/snacks/roll.png";
import singara from "../../../../images/Frozen_finger/snacks/singara.png";
const FrozenFinger = () => {
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
            Frozen Paratha
          </button>
          <button
            id='buttons'
            className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(2)}
          >
            Frozen Snacks
          </button>
        </div>

        <div className='content-tabs'>
          <div
            className={
              toggleState === 1 ? "content  active-content" : "content"
            }
          >
            <h2> Frozen Paratha</h2>
            <hr />
            <div class='row row-cols-1 row-cols-md-2 g-4'>
              <div class='col'>
                <div class='card product-card'>
                  <img
                    src={alu}
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
                    src={bakarkhani}
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
                    src={chapti}
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
                    src={dalparathe}
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
                    src={riceflour}
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
                    src={mealroti}
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
            <h2>Frozen Snacks</h2>
            <hr />
            <div class='row row-cols-1 row-cols-md-2 g-4'>
              <div class='col'>
                <div class='card product-card'>
                  <img
                    src={alupuri}
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
                    src={bhapapitha}
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
                    src={somosa}
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
                    src={peaju}
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
                    src={roll}
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
                    src={singara}
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
      </div>
    </div>
  );
};

export default FrozenFinger;
