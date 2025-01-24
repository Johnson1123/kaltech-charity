import React, { useRef } from "react";
import ParaText from "./ParaText";
import MediumTitle from "./MediumTitle";
import { Icon } from "../../assets/icons";
import { useInView, motion } from "framer-motion";

function MissionBox({ title, icon, description, index }) {
  const ref = useRef(null);

  const isInView = useInView(ref, { once: true });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 80 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 80 }}
      transition={{ duration: 1 }}
      className="mission__box-wrapper"
      style={{ animationDelay: `${index * 0.2}s` }}
    >
      <div className="mission__box-top">
        <div className="mission__box-icon-wrapper">
          <img src={Icon} alt={`${title} icon`} />
        </div>
        <div className="mission__box-title">
          <MediumTitle text={title} name="title__medium-white" tag="h3" />
        </div>
      </div>
      <div className="mission__box-bottom">
        <ParaText text={description} name="para__small-text-white" />
      </div>
    </motion.div>
  );
}

export default MissionBox;
