import { useState } from "react";
import {
  FaSearch,
  FaVideo,
  FaHeadphonesAlt,
  FaFilePdf,
  FaFacebook,
  FaTwitter,
  FaInstagramSquare,
} from "react-icons/fa";
import { MdNoteAlt } from "react-icons/md";
import Footer from "./Components/Footer/Footer";
import Navigation from "./Components/Navigation/Navigation";
import Subscribe from "./Components/pagecomp;onent/Subscribe/Subscribe";
import Home from "./Components/Pages/Home";
import { Route, Routes, useLocation } from "react-router-dom";
import Event from "./Components/Pages/Event";
import Ministries from "./Components/Pages/Ministries";
import Blog from "./Components/Pages/Blog";
import Contact from "./Components/Pages/Contact";
import Location from "./Components/pagecomp;onent/Home/Location";

function App() {
  const [count, setCount] = useState(0);
  const location = useLocation();

  return (
    <>
      <div className="bg-yellow-500 relative  h-16">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Event" element={<Event />} />
          <Route path="/Ministries" element={<Ministries />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
        <Subscribe />

        {/* {(location.pathname.includes("event") ||
          location.pathname.includes("ministries")) && <Location />} */}
        {/* {location.pathname !== "/"  && <Location />} */}
        <Footer />
      </div>
    </>
  );
}

export default App;
