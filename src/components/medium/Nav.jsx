import React from "react";
import data from "../../data/data.json";
import { useLocation } from "react-router-dom";
import { useIsMobile } from "../../utils/isMobile";
import Donate from "../small/btn/Donate";
import Logo from "../small/Logo";
import DarkLogo from "../small/BlackSvg";

const Nav = ({ closeMenu }) => {
  const location = useLocation();
  const isMobile = useIsMobile();

  const handleLinkClick = () => {
    if (closeMenu) {
      closeMenu();
    }
  };

  return (
    <nav className="nav">
      <div className="nav-logo">
        <DarkLogo />
      </div>
      <ul className="nav__list">
        {data.links.map((link, index) => (
          <li key={index} className="nav__item">
            <a
              href={link.link}
              className={`nav__link ${
                location.pathname === link.link ? "active" : ""
              }`}
              onClick={handleLinkClick}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
      <Donate />
    </nav>
  );
};

export default Nav;
