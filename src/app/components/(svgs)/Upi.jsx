import React from "react";

function Icon({ styles }) {
  return (
    <svg
  className={styles}
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 120 60"
  width="120"
  height="60"
  fillRule="evenodd"
  preserveAspectRatio="xMidYMid meet"
>
  <path fill="#097939" d="M95.678 42.9L110 29.835l-6.784-13.516z"></path>
  <path fill="#ed752e" d="M90.854 42.9l14.322-13.065-6.784-13.516z"></path>
  <path
    fill="#747474"
    d="M22.41 16.47l-6.03 21.475 21.407.15 5.88-21.625h5.427l-7.05 25.14c-.27.96-1.298 1.74-2.295 1.74H12.31c-1.664 0-2.65-1.3-2.2-2.9l6.724-23.98zm66.182-.15h5.427l-7.538 27.03h-5.58zM49.698 27.582l27.136-.15 1.81-5.707h-27.59l1.658-5.256 29.4-.27c1.83-.017 2.92 1.4 2.438 3.167L81.78 29.49c-.483 1.766-2.36 3.197-4.19 3.197H53.316L50.454 43.8h-5.28z"
  ></path>
</svg>

  );
}

export default React.memo(Icon);
