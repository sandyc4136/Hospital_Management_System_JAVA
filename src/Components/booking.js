import "./about.css";
import { FiHome } from "react-icons/fi";
import NavBars from "../Sections/navbar";
import Account from "../Sections/account";
import Footer from "../Sections/footer";
import ToTop from "../Sections/totop";
import { Link } from "react-router-dom";
// import {BASE_URL} from "../utils/config";

function Booking() {
  return (
    <div>
      <NavBars />
      <div className="banner-wraper">
        <div className="page-banner">
          <div className="container">
            <div className="page-banner-entry text-center">
              <h1>Booking</h1>
              <div className="form-group" >
              {/* <div > */}
                <Link to="/booking_status"
                  type="button"
                  className="btn mb-30 btn-sm btn-secondary w-20"
                >
                  Booking-Status
                </Link>
                {/* </div> */}
              </div>
              {/* <nav aria-label="breadcrumb" className="breadcrumb-row">
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to={"/home"}>
                      <FiHome />
                      Home
                    </Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Booking
                  </li>
                </ul>
              </nav> */}
            </div>
          </div>
        </div>
      </div>
      <Account />
      <Footer />
      <ToTop />
    </div>
  );
}

export default Booking;
