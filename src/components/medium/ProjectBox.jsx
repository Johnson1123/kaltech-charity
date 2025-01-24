import React from "react";
import ParaText from "../small/ParaText";
import ReadMore from "../small/btn/ReadMore";
import TitleText from "../small/TitleText";
import { DummyImage } from "../../assets/images";

function ProjectBox({
  image,
  category,
  alt,
  title,
  description,
  links,
  index,
}) {
  return (
    <article
      className="project__box-wrapper"
      style={{ animationDelay: `${index * 0.2}s` }}
    >
      <div className="project__image-wrapper">
        <img src={DummyImage} alt={title} />
      </div>

      <div className="project__description-container">
        <div className="project__category">
          <TitleText text={category} name="para__small-text-primary" />
        </div>
        <div className="project__title">
          <TitleText text={title} name="title__text-primary" tag="h3" />
        </div>
        <div className="project__description">
          <ParaText text={description} name="para__small-text-primary" />
        </div>

        <div className="btn__wrapper">
          <ReadMore text="Read More" />
        </div>
      </div>
    </article>
  );
}

export default ProjectBox;
