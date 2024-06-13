"use client";
import React, { useEffect, useState } from "react";
import Orderscomp from "../Components/Orders";
import Imageloading from "@/app/components/Imageloading/Imageloading";
import { getallorders } from "../loginandordersaction";
import { AppContextfn } from "@/app/Context/Index";
import { deleteorder } from "../Serveraction";

function Ordersmenu({ ordershowtype }) {
  const { refresh, setrefresh, notifictionarr, setnotifictionarr } =
    AppContextfn();

  const [allorders, setallorders] = useState(null);
  const [deleteconf, setdeleteconf] = useState({ show: false, id: "" });

  // notifier
  const shownotification = (value) => {
    setnotifictionarr([
      ...notifictionarr,
      {
        id: new Date() + new Date().getMilliseconds(),
        content: value,
      },
    ]);
  };

  useEffect(() => {
    setallorders(null);
    (async () => {
      let res = await getallorders({ status: ordershowtype });
      if (res.allorders) {
        setallorders(res.allorders);
      }
      if (res.message) {
        shownotification(res.message);
      }
    })();

    // delete confirmation
    const handleBackButton = () => {
      setdeleteconf({ ...deleteconf, show: false });
    };
    window.addEventListener("popstate", handleBackButton);
    return () => {
      window.removeEventListener("popstate", handleBackButton);
    };
  }, [ordershowtype, refresh]);

  return (
    <>
      <div className="flex items-start ">
        <div
          className="w-full  px-[10px] md:px-[40px] py-[20px] overflow-y-scroll "
          style={{ height: "calc(100dvh - 60px)" }}
        >
          {allorders ? (
            allorders?.length == 0 ? (
              <Noitems />
            ) : (
              allorders?.map((item, i) => (
                <Orderscomp
                  key={i}
                  item={item}
                  deleteconf={deleteconf}
                  setdeleteconf={setdeleteconf}
                />
              ))
            )
          ) : (
            <Loading />
          )}
        </div>
      </div>
      {/* delte confirmation */}
      <div
        className={`fixed top-0 left-0 flex items-center justify-center h-full w-full bg-black bg-opacity-[40%]  z-20 duration-300
        ${
          deleteconf?.show
            ? "opacity-1 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* cancle button */}
        <button
          className="absolute top-0 left-0 h-full w-full cursor-auto z-[-1]"
          onClick={() => {
            window.history.back();
          }}
        ></button>
        {/*  */}
        <div
          className={`bg-white rounded-[20px] w-[90%] md:w-[400px] aspect-[4/3] flex flex-col items-center justify-center gap-[30px] duration-300
          ${
            deleteconf?.show
              ? "translate-y-[-10%] opacity-1"
              : "translate-y-[0%] opacity-0 "
          }`}
        >
          <p className="text-center px-[20px] text-[22px] font-recline">
            Do you want to remove this order?
          </p>
          <div className="flex justify-center gap-[20px]">
            <button
              className="px-[30px] py-[5px] border border-slate-300 rounded-full text-red-500"
              onClick={async () => {
                window.history.back();
                const res = await deleteorder(deleteconf.id);
                shownotification(res?.message);
                setrefresh((pre) => {
                  return pre + 1;
                });
              }}
            >
              Remove
            </button>
            <button
              className="px-[30px] py-[5px] border border-slate-300 rounded-full"
              onClick={() => {
                window.history.back();
              }}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

function Loading() {
  return (
    <div className="grid place-content-center h-screen bg-white ">
      <Imageloading />
      <br />
      Loading...
    </div>
  );
}

function Noitems() {
  return (
    <div className="flex flex-col items-center justify-center h-full   bg-white ">
      <Emptyboxsvg />
      <div className="text-[25px]"> No items to show</div>
    </div>
  );
}

function Emptyboxsvg() {
  return (
    <svg
      className="h-[150px] aspect-square"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
    >
      <g>
        <path
          fill="#191919"
          d="M129.27 142.19L43.95 95.37a2.31 2.31 0 00-3.43 2c-.41 18-2 93.55.09 96 3.31 3.88 85.08 51.16 88.67 51.16s84.53-48.76 88.67-51.16c3.66-2.11.86-78.2.15-96.08a2.32 2.32 0 00-3.43-1.93z"
        ></path>
        <path
          fill="#191919"
          d="M129.27 252.5c-2.47 0-4.81 0-48.44-25.2-42.92-24.79-45.39-27.68-46.32-28.77-2.38-2.8-3.28-3.85-2.89-47.45.19-21.47.69-44.87.9-53.93a10.31 10.31 0 0115.28-8.8l81.48 44.71 81.54-44.74A10.32 10.32 0 01226.09 97c.36 9.09 1.23 32.57 1.57 54.15.19 12.24.17 22 0 29.11-.38 12.16-1 17.37-5.66 20.07-.67.39-3.4 2-7.5 4.47-80.02 47.7-81.87 47.7-85.23 47.7zM48 188.91c11.93 8.12 68.16 40.61 81.26 47 8-4 33.89-19.1 77-44.86l4.92-2.94c1-9.16.77-40.76-.71-81.3l-77.35 42.39a8 8 0 01-7.7 0l-77.11-42.31c-.88 41.74-1.01 73-.31 82.02z"
        ></path>
        <path
          fill="#fff"
          d="M40.6 91.49l88.67-47.29 88.67 47.29-88.67 48.65z"
        ></path>
        <path fill="#e6e6e6" d="M130.52 41.08v95.94L41.85 88.36z"></path>
        <path
          fill="#e9802b"
          d="M129.27 142.19L40.6 93.53s-2.38 97 0 99.81c3.31 3.88 85.08 51.16 88.67 51.16s84.53-48.76 88.67-51.16 0-99.81 0-99.81z"
        ></path>
        <path
          fill="#ee811b"
          d="M129.27 142.19c-1 2.06-2 102.81 0 102.31 6.35-1.56 85.32-46.93 89-51.75 1.58-2.09 2.39-97.93-.31-99.22s-87.66 46.6-88.69 48.66z"
        ></path>
        <path
          fill="#191919"
          d="M217.42 88c4.59-2.53 29.46-16.33 28.15-17.09s-87.67-45.94-89.85-46.6c-2-.61-24.48 14.1-28.13 16.5-3.76-2.61-30.82-21.24-33.9-19.52-3.31 1.8-83.39 46.48-86.26 48.14C4.79 71 34.22 85.79 38.77 88.07c-4.25 2.15-29.69 14.59-28.12 15.49S94.47 153 98.87 153.48c2.83.31 25.8-14.24 28.82-16.24 3.38 2.24 31 20.48 33.76 18.92l87.13-50c1.61-.88-25.92-15.44-31.16-18.16zm-89.73 48.86L39.94 88.05l87.59-46.72 88.31 46.58z"
        ></path>
        <path
          fill="#191919"
          d="M161.14 164.31c-4 0-9.47-2.68-20.47-9.33-4.79-2.9-9.64-6-13-8.2-2.87 1.8-6.64 4.14-10.33 6.33C103.93 161 101 161.76 98 161.44c-2.56-.28-5.74-.62-89.37-49.78l-2-1.17a8.12 8.12 0 01-4.06-7.29c.17-5.52 4.61-7.87 14.34-13 1.38-.73 2.82-1.48 4.25-2.21L17.58 86C3.32 78.24-.57 75.36-.73 69.94a8.3 8.3 0 014.17-7.44c2.2-1.27 46.78-26.15 83.79-46.8l2.57-1.43c5.16-2.88 11-.32 24.84 8.34 4.81 3 9.61 6.2 13.06 8.54 24.9-16.2 26.79-15.62 30.37-14.52 3.42 1 90.8 46.91 91.51 47.33a8.18 8.18 0 014.04 7.04c-.05 5.43-3.52 7.44-16.41 14.93L234 87.79l4.77 2.63c14.33 8 17.72 10.07 17.82 15.51a8.13 8.13 0 01-4.07 7.2l-79.15 45.38-8 4.58a8.31 8.31 0 01-4.23 1.22zm-18.25-26.76c7.55 4.74 14 8.49 17.37 10.08l5.21-3 67.9-38.93c-4.31-2.43-9.94-5.51-16.7-9.1zM26.18 103.4c44.25 25.93 66.18 38.21 72.94 41.54 2.91-1.42 8.15-4.46 13.18-7.51L39.2 96.8a972.44 972.44 0 00-13.02 6.6zm30.49-15.2l71 39.48L199 88.1l-71.48-37.7zM22.22 70.32c4.58 2.57 10.55 5.74 17 9l73.28-39.08a184 184 0 00-17.58-10.52c-40.63 22.67-61.84 34.52-72.71 40.6zm120.7-29.91l73.68 38.86c5-2.78 9.58-5.39 13.34-7.59-20.94-11-63.28-33-74.59-38.71-2.62 1.41-7.08 4.03-12.43 7.44z"
        ></path>
        <path
          fill="#fff"
          d="M218.42 88c.08-1.3 28.46-16.33 27.15-17.09s-87.67-45.94-89.85-46.6c-2-.61-27.54 16.43-28.13 16.5s-30.83-21.28-33.9-19.56C90.38 23.09 10.3 67.77 7.43 69.43 4.79 71 38.7 87.23 38.77 88.07s-29.69 14.59-28.13 15.49S94.47 153 98.87 153.48c2.83.31 27.92-16.24 28.82-16.24s31 20.48 33.76 18.92l87.13-50c1.61-.88-30.24-16.89-30.16-18.16zm-90.73 48.86c-1-.08-87.72-48.14-87.74-48.78s87-46.63 87.59-46.72 88.32 45.33 88.31 46.58-87.15 48.97-88.16 48.89zM72.15 187.68L71.71 152c0-2.23 2.05-2.7 3.71-.82L100.86 180c1.59 1.81 1.62 4.47.06 4.89l-25 6.81c-1.63.49-3.74-1.79-3.77-4.02z"
        ></path>
        <path
          fill="#ee811b"
          d="M128.67 142.67c-.67 17.17-1 77.67.61 101.83"
        ></path>
        <path
          fill="#191919"
          d="M129.27 248.5a4 4 0 01-4-3.73c-1.64-24.68-1.27-85.22-.61-102.25a4 4 0 118 .31c-.64 16.44-1 77.43.6 101.41a4 4 0 01-3.73 4.26z"
        ></path>
      </g>
    </svg>
  );
}

export default Ordersmenu;
