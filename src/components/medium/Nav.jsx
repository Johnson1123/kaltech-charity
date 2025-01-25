import React from "react";
import data from "../../data/data.json";
import { useLocation } from "react-router-dom";
import { useIsMobile } from "../../utils/isMobile";
import Donate from "../small/btn/Donate";

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
      <h2 className="nav-logo">Logo</h2>
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
      {isMobile && <Donate />}
    </nav>
  );
};

export default Nav;
