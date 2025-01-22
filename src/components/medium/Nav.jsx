import data from "../../data/data.json";

import React from "react";

const Nav = () => {
  return (
    <nav className="nav">
      <ul className="nav__list">
        {data.links.map((link, index) => (
          <li key={index} className="nav__item">
            <a href={link.link} className="nav__link">
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
