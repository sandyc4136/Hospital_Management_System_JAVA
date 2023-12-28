import Logo from "../Assets/logo1.jpeg";
import "./footer.css";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <div>
      <footer className="footer">
        <div className="footer-top">
          {/* <div class="newsletter-container">
            <div className="row">
              <div className=" col-lg-12 col-md-6 ">
                <div class="block-item">
                  <div class="section-title">
                    <h4>DROP YOUR PHONE NUMBER WE WILL CALL YOU BACK </h4>
                  </div>
                  <div class="content-container col-lg-6">
                    We will call you back for your inquires.
                    
                    <form >
                      <input type="number" />
                      <input type="button" value="Submit"/>
                    </form>
                    
                  </div>
              </div>
              </div>
            </div>
          </div> */}
          <div className="container">
            <div className="row">
              <div className="col-xl-4 col-lg-3 col-md-6">
                <div className="widget widget-info">
                  <div className="footer-logo">
                    <Link to={"/"}>
                      <img src={Logo} alt="img" />
                    </Link>
                  </div>
                  <div className="ft-contact">
                    <p>Protecting and Taking Care To Of Your Health</p>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-3 col-6">
                <div className="widget footer-widget ml-50" >
                  <h3 className="footer-title">Quick Links</h3>
                  <ul >
                    <li>
                      <Link to={"/ourteam"}>
                        <span>Doctors</span>
                      </Link>
                    </li>
                    <li>
                      <Link to={"/team"}>
                        <span>Creators</span>
                      </Link>
                    </li>
                    <li>
                      <Link to={"/about"}>
                        <span>About Us</span>
                      </Link>
                    </li>
                    {/* <li>
                      <Link to={"/service"}>
                        <span>Services</span>
                      </Link>
                    </li> */}
                    <li>
                      <Link to={"/booking"}>
                        <span>Booking</span>
                      </Link>
                    </li>
                   
                  </ul>
                </div>
              </div>
              {/* <div className="col-xl-3 col-lg-3 col-6">
                <div className="widget footer-widget ml-50">
                  <h3 className="footer-title">Our Services</h3>
                  <ul>
                    <li>
                      <Link to="">
                        <span>Dental Care</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="">
                        <span>ENT Clinic</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="">
                        <span>Cardiology</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="">
                        <span>Precise Diagnosis</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="">
                        <span>Ambulance Services</span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div> */}
              <div className="col-xl-4 col-lg-3 col-md-6">
                <div className="widget widget-form">
                  <h3 className="footer-title">More About us</h3>

                  <div className="footer-social-link">
                    <ul>
                      <li>
                        <Link to="">
                          <FaFacebookF />
                        </Link>
                      </li>
                      <li>
                        <Link to="">
                          <FaTwitter />
                        </Link>
                      </li>
                      <li>
                        <Link to="">
                          <FaInstagram />
                        </Link>
                      </li>
                      <li>
                        <Link to="">
                          <FaLinkedin />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="footer-bottom">
            <div className="row">
              <div className="col-12 text-center">
                <p className="copyright-text">
                  Copyright © 2023 Designed & Developed by
                  <a
                    href="https://github.com/piyush-agrawal6"
                    className="text-secondary"
                    target="_blank"
                  >
                   Team 31 
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
