// components/Navbar.jsx
import "../styles/navbar.css";

function Navbar({ setIsOpen }) {
  return (
    <div className="nav-container">
      <nav>
        <div className="logo">
          <img src="src/images/logo.png" alt="Hotel Logo" />
          <img src="src/images/logotext.png" alt="Hotel Name" className="logo-text" />
        </div>

        <div className="nav-links">
          <a href="#">HOME</a>
          <a href="#">ABOUT US</a>
          <a href="#">MENU</a>
          <a href="#">CONTACT</a>
          <a href="#" className="btn"><span>Book Now</span></a>

          <button className="menu-toggle" onClick={() => setIsOpen(true)}>
            &#9776;
          </button>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;