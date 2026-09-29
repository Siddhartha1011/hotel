import "../styles/footer.css";

import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaInstagram,
} from "react-icons/fa";

import logo from "../images/logo.png";
import logoText from "../images/logotext.png";

function Footer() {
  const year = new Date().getFullYear();

  const handlePhoneCall = (e) => {
    const now = new Date();

    // Current IST Time
    const istTime = new Date(
      now.toLocaleString("en-US", {
        timeZone: "Asia/Kolkata",
      })
    );

    const hour = istTime.getHours();

    if (hour >= 8 && hour < 22) {
      // Allow the tel link to work
      window.location.href = "tel:+919876543210";
    } else {
      // Prevent the tel link outside booking hours
      e.preventDefault();

      alert(
        "Phone bookings are available only between 8:00 AM and 10:00 PM (IST). Please call during our booking hours."
      );
    }
  };

  return (
    <footer id="contact" className="footer">
      <div className="footer-top">

        {/* Location */}
        <div className="footer-column">
          <h3>Location</h3>
          <div className="heading-line"></div>

          <a
            className="footer-item"
            href="https://www.google.com/maps/search/?api=1&query=The+Emerald+Hotel+Bokakhat+Assam"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaMapMarkerAlt className="footer-icon" />

            <span>
              AT Road, Opposite Bokakhat ITI,
              Bokakhat, Assam 785612
            </span>
          </a>
        </div>

        <div className="footer-column">
          <h3>Contact</h3>
          <div className="heading-line"></div>

          <div className="footer-item">
            <FaPhoneAlt className="footer-icon" />

            <a
              href="tel:+919876543210"
              onClick={handlePhoneCall}
            >
              +919876543210
            </a>
          </div>

          <div className="footer-item">
            <FaEnvelope className="footer-icon" />

            <a href="mailto:theemerald2026@gmail.com">
              theemerald2026@gmail.com
            </a>
          </div>

          <div className="footer-item">
            <FaInstagram className="footer-icon" />

            <a
              href="https://www.instagram.com/theemeraldhotel_x_aadorrestro/"
              target="_blank"
              rel="noopener noreferrer"
            >
              theemeraldhotel_x_aadorrestro
            </a>
          </div>
        </div>

        <div className="footer-column">
          <h3>Front Desk Hours</h3>
          <div className="heading-line"></div>

          <div className="hours-row">
            <span>Check-in</span>
            <strong>2:00 PM</strong>
          </div>

          <div className="hours-row">
            <span>Check-out</span>
            <strong>11:30 AM</strong>
          </div>

          <div className="hours-row">
            <span>Reception</span>
            <strong>8 AM to 10 PM</strong>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-left">
          <div className="logo">
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
        </div>

        <div className="footer-bottom-center">
          © The Emerald {year}. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
