import React, { useState } from "react";
import kachurlati from "../../../../images/Frozen_vegetables/frozen_vegetables/kachurlati.png";
import kakrol from "../../../../images/Frozen_vegetables/frozen_vegetables/kakrol.png";
import lalshak from "../../../../images/Frozen_vegetables/frozen_vegetables/lalshak.png";
import nalleshaak from "../../../../images/Frozen_vegetables/frozen_vegetables/nalleshaak.png";
import okra from "../../../../images/Frozen_vegetables/frozen_vegetables/okra.png";
import sanjnedata from "../../../../images/Frozen_vegetables/frozen_vegetables/sajnedata.png";
import blackburry from "../../../../images/Frozen_vegetables/fruits/blackburry.png";
import chalta from "../../../../images/Frozen_vegetables/fruits/chalta.png";
import coconut from "../../../../images/Frozen_vegetables/fruits/coconut.png";
import koromcha from "../../../../images/Frozen_vegetables/fruits/koromcha.png";
import olive from "../../../../images/Frozen_vegetables/fruits/olive.png";
import saas from "../../../../images/Frozen_vegetables/fruits/saas.png";
const FrozenVegetables = () => {
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
            Frozen Vegetables
          </button>
          <button
            id='buttons'
            className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(2)}
          >
            Frozen Fruits
          </button>
        </div>

        <div className='content-tabs'>
          <div
            className={
              toggleState === 1 ? "content  active-content" : "content"
            }
          >
            <h2> Frozen Vegetables</h2>
            <hr />
            <div class='row row-cols-1 row-cols-md-2 g-4'>
              <div class='col'>
                <div class='card'>
                  <img src={kachurlati} class='card-img-top' alt='...' />
                  <div class='card-body'>
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
                <div class='card'>
                  <img src={kakrol} class='card-img-top' alt='...' />
                  <div class='card-body'>
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
                <div class='card'>
                  <img src={okra} class='card-img-top' alt='...' />
                  <div class='card-body'>
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
                <div class='card'>
                  <img src={nalleshaak} class='card-img-top' alt='...' />
                  <div class='card-body'>
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
                <div class='card'>
                  <img src={lalshak} class='card-img-top' alt='...' />
                  <div class='card-body'>
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
                <div class='card'>
                  <img src={sanjnedata} class='card-img-top' alt='...' />
                  <div class='card-body'>
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
            <h2>Frozen Fruits</h2>
            <hr />
            <div class='row row-cols-1 row-cols-md-2 g-4'>
              <div class='col'>
                <div class='card'>
                  <img src={blackburry} class='card-img-top' alt='...' />
                  <div class='card-body'>
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
                <div class='card'>
                  <img src={chalta} class='card-img-top' alt='...' />
                  <div class='card-body'>
                    <h5 class='card-title'>Frozen Sea fish</h5>
                    <p class='card-text'>Frozen Prawn, Shrimps</p>
                    <button className='btn btn-info'>See more</button>
                  </div>
                </div>
              </div>
              <div class='col'>
                <div class='card'>
                  <img src={coconut} class='card-img-top' alt='...' />
                  <div class='card-body'>
                    <h5 class='card-title'>Frozen Sea fish</h5>
                    <p class='card-text'>Frozen Prawn, Shrimps</p>
                    <button className='btn btn-info'>See more</button>
                  </div>
                </div>
              </div>
              <div class='col'>
                <div class='card'>
                  <img src={koromcha} class='card-img-top' alt='...' />
                  <div class='card-body'>
                    <h5 class='card-title'>Frozen Sea fish</h5>
                    <p class='card-text'>Frozen Prawn, Shrimps</p>
                    <button className='btn btn-info'>See more</button>
                  </div>
                </div>
              </div>
              <div class='col'>
                <div class='card'>
                  <img src={olive} class='card-img-top' alt='...' />
                  <div class='card-body'>
                    <h5 class='card-title'>Frozen Sea fish</h5>
                    <p class='card-text'>Frozen Prawn, Shrimps</p>
                    <button className='btn btn-info'>See more</button>
                  </div>
                </div>
              </div>
              <div class='col'>
                <div class='card'>
                  <img src={saas} class='card-img-top' alt='...' />
                  <div class='card-body'>
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

export default FrozenVegetables;
