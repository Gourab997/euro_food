import React, { useState } from "react";
import { Parallax } from "react-parallax";
import kachurlati from "../../../../images/Frozen_vegetables/frozen_vegetables/kachurlati-removebg-preview.png";
import kakrol from "../../../../images/Frozen_vegetables/frozen_vegetables/kakrol-removebg-preview.png";
import lalshak from "../../../../images/Frozen_vegetables/frozen_vegetables/lalshak-removebg-preview.png";
import nalleshaak from "../../../../images/Frozen_vegetables/frozen_vegetables/nalleshaak-removebg-preview.png";
import okra from "../../../../images/Frozen_vegetables/frozen_vegetables/okra-removebg-preview.png";
import sanjnedata from "../../../../images/Frozen_vegetables/frozen_vegetables/sajnedata-removebg-preview.png";
import blackburry from "../../../../images/Frozen_vegetables/fruits/blackburry-removebg-preview.png";
import chalta from "../../../../images/Frozen_vegetables/fruits/chalta-removebg-preview.png";
import coconut from "../../../../images/Frozen_vegetables/fruits/coconut-removebg-preview.png";
import koromcha from "../../../../images/Frozen_vegetables/fruits/koromcha-removebg-preview.png";
import olive from "../../../../images/Frozen_vegetables/fruits/olive-removebg-preview.png";
import saas from "../../../../images/Frozen_vegetables/fruits/saas-removebg-preview.png";
import cover from "../../../../images/Frozen_vegetables/fruitveg.jpeg";

const FrozenVegetables = () => {
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
      <Parallax bgImage={cover} y={[-30, 20]} blur={{ min: -1, max: 5 }}>
        <div style={{ height: 500 }}>
          <div style={inlineStyle}>
            <h1 className='' style={{ color: "#FFE9D0", fontWeight: "900" }}>
              Serving quality <span> fresh and frozen Vegetables </span>
            </h1>
            <p className='text-white'>
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
                <div class='card product-card'>
                  <img
                    src={kachurlati}
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
                    src={kakrol}
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
                    src={okra}
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
                    src={nalleshaak}
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
                    src={lalshak}
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
                    src={sanjnedata}
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
            <h2>Frozen Fruits</h2>
            <hr />
            <div class='row row-cols-1 row-cols-md-2 g-4'>
              <div class='col'>
                <div class='card product-card'>
                  <img
                    src={blackburry}
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
                    src={chalta}
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
                    src={coconut}
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
                    src={koromcha}
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
                    src={olive}
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
                    src={saas}
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

export default FrozenVegetables;
