import React from "react";
import ScrollItem from "../small/ScrollItem";

function Scrolling() {
  return (
    <div className="scrolling__container">
      <div className="scrolling__wrapper">
        {Array(8)
          .fill()
          .map((_, i) => {
            return <ScrollItem key={i} />;
          })}
      </div>
    </div>
  );
}

export default Scrolling;
