import axios from 'axios';
import {useState} from 'react';

function Contactus(){

    let initialData = {
        name: "",
        email: "",
        contact: "",
        message:""
      };

    const [userData, setUserData] = useState(initialData);
    const [responseData, setResponseData] = useState({});

    function handleInput(e) {
        setUserData({ ...userData, [e.target.name]: e.target.value })        
        };

    function contact(e) {
        e.preventDefault();
        let url = `http://localhost:8080/contacts/create`;
        axios.post(url,userData).then((response) => {
            //console.log(response.data);
            setResponseData(response);
            try{
                alert("Thank You for contacting us");
            }
                
            catch(error){
                alert("Please fill all the details!");
            }
                
            })
        }
        
    return (
        <>
        
        <div className="container-fluid">
          <div className="row align-items-center ">
            <div className="col-lg-6 mb-30">
                <div className="col-lg-6">
                Thank you for your interest in our Hospital Management System. We value your feedback, inquiries, and suggestions. Please feel free to reach out to us using the contact information provided below.
                </div><br/>
                <div className="col-lg-6">
                    <p><b>Email : </b>info@wecare.com</p><p><b>Phone :</b> +91 94123-45673</p>
                </div>
                <div className="col-lg-6"><p><b>Address : </b>
                        WeCare Hospital Management System 
                        N/92 Nayapalli,
                        Bhubaneswar, Odisha
                        </p>
                </div>
            </div>
            <div className="col-lg-6  mb-30" >
                <div className="form-div">
                    <h3 class="text-center">Get in Touch with our Medical Experts</h3>
                    <form action="/home" onSubmit={contact} method="post">
                        <div className="form-group"> 
                            <div className="form-label">
                                <label>Full Name :</label>
                                <input type="text" className="form-control" onChange={handleInput} name="name"/><br/>
                            </div>  
                        </div>
                        <div className="form-group"> 
                            <div className="form-label">
                                <label>Email :</label>
                                <input type="email" className="form-control" name="email" onChange={handleInput}  /><br/>
                            </div>
                        </div>
                        <div className="form-group"> 
                            <div className="form-label">
                                <label>Contact No. :</label>
                                <input type="text" className="form-control"name="contact"  onChange={handleInput}  /><br/>
                            </div>
                        </div>
                        <div className="form-group"> 
                            <div className="form-label">
                                <label>Message :</label>
                                <textarea id="message" name="message" rows="4" className="form-control" onChange={handleInput}   required></textarea><br/>
                            </div>
                        </div>
                        <div className="col-sm-12 align-items-center form-group"> 
                            <button type="submit" className="btn mb-30 btn-lg btn-primary w-50" >Submit</button>
                        </div>
                    </form> 
                </div>
            </div>
        </div>
    </div>
    </>
    )
}
export default Contactus;