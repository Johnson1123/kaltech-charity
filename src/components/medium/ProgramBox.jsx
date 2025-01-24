import React from "react";
import TitleText from "../small/TitleText";
import ParaText from "../small/ParaText";
import { DummyImage } from "../../assets/images";
import { BoxOpen } from "../../assets/icons";
import Donate from "../small/btn/Donate";

function ProgramBox({ image, text, title, amount_needed, amount_raised }) {
  const percentage = (amount_raised / amount_needed) * 100;

  return (
    <article className="program__box-wrapper">
      <div className="program__image-wrapper">
        <img src={DummyImage} alt={title} />
      </div>

      <div className="program__description-container">
        <div className="program__title">
          <TitleText text={title} name="title__text-primary" tag="h3" />
        </div>
        <div className="program__text">
          <ParaText text={text} name="para__small-text-primary" />
        </div>
        <div className="program__amount">
          <span className="raised">${amount_raised}</span>
          <span className="of">of</span>
          <span className="needed">${amount_needed}</span>
          <span className="label">raised</span>
        </div>
        <div className="progress__bar">
          <div
            className="progress__fill"
            style={{ width: `${percentage}%` }}
            aria-valuenow={percentage}
            aria-valuemin="0"
            aria-valuemax="100"
            role="progressbar"
          />
        </div>
        <div className="program__category-wrapper">
          <div className="program__icon-wrapper">
            <BoxOpen />
            <p className="title__medium-primary">HealthCare</p>
          </div>
          <Donate text={"Donate"} />
        </div>
      </div>
    </article>
  );
}

export default ProgramBox;
