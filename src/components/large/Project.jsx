import React from "react";
import TitleText from "../small/TitleText";
import ParaText from "../small/ParaText";
import ProjectBox from "../medium/ProjectBox";
import data from "../../data/data.json";

function Project() {
  const title = "Projects for the charity donation organization";
  const text =
    "These projects showcase Chari's commitment to addressing a diverse range of issues, including education, healthcare, economic empowerment, community development, emergency relief, and environmental sustainability.";

  return (
    <section className="project__container" aria-label="Our Projects">
      <div className="project__top-wrapper">
        <div className="title__wrapper">
          <TitleText text={title} name="title__primary" tag="h2" />
        </div>
        <div className="text__wrapper">
          <ParaText text={text} name="paragrah__black" />
        </div>
      </div>
      <div className="project__box-container">
        {data.project.map((item, index) => (
          <ProjectBox {...item} key={index} index={index} />
        ))}
      </div>
    </section>
  );
}

export default Project;
