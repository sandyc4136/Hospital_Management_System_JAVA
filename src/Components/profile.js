import React, { useEffect, useState } from 'react';
import NavBars from "../Sections/navbar";
import Footer from '../Sections/footer';
import axios from 'axios';
import "../CSS/booking_status.css";
import { ToastContainer, toast } from "react-toastify";
// import "..CSS/profile.css";

//  const id=(localStorage.getItem('id'));
const id = parseInt(localStorage.getItem('id'), 10);

const updateProfile = (formData) => {
    // Use the correct API endpoint for updating the profile
    axios.put(`http://localhost:8080/bookPatient/${id}`, formData)
      .then(response => {
        toast.success("Profile Updated");
      })
      .catch(error => {
        console.error('Error updating Profile:', error);
        toast.error("Error updating profile");
      });
  };

function Profile() {
    const [formData, setFormData] = useState({
        patientName: "",
        email: "",
        contact: "",
        disease: "",
        blood_group: "",
        department: "",
        age: "",
        gender: "",
        address: "",
        date: "",
      });

      useEffect(() => {
        // Fetch data from your backend API
        axios.get(`http://localhost:8080/fetchPatient/${id}`)
          .then(response => setFormData(response.data))
          .catch(error => console.error('Error fetching Profile:', error));
      }, [id]);
    
    //   const [loading, setLoading] = useState(false);
    //   const dispatch = useDispatch();
      const handleFormChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
      const handleSubmit = (e) => {
        e.preventDefault();
        updateProfile(formData);
        // alert("Profile Updated");
      }


  return (
    <>
      <NavBars />
      <div>
      <ToastContainer />
      <section className="section-area account-wraper1">
        <div className="container-fluid">
          <div className="appointment-inner section-sp2">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-xl-5 col-lg-6 col-md-6 col-sm-12  mx-auto">
                  <div className="appointment-form form-wraper">
                    <h3>Update Profile</h3>
                    <form method="put" onSubmit={handleSubmit}>
                      
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Your Full Name"
                          value={formData.patientName}
                          name="patientName"
                          onChange={handleFormChange}
                          required
                        ></input>
                      </div>
                      <div className="form-group">
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Email"
                          value={formData.email}
                          name="email"
                          onChange={handleFormChange}
                          required
                        ></input>
                      </div>
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Phone Number"
                          value={formData.contact}
                          name="contact"
                          onChange={handleFormChange}
                          required
                        ></input>
                      </div>
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Disease"
                          value={formData.disease}
                          name="disease"
                          onChange={handleFormChange}
                          required
                        ></input>
                      </div>
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Blood Group"
                          value={formData.blood_group}
                          name="blood_group"
                          onChange={handleFormChange}
                          required
                        ></input>
                      </div>
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Department"
                          value={formData.department}
                          name="department"
                          onChange={handleFormChange}
                          required
                        ></input>
                      </div>
                      <div className="form-group">
                        <input
                          type="number"
                          className="form-control"
                          placeholder="Age"
                          value={formData.age}
                          name="age"
                          onChange={handleFormChange}
                          required
                        ></input>
                      </div>
                      <div className="form-group">
                        <select
                          className="form-select form-control"
                          name="gender"
                          onChange={handleFormChange}
                          required
                        >
                          <option value="">Select Gender</option>
                          <option value="male">Male</option>
                          <option value="female">Female</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Address"
                          value={formData.address}
                          name="address"
                          onChange={handleFormChange}
                          required
                        ></input>
                      </div>
                      <div className="form-group">
                        <input
                          type="date"
                          placeholder="Date of Birth"
                          className="form-control"
                          value={formData.date}
                          name="date"
                          onChange={handleFormChange}
                          required
                        ></input>
                      </div>
                     
                      <button
                        type="submit"
                        className="btn btn-secondary btn-lg"
                        // onClick={handleSubmit}
                      >
                        Update
                        {/* {loading ? "Loading..." : "Book Now"} */}
                      </button>
                    </form>
                  </div>
                </div>
              
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
      <Footer />
    </>
  );
}

export default Profile;

