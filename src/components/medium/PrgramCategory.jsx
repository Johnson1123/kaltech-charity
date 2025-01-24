import React from "react";

function PrgramTag({ image, category }) {
  return (
    <div className="program__category-wrapper">
      <div className="program__category-left-wrapper">
        <div className="">
          <img src={image} alt="" />
        </div>
        <p>{category}</p>
      </div>
      <div className=""></div>
    </div>
  );
}

export default PrgramTag;
