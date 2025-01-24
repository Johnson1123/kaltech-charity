import React from "react";

function ImageBox({ image, alt }) {
  return (
    <div className="image__container">
      <img src={image} alt={alt} />
    </div>
  );
}

export default ImageBox;
