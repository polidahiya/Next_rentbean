import React from "react";
import "./Styles.css";

function Commonloading() {
  return (
    <div
      className=" w-full flex items-center justify-center"
      style={{ height: "calc(100dvh - 60px)" }}
    >
      <div class="loading translate-y-[-30px]">
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
