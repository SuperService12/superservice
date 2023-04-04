import React from "react";
import { Link } from "react-router-dom";
import './footer.css'

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-cta pt-4 pb-3">
          <div className="row">
            <div className="col-xl-4 col-md-4 mb-30">
              <div className="single-cta">
                <i className="fas fa-map-marker-alt"></i>
                <div className="cta-text">
                  <h4>Find Our Company</h4>
                  <span>Jerusalem College Of Engineering,Chennai</span>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-4 mb-30">
              <div className="single-cta">
                <i className="fas fa-phone"></i>
                <div className="cta-text">
                  <h4>Call us</h4>
                  <span>8939672655</span>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-4 mb-30">
              <div className="single-cta">
                <i className="far fa-envelope-open"></i>
                <div className="cta-text">
                  <h4>Mail us</h4>
                  <span>superservice125@gmail.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-content pt-4 pb-3">
          <div className="row">
            <div className="col-xl-4 col-lg-4 mb-50">
              <div className="footer-widget">
                <div className="footer-logo">
                  <Link className="navbar-brand" to="/">
                    <h5 className="footer_logo">SuperService</h5>
                  </Link>
                </div>
                <div className="footer-text">
                  <p>SuperService,this project is done for all the people who needs help in their household works .</p>
                </div>
                <div className="footer-social-icon">
                  <Link to="">
                    <i className="fab fa-instagram"></i>
                  </Link>
                  <Link to="">
                    <i className="fab fa-linkedin-in"></i>
                  </Link>
                  <Link to="">
                    <i className="fab fa-youtube"></i>
                  </Link>
                  <Link to="">
                    <i className="fab fa-pinterest"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
              <div className="footer-widget">
                <div className="footer-widget-heading">
                  <h3>Our Team Members</h3>
                </div>
                <ul>
                  <li>
                    <Link to="https://www.linkedin.com/in/sivamalini-d-354a12249">
                      Sivamalini
                    </Link>
                  </li>
                  <li>
                    <Link to="https://www.linkedin.com/in/subhiksha-ilayaraja-518504254">
                      Subhiksha 
                    </Link>
                  </li>
                  <li>
                    <Link to="https://www.linkedin.com/in/viyanney-maria-joseph-078b0a219/">
                      Viyanney Maria Joseph
                    </Link>
                  </li>
                  <li>
                    <Link to="">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link to="">
                      Help
                    </Link>
                  </li>
                  <li>
                    <Link to="">
                      Our Services
                    </Link>
                  </li>
                  <li>
                    <Link to="">
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link to="">
                      Careers
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
              <div className="footer-widget">
                <div className="footer-widget-heading">
                  <h3>Subscribe</h3>
                </div>
                <div className="footer-text mb-25">
                  <p>Don’t miss to subscribe to our new feeds, kindly fill the form below.</p>
                </div>
                <div className="subscribe-form">
                  <form action="#">
                    <input type="text" placeholder="Email Address" />
                    <button><i className="fab fa-telegram-plane"></i></button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-area">
        <div className="container">
          <div className="row">
            <div className="text-center text-lg-left">
              <div className="copyright-text">
                <p>Copyright &copy; 2023, All Right Reserved <Link to="">SuperServiceCompany</Link></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
