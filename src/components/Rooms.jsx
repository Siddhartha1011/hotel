import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import "../styles/rooms.css";

import deluxe1 from "../images/deluxe1.png"; 
import deluxe2 from "../images/deluxe2.png"; 
import deluxe3 from "../images/deluxe3.png"; 
import deluxe4 from "../images/deluxe4.png"; 
import suite1 from "../images/suite1.png"; 
import suite2 from "../images/suite2.png"; 
import suite3 from "../images/suite3.png"; 
import suite4 from "../images/suite4.png"; 
import hall1 from "../images/hall1.png"; 
import hall2 from "../images/hall2.png";

import deluxeVideo from "../videos/deluxe.mp4"; 
import suiteVideo from "../videos/suite.mp4"; 
import hallVideo from "../videos/hall.mp4";

const rooms = [
  {
    title: "Deluxe Room",
    cover: deluxe1,
    desc: "Comfortable rooms with modern amenities, perfect for solo travellers and couples.",
    gallery: [
      deluxe1,
      deluxe2,
      deluxe3,
      deluxe4,
    ],
    video: deluxeVideo,
  },
  {
    title: "Suite Room",
    cover: suite1,
    desc: "Spacious luxury accommodation featuring elegant interiors and premium comfort.",
    gallery: [
      suite1,
      suite2,
      suite3,
      suite4,
    ],
    video: suiteVideo,
  },
  {
    title: "Banquet Hall",
    cover: hall1,
    desc: "An elegant venue for weddings, corporate events and memorable celebrations.",
    gallery: [
      hall1,
      hall2,
    ],
    video: hallVideo,
  },
];

function Rooms() {
  const [selectedRoom, setSelectedRoom] = useState(null);

  const handleBookNow = () => {
    const now = new Date();

    // Current IST Time
    const istTime = new Date(
      now.toLocaleString("en-US", { timeZone: "Asia/Kolkata" })
    );

    const hour = istTime.getHours();

    if (hour >= 8 && hour < 22) {
      window.location.href = "tel:+919876543210";
    } else {
      alert(
        "Phone bookings are available only between 8:00 AM and 10:00 PM (IST). Please call during our booking hours."
      );
    }
  };

  return (
    <>
      <section id="rooms"className="rooms-section">
        <Swiper
          modules={[Pagination, Autoplay, EffectFade]}
          slidesPerView={1}
          loop={true}
          speed={900}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          className="rooms-swiper"
        >
          {rooms.map((room, index) => (
            <SwiperSlide key={index}>
              <div className="room-slide">
                <img src={room.cover} alt={room.title} />

                <div className="room-overlay">
                  <p className="room-subtitle">
                    PREMIUM ACCOMMODATION
                  </p>

                  <h2>{room.title}</h2>

                  <p>{room.desc}</p>

                  <button
                    onClick={() => setSelectedRoom(room)}
                  >
                    View More
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* ===================== GALLERY MODAL ===================== */}
      {selectedRoom && (
        <div
          className="gallery-modal"
          onClick={() => setSelectedRoom(null)}
        >
          <div
            className="gallery-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="gallery-close"
              onClick={() => setSelectedRoom(null)}
            >
              &times;
            </button>

            <h2>{selectedRoom.title}</h2>

            <p className="gallery-description">
              {selectedRoom.desc}
            </p>

            <div className="gallery-grid">
              {selectedRoom.gallery.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`${selectedRoom.title} ${index + 1}`}
                />
              ))}

              <video
                className="gallery-video"
                autoPlay
                muted
                loop
                playsInline
                controls
              >
                <source
                  src={selectedRoom.video}
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>

            <div className="gallery-footer">
              <button
                className="gallery-book-btn"
                onClick={handleBookNow}
              >
                Book Now
              </button>

              <p className="booking-hours">
                Phone bookings available daily • 8:00 AM – 10:00 PM (IST)
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Rooms;