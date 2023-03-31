import React, { useState } from "react";
import line from "../../assets/images/line.png";
import GallerySlider from "../GallerySlider/GallerySlider";
import "./Modal.scss";

const Modal = () => {
  const [showPreFlight, setShowPreFlight] = useState(true);
  const [showInFlight, setShowInFlight] = useState(false);

  return (
    <section className="modal">
      <header className="modal__header">
        <div className="modal__header__timing">
          <p className="modal__header__time">07:55</p>
          <p className="modal__header__airport">JFK</p>
          <img src={line} alt="line" className="modal__header__line" />
          <p className="modal__header__time">07:55</p>
          <p className="modal__header__airport">JFK</p>
        </div>
        <p className="modal__header__duration">Non-stop 6h 40m</p>
        <p className="modal__header__link">FLIGHT DETAILS</p>
        <button className="modal__header__btn">Select this flight</button>
      </header>
      {/* copy Adam's list */}
      <div className="content">
        <div className="content__info">
          <ul className="options">
            <li
              className={`options__item ${
                showPreFlight ? "options__item--active" : ""
              }`}
            >
              Pre-flight amenities
            </li>
            <li
              className={`options__item ${
                showInFlight ? "options__item--active" : ""
              }`}
            >
              In-flight amenities
            </li>
          </ul>
          <ul className="features">
            <li className="features__item">
              <img src="" alt="" className="features__icon" />
              <p className="features__text">
                Dedicated check-in at any airport
              </p>
            </li>
            <li className="features__item">
              <img src="" alt="" className="features__icon" />
              <p className="features__text">
                Greater baggage hold allowance, with two bags included at 32kg
              </p>
            </li>
            <li className="features__item">
              <img src="" alt="" className="features__icon" />
              <p className="features__text">
                Fast track through security and arriva
              </p>
            </li>
            <li className="features__item">
              <img src="" alt="" className="features__icon" />
              <p className="features__text">
                Pre-take off drink provided when you board
              </p>
            </li>
            <li className="features__item">
              <img src="" alt="" className="features__icon" />
              <p className="features__text">Lounge access</p>
            </li>
          </ul>
          <ul className="features">
            <li className="features__item">
              <img src="" alt="" className="features__icon" />
              <p className="features__text">
                Work or sleep from your seat with a fully lie-flat bed
              </p>
            </li>
            <li className="features__item">
              <img src="" alt="" className="features__icon" />
              <p className="features__text">
                Club Suite: window and aisle access from all suites, with a
                sliding privacy door and generous storage{" "}
              </p>
            </li>
            <li className="features__item">
              <img src="" alt="" className="features__icon" />
              <p className="features__text">
                A bespoke selection of high-quality wines, chosen by our very
                own Master of Wine
              </p>
            </li>
            <li className="features__item">
              <img src="" alt="" className="features__icon" />
              <p className="features__text">
                Sommelier trained crew & trained to have every meal placed
                perfectly
              </p>
            </li>
            <li className="features__item">
              <img src="" alt="" className="features__icon" />
              <p className="features__text">
                Premium multi-course dining experience, with express and sleeper
                options to fit your needs
              </p>
            </li>
            <li className="features__item">
              <img src="" alt="" className="features__icon" />
              <p className="features__text">
                Access to the Club Kitchen onboard, for a range of on-demand
                snacks and refreshments
              </p>
            </li>
            <li className="features__item">
              <img src="" alt="" className="features__icon" />
              <p className="features__text">
                Amenity kit, bedding and pillow designed for you by The White
                Company
              </p>
            </li>
            <li className="features__item">
              <img src="" alt="" className="features__icon" />
              <p className="features__text">
                Increased overhead locker space for your belongings
              </p>
            </li>
            <li className="features__item">
              <img src="" alt="" className="features__icon" />
              <p className="features__text">
                Priority rebooking and premium hotel offered when disrupted
              </p>
            </li>
            <li className="features__item">
              <img src="" alt="" className="features__icon" />
              <p className="features__text">
                Priority baggage arrival at T5, for a stress-free end to your
                journey
              </p>
            </li>
          </ul>
        </div>
        <div className="gallery">
          <GallerySlider />
        </div>
      </div>
    </section>
  );
};

export default Modal;
