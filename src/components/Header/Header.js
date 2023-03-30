import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <section className="header__wrap">
        <Link to="/">
          <img
            src="https://www.britishairways.com/cms/global/assets/images/site/brand/ba_masterbrand_positive.svg"
            alt="logo"
            className="header__logo"
          />
        </Link>

        <div className="header__icons">
          <img
            src="https://www.britishairways.com/cms/global/assets/images/site/icon/header_search.svg"
            alt="search"
            className="header__search"
          />
          <div className="header__profile-wrap">
            <img
              src="https://www.britishairways.com/cms/global/assets/images/site/icon/header_login.svg"
              alt="lprofile"
              className="header__profile-icon"
            />
            <p className="header__login">LOG IN</p>
          </div>
        </div>
      </section>
    </header>
  );
};

export default Header;
