"use client";
import React, { useRef } from "react";
import { updateuserdetails } from "./Serveractions";

function Form() {
  const nameref = useRef("");
  const phonenumref = useRef("");
  const addressref = useRef("");

  const updateuserfn = async () => {
    const res = await updateuserdetails();
  };

  return (
    <div className="blackshadow1 w-full md:w-[700px] bg-white p-[10px] py-[30px] md:p-[30px] rounded-[20px]">
      <div className="text-[25px] font-semibold text-center font-recline ">
        Update Details
      </div>
      <div className="mt-[20px] lg:grid lg:grid-cols-2 lg:gap-x-[30px] ">
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
      </div>
      <center>
        <button
          className="bg-theme text-white py-[5px] px-[30px] mt-[20px] border border-theme rounded-full lg:hover:bg-white lg:hover:text-theme"
          onClick={updateuserfn}
        >
          Update Details
        </button>
      </center>
    </div>
  );
}

export default Form;
