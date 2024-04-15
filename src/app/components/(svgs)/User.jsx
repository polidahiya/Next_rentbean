import React from "react";

function Icon({ styles }) {
  return (
    <svg
      className={styles}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <g fill="#fff">
        <circle cx="12" cy="8" r="4"></circle>
        <path
          fillOpacity="0.5"
          fillRule="evenodd"
          d="M12 13c-3.67 0-6.68 2.42-6.976 5.5-.026.275.2.5.476.5h13a.465.465 0 00.476-.5C18.68 15.42 15.67 13 12 13z"
          clipRule="evenodd"
        ></path>
      </g>
    </svg>
  );
}

export default Icon;
