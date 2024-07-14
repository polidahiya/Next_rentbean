"use client";
import React, { useEffect, useState } from "react";
import Navbar from "./Components/Navbar";
import Ordersmenu from "./Components/Ordersmenu";
import Loginpage from "./Components/Loginpage";
import { autologin } from "./loginandordersaction";
import { AppContextfn } from "../Context/Index";

function Publicpage() {
  const { showlogin, setshowlogin, shownotification } =
    AppContextfn();

  const [ordershowtype, setordershowtype] = useState("0");

  useEffect(() => {
    (async () => {
      let res = await autologin();

      if (res.message == "Login successfull") {
        setshowlogin(false);
        shownotification(res.message);
      } else {
        shownotification(res.message);
      }
    })();
  }, []);

  return (
    <>
      {showlogin ? (
        <Loginpage />
      ) : (
        <div className="bg-bg1">
          <Navbar
            ordershowtype={ordershowtype}
            setordershowtype={setordershowtype}
          />
          <Ordersmenu
            ordershowtype={ordershowtype}
          />
        </div>
      )}
    </>
  );
}

export default Publicpage;
