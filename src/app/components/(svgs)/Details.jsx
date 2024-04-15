import React from "react";

function Icon() {
  return (
    <svg
    className="max-h-[25px]"
     xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <g>
        <circle
          cx="12"
          cy="12"
          r="10"
          stroke="#1C274C"
          strokeWidth="1.5"
          opacity="0.5"
        ></circle>
        <path
          stroke="#1C274C"
          strokeLinecap="round"
          strokeWidth="1.5"
          d="M12 17v-6"
        ></path>
        <circle
          cx="1"
          cy="1"
          r="1"
          fill="#1C274C"
          transform="matrix(1 0 0 -1 11 9)"
        ></circle>
      </g>
    </svg>
  );
}

export default Icon;
