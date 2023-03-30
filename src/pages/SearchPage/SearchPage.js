import "./SearchPage.scss";
import gbIcon from "../../assets/images/gb.png";

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
        </div>
      </main>
    </>
  );
};

export default SearchPage;
