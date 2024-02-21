import "./index.css";
import Home from "./Components/home";
import About from "./Components/about";
import OurTeam from "./Components/ourteam";
import Booking from "./Components/booking";
import NotFound from "./Components/notfound";
import Login from "./Components/login";
import Service from "./Components/service";
import Report from "./Components/Report";
import { Routes, Route } from "react-router-dom";
import Team from "./Sections/Team";
import Signup from "./Components/Signup";
import BookingStatus from "./Components/BookingStatus";
import Profile from "./Components/profile";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/team" element={<Team />} />
      <Route path="/ourteam" element={<OurTeam />} />
      <Route path="/booking" element={<Booking />} />
      <Route path="/login" element={<Login />} />
      <Route path="/service" element={<Service />} />
      <Route path="/Report" element={<Report />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/Signup" element={<Signup />} />
      <Route path="/booking_status" element={<BookingStatus />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
}

export default App;
