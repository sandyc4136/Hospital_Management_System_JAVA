import React from 'react';
import NavBars from "../Sections/navbar";
import Footer from '../Sections/footer';

import "../CSS/booking_status.css";
function BookingStatus() {
  return (
    <>
 <NavBars />
 <div className="banner-wraper">
        <div className="page-banner">
    <div className="container">
       <div className="bookingBox row justify-content-center">
          <h2>Booking-Status</h2>
            <table className="booking_table" cellspacing="0">
              <thead>
                <tr>
                  <th>Full Name</th>
                  <th>Email</th>
                  <th>Phone-no.</th>
                  <th>Disease</th>
                  <th>Age</th>
                  <th>Gender</th>
                  <th>Address</th>
                  <th>Date</th>
                  <th>Time</th>
                </tr>
              </thead>
              <tbody>
                <tr >
                  <td></td>
                  {/* <td>Data 2</td>
                  <td>Data 4</td>
                  <td>Data 5</td>
                  <td>Data 6</td>
                  <td>Data 7</td>
                  <td>Data 8</td>
                  <td>Data 9</td> */}
                </tr>
                <tr>
                  {/* <td>Data 10</td>
                  <td>Data 11</td>
                  <td>Data 12</td>
                  <td>Data 13</td>
                  <td>Data 14</td>
                  <td>Data 15</td>
                  <td>Data 16</td>
                  <td>Data 17</td>
                  <td>Data 18</td> */}
                </tr>
              </tbody>
            </table>
    </div>
    </div>
    </div>
    </div>
    <Footer />
    </>
  );
};

export default BookingStatus;