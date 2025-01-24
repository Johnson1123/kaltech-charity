import React from "react";
import data from "../../data/data.json";
import { useLocation } from "react-router-dom";

const Nav = ({ closeMenu }) => {
  const location = useLocation();

  const handleLinkClick = () => {
    if (closeMenu) {
      closeMenu();
    }
  };

  return (
    <nav className="nav">
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
    </nav>
  );
};

export default Nav;
