"use client";
import React, { useEffect, useContext, useState } from "react";
import { AppContextfn } from "../Context/Index";

function Notification() {
  const { notifictionarr } = AppContextfn();

  return (
    <>
      {notifictionarr.map((item, index) => (
        <Notif key={item.id} item={item} />
      ))}
    </>
  );
}

function Notif({ item }) {
  const { setnotifictionarr } = AppContextfn();
  const [activenotif, setactivenotif] = useState("");

  useEffect(() => {
    const closeNotification = setTimeout(() => {
      setactivenotif("");
      setTimeout(() => {
        setnotifictionarr((prev) =>
          prev.filter((notification) => notification.id !== item.id)
        );
      }, 1000);
    }, 3000);

    const activenotiftimer = setTimeout(() => {
      setactivenotif("activenotification");
    }, 100);

    return () => {
      clearTimeout(closeNotification);
      clearTimeout(activenotiftimer);
    };
  }, [item.id, setnotifictionarr]);

  return (
    <div className="notification-container">
      <div
        className={`notification fixed top-[70px] left-[50%] translate-x-[-50%] z-[100] h-[40px] w-[40px] max-w-[40px] bg-bg1 rounded-full flex justify-end p-[5px]  shadow-md pointer-events-none opacity-0 ${activenotif}`}
      >
        <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-theme opacity-0 text-sm whitespace-nowrap">
          {item.content}
        </div>
        <button
          className="h-full aspect-square rounded-full cursor-pointer bg-slate-200"
          onClick={() => {
            setactivenotif("");
          }}
        >
          X
        </button>
      </div>
    </div>
  );
}

export default Notification;
