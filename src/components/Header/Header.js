import React from "react";
import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <section className="header__wrap">
        <Link to="/home">
          <img src="" alt="logo" className="header__logo" />
        </Link>

        <div className="header__icons">
          <img src="" alt="search" className="header__search" />
          <div className="header__profile-wrap">
            <img src="" alt="" className="header__profile-icon" />
            <p className="header__login">LOG IN</p>
          </div>
        </div>
      </section>
    </header>
  );
};

export default Header;
