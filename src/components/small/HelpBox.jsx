import React from "react";
import MediumTitle from "./MediumTitle";
import ParaText from "./ParaText";
import { Icon } from "../../assets/icons";

function HelpBox({ image, title, text, index }) {
  return (
    <div
      className="help__box-wrapper"
      style={{ animationDelay: `${index * 0.2}s` }}
    >
      <div className="help__box-image-wrapper">
        <img src={Icon} alt={`${title} icon`} />
      </div>
      <MediumTitle text={title} name="title__md-primary" tag="h3" />
      <div className="text__wrapper">
        <ParaText text={text} name="paragrah__black" />
      </div>
    </div>
  );
}

export default HelpBox;
