import React from "react";
import TitleText from "../small/TitleText";
import ParaText from "../small/ParaText";
import Donate from "../small/btn/Donate";
import { DummyImage } from "../../assets/images";

function Community() {
  return (
    <div className="community__container">
      <div className="community__image-top-wrapper">
        <img src={DummyImage} alt="" className="big top-left" />
        <img src={DummyImage} alt="" className="small top-right" />
      </div>
      <div className="community__content-wrapper">
        <TitleText
          text={
            "Join us in the journey to empower communities and transform lives."
          }
          name={"title__text-primary"}
        />
        <TitleText text="139,364+" name={"title__text-primary number"} />
        <ParaText text={"People Alredy Join"} name="para__small-text-primary" />
        <div className="button__wrapper">
          <Donate text="Join Our Organization" />
        </div>
      </div>
      <div className="community__image-buttom-wrapper">
        <img src={DummyImage} alt="" className="big buttom-left" />
        <img src={DummyImage} alt="" className="small buttom-right" />
      </div>
    </div>
  );
}

export default Community;
