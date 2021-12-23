import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../images/construction_logo.png";
import "./Header.css";
const Header = () => {
  return (
    <div>
      <nav
        className='navbar  navbar-expand-lg navbar-light  '
        style={{ backgroundColor: "#B9DC8E" }}
      >
        <div className='container-fluid '>
          <Link className='navbar-brand' href='#'>
            <img src={logo} className='nav-logo' alt='' />
          </Link>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarNavDropdown'
            aria-controls='navbarNavDropdown'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div
            className='collapse navbar-collapse d-md-flex justify-content-md-end'
            id='navbarNavDropdown'
          >
            <ul className='navbar-nav'>
              <li className='nav-item '>
                <Link
                  className='nav-link active text-white'
                  aria-current='page'
                  href='#'
                >
                  Home
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link text-white' href='#'>
                  About
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link text-white' href='#'>
                  Product
                </Link>
              </li>
              <li className='nav-item '>
                <Link className='nav-link text-white' href='#'>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
