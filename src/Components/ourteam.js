import "./about.css";
import { FiHome } from "react-icons/fi";
import NavBars from "../Sections/navbar";
import Footer from "../Sections/footer";
import { FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import member1 from "../Assets/Doctorr1.jpeg";
import member2 from "../Assets/Doctor2.jpeg";
import member3 from "../Assets/Doctorr3.jpeg";
import member4 from "../Assets/Doctor3.jpeg";
import member5 from "../Assets/Doctor6.jpeg";
import member6 from "../Assets/Doctor4.jpeg";
import ToTop from "../Sections/totop";
import { Link, useNavigate } from "react-router-dom";

function OurTeam() {
  return (
    <div>
      <NavBars />
      <div className="banner-wraper">
        <div className="page-banner">
          <div className="container">
            <div className="page-banner-entry text-center">
              <h1>Doctors</h1>
              {/* <nav aria-label="breadcrumb" className="breadcrumb-row">
                { <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to={"/home"}>
                      <FiHome />
                      Home
                    </Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Doctors
                  </li>
                </ul> }
              </nav> */}
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-4 col-sm-6 mb-30">
            <div className="team-member">
              <div className="team-media">
                <img src={member3} alt="img" />
              </div>
              <div className="team-info">
                <div className="team-info-comntent">
                  <h4 className="title">Dr. Priya Kapoor</h4>
                  <span className="text-secondary">Dentist</span>
                </div>
                <ul className="social-media">
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
          <div className="col-lg-4 col-sm-6 mb-30">
            <div className="team-member">
              <div className="team-media">
                <img src={member4} alt="img" />
              </div>
              <div className="team-info">
                <div className="team-info-comntent">
                  <h4 className="title">Dr. Vikram Sharma</h4>
                  <span className="text-secondary">Cardiologist</span>
                </div>
                <ul className="social-media">
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
          <div className="col-lg-4 col-sm-6 mb-30">
            <div className="team-member">
              <div className="team-media">
                <img src={member6} alt="img" />
              </div>
              <div className="team-info">
                <div className="team-info-comntent">
                  <h4 className="title">Dr. Salman Ajani</h4>
                  <span className="text-secondary">Neurologist</span>
                </div>
                <ul className="social-media">
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
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-4 col-sm-6 mb-30">
            <div className="team-member">
              <div className="team-media">
                <img src={member1} alt="img" />
              </div>
              <div className="team-info">
                <div className="team-info-comntent">
                  <h4 className="title">Dr. Rajendra Patel</h4>
                  <span className="text-secondary">Physiotherapist</span>
                </div>
                <ul className="social-media">
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
          <div className="col-lg-4 col-sm-6 mb-30">
            <div className="team-member">
              <div className="team-media">
                <img src={member2} alt="img" />
              </div>
              <div className="team-info">
                <div className="team-info-comntent">
                  <h4 className="title">Dr. Ayesha Desai</h4>
                  <span className="text-secondary">ENT</span>
                </div>
                <ul className="social-media">
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
          <div className="col-lg-4 col-sm-6 mb-30">
            <div className="team-member">
              <div className="team-media">
                <img src={member5} alt="img" />
              </div>
              <div className="team-info">
                <div className="team-info-comntent">
                  <h4 className="title">Dr. Smita Choudhary</h4>
                  <span className="text-secondary">Operations</span>
                </div>
                <ul className="social-media">
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
      <Footer />
      <ToTop />
    </div>
  );
}

export default OurTeam;
