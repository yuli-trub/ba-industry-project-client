import React, { useState } from "react";
import line from "../../assets/images/line.png";
import GallerySlider from "../GallerySlider/GallerySlider";
import "./Modal.scss";
import img1 from "../../assets/images/img_1.png";
import img2 from "../../assets/images/img_2.png";
import img3 from "../../assets/images/img_3.png";
import img4 from "../../assets/images/img_4.png";
import baggage from "../../assets/icons/baggage.png";
import point from "../../assets/icons/point.svg";
import drink from "../../assets/icons/drink.svg";
import key from "../../assets/icons/key.svg";
import security from "../../assets/icons/security.svg";
import bottle from "../../assets/icons/bottle.svg";
import briefcase from "../../assets/icons/briefcase.svg";
import cake from "../../assets/icons/cake.svg";
import cart from "../../assets/icons/cart.svg";
import door from "../../assets/icons/door.svg";
import group from "../../assets/icons/group.svg";
import sanitizer from "../../assets/icons/hand-sanitizer-line.svg";
import macbook from "../../assets/icons/macbook-line.svg";
import restaurant from "../../assets/icons/restaurant-line.svg";
import user from "../../assets/icons/user.svg";
import ribbon from "../../assets/icons/ribbon.svg";
import { Link } from "react-router-dom";

const Modal = ({ isFirstHovered, setIsFirstHovered }) => {
  const [showPreFlight, setShowPreFlight] = useState(true);
  const [showInFlight, setShowInFlight] = useState(false);
  const [isPriority, setIsPriority] = useState(true);

  const toggleRightHandle = () => {
    setShowPreFlight(false);
    setShowInFlight(true);
  };

  const toggleLeftHandle = () => {
    setShowInFlight(false);
    setShowPreFlight(true);
  };
  const handleClass = () => {
    setIsPriority(!isPriority);
  };

  const imagesFirst = [img1, img2, img3, img4];

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
      <div className="classes">
        <div className="classes__classes">
          <div className="classes__firstclass">
            {isFirstHovered && (
              <p className="classes__animation">Free On-Board Drink</p>
            )}

            <Link
              onClick={handleClass}
              className="classes__button classes__button--first"
              onMouseEnter={() => setIsFirstHovered(true)}
              onMouseLeave={() => setIsFirstHovered(false)}
            >
              <p className="classes__class">First</p>
              <p className="classes__price">$1,638</p>
            </Link>
            <div className="classes__value">
              <img
                src={ribbon}
                alt="value ribbon"
                className="classes__value-icon"
              />
              <p className="classes__value-text">Voted best value for money</p>
            </div>
          </div>
          <Link className="classes__button classes__button--business">
            <p className="classes__class">Business</p>
            <p className="classes__price">$1,209</p>
          </Link>
          <Link className="classes__button classes__button--premium">
            <p className="classes__class">Premium Economy</p>
            <p className="classes__price">$889</p>
          </Link>
          <Link
            className="classes__button classes__button--economy"
            onClick={handleClass}
          >
            <p className="classes__class">Economy</p>
            <p className="classes__price">$766</p>
          </Link>
        </div>
      </div>
      <div className={`content ${isPriority ? "" : "content--hidden"}`}>
        <div className="content__info">
          <ul className="options">
            <li
              onClick={toggleLeftHandle}
              className={`options__item ${
                showPreFlight ? "options__item--active" : ""
              }`}
            >
              Pre-flight amenities
            </li>
            <li
              onClick={toggleRightHandle}
              className={`options__item ${
                showInFlight ? "options__item--active" : ""
              }`}
            >
              In-flight amenities
            </li>
          </ul>
          <ul className={`features ${showPreFlight ? "" : "features--hidden"}`}>
            <li className="features__item">
              <img src={point} alt="user" className="features__icon" />
              <p className="features__text">
                Dedicated check-in at any airport
              </p>
            </li>
            <li className="features__item">
              <img src={baggage} alt="baggage" className="features__icon" />
              <p className="features__text">
                Greater baggage hold allowance, with two bags included at 32kg
              </p>
            </li>
            <li className="features__item">
              <img src={security} alt="security" className="features__icon" />
              <p className="features__text">
                Fast track through security and arriva
              </p>
            </li>
            <li className="features__item">
              <img src={drink} alt="drink" className="features__icon" />
              <p className="features__text">
                Pre-take off drink provided when you board
              </p>
            </li>
            <li className="features__item">
              <img src={key} alt="key" className="features__icon" />
              <p className="features__text">Lounge access</p>
            </li>
          </ul>
          <ul className={`features ${showInFlight ? "" : "features--hidden"}`}>
            <li className="features__item">
              <img src={door} alt="door" className="features__icon" />
              <p className="features__text">
                Take your pick from the hundreds of latest films, television
                programmes, audio books and games{" "}
              </p>
            </li>
            <li className="features__item">
              <img src={restaurant} alt="food" className="features__icon" />
              <p className="features__text">
                Enjoy a starter, main and dessert, with a choice of hot, cold
                and alcoholic drinks
              </p>
            </li>
            <li className="features__item">
              <img src={briefcase} alt="briefcase" className="features__icon" />
              <p className="features__text">
                Increased overhead locker space for your belongings
              </p>
            </li>
            <li className="features__item">
              <img src={group} alt="gtoup" className="features__icon" />
              <p className="features__text">
                Priority rebooking and premium hotel offered when disrupted
              </p>
            </li>
          </ul>
        </div>
        <div className="gallery">
          <GallerySlider images={imagesFirst} />
        </div>
      </div>
      <div className={`content ${isPriority ? "content--hidden" : ""}`}>
        <div className="content__info">
          <ul className="options">
            <li
              onClick={toggleLeftHandle}
              className={`options__item ${
                showPreFlight ? "options__item--active" : ""
              }`}
            >
              Pre-flight amenities
            </li>
            <li
              onClick={toggleRightHandle}
              className={`options__item ${
                showInFlight ? "options__item--active" : ""
              }`}
            >
              In-flight amenities
            </li>
          </ul>
          <ul className={`features ${showPreFlight ? "" : "features--hidden"}`}>
            <li className="features__item">
              <img src={point} alt="user" className="features__icon" />
              <p className="features__text">
                Customary British Airways hospitality service
              </p>
            </li>
          </ul>
          <ul className={`features ${showInFlight ? "" : "features--hidden"}`}>
            <li className="features__item">
              <img src={door} alt="door" className="features__icon" />
              <p className="features__text">
                Club Suite: window and aisle access from all suites, with a
                sliding privacy door and generous storage{" "}
              </p>
            </li>
            <li className="features__item">
              <img src={restaurant} alt="food" className="features__icon" />
              <p className="features__text">
                Premium multi-course dining experience, with express and sleeper
                options to fit your needs
              </p>
            </li>

            <li className="features__item">
              <img src={briefcase} alt="briefcase" className="features__icon" />
              <p className="features__text">
                Increased overhead locker space for your belongings
              </p>
            </li>
          </ul>
        </div>
        <div className="gallery">
          {/* <GallerySlider images={imagesEconomy} /> */}
        </div>
      </div>
    </section>
  );
};

export default Modal;
