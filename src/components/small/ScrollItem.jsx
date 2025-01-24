import React from "react";
import { BoxOpen } from "../../assets/icons";
import ParaText from "./ParaText";

function ScrollItem() {
  return (
    <div className="scroll__item-wrapper">
      <BoxOpen />
      <ParaText
        text={"Let's help each other"}
        name={"para__small-text-primary"}
      />
    </div>
  );
}

export default ScrollItem;
