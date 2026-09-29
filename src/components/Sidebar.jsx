import "../styles/sidebar.css";
import { FaMapMarkerAlt } from "react-icons/fa";

import logo from "../images/logo.png";
import logoText from "../images/logotext.png";
import separator from "../images/separator.svg";

function Sidebar({ isOpen, setIsOpen }) {

  const handleBookNow = (e) => {
    const now = new Date();

    const istTime = new Date(
      now.toLocaleString("en-US", {
        timeZone: "Asia/Kolkata",
      })
    );

    const hour = istTime.getHours();

    if (hour >= 8 && hour < 22) {
      window.location.href = "tel:+919876543210";
    } else {
      e.preventDefault();

      alert(
        "Phone bookings are available only between 8:00 AM and 10:00 PM (IST). Please call during our booking hours."
      );
    }
  };

  return (
    <div className={`side-menu ${isOpen ? "open" : ""}`}>

      <button
        className="close-btn"
        onClick={() => setIsOpen(false)}
      >
        &times;
      </button>

      <div className="sidebar-top">
        <div className="side-logo">
          <img
            src={logo}
            alt="Hotel Logo"
          />

          <img
            src={logoText}
            alt="Hotel Name"
            className="logo-text"
          />
        </div>

        <div className="sidebar-navigation">
          <a
            className="side-link"
            href="#"
            onClick={() => setIsOpen(false)}
          >
            HOME
          </a>

          <a
            className="side-link"
            href="#aboutus"
            onClick={() => setIsOpen(false)}
          >
            ABOUT US
          </a>

          <a
            className="side-link"
            href="#menu"
            onClick={() => setIsOpen(false)}
          >
            MENU
          </a>

          <a
            className="side-link"
            href="#rooms"
            onClick={() => setIsOpen(false)}
          >
            ROOMS
          </a>

          <a
            className="side-link"
            href="#contact"
            onClick={() => setIsOpen(false)}
          >
            CONTACT
          </a>

        </div>
      </div>

      <div className="sidebar-middle">

        <div className="side-headline">
          <h1>Visit Us</h1>
        </div>

        <div className="sidebar-location">
          <a
            href="https://www.google.com/maps/search/?api=1&query=The+Emerald+Hotel+Bokakhat+Assam"
            target="_blank"
            rel="noopener noreferrer"
            className="sidebar-location-link"
          >
            <FaMapMarkerAlt className="sidebar-location-icon" />

            <span className="sidebar-location-text">
              AT Road • Opposite Bokakhat ITI • Bokakhat, Assam 785612
            </span>
          </a>
        </div>

        <div className="opening-time">
          <p className="time-text">
            Open: 9.30 am - 2.30pm
          </p>
        </div>

        <div className="email-section">
          <a
            href="mailto:theemerald2026@gmail.com"
            className="email-text"
          >
            theemerald2026@gmail.com
          </a>
        </div>

        <div className="separator">
          <img
            src={separator}
            alt="separator"
          />
        </div>

      </div>

      <div className="sidebar-bottom">

        <a
          href="tel:+919876543210"
          className="btn"
          onClick={handleBookNow}
        >
          Book Now
        </a>

      </div>

    </div>
  );
}

export default Sidebar;
