// components/Sidebar.jsx
import "../styles/sidebar.css";

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

      <a href="#" onClick={() => setIsOpen(false)}>HOME</a>
      <a href="#" onClick={() => setIsOpen(false)}>ABOUT US</a>
      <a href="#" onClick={() => setIsOpen(false)}>MENU</a>
      <a href="#" onClick={() => setIsOpen(false)}>CONTACT</a>
      <a href="#" className="btn" onClick={() => setIsOpen(false)}>Book Now</a>
    </div>
  );
}

export default Sidebar;
