import "./login.css";
import "../index.css";
import { Link, useNavigate } from "react-router-dom";
import NavBars from "../Sections/navbar";
import { Button } from 'reactstrap';
import { useState } from "react";
import { useHistory } from "react-router-dom";
import loginValidation from "./Validation/loginValidation";
import axios from "axios";

function Login() {

  // const history= useHistory();

  const styles = {
    color: 'white',
    'text-decoration': 'none'
  };

  const [credentials, setCredentials] = useState({
    email:undefined,
    password:undefined
  });

  // const [errors, setErrors]=useState({});
  const [errorMessage, setErrorMessage] = useState();

  const handleChange = e =>{
    setCredentials(prev => ({ ...prev, [e.target.id]: e.target.value }));
  };

  // const handleClick = (e) => {
  //   setErrors(loginValidation(credentials));
  // };
  
  function login(event) {
    event.preventDefault();
    axios.post('http://localhost:8080/customer/login', credentials).then((response => {
        console.log(response);
        console.log(response.data);
        if(response.data.status) {
            sessionStorage.setItem('customerId', response.data.customerId);
            sessionStorage.setItem('name', response.data.name);
            // history.push('/dashboard')
        }
        else {
            setErrorMessage(response.data.messageIfAny);
        }
    }))
}

  return (
    <>
   
      <div className="section-area account-wraper2">
        <div className="container">
          <div className="row justify-content-center">
          {/* <div className="col-xl-5 col-lg-6 col-md-8">
            <img src={LoginImage}/>
            </div> */}
            <div className="col-xl-5 col-lg-6 col-md-8">
              <div className="appointment-form form-wraper">
                <div >
                  <h2> <b>Patient Login</b></h2>
                </div>
                <form onSubmit={login} method="post">
                  <div className="form-group">
                    <h6>Email</h6>
                    <input
                      name="email"
                      value={credentials.email}
                      type="text"
                      className="form-control"
                      placeholder="Email"
                      onChange={handleChange}
                      required
                    ></input>
                    {/* {errors.email && <p style={{color:"red", fontsize: "14px"}}>{errors.email}</p>} */}
                  </div>
                  <div className="form-group">
                    <h6>Password</h6>
                    <input
                      name="password"
                      value={credentials.password}
                      type="password"
                      className="form-control"
                      placeholder="Password"
                      onChange={handleChange}
                      required
                    ></input>
                    {/* {errors.password && <p style={{color:"red", fontsize: "14px"}}>{errors.password}</p>} */}
                  </div>
                  <div className="form-group" >
                    <Link
                      type="botton"
                      className="btn mb-30 btn-lg btn-primary w-100"
                    >
                      Login
                    </Link>
                  </div>
                </form>
                <div>

                  Not registered yet? <a href="/Signup">Register here</a>
                </div>
                <div >
                  <Button className="btn primary__btn w-75">
                        <Link to="/" style={styles}>Back to Home</Link>
                  </Button>
                </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
