import React, { Component } from 'react';
import NavBars from "../Sections/navbar";
import LoginImage from "../Assets/Login.jpeg";
import "../Components/Signup.css";
// export default class SignUp extends Component {
    function Signup(){
    // render() {

    return (
        <>
        <NavBars/>
        
        {/* <div className="section-area account-wraper2"> */}
        <div className="container">
          <div className="row justify-content-center">
             <div className="col-xl-5 col-lg-8 col-md-8">
              {/* <div className="appointment-form form-wraper"> */}
                <form>
                    <h3>Sign Up</h3>
                    <div className="mb-3">
                    <label><h6>Full name</h6></label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Full name"
                        required
                    />
                    </div>
                    <div className="mb-3">
                    <label><h6>Email address</h6></label>
                    <input
                        type="email"
                        className="form-control"
                        placeholder="Enter email"
                        required
                    />
                    </div>
                    <div className="mb-3">
                    <label><h6>Gender </h6></label>
                    <select>
                        
                    <option>Select</option>
                    <option>Male</option>
                    <option>Female</option>
                    required
                    </select>
                    {/* 
                    <input type="radio" name= "gender" className="form-control" value="Male"/>
                    <input type="radio" name= "gender" className="form-control" value="Female"/> */}
                    </div>
                    <div className="mb-3">
                    <label><h6>Contact No.</h6></label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Contact Number"
                        required
                    />
                    </div>
                    <div className="mb-3">
                    <label><h6>Date of Birth</h6></label>
                    <input
                        type="date"
                        className="form-control"
                        placeholder="Date Of Birth"
                        required
                    />
                    </div>
                    <div className="mb-3">
                    <label><h6>Password</h6></label>
                    <input
                        type="password"
                        className="form-control"
                        placeholder="Enter password"
                        required
                    />
                    </div>
                    <div className="mb-3">
                    <label><h6>Confirm Password</h6></label>
                    <input
                        type="password"
                        className="form-control"
                        placeholder="Enter password"
                        required
                    />
                    </div>
                    <div className="d-grid">
                    <button type="submit" className="btn btn-primary">
                        Sign Up
                    </button>
                    </div>
                    <p className="forgot-password text-right">
                    Already registered <a href="/Login">Log in?</a>
                    </p>
                </form>
              {/* </div>
            </div> */}
            
          </div>
        </div>
      </div>
      </>
    )
  }
// }

export default Signup;