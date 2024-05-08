import React from "react";
import "./Styles.css";

function Commonloading() {
  return (
    <div className="h-[100dvh] w-full flex items-center justify-center">
      <div class="loading">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
}

export default Commonloading;
