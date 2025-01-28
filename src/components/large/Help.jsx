import React from "react";
import TitleText from "../small/TitleText";
import ParaText from "../small/ParaText";
import HelpBox from "../small/HelpBox";
import data from "../../data/data.json";

function Help() {
  const title = "How could you help?";
  const text =
    "At Charity 128, we believe that the collective power of compassion and generosity can create meaningful change in the world. Your support is crucial in enabling us to continue our mission of making a positive impact on communities in need.";

  return (
    <section className="help__container" aria-label="Ways to Help">
      <div className="help__top-wrapper">
        <div className="title__wrapper">
          <TitleText text={title} name="title__primary" tag="h2" />
        </div>
        <div className="text__wrapper">
          <ParaText text={text} name="paragrah__black" />
        </div>
      </div>
      <div className="help__box-container">
        {data.help.map((item, index) => (
          <HelpBox
            key={index}
            image={item.icon}
            text={item.description}
            title={item.title}
            index={index}
          />
        ))}
      </div>
    </section>
  );
}

export default Help;
