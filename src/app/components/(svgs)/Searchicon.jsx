import React from "react";

function Searchicon({ styles }) {
  return (
    <svg
      className={styles}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <g>
        <g clipPath="url(#clip0_15_152)">
          <path fill="#fff" d="M0 0H24V24H0z"></path>
          <circle
            cx="10.5"
            cy="10.5"
            r="6.5"
            stroke="#000"
            strokeLinejoin="round"
          ></circle>
          <path
            fill="#000"
            d="M19.646 20.354a.5.5 0 00.708-.708l-.708.708zm.708-.708l-5-5-.708.708 5 5 .708-.708z"
          ></path>
        </g>
        <defs>
          <clipPath id="clip0_15_152">
            <path fill="#fff" d="M0 0H24V24H0z"></path>
          </clipPath>
        </defs>
      </g>
    </svg>
  );
}

export default React.memo(Searchicon);
