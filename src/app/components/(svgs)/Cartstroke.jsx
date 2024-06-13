import React from "react";

function Icon({ styles }) {
  return (
    <svg
      className={styles}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <g  strokeWidth="1.5">
        <path
          strokeLinecap="round"
          d="M2 3l.265.088c1.32.44 1.98.66 2.357 1.184C5 4.796 5 5.492 5 6.883V9.5c0 2.828 0 4.243.879 5.121.878.879 2.293.879 5.121.879h8"
        ></path>
        <path d="M7.5 18a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM16.5 18a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM5 6h11.45c2.055 0 3.083 0 3.527.674.445.675.04 1.619-.77 3.508l-.428 1c-.378.882-.567 1.322-.942 1.57-.376.248-.856.248-1.815.248H5"></path>
      </g>
    </svg>
  );
}

export default React.memo(Icon);
