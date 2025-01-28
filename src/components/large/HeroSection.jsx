import React from "react";
import { DummyImage } from "../../assets/images";
import TitleText from "../small/TitleText";
import ParaText from "../small/ParaText";
import Donate from "../small/btn/Donate";
import PrimaryBtn from "../small/btn/DonatePrimary";
function HeroSection() {
  return (
    <section className="banner__container">
      <div className="banner__image-wrapper">
        <img src={DummyImage} alt="Banner" className="banner__image" />
      </div>

      <div className="inverted__conatainer">
        <div className="title__wrapper">
          <TitleText
            text="Charity 128 - Empowering Lives Through Compassion"
            name="title__primary"
            tag="h1"
          />
        </div>
        <div className="bottom__wrapper">
          <div className="content__container">
            <ParaText
              text="Charity 128 is a dynamic charity donation organization committed to making a positive impact on communities around the world"
              name="paragrah__black"
            />
            <PrimaryBtn />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
