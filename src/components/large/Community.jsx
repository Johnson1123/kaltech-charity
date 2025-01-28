import React from "react";
import TitleText from "../small/TitleText";
import ParaText from "../small/ParaText";
import Donate from "../small/btn/Donate";
import { DummyImage } from "../../assets/images";
import { useIsMobile } from "../../utils/isMobile";

function Community() {
  const isMobile = useIsMobile();
  return (
    <div className="community__container">
      <div className={isMobile ? "flex" : "community__image-top-wrapper"}>
        <img
          src={DummyImage}
          alt=""
          className={isMobile ? "" : "big top-left"}
        />
        <img
          src={DummyImage}
          alt=""
          className={isMobile ? "" : "small top-right rounded"}
        />
      </div>
      <div className="community__content-wrapper">
        <div className="text__title-wrapper">
          <TitleText
            text={
              "Join us in the journey to empower communities and transform lives."
            }
            name={"title__primary"}
          />
        </div>
        <TitleText text="139,364+" name={"title__primary number"} />
        <ParaText text={"People Alredy Join"} name="text__black" />
        <div className="button__wrapper">
          <Donate text="Join Our Organization" />
        </div>
      </div>
      <div className={isMobile ? "flex" : "community__image-buttom-wrapper"}>
        <img
          src={DummyImage}
          alt=""
          className={isMobile ? "" : "small buttom-left rounded"}
        />
        <img
          src={DummyImage}
          alt=""
          className={isMobile ? "" : "small buttom-right"}
        />
      </div>
    </div>
  );
}

export default Community;
