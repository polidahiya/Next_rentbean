"use client";
import React, { useEffect, useRef, useState } from "react";
import { AppContextfn } from "../../Context/Index";

function Loginpage() {
  const { setshowlogin, notifictionarr, setnotifictionarr } = AppContextfn();
  const [password, setpassword] = useState("");
  const [showpassword, setshowpassword] = useState(false);
  const passwordinput = useRef();

  const loginfn = () => {
    fetch("/api/admin/Login", {
      method: "POST",
      body: JSON.stringify({
        password: password,
      }),
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
        if (res.message == "Wrong password") {
          setshowlogin(true);
          setnotifictionarr([
            ...notifictionarr,
            {
              id: new Date() + new Date().getMilliseconds(),
              content: res.message,
            },
          ]);
        }
      });
  };

  useEffect(() => {
    passwordinput.current.focus();
  }, []);

  return (
    <div
      className="h-screen w-full flex items-center justify-center"
      style={{
        backgroundImage:
          " linear-gradient(45deg, rgba(254, 246, 210, 0.53) 0%, rgba(254, 246, 210, 0.53) 14.286%,rgba(221, 240, 216, 0.53) 14.286%, rgba(221, 240, 216, 0.53) 28.572%,rgba(188, 233, 223, 0.53) 28.572%, rgba(188, 233, 223, 0.53) 42.858%,rgba(156, 227, 229, 0.53) 42.858%, rgba(156, 227, 229, 0.53) 57.144%,rgba(123, 220, 235, 0.53) 57.144%, rgba(123, 220, 235, 0.53) 71.42999999999999%,rgba(90, 214, 242, 0.53) 71.43%, rgba(90, 214, 242, 0.53) 85.71600000000001%,rgba(57, 207, 248, 0.53) 85.716%, rgba(57, 207, 248, 0.53) 100.002%),linear-gradient(135deg, rgb(246, 99, 200) 0%, rgb(246, 99, 200) 12.5%,rgb(223, 98, 196) 12.5%, rgb(223, 98, 196) 25%,rgb(199, 97, 192) 25%, rgb(199, 97, 192) 37.5%,rgb(176, 96, 188) 37.5%, rgb(176, 96, 188) 50%,rgb(152, 95, 184) 50%, rgb(152, 95, 184) 62.5%,rgb(129, 94, 180) 62.5%, rgb(129, 94, 180) 75%,rgb(105, 93, 176) 75%, rgb(105, 93, 176) 87.5%,rgb(82, 92, 172) 87.5%, rgb(82, 92, 172) 100%)",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div
        className=" flex flex-col items-center justify-center gap-[10px] rounded-[10px] w-[90%] max-w-[500px] aspect-[2/1] text-white  "
        style={{
          backgroundImage:
            "linear-gradient(200deg, rgba(171, 171, 171,0.05) 0%, rgba(171, 171, 171,0.05) 23%,rgba(90, 90, 90,0.05) 23%, rgba(90, 90, 90,0.05) 48%,rgba(65, 65, 65,0.05) 48%, rgba(65, 65, 65,0.05) 61%,rgba(232, 232, 232,0.05) 61%, rgba(232, 232, 232,0.05) 100%),linear-gradient(126deg, rgba(194, 194, 194,0.05) 0%, rgba(194, 194, 194,0.05) 11%,rgba(127, 127, 127,0.05) 11%, rgba(127, 127, 127,0.05) 33%,rgba(117, 117, 117,0.05) 33%, rgba(117, 117, 117,0.05) 99%,rgba(248, 248, 248,0.05) 99%, rgba(248, 248, 248,0.05) 100%),linear-gradient(144deg, rgba(64, 64, 64,0.05) 0%, rgba(64, 64, 64,0.05) 33%,rgba(211, 211, 211,0.05) 33%, rgba(211, 211, 211,0.05) 50%,rgba(53, 53, 53,0.05) 50%, rgba(53, 53, 53,0.05) 75%,rgba(144, 144, 144,0.05) 75%, rgba(144, 144, 144,0.05) 100%),linear-gradient(329deg, hsl(148,0%,0%),hsl(148,0%,0%))",
        }}
      >
        <label htmlFor="password" className="text-[30px]">
          Admin
        </label>
        <div className="flex items-center justify-center border border-slate-300 rounded-full overflow-hidden">
          <input
            type={showpassword ? "text" : "password"}
            name="password"
            ref={passwordinput}
            value={password}
            onChange={(e) => {
              setpassword(e.target.value);
            }}
            onKeyPress={(e) => {
              if (e.key == "Enter") {
                loginfn();
              }
            }}
            autoComplete="current-password"
            className=" outline-none text-center bg-transparent"
          />
          <button
            className="h-[30px] p-[5px] aspect-square bg-white bg-opacity-[0.1]"
            onClick={(e) => {
              e.preventDefault();
              setshowpassword(!showpassword);
            }}
          >
            {showpassword ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="#fff"
                viewBox="0 0 24 24"
              >
                <g fill="#fff" fillRule="evenodd" clipRule="evenodd">
                  <path d="M12 8.25a3.75 3.75 0 100 7.5 3.75 3.75 0 000-7.5zM9.75 12a2.25 2.25 0 114.5 0 2.25 2.25 0 01-4.5 0z"></path>
                  <path d="M12 3.25c-4.514 0-7.555 2.704-9.32 4.997l-.031.041c-.4.519-.767.996-1.016 1.56-.267.605-.383 1.264-.383 2.152 0 .888.116 1.547.383 2.152.25.564.617 1.042 1.016 1.56l.032.041C4.445 18.046 7.486 20.75 12 20.75c4.514 0 7.555-2.704 9.32-4.997l.031-.041c.4-.518.767-.996 1.016-1.56.267-.605.383-1.264.383-2.152 0-.888-.116-1.547-.383-2.152-.25-.564-.617-1.041-1.016-1.56l-.032-.041C19.555 5.954 16.514 3.25 12 3.25zM3.87 9.162C5.498 7.045 8.15 4.75 12 4.75c3.85 0 6.501 2.295 8.13 4.412.44.57.696.91.865 1.292.158.358.255.795.255 1.546s-.097 1.188-.255 1.546c-.169.382-.426.722-.864 1.292C18.5 16.955 15.85 19.25 12 19.25c-3.85 0-6.501-2.295-8.13-4.412-.44-.57-.696-.91-.865-1.292-.158-.358-.255-.795-.255-1.546s.097-1.188.255-1.546c.169-.382.426-.722.864-1.292z"></path>
                </g>
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="#fff"
                viewBox="0 0 24 24"
                className="translate-y-[4px]"
              >
                <path
                  fill="#fff"
                  fillRule="evenodd"
                  d="M22.295 6.31a.75.75 0 01.394.986L22 7l.69.296v.001l-.002.003-.003.007-.01.024-.039.084a13.858 13.858 0 01-.727 1.321 15.053 15.053 0 01-1.846 2.394l.968.969a.75.75 0 01-1.06 1.06l-1.001-1a11.548 11.548 0 01-2.274 1.497l.934 1.435a.75.75 0 11-1.258.818l-1.089-1.674c-.78.255-1.623.428-2.532.49V16.5a.75.75 0 01-1.5 0v-1.775c-.881-.06-1.7-.225-2.46-.466l-1.074 1.65a.75.75 0 11-1.258-.818l.913-1.402a11.503 11.503 0 01-2.293-1.49l-.96.96a.75.75 0 01-1.061-1.06l.924-.924A15.03 15.03 0 011.514 7.72a9.524 9.524 0 01-.188-.388l-.01-.025-.004-.007v-.003H1.31L2 7l-.69.296a.75.75 0 011.379-.592v.002l.007.014.029.063a12.39 12.39 0 00.65 1.177c.475.76 1.197 1.747 2.18 2.662.867.805 1.928 1.546 3.197 2.034A8.97 8.97 0 0012 13.25a8.963 8.963 0 003.312-.619c1.262-.497 2.316-1.243 3.175-2.049a13.303 13.303 0 002.789-3.8l.028-.063.006-.013v-.001s0 0 0 0m.985-.394a.75.75 0 00-.984.394l.984-.394zM2.69 6.704s0 0 0 0v0z"
                  clipRule="evenodd"
                ></path>
              </svg>
            )}
          </button>
        </div>
        <button
          className="py-1 px-5 bg-slate-500 rounded-full cursor-pointer"
          onClick={(e) => {
            loginfn();
          }}
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default Loginpage;
