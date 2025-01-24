import React from "react";
import TitleText from "../small/TitleText";
import ParaText from "../small/ParaText";
import ImageBox from "../small/ImageBox";
import { DummyImage } from "../../assets/images";
import data from "../../data/data.json";
import MissionBox from "../small/MissionBox";

function Mission() {
  const title = "The mission of our organization";
  const description =
    "At Charity, we prioritize transparency, integrity, and inclusivity. These values guide our actions as we work tirelessly to bridge the gap between those in need and those willing to help.";

  return (
    <section className="mission__wrapper" aria-label="Our Mission">
      <div className="mission__top-container">
        <div className="mission__title-wrapper">
          <TitleText text={title} name="title__text-white" tag="h2" />
        </div>
        <div className="mission__description-wrapper">
          <ParaText text={description} name="para__small-text-white" />
        </div>
      </div>

      <div className="mission__bottom-container">
        <div className="mission__box-container">
          {data.mission.map((item, index) => (
            <MissionBox
              title={item.title}
              icon={item.icon}
              description={item.description}
              key={index}
              index={index}
            />
          ))}
        </div>

        <div className="mission__image-wrapper">
          <ImageBox
            image={DummyImage}
            alt="Our mission in action - community support initiatives"
          />
        </div>
      </div>
    </section>
  );
}

export default Mission;
