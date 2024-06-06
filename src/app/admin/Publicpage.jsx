"use client";
import React, { useEffect } from "react";
import Navbar from "./Components/Navbar";
import Ordersmenu from "./Components/Ordersmenu";
import Loginpage from "./Components/Loginpage";
import { autologin } from "./loginandordersaction";
import { AppContextfn } from "../Context/Index";

function Publicpage() {
  const { showlogin, setshowlogin, notifictionarr, setnotifictionarr } =
    AppContextfn();

  useEffect(() => {
    (async () => {
      let res = await autologin();
      
      if (res.message == "Login successfull") {
        setshowlogin(false);
        setnotifictionarr([
          ...notifictionarr,
          {
            id: new Date() + new Date().getMilliseconds(),
            content: res.message,
          },
        ]);
      } else {
        setnotifictionarr([
          ...notifictionarr,
          {
            id: new Date() + new Date().getMilliseconds(),
            content: res?.message || "Unknown error",
          },
        ]);
      }
    })();
  }, []);

  return (
    <>
      {showlogin ? (
        <Loginpage />
      ) : (
        <div className="bg-bg1">
          <Navbar />
          <Ordersmenu />
        </div>
      )}
    </>
  );
}

export default Publicpage;
