import "./login.css";
import "../index.css";
import { Link, useNavigate } from "react-router-dom";
// import NavBars from "../Sections/navbar";
import { Button } from 'reactstrap';
import { useState } from "react";
import loginValidation from "./Validation/loginValidation";
import { ToastContainer,toast } from "react-toastify";
import axios from "axios";

function Login() {
  const navigate=useNavigate();
  // const history= useHistory();

  const styles = {
    color: 'white',
    'text-decoration': 'none'
  };

  const [credentials, setCredentials] = useState({
    email:'',
    password:''
  });

  const [errors, setErrors]=useState({});
  let[error,setError]=useState({errorData:null,isError:false})

    const handleChange=(event,property)=>{
        setCredentials(event.target.values); 
      }

      const handleEmailChange = (e) =>{
            setCredentials({
              ...credentials,
              email: e.target.value,
            });
          };

      const handlePasswordChange = (e) => {
        setCredentials({
            ...credentials,
            password: e.target.value,
        });
    };

    const handleEmail=(event)=>{
      setCredentials(setCredentials(event.target.values));
    }

    const handlePassword=(event)=>{
      setCredentials(setCredentials(event.target.values));
    }

    console.log(credentials);
    console.log("aaaaaaaaaaaaa");

  const handleClick = (e) => {
    setErrors(loginValidation(credentials));
  };
  
  function handleSubmit(event) {
    event.preventDefault();
        console.log(credentials);
      
        // if(credentials.email===undefined||credentials.email.trim()===''){
        //   // toast.error("Email required");
        //   alert("Email required");
        //   return;
        // }

        // console.log(credentials);
        // console.log("bbbbbbbbbbbbbbb");

        // if(credentials.password===undefined||credentials.password.trim()===''){
        //   toast.error("password required");
        //   return;
        // }

        console.log(credentials);
        console.log("ccccccccccccccc");
       
        localStorage.setItem('user', credentials.email);

          axios.post('http://localhost:8080/customer/login', credentials)
          .then(response => {
            if(response.data.ok){
              navigate("/");
              console.log(response.data);
                alert("Login Successfull");
            }
          })
          .catch(error => {console.error('Error fetching Details:', error)
              alert("invalid Login");
           });
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
                <form   onSubmit={handleSubmit}>
                  <div className="form-group">
                    <h6>Email</h6>
                    <input
                      name="email"
                      
                      type="email"
                      className="form-control"
                      placeholder="Enter Email"
                      values={credentials.email}
                      onChange={handleEmailChange}
                      
                    />
                    {errors.email && <p style={{color:"red", fontsize: "14px"}}>{errors.email}</p>}
                  </div>
                  <div className="form-group">
                    <h6>Password</h6>
                    <input
                      name="password"
                     
                      type="password"
                      className="form-control"
                      placeholder="Password"
                      values={credentials.password}
                      onChange={handlePasswordChange}
                      
                    />
                    {errors.password && <p style={{color:"red", fontsize: "14px"}}>{errors.password}</p>}
                  </div>
                  <div className="form-group" >
                    {/* <Link
                      type="button"
                      className="btn mb-30 btn-lg btn-primary w-100"
                    >
                      Login
                    </Link> */}
                    <Button
                     
                     variant="success"
                     type="submit" 
                     onClick={handleClick} 
                     >             
                       Login 
                    </Button>
                  </div>
                </form>
                <div>

                  Not registered yet? <a href="/Signup">Register here...</a>
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
