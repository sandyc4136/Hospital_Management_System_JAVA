import React, { useEffect, useState } from 'react';
import NavBars from "../Sections/navbar";
import Footer from '../Sections/footer';
import axios from 'axios';
import "../CSS/booking_status.css";

function BookingStatus() {
  const [appointments, setAppointments] = useState([]);
  const id = localStorage.getItem('id');

  useEffect(() => {
    // Fetch data from your backend API
    axios.get(`http://localhost:8080/fetchAllAppointments`)
      .then(response => setAppointments(response.data))
      .catch(error => console.error('Error fetching Appointments:', error));
  }, []);

  return (
    <>
      <NavBars />
      <div className="banner-wraper">
        <div className="page-banner">
          <div className="container">
            <div className="row justify-content-center">
              <h2>Booking-Status</h2>
              <table className="booking_table" cellSpacing="0">
                <thead>
                  <tr>
                    <th>Patient Name</th>
                    <th>Patient Email</th>
                    <th>Patient Disease</th>
                    <th>Patient Age</th>
                    <th>Patient Gender</th>
                    <th>Doctor Name</th>
                    <th>Doctor Department</th>
                    <th>Appointment Date</th>
                    <th>Appointment Time</th>
                  </tr>
                </thead>
                <tbody>
                  {appointments.map(([patientId, patient, doctor]) => {
                    // if (patientId.patient.id == id) {
                      return (
                        <tr key={patientId}>
                          <td>{patient.fullName}</td>
                          <td>{patient.email}</td>
                          <td>{patient.disease}</td>
                          <td>{patient.age}</td>
                          <td>{patient.gender}</td>
                          <td>{doctor.name}</td>
                          <td>{doctor.department}</td>
                          <td>{patient.appointments.length > 0 ? patient.appointments[0].appointmentDate : "N/A"}</td>
                          <td>{patient.appointments.length > 0 ? patient.appointments[0].time : "N/A"}</td>
                        </tr>
                      );
                    // } else {
                    //   return null; // Return null if the condition is not met
                    // }
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default BookingStatus;

