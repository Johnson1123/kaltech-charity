import React from "react";

function PrimaryBtn({ label, links }) {
  return (
    <button onClick={() => {}} className="header__donate-primary">
      {label ? label : "Donate Now"}
    </button>
  );
}

export default PrimaryBtn;
