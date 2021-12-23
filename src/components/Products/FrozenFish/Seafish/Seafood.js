import React, { useState } from "react";
import bfhlso from "../../../../images/frozen_seafood/freshshrimps/bfhlso.png";
import cattiger from "../../../../images/frozen_seafood/freshshrimps/cattiger.png";
import chaka from "../../../../images/frozen_seafood/freshshrimps/chaka.png";
import kingprawn from "../../../../images/frozen_seafood/freshshrimps/Kingprawn.png";

import butterfly from "../../../../images/frozen_seafood/frozen/butterfly.png";
import filo from "../../../../images/frozen_seafood/frozen/filo.png";
import shimproll from "../../../../images/frozen_seafood/frozen/shimproll.png";
import torpedo from "../../../../images/frozen_seafood/frozen/torpedo.png";
const Seafood = () => {
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
            Fresh Shrimps
          </button>
          <button
            id='buttons'
            className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(2)}
          >
            Frozen Shrimps
          </button>
        </div>

        <div className='content-tabs'>
          <div
            className={
              toggleState === 1 ? "content  active-content" : "content"
            }
          >
            <h2> Fresh Shrimps</h2>
            <hr />
            <div class='row row-cols-1 row-cols-md-2 g-4'>
              <div class='col'>
                <div class='card'>
                  <img src={bfhlso} class='card-img-top' alt='...' />
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
                  <img src={cattiger} class='card-img-top' alt='...' />
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
                  <img src={chaka} class='card-img-top' alt='...' />
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
                  <img src={kingprawn} class='card-img-top' alt='...' />
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
            <h2> Frozen Shrimps</h2>
            <hr />
            <div class='row row-cols-1 row-cols-md-2 g-4'>
              <div class='col'>
                <div class='card'>
                  <img src={butterfly} class='card-img-top' alt='...' />
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
                  <img src={filo} class='card-img-top' alt='...' />
                  <div class='card-body'>
                    <h5 class='card-title'>Frozen Sea fish</h5>
                    <p class='card-text'>Frozen Prawn, Shrimps</p>
                    <button className='btn btn-info'>See more</button>
                  </div>
                </div>
              </div>
              <div class='col'>
                <div class='card'>
                  <img src={shimproll} class='card-img-top' alt='...' />
                  <div class='card-body'>
                    <h5 class='card-title'>Frozen Sea fish</h5>
                    <p class='card-text'>Frozen Prawn, Shrimps</p>
                    <button className='btn btn-info'>See more</button>
                  </div>
                </div>
              </div>
              <div class='col'>
                <div class='card'>
                  <img src={torpedo} class='card-img-top' alt='...' />
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

export default Seafood;
