import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../images/construction_logo.png";

const Header = () => {
  return (
    <div>
      <nav className='navbar  navbar-expand-lg navbar-light bg-light  '>
        <div className='container-fluid '>
          <Link className='navbar-brand' href='#'>
            <img src={logo} alt='' />
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
              <li className='nav-item'>
                <Link className='nav-link active' aria-current='page' href='#'>
                  Home
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' href='#'>
                  Features
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' href='#'>
                  Pricing
                </Link>
              </li>
              <li className='nav-item dropdown'>
                <Link
                  className='nav-link dropdown-toggle'
                  href='#'
                  id='navbarDropdownMenuLink'
                  role='button'
                  data-bs-toggle='dropdown'
                  aria-expanded='false'
                >
                  Dropdown link
                </Link>
                <ul
                  className='dropdown-menu'
                  aria-labelledby='navbarDropdownMenuLink'
                >
                  <li>
                    <a className='dropdown-item' href='#'>
                      Action
                    </a>
                  </li>
                  <li>
                    <a className='dropdown-item' href='#'>
                      Another action
                    </a>
                  </li>
                  <li>
                    <a className='dropdown-item' href='#'>
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
