// components/Sidebar.jsx
import "../styles/sidebar.css";
import { FaMapMarkerAlt } from "react-icons/fa";

function Sidebar({ isOpen, setIsOpen }) {
  return (
    <div className={`side-menu ${isOpen ? "open" : ""}`}>
      
      <button className="close-btn" onClick={() => setIsOpen(false)}>
        &times;
      </button>

      <div className="side-logo">
        <img src="src/images/logo.png" alt="Hotel Logo" />
        <img src="src/images/logotext.png" alt="Hotel Name" className="logo-text" />
      </div>

      <a className="side-link" href="#" onClick={() => setIsOpen(false)}>HOME</a>
      <a className="side-link" href="#" onClick={() => setIsOpen(false)}>ABOUT US</a>
      <a className="side-link" href="#" onClick={() => setIsOpen(false)}>MENU</a>
      <a className="side-link" href="#" onClick={() => setIsOpen(false)}>ROOMS</a>
      <a className="side-link" href="#" onClick={() => setIsOpen(false)}>CONTACT</a>

      <div className="side-headline">
        <h1>Visit Us</h1>
      </div>

      <div className="sidebar-location">
        <FaMapMarkerAlt className="sidebar-location-icon" />
        <span className="sidebar-location-text">AT Road • Opposite Bokakhat ITI • Bokakhat, Assam 785612</span>
      </div>

      <div className="opening-time">
        <p className="time-text">Open: 9.30 am - 2.30pm</p>
      </div>
      
      <div className="email-section">
        <a href="mailto:info@emeraldhotel.com" className="email-text">
          info@emeraldhotel.com
        </a>
      </div>
      
      <div className="separator">
        <img src="/src/images/separator.svg" alt="separator" />
      </div>
      <a href="#" className="btn" onClick={() => setIsOpen(false)}>Book Now</a>

    </div>
  );
}

export default Sidebar;
