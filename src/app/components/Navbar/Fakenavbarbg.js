"use client";
import React, { useState, useEffect } from "react";

function Fakenavbarbg() {
  const [activenav, setActivenav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setActivenav(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navbarStyle = activenav
    ? { boxShadow: "0 2px 10px var(--theme20)" }
    : { boxShadow: "unset" };

  return (
    <div
      className="absolute top-0 left-0 h-[60px] w-full bg-white -z-10 "
      style={navbarStyle}
    ></div>
  );
}

export default Fakenavbarbg;
