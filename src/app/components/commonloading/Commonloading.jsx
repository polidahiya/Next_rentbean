import React from "react";
import "./Styles.css";

function Commonloading() {
  return (
    <div
      className=" w-full flex flex-col items-center justify-center"
      style={{ height: "calc(100dvh - 60px)" }}
    >
      <div className="loading translate-y-[-30px]">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className="translate-y-[-40px]">Loading...</div>
    </div>
  );
}

export default Commonloading;
