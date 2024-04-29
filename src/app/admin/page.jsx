"use client";
import React, { useEffect, useState } from "react";
import Navbar from "./Components/Navbar";
import Ordersmenu from "./Components/Ordersmenu";
import Loginpage from "./Components/Loginpage";
import { AppContextfn } from "../Context/Index";

function page() {
  const { showlogin, setshowlogin, notifictionarr, setnotifictionarr } =
    AppContextfn();
  useEffect(() => {
    fetch("/api/admin", {
      method: "POST",
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.message == "Login successfull") {
          setshowlogin(false);
          setnotifictionarr([
            ...notifictionarr,
            {
              id: new Date() + new Date().getMilliseconds(),
              content: res.message,
            },
          ]);
        }
      });
  }, []);

  return (
    <>
      {showlogin ? (
        <Loginpage />
      ) : (
        <div className="bg-bg1">
          {/* nav bar */}
          <Navbar />
          <Ordersmenu />
        </div>
      )}
    </>
  );
}

export default page;
