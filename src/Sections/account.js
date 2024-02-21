import MobileImg from "../Assets/mobile.f82d7322.png";
import WomanImg from "../Assets/women.eb5c49c5.png";
import "./account.css";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import axios from 'axios';

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const notify = (text) => toast(text);

function Account() {
  const id1 = localStorage.getItem('id');
  const initialData = {
    doctor_id: "",
    patient_id: id1,
    appointmentDate: "",
    appointmentTime: "",
  };
  
  const [formData, setFormData] = useState(initialData);
  const [loading, setLoading] = useState(false);
  const [doctors, setDoctors] = useState([]);
  const dispatch = useDispatch();
  
  useEffect(() => {
    // Fetch list of doctors from the backend when component mounts
    axios.get('http://localhost:8080/fetchDoctors')
      .then(response => setDoctors(response.data))
      .catch(error => console.error('Error fetching doctors:', error));
  }, []);

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    
    axios.post('http://localhost:8080/bookAppointment', formData)
      .then(response => {
        console.log(response.data);
        if(response.data.status) { 
          alert("Please fill all the details!");
        } else {
          alert("Appointment successful!");
        }
        setLoading(false);
      })
      .catch(error => {
        console.error('Error booking appointment:', error);
        setLoading(false);
      });
  };
  
  return (
    <div>
      <ToastContainer />
      <section className="section-area account-wraper1">
        <div className="container-fluid">
          <div className="appointment-inner section-sp2">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-xl-5 col-lg-6 col-md-6 col-sm-12">
                  <div className="appointment-form form-wraper">
                    <h3>Book Appointment</h3>
                    <form method="post" onSubmit={handleSubmit}>
                      <div className="form-group">
                        <select
                          className="form-control custom-select"
                          name="doctor_id"
                          onChange={handleFormChange}
                          value={formData.doctor_id}
                          required
                        >
                          <option value="">Select Doctor</option>
                          {doctors.map(doctor => (
                            <option key={doctor.id} value={doctor.id}>{doctor.name}</option>
                          ))}
                        </select>
                      </div>
                      
                      <div className="form-group">
                        <input
                          type="date"
                          className="form-control"
                          value={formData.appointmentDate}
                          name="appointmentDate"
                          onChange={handleFormChange}
                          required
                        ></input>
                      </div>
                      <div className="form-group">
                        <input
                          type="time"
                          className="form-control"
                          value={formData.appointmentTime}
                          name="appointmentTime"
                          onChange={handleFormChange}
                          required
                        ></input>
                      </div>
                      <button
                        type="submit"
                        className="btn btn-secondary btn-lg"
                        disabled={loading}
                      >
                        {loading ? "Loading..." : "Book Now"}
                      </button>
                    </form>
                  </div>
                </div>
                <div className="col-xl-7 col-lg-6 col-md-6 col-sm-12">
                  <div className="appointment-thumb">
                    <img src={MobileImg} alt="img" />
                    <div className="images-group">
                      <img className="img1" src={WomanImg} alt="img" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Account;