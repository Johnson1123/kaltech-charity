import React from "react";
import ParaText from "../small/ParaText";
import TitleText from "../small/TitleText";
import EventBox from "../medium/EventBox";

function Event() {
  const title = "This is the new generation of events";
  const text =
    "These events not only provide opportunities for fundraising but also serve as platforms to raise awareness about Chari's mission.";

  return (
    <section className="event__container" aria-label="Upcoming Events">
      <div className="event__top-container">
        <div className="title__wrapper">
          <TitleText text={title} name="title__primary" tag="h2" />
        </div>
        <div className="text__wrapper">
          <ParaText text={text} name="paragrah__black" />
        </div>
      </div>
      <div className="event__box-container">
        <EventBox />
        <EventBox />
        <EventBox />
        <EventBox />
        <EventBox />
        <EventBox />
        <EventBox />
        <EventBox />
      </div>
    </section>
  );
}

export default Event;
