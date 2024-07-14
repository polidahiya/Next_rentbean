"use client";
import React, { useRef, useState } from "react";
import { AppContextfn } from "../../../Context/Index";
import { signup, login } from "../Serveractions";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Usersvg from "../../../components/(svgs)/Usersvg";

function Userdetails({ location }) {
  const router = useRouter();

  const { shownotification, redirectloginlink } =
    AppContextfn();


  const [toggleform, settoggleform] = useState(false);
  const [togglepassword, settogglepassword] = useState(true);
  const nameref = useRef("");
  const emailref = useRef("");
  const passwordref = useRef("");
  const phonenumref = useRef("");
  const addressref = useRef("");

  const fieldcheck = () => {
    // if fields are empty
    const refarray = [nameref, emailref, passwordref, phonenumref, addressref];
    for (let i = 0; i < refarray.length; i++) {
      if (refarray[i]?.current?.value == "") {
        refarray[i]?.current?.focus();
        shownotification("Please fill this field");
        return false;
      }
    }
    // name check
    if (toggleform) {
      if (nameref.current.value.length < 3) {
        nameref.current.focus();
        shownotification("Name is too short");
        return false;
      }
      if (nameref.current.value.length > 50) {
        nameref.current.focus();
        shownotification("Name is too big");
        return false;
      }
    }

    // email check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailref.current.value)) {
      emailref.current.focus();
      shownotification("Invalid email");
      return false;
    }

    // mobile check
    if (toggleform) {
      const mobileregex = /^\d{10}$/;
      if (!mobileregex.test(phonenumref.current.value)) {
        emailref.current.focus();
        shownotification("Invalid mobile number");
        return false;
      }
    }

    // password check
    const minLength = 8;
    const maxLength = 100;

    if (passwordref.current.value.length < minLength) {
      passwordref.current.focus();
      shownotification(
        "Password is too short ( " + minLength + " chars min )*"
      );
      return false;
    }

    if (passwordref.current.value.length > maxLength) {
      passwordref.current.focus();
      shownotification("Password is too big ( " + maxLength + " chars min )*");
      return false;
    }

    // pass test
    return true;
  };

  const authenticateuser = async () => {
    const filedcheckvalue = fieldcheck();
    if (!filedcheckvalue) {
      return;
    }
    // send data
    if (toggleform) {
      // signup
      let userdata = {
        username: nameref.current.value,
        email: emailref.current.value,
        password: passwordref.current.value,
        phonenum: phonenumref.current.value,
        address: addressref.current.value,
      };

      const reply = await signup(userdata);
      shownotification(reply?.message)

      if (reply.message == "Signup successfully") {
        if (redirectloginlink) {
          router.push(redirectloginlink);
        } else {
          router.push("/" + location);
        }
      }
    } else {
      // login
      let userdata = {
        email: emailref.current.value,
        password: passwordref.current.value,
      };

      const reply = await login(userdata);

      shownotification(reply?.message)

      if (reply.message == "Login successfull") {
        if (redirectloginlink) {
          router.push(redirectloginlink);
        } else {
          router.push("/" + location);
        }
      }
    }
  };

  return (
    <div className="relative bg-white w-[90%] max-w-[750px] rounded-[20px] shadow-lg p-[30px]">
      <Image
        src="/logo&ui/minlogo.png"
        alt="rentbean.in logo image"
        className=" top-[20px] left-[30px] h-[50px] w-[50px]"
        width={156}
        height={60}
      ></Image>
      <div className=" flex items-center justify-center gap-[10px]  text-[30px] font-recline ">
        <Usersvg styles=" h-[30px] border border-slate-300 rounded-full " />
        {toggleform ? "Sign up" : "Login"}
      </div>
      <div className="mt-[20px] lg:grid lg:grid-cols-2 lg:gap-x-[30px] ">
        {toggleform && (
          <div className=" relative h-[35px] w-full my-[30px] lg:my-[15px] bg-transparent">
            <input
              ref={nameref}
              className="forminput absolute h-full w-full top-0 left-0 flex items-center outline-none  border-b border-b-theme box-content bg-white text-black"
              type="text"
              required
            />
            <label
              className="formlabel absolute h-full w-full top-0 left-0 z-10 flex items-center bg-white  pointer-events-none duration-150"
              htmlFor="name"
            >
              Name
            </label>
          </div>
        )}
        <div className="relative h-[35px] w-full my-[30px] lg:my-[15px] bg-transparent">
          <input
            ref={emailref}
            className="forminput absolute h-full w-full top-0 left-0 flex items-center outline-none  border-b border-b-theme box-content bg-white text-black"
            type="email"
            required
          />
          <label
            className="formlabel absolute h-full w-full top-0 left-0 z-10 flex items-center bg-white  pointer-events-none duration-150"
            htmlFor="name"
          >
            Email
          </label>
        </div>
        <div className="relative h-[35px] w-full my-[30px] lg:my-[15px] bg-transparent">
          <input
            ref={passwordref}
            className="forminput absolute h-full w-full top-0 left-0 flex items-center outline-none  border-b border-b-theme box-content bg-white text-black"
            type={togglepassword ? "password" : "text"}
            required
          />
          <label
            className="formlabel absolute h-full w-full top-0 left-0 z-10 flex items-center bg-white  pointer-events-none duration-150"
            htmlFor="name"
          >
            Password
          </label>
          <button
            className="absolute top-[50%] right-[10px] translate-y-[-50%] z-[11]"
            onClick={() => {
              settogglepassword(!togglepassword);
            }}
          >
            {togglepassword ? "Show" : "Hide"}
          </button>
        </div>
        {toggleform && (
          <>
            <div className="relative h-[35px] w-full my-[30px] lg:my-[15px] bg-transparent">
              <input
                ref={phonenumref}
                className="forminput absolute h-full w-full top-0 left-0 flex items-center outline-none  border-b border-b-theme box-content bg-white text-black"
                type="number"
                required
              />
              <label
                className="formlabel absolute h-full w-full top-0 left-0 z-10 flex items-center bg-white  pointer-events-none duration-150"
                htmlFor="name"
              >
                Mobile Number
              </label>
            </div>
            <div className="relative h-[35px] w-full my-[30px] lg:my-[15px] bg-transparent col-span-2">
              <input
                ref={addressref}
                className="forminput absolute h-full w-full top-0 left-0 flex items-center outline-none  border-b border-b-theme box-content bg-white text-black"
                type="text"
                required
              />
              <label
                className="formlabel absolute h-full w-full top-0 left-0 z-10 flex items-center bg-white  pointer-events-none duration-150"
                htmlFor="name"
              >
                Address
              </label>
            </div>
          </>
        )}
      </div>
      {/* login or signup button */}
      <center>
        <button
          className="px-[100px] py-[5px] bg-theme text-white rounded-full mt-[20px] border border-theme lg:hover:bg-white lg:hover:text-theme"
          onClick={authenticateuser}
        >
          {toggleform ? "Signup" : "Login"}
        </button>
      </center>
      {/* form switcher */}
      <div className="text-[14px] text-center mt-[20px]">
        {toggleform ? "Already have an account?" : "Don't have an account?"}{" "}
        <span
          className="text-theme cursor-pointer"
          onClick={() => {
            settoggleform(!toggleform);
          }}
        >
          {toggleform ? "Login" : "Signup"}
        </span>
      </div>
    </div>
  );
}

export default Userdetails;
