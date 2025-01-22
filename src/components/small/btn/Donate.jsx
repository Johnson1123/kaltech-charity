import React from "react";

function Donate({ label, links }) {
  return (
    <button onClick={() => {}} className="header__donate-btn">
      {label ? label : "Donate Now"}
    </button>
  );
}

export default Donate;
