import React, { useState, useEffect } from "react";
import Donate from "../small/btn/Donate";
import Nav from "../medium/Nav";
import { FaBars, FaTimes } from "react-icons/fa";
import { useIsMobile } from "../../utils/isMobile";
import Logo from "../small/Logo";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  const mobile = useIsMobile();

  // Close menu when window is resized to larger screen
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 767) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Prevent scroll when mobile menu is open
  // useEffect(() => {
  //   if (isMenuOpen) {
  //     document.body.style.overflow = "hidden";
  //   } else {
  //     document.body.style.overflow = "unset";
  //   }
  //   return () => {
  //     document.body.style.overflow = "unset";
  //   };
  // }, [isMenuOpen]);

  return (
    <header className="header__container">
      <div className="header__wrapper">
        <div className="logo__wrapper">
          <Logo />
        </div>
        <div className={`nav__wrapper ${isMenuOpen ? "nav-active" : ""}`}>
          <Nav closeMenu={closeMenu} />
        </div>
        <div className="header__right">
          <button
            className="mobile-menu-btn"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>

          <Donate />
        </div>
      </div>
    </header>
  );
}

export default Header;
