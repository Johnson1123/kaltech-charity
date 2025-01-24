import React from "react";
import { DummyImage } from "../../assets/images";

function EventBox({ title, date, location, image, index }) {
  return (
    <article
      className="event__box-wrapper"
      style={{ animationDelay: `${index * 0.2}s` }}
    >
      <div className="event__image-container">
        <img src={DummyImage} alt={title} className="event__image" />
        <div className="event__overlay">
          <h3 className="event__title">{"Hello World of Champion"}</h3>
        </div>
      </div>
    </article>
  );
}

export default EventBox;
