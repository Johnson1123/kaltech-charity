import React from "react";

function Transparent({ text, to }) {
  return <button className="transparent__btn">{text ? text : "About"}</button>;
}

export default Transparent;
