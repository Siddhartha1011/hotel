import "../styles/homevid.css";
import { FaMapMarkerAlt } from "react-icons/fa";

import MyMovie from "../videos/MyMovie.mp4";
import logoText from "../images/logotext.png";

function HomeVid(){
    return(
        <section className="home">
            <video className="home-video" autoPlay muted loop playsInline>
                <source src={MyMovie} type="video/mp4" />
            </video>

            <div className="home-text">
                <img src={logoText} alt="Emerald" className="home-logo-text"/>
                <p>Premium rooms, authentic flavours, serene comfort, and hospitality that feels like home. More than a stay — an Emerald experience.</p>
                <div className="home-line"></div>
                <a
                    className="location"
                    href="https://www.google.com/maps/search/?api=1&query=The+Emerald+Hotel+Bokakhat+Assam"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaMapMarkerAlt className="location-icon" />
                    <span className="location-text">AT Road • Opposite Bokakhat ITI • Bokakhat, Assam 785612</span>
                </a>
            </div>

        </section>
    );
}

export default HomeVid;