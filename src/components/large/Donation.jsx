import React from "react";
import ImageBox from "../small/ImageBox";
import { DummyImage } from "../../assets/images";
import TitleText from "../small/TitleText";
import ParaText from "../small/ParaText";
import Transparent from "../small/btn/Transparent";

function Donation() {
  const title = "At Charity 128, we prioritize transparency, and inclusivity.";
  const text =
    "Charity 128 is a dynamic and forward-thinking charity donation organization committed to making a positive impact on communities around the world. Our mission is rooted in the belief that compassion has the power to transform lives, and we strive to create a world where everyone has access to the support they need to thrive.";

  return (
    <section className="donation__wrapper" aria-label="About Our Charity">
      <div className="donation__left">
        <ImageBox
          image={DummyImage}
          alt="People helping in charity activities"
        />
      </div>
      <div className="donation__right">
        <div className="title__wrapper">
          <TitleText text={title} name="title__text-primary" tag="h2" />
        </div>
        <div className="text__wrapper">
          <ParaText text={text} name="para__small-text-primary" />
        </div>
        <div className="btn_wrapper">
          <Transparent />
        </div>
      </div>
    </section>
  );
}

export default Donation;
