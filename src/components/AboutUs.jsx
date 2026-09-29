import "../styles/aboutus.css";

import aboutUsImage from "../images/aboutus.png";
import aboutUsSideImage from "../images/aboutus-side.png";

function AboutUs(){
    return(
        <section id="aboutus" className="aboutus">
            <div className="aboutus-content">
                <div className="aboutus-title">
                    <h1>ABOUT US</h1>
                </div>

                <div className="aboutus-para">
                    <p>Welcome to The Emerald Hotel & AADOR Restaurant, where modern comfort meets authentic Assamese hospitality in the heart of Bokakhat, the gateway to Kaziranga National Park.</p>
                    
                    <p>Enjoy elegantly designed rooms, exceptional service, and memorable dining at AADOR Restaurant, featuring regional flavors and Indian classics. Whether you’re traveling for business or leisure, we are dedicated to making every stay comfortable, relaxing, and unforgettable.</p>
                </div>
            </div>

            <div className="aboutus-img">
                <div className="img-main">
                    <img src={aboutUsImage} alt="The Emerald Hotel" />
                </div>

                <div className="img-side">
                    <img src={aboutUsSideImage} alt="The Emerald Hotel side" />
                </div>
            </div>
        </section>
    );
}

export default AboutUs;