import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Logo from "../Assets/logo1.jpeg";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import "./navbar.css";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import {Signup} from "../Components/Signup";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";

const notify = (text) => toast(text);

function NavBars() {
  // const { data } = useSelector((store) => store.auth);
  // const dispatch = useDispatch();
  const [isLogin,setIsLogin] = useState(false);

  useEffect( ()=> {
    let email=localStorage.getItem("user");
    if (email) {
        setIsLogin(true);
    }else{
      setIsLogin(false);
    }
   },[isLogin]);

  return (
    <div className="navStick">
      <ToastContainer />
      <Navbar expand="lg">
        <Container fluid>
          <Link to={"/"} className="navbar-brand">
            <img src={Logo} title="logo" alt="img" />
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link to={"/"} className="nav-link">
                Home
              </Link>
              <Link to={"/ourteam"} className="nav-link">
                Doctors
              </Link>
              {/* <NavDropdown title="About us" id="basic-nav-dropdown">  */}
                <Link to={"/about"} className="nav-link">
                  About Us
                </Link>
                {/* <Link to={"/service"} className="dropdown-item">
                  Services
                </Link> */}
              {/* </NavDropdown>  */}

              { isLogin &&  <Link to={"/booking"} className="nav-link">Booking </Link> }

              {isLogin ?  (
                  <Link
                    to="/"
                    className="nav-link"
                    onClick={() => {
                      localStorage.removeItem("user");
                      setIsLogin(false);
                      // dispatch({ type: "AUTH_LOGOUT" });
                      // notify("Logged out");    
                      alert("Logged out");                
                    }}
                  >
                    Logout
                  </Link>) : (
                  <NavDropdown title="Login" id="basic-nav-dropdown">
                    <Link to={"/login"} className="dropdown-item">
                      Patient
                </Link>
                  
                    <a href="http://localhost:3003" className="dropdown-item">
                      Staff
                    </a>
                  </NavDropdown>
              )}

              {/*
              {data?.isAuthenticated ? (
                <Link
                  to=""
                  className="nav-link"
                  onClick={() => {
                    dispatch({ type: "AUTH_LOGOUT" });
                    notify("Logged out");
                  }}
                >
                  Logout
                </Link>
              ) : (
                <NavDropdown title="Login" id="basic-nav-dropdown">
                  <Link to={"/login"} className="dropdown-item">
                    Patient
                  </Link>
                  
                  <a href="http://localhost:3003" className="dropdown-item">
                    Staff
                  </a>
                </NavDropdown>
              )}
              */}

            { !isLogin && 
              <Link to={"/Signup"} className="nav-link">
                  Sign Up
              </Link>
              }
              {/* <Link to="/Report" className="nav-link">
                <button type="button">
                  Report
                  <span>
                    <IoIosArrowForward />
                  </span>
                </button>
              </Link> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBars;
