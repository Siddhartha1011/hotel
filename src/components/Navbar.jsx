import "../styles/navbar.css";

import logo from "../images/logo.png";
import logoText from "../images/logotext.png";

function Navbar({ setIsOpen }) {
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
    <div className="nav-container">
      <nav>
        <div className="logo">
          <img src={logo} alt="Hotel Logo" />
          <img src={logoText} alt="Hotel Name" className="logo-text"/>
        </div>

        <div className="nav-links">
          <a href="#">HOME</a>
          <a href="#aboutus">ABOUT US</a>
          <a href="#menu">MENU</a>
          <a href="#rooms">ROOMS</a>
          <a href="#contact">CONTACT</a>
          <a href="tel:+919876543210" className="btn" onClick={handleBookNow}>
            <span>Book Now</span>
          </a>
          <button className="menu-toggle" onClick={() => setIsOpen(true)}>
            &#9776;
          </button>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
