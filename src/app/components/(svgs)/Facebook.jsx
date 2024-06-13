import React from "react";

function Icon({ styles }) {
  return (
    <svg
      className={styles}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="-5 0 20 20"
    >
      <g>
        <g fillRule="evenodd" stroke="none" strokeWidth="1">
          <g transform="translate(-385 -7399)">
            <g transform="translate(56 160)">
              <path d="M335.821 7259v-9h2.733l.446-4h-3.179v-1.948c0-1.03.027-2.052 1.466-2.052h1.458v-2.86c0-.043-1.253-.14-2.52-.14-2.645 0-4.302 1.657-4.302 4.7v2.3H329v4h2.923v9h3.898z"></path>
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
}

export default React.memo(Icon);
