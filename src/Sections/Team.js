import "../index.css";
import React from 'react';
import { BsGithub, BsLinkedin,BsInstagram} from "react-icons/bs";
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import Aayushi from "../Assets/Aayushi.jpeg";
import Atul from "../Assets/Atul.jpeg";
import Sandip from "../Assets/Sandip.jpeg";
import Dayanand from "../Assets/Dayanand.jpeg";
import NavBars from "./navbar";
import Footer from "./footer";
import { text } from "@fortawesome/fontawesome-svg-core";

function Team() {

  const styles = {
    color: 'white',
    'text-decoration': 'none'
  };
  return (
    <div>
      {/* <NavBars /> */}
      <section className="section-area section-sp3 team-wraper">
        <div className="container">
          <div className="heading-bx text-center">
            <h6 className="title-ext text-secondary">Our Team</h6>
            <h2 className="title">Meet the creators</h2>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-3 col-sm-6 mb-30">
              <div className="team-member">
                <div className="team-media">
                  <img src={Sandip} alt="img" />
                </div>
                <div className="team-info">
                  <div className="team-info-comntent">
                    <h4 className="title">Sandip Chhetry</h4>
                    <span className="text-secondary">CDAC - Kharghar</span>
                  </div>
                  <ul className="social-media">
                    <li>
                      <a
                        href="https://github.com/sandyc4136"
                        target="_blank"
                      >
                        <BsGithub />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.linkedin.com/in/sandip-chhetry-390115107/"
                        target="_blank"
                      >
                        <BsLinkedin />
                      </a>
                    </li>
                    <li>
                      <a
                        
                        target="_blank"
                      >
                        <BsInstagram />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 mb-30">
              <div className="team-member">
                <div className="team-media">
                  <img src={Atul} alt="img" />
                </div>
                <div className="team-info">
                  <div className="team-info-comntent">
                    <h4 className="title">Atul Dhakne</h4>
                    <span className="text-secondary">CDAC - Juhu</span>
                  </div>
                  <ul className="social-media">
                    <li>
                      <a
                        href="https://github.com/AtulDhakne"
                        target="_blank"
                      >
                        <BsGithub />
                      </a>
                    </li>
                    <li>
                      <a
                        href="http://linkedin.com/in/atul-dhakne-751a13144"
                        target="_blank"
                      >
                        <BsLinkedin />
                      </a>
                    </li>
                    <li>
                      <a
                       
                        target="_blank"
                      >
                        <BsInstagram />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 mb-30">
              <div className="team-member">
                <div className="team-media">
                  <img src={Aayushi} alt="img" />
                </div>
                <div className="team-info">
                  <div className="team-info-comntent">
                    <h4 className="title">Aayushi Kaushal</h4>
                    <span className="text-secondary">CDAC - Kharghar</span>
                  </div>
                  <ul className="social-media">
                    <li>
                      <a href="https://github.com/Aayushikaushal" target="_blank">
                        <BsGithub />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.linkedin.com/in/aayushi-kaushal-09869029b"
                        target="_blank"
                      >
                        <BsLinkedin />
                      </a>
                    </li>
                    <li>
                      <a target="_blank">
                        <BsInstagram />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 mb-30">
              <div className="team-member">
                <div className="team-media">
                  <img src={Dayanand} alt="img" />
                </div>
                <div className="team-info">
                  <div className="team-info-comntent">
                    <h4 className="title">Dayanand Pawale</h4>
                    <span className="text-secondary">CDAC - Kharghar</span>
                  </div>
                  <ul className="social-media">
                    <li>
                      <a href="https://github.com/pawale736" target="_blank">
                        <BsGithub />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.linkedin.com/in/dayanand-pawale-334437203/"
                        target="_blank"
                      >
                        <BsLinkedin />
                      </a>
                    </li>
                    <li>
                      <a target="_blank">
                         <BsInstagram />
                      </a>
                      {/* <Link to="">
                          <BsInstagram />
                        </Link> */}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
            <Button className="btn primary__btn w-75">
                  <Link to="/" style={styles}>Back to Home</Link>
            </Button>
            </div>
          </div>
        </div>
      </section>
      {/* <Footer /> */}
    </div>
  );
}

export default Team;
