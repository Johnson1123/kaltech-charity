import React from "react";
import Donate from "../small/btn/Donate";
import { Email, Phone, FaMap } from "../../assets/icons";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__logo">
          <h2>Chari</h2>
        </div>
        <div className="footer__content-wrapper">
          <div className="footer__values-newsletter-wrapper">
            <div className="values">
              <h3>Our Values</h3>
              <p>
                At Charity 128, we prioritize transparency, integrity, and
                inclusivity. These values guide our actions as we work
                tirelessly to bridge the gap between those in need and those
                willing to help.
              </p>
            </div>
            <div className="newsletter">
              <h3>Sign up for our Newsletter</h3>
              <div className="newsletter-input">
                <input type="email" placeholder="Enter your email" />
                <Donate text={"Subscribe"} />
              </div>
            </div>
          </div>
          <div className="footer__useful-links-wrapper">
            <h3>Useful Links</h3>
            <ul>
              <li>
                <span></span>
                <a href="#">Home</a>
              </li>
              <li>
                <span></span>
                <a href="#">Our Mission</a>
              </li>
              <li>
                <span></span>
                <a href="#">Why Choose Us</a>
              </li>
              <li>
                <span></span>
                <a href="#">Project</a>
              </li>
              <li>
                <span></span>
                <a href="#">Testimonials</a>
              </li>
            </ul>
          </div>
          <div className="footer__contact-wrapper">
            <h3>Contact Us</h3>
            <ul>
              <li>
                <span>{<Email color="#c0fecf" />}</span>New York, NY 10001
              </li>
              <li>
                <span>{<Phone color="#c0fecf" />}</span> +(555) 123-4567
              </li>
              <li>
                <span>{<FaMap color="#c0fecf" />}</span>info@chari.org
              </li>
            </ul>
          </div>
        </div>
        <div className="footer__copyright">
          <p>© 2023 Chari. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
