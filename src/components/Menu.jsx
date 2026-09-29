import { useState, useRef } from "react";
import "../styles/menu.css";

import menuPdf from "../pdf/Ador menu.pdf";

import beverages from "../images/beverages.png";
import mainCourse from "../images/main-course.png";
import drinks from "../images/drinks.png";

function Menu() {
  const menuItems = [
    {
      title: "Breakfast",
      image: beverages,
      page: 4,
    },
    {
      title: "Main Course",
      image: mainCourse,
      page: 5,
    },
    {
      title: "Drinks",
      image: drinks,
      page: 2,
    },
  ];

  const [current, setCurrent] = useState(1);
  const [selectedMenu, setSelectedMenu] = useState(null);
  const [suppressTransition, setSuppressTransition] =
    useState(false);

  const trackRef = useRef(null);
  const touchStartX = useRef(null);
  const isTransitioning = useRef(false);
  const total = menuItems.length;

  const handleViewMenu = (item) => {

    if (window.innerWidth <= 768) {
      window.location.href =
        `${menuPdf}#page=${item.page}`;
      return;
    }

    setSelectedMenu(item);
  };

  const closeMenu = () => {
    setSelectedMenu(null);
  };

  const goTo = (index, animate = true) => {
    setSuppressTransition(!animate);
    setCurrent(index);

    if (!animate) {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setSuppressTransition(false);
        });
      });
    }
  };

  const next = () => {
    if (isTransitioning.current) return;
    isTransitioning.current = true;
    goTo(current + 1);
  };

  const prev = () => {
    if (isTransitioning.current) return;
    isTransitioning.current = true;
    goTo(current - 1);
  };

  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const delta =
      touchStartX.current -
      e.changedTouches[0].clientX;
    if (delta > 40) {
      next();
    } else if (delta < -40) {
      prev();
    }
    touchStartX.current = null;
  };

  const onTransitionEnd = (e) => {
    if (e.propertyName !== "transform") return;
    if (!isTransitioning.current) return;
    isTransitioning.current = false;
    if (current === 0) {
      goTo(total, false);
    } else if (current === total + 1) {
      goTo(1, false);
    }
  };

  const slidePosition = (i) => {
    const diff = i - current;
    if (diff === 0) return "is-active";
    if (diff === -1) return "is-prev";
    if (diff === 1) return "is-next";
    return "is-hidden";
  };

  const getRealCurrentIndex = () => {
    if (current === 0) {
      return total;
    }
    if (current === total + 1) {
      return 1;
    }
    return current;
  };

  return (
    <>
      <section id="menu" className="menu-section">
        <div className="menu-container">
          <p className="menu-subtitle">
            CURATED DINING EXPERIENCE
          </p>

          <div className="menu-heading">
            <h2 className="menu-title">
              Crafted With Passion, Served With Elegance
            </h2>
            <p className="menu-text">
              From hearty breakfasts to exquisite dinners,
              discover a dining experience designed to be remembered.
            </p>
          </div>

          <div className="menu-grid">
            {menuItems.map((item, index) => (
              <div
                className="menu-card"
                key={index}
              >
                <div className="menu-image-wrapper">
                  <figure className="menu-banner">
                    <div className="menu-image">
                      <img
                        src={item.image}
                        alt={item.title}
                      />
                    </div>
                  </figure>
                </div>

                <div className="menu-content">
                  <h3>
                    {item.title}
                  </h3>

                  <button
                    type="button"
                    className="menu-link"
                    onClick={() =>
                      handleViewMenu(item)
                    }
                  >
                    View Menu
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div
            className="menu-carousel"
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >

            <div className="carousel-track-wrapper">
              <div
                ref={trackRef}
                className="carousel-track"
                onTransitionEnd={onTransitionEnd}
              >
                <div
                  className={`carousel-slide ${slidePosition(0)}`}
                  style={
                    suppressTransition
                      ? { transition: "none" }
                      : undefined
                  }
                >
                  <div className="menu-image-wrapper">
                    <figure className="menu-banner">
                      <div className="menu-image">
                        <img
                          src={menuItems[total - 1].image}
                          alt={menuItems[total - 1].title}
                        />
                      </div>
                    </figure>
                  </div>

                  <div className="menu-content">
                    <h3>
                      {menuItems[total - 1].title}
                    </h3>
                    <button
                      type="button"
                      className="menu-link"
                      onClick={() =>
                        handleViewMenu(
                          menuItems[total - 1]
                        )
                      }
                    >
                      View Menu
                    </button>
                  </div>
                </div>

                {menuItems.map((item, index) => (
                  <div
                    className={`carousel-slide ${slidePosition(
                      index + 1
                    )}`}
                    key={index}
                    style={
                      suppressTransition
                        ? { transition: "none" }
                        : undefined
                    }
                  >

                    <div className="menu-image-wrapper">
                      <figure className="menu-banner">
                        <div className="menu-image">
                          <img
                            src={item.image}
                            alt={item.title}
                          />
                        </div>
                      </figure>
                    </div>

                    <div className="menu-content">
                      <h3>
                        {item.title}
                      </h3>
                      <button
                        type="button"
                        className="menu-link"
                        onClick={() =>
                          handleViewMenu(item)
                        }
                      >
                        View Menu
                      </button>
                    </div>
                  </div>
                ))}

                <div
                  className={`carousel-slide ${slidePosition(
                    total + 1
                  )}`}
                  style={
                    suppressTransition
                      ? { transition: "none" }
                      : undefined
                  }
                >
                  <div className="menu-image-wrapper">
                    <figure className="menu-banner">
                      <div className="menu-image">
                        <img
                          src={menuItems[0].image}
                          alt={menuItems[0].title}
                        />
                      </div>
                    </figure>
                  </div>

                  <div className="menu-content">
                    <h3>
                      {menuItems[0].title}
                    </h3>
                    <button
                      type="button"
                      className="menu-link"
                      onClick={() =>
                        handleViewMenu(menuItems[0])
                      }
                    >
                      View Menu
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="carousel-dots">
              {menuItems.map((_, i) => {
                const realCurrent =
                  getRealCurrentIndex();
                return (
                  <button
                    type="button"
                    key={i}
                    className={`carousel-dot${
                      realCurrent === i + 1
                        ? " active"
                        : ""
                    }`}
                    onClick={() => {
                      if (
                        isTransitioning.current
                      ) {
                        return;
                      }
                      isTransitioning.current = true;
                      goTo(i + 1);
                    }}
                    aria-label={`Go to slide ${
                      i + 1
                    }`}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {selectedMenu && (
        <div
          className="menu-pdf-modal"
          onClick={closeMenu}
        >
          <div
            className="menu-pdf-content"
            onClick={(e) =>
              e.stopPropagation()
            }
          >
            <div className="menu-pdf-header">
              <div>
                <p className="menu-pdf-subtitle">
                  OUR MENU
                </p>
              </div>
              <button
                type="button"
                className="menu-pdf-close"
                onClick={closeMenu}
                aria-label="Close menu"
              >
                &times;
              </button>
            </div>

            <div className="menu-pdf-viewer">
              <iframe
                src={`${menuPdf}#page=${selectedMenu.page}`}
                title={`${selectedMenu.title} Menu`}
                className="menu-pdf-iframe"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Menu;