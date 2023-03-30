import "./SearchPage.scss";
import gbIcon from "../../assets/images/gb.png";
import { Link } from "react-router-dom";

const SearchPage = () => {
  return (
    <>
      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__item">Discover</li>
          <li className="nav__item">Book</li>
          <li className="nav__item">Manage</li>
          <li className="nav__item">Help</li>
        </ul>
        <div className="lang__wrap">
          <img src={gbIcon} alt="English" className="lang__icon" />
          <p className="lang__text">United Kingdom - English</p>
        </div>
      </nav>
      <main className="main">
        <div className="main__bg-cover">
          <ul className="products">
            <li className="products__item products__item--active">
              <img
                src="https://www.britishairways.com/apps/ba-home/images/plane_circle.svg"
                alt="plane circle"
                className="products__icon"
              />
              <h3 className="products__title">Flight Only</h3>
            </li>
            <li className="products__item">
              <img
                src="https://www.britishairways.com/apps/ba-home/images/bed_circle.svg"
                alt="bed circle"
                className="products__icon"
              />
              <h3 className="products__title">
                Flight <span className="products__red">+</span> Hotel
              </h3>
            </li>
            <li className="products__item products__item--right">
              <img
                src="	https://www.britishairways.com/apps/ba-home/images/car_circle.svg"
                alt="car circle"
                className="products__icon"
              />
              <h3 className="products__title">
                Flight <span className="products__red">+</span> Car
              </h3>
            </li>
            <img
              src="	https://www.britishairways.com/apps/ba-home/images/open-arrow-white.svg"
              alt="arrow"
              className="products__selected-arrow"
            />
          </ul>

          <section className="search">
            <div className="search__top">
              <div className="search__top-left">
                <h3 className="search__top-link search__top-link--active">
                  Flights
                </h3>
                <h3 className="search__top-link">
                  Multi City & Round the World
                </h3>
              </div>

              <h3 className="search__explore">
                Explore our flight destinations
              </h3>
            </div>
            <div className="search__bottom">
              <div className="search__bottom-left">
                <div className="search__destination search__destination--from">
                  <p className="search__label">From</p>
                  <p className="search__text">London, London (All Airports)</p>
                </div>
                <div className="search__destination">
                  <p className="search__label">To</p>
                  <p className="search__text">
                    New York, New York (All Airports)
                  </p>
                </div>
              </div>
              <div className="search__container">
                <p className="search__title">Outbound</p>
                <p className="search__date">08</p>
                <p className="search__month">April</p>
              </div>
              <div className="search__container">
                <p className="search__title">Return Date</p>
                <p className="search__date">19</p>
                <p className="search__month">April</p>
              </div>
              <div className="search__passengers">
                <img
                  src="https://www.britishairways.com/apps/ba-home/images/avatar_standard.svg"
                  alt="passenger"
                  className="search__pass-icon"
                />
                <div className="search__pass-wrap">
                  <p className="search__label">Passengers</p>
                  <p className="search__count">1 Adult</p>
                </div>
                {/* <img src="" alt="drop down arrow" className="search__arrow" /> */}
              </div>
              <Link to="/flight" className="search__link">
                <img src="" alt="search icon" className="search__icon" />
              </Link>{" "}
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default SearchPage;
