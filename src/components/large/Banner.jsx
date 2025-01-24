import React from "react";
import { DummyImage } from "../../assets/images";
import TitleText from "../small/TitleText";
import ParaText from "../small/ParaText";
import Donate from "../small/btn/Donate";
function Banner() {
  return (
    <section className="banner__container">
      <div className="banner__image-wrapper">
        <img src={DummyImage} alt="Banner" className="banner__image" />
      </div>
      <div className="banner__overlay">
        <div className="banner__content">
          <div className="title__wrapper">
            <TitleText
              text="Charity 128 - Empowering Lives Through Compassion"
              name="title__text-primary"
              tag="h1"
            />
          </div>
          <div className="text__wrapper">
            <ParaText
              text="Charity 128 is a dynamic charity donation organization committed to making a positive impact on communities around the world"
              name="para__small-text-primary"
            />
          </div>
          <div className="btn__wrapper">
            <Donate text="Donate Now" />
          </div>
        </div>
      </div>
      <div className="banner__bottom">
        <div className="title__wrapper">
          <TitleText
            text="Charity 128 - Empowering Lives Through Compassion"
            name="title__text-primary"
            tag="h1"
          />
        </div>
        <div className="content__wrapper">
          <div className="content__container">
            <ParaText
              text="Charity 128 is a dynamic charity donation organization committed to making a positive impact on communities around the world"
              name="para__small-text-primary"
            />
            <Donate text={"Donate"} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
