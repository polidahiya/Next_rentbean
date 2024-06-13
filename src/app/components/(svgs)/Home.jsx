import React from "react";

function Icon({styles}) {
  return (
    <svg
      className={styles}
      xmlns="http://www.w3.org/2000/svg"
    //   fill="none"
      viewBox="0 0 24 24"
    >
      <path
        fillRule="evenodd"
        d="M21.45 10.275L12 3.187l-9.45 7.088.45 1.35h.75v8.625h16.5v-8.625H21l.45-1.35zM5.25 18.75v-8.625L12 5.062l6.75 5.063v8.625H15v-4.417l-.75-.75h-4.5l-.75.75v4.417H5.25zm5.25 0h3v-3.667h-3v3.667z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export default React.memo(Icon);
