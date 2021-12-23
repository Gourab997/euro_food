import React from "react";
import "./Footer.css";
import footer from "../../../images/footer.png";
const Footer = () => {
  return (
    <div>
      <footer class='footer-section'>
        <div class='container'>
          <div class='footer-content pt-5 pb-5'>
            <div class='row'>
              <div class='col-xl-4 col-lg-4 mb-50'>
                <div class='footer-widget'>
                  <div class='footer-logo'>
                    <img src={footer} alt='logo' />
                  </div>

                  <div class='footer-social-icon'>
                    <span>Follow us</span>
                    <a href='#'>
                      <i class='fab fa-facebook-f facebook-bg'></i>
                    </a>
                    <a href='#'>
                      <i class='fab fa-twitter twitter-bg'></i>
                    </a>
                    <a href='#'>
                      <i class='fab fa-google-plus-g google-bg'></i>
                    </a>
                  </div>
                </div>
              </div>
              <div class='col-xl-4 col-lg-4 col-md-6 mb-30'></div>
              <div class='col-xl-4 col-lg-4 col-md-6 mb-50'>
                <div class='footer-widget'>
                  <div class='footer-widget-heading'>
                    <h3>Subscribe</h3>
                  </div>
                  <div class='footer-text mb-25'>
                    <p>
                      Dont miss to subscribe to our new feeds, kindly fill the
                      form below.
                    </p>
                  </div>
                  <div class='subscribe-form'>
                    <form action='#'>
                      <input type='text' placeholder='Email Address' />
                      <button>
                        <i class='fab fa-telegram-plane'></i>
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class='copyright-area'>
          <div class='container'>
            <div class='row'>
              <div class='col-xl-6 col-lg-6 text-center text-lg-left'>
                <div class='copyright-text'>
                  <p>Copyright &copy; 2021, All Right Reserved </p>
                </div>
              </div>
              <div class='col-xl-6 col-lg-6 d-none d-lg-block text-right'>
                <div class='footer-menu'>
                  <ul>
                    <li>
                      <a href='#'>Home</a>
                    </li>
                    <li>
                      <a href='#'>Terms</a>
                    </li>
                    <li>
                      <a href='#'>Privacy</a>
                    </li>
                    <li>
                      <a href='#'>Policy</a>
                    </li>
                    <li>
                      <a href='#'>Contact</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
