import React from "react";
import Donate from "../small/btn/Donate";
import Nav from "../medium/Nav";
// import { LogoTwo } from "../../assets/images";

function Header() {
  return (
    <header className="header__container">
      <div className="header__wrapper">
        <div className="logo__wrapper">
          <a href="/">Logo</a>
        </div>
        <div className="nav__wrapper">
          <Nav />
        </div>
        <Donate />
      </div>
    </header>
  );
}

export default Header;
