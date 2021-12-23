import React, { useEffect, useState } from "react";
import mapboxgl, { Marker } from "mapbox-gl";
import MapboxDirections from "@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions";
import "./Contactus.css";
import marker from "../../images/mapbox-marker-icon-blue.svg";
mapboxgl.accessToken =
  "pk.eyJ1IjoiZ291cmFiMTk5NyIsImEiOiJja3V6cjU3a3IwZXI3Mm9xMXJjdjZpbGQ4In0.qTtKvTEoFGvwUoJTFHiSzw";
const Contactus = () => {
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/streets-v11",
      center: [90.3987780533739, 23.874289411555942],
      zoom: 15,
    });
  }, []);

  return (
    <div>
      <div class='container my-3'>
        <div class='wrapper'>
          <div class='company-info'>
            <h3>Euro Food Bangladesh</h3>

            <ul>
              <li>
                <i class='fa fa-road'></i> 7th Floor (Navana Oval, Plot - 5)
                Sonargaon Janapath, Dhaka 1230
              </li>
              <li>
                <i class='fas fa-mobile-alt'></i> 01715-770840
              </li>
              <li>
                <i class='fa fa-envelope'></i> info@eurofoods-bd.com
              </li>
            </ul>
            <div id='map' className='map_show'></div>
          </div>

          <div class='contact'>
            <h3>Contact Us</h3>

            <form id='contact-form'>
              <p>
                <label>Name</label>
                <input type='text' name='name' id='name' required />
              </p>

              <p>
                <label>Address</label>
                <input type='text' name='address' id='address' />
              </p>

              <p>
                <label>E-mail Address</label>
                <input type='email' name='email' id='email' required />
              </p>

              <p>
                <label>Phone Number</label>
                <input type='text' name='phone' id='phone' />
              </p>

              <p class='full'>
                <label>Message</label>
                <textarea name='message' rows='5' id='message'></textarea>
              </p>

              <p class='full'>
                <button type='submit'>Submit</button>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contactus;
