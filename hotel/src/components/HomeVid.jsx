import "../styles/homevid.css";
import { FaMapMarkerAlt } from "react-icons/fa";

function HomeVid(){
    return(
        <section className="home">
            <video className="home-video" autoPlay muted loop playsInline>
                <source src="/My Movie.mp4" type="video/mp4"/>
            </video>

            <div className="home-text">
                <img src="src/images/logotext.png" alt="Emerald" className="home-logo-text"/>
                <p>Premium rooms, authentic flavours, serene comfort, and hospitality that feels like home. More than a stay — an Emerald experience.</p>
                <div className="home-line"></div>
                <div className="location">
                    <FaMapMarkerAlt className="location-icon" />
                    <span className="location-text">AT Road • Opposite Bokakhat ITI • Bokakhat, Assam 785612</span>
                </div>
            </div>

        </section>
    );
}

export default HomeVid;