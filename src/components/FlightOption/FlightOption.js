import "./FlightOption.scss";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Modal from "../Modal/Modal";

const FlightOption = ({ isFirstHovered, setIsFirstHovered }) => {
  const amenities = [
    "Pre-take off drink",
    "Lounge access",
    "Dedicated check-in",
    "2 bags included (32 kg)",
    "Extra leg room",
    "Fully lie-flat bed",
    "Multi-course dining",
    "On-demand snacks",
    "Fast track security",
    "Free amenity kit",
  ];

  const [currentAmenityIndex, setCurrentAmenityIndex] = useState(0);
  const [modalIsShown, setModalIsShown] = useState(false);

  const clickHandler = () => {
    setModalIsShown(true);
  };

  useEffect(() => {
    if (isFirstHovered) {
      const interval = setInterval(() => {
        setCurrentAmenityIndex(
          (prevIndex) => (prevIndex + 1) % amenities.length
        );
      }, 1000); // Change the interval (in milliseconds) to your desired speed
      return () => clearInterval(interval);
    } else {
      setCurrentAmenityIndex(0);
    }
  }, [isFirstHovered]);

  return (
    <>
      <section className="option">
        <div className="option__left">
          <h2 className="option__time">07:55 JFK --- 19:35 LHR</h2>
          <div className="option__airline">
            <p className="option__ba">British Airways</p>
            <img
              src="https://www.britishairways.com/cms/global/assets/images/site/icon/ffsbeta/balogo.svg"
              alt="british airways logo"
              className="option__logo"
            />
          </div>
          <div className="option__metrics">
            <p className="option__stops">Non-stop</p>
            <p className="option__duration">7h 40m</p>
          </div>
          <a href="#" className="option__details">
            FLIGHT DETAILS
          </a>
        </div>

        <div className="option__right">
          <div className="option__classes">
            <div className="option__firstclass">
              {isFirstHovered && (
                <p className="option__animation">
                  {amenities[currentAmenityIndex]}
                </p>
              )}

              <Link
                className="option__button option__button--first"
                onMouseEnter={() => setIsFirstHovered(true)}
                onMouseLeave={() => setIsFirstHovered(false)}
                onClick={clickHandler}
              >
                <p className="option__class">First</p>
                <p className="option__price">£1,638</p>
              </Link>
            </div>
            <Link className="option__button option__button--business">
              <p className="option__class">Business</p>
              <p className="option__price">£1,209</p>
            </Link>
            <Link className="option__button option__button--premium">
              <p className="option__class">Premium Economy</p>
              <p className="option__price">£889</p>
            </Link>
            <Link className="option__button option__button--economy">
              <p className="option__class">Economy</p>
              <p className="option__price">£766</p>
            </Link>
          </div>
        </div>
        {modalIsShown && <Modal setModalIsShown={setModalIsShown} />}
      </section>
    </>
  );
};

export default FlightOption;
