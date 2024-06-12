"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AppContextfn } from "../../Context/Index";
import { changestatus, updatenote } from "../Serveraction";
import { typeofprices } from "../../../components/Commondata";
import Deletedvg from "../../components/(svgs)/Delete";

function Orders({ item, setdeleteconf }) {
  const { notifictionarr, setnotifictionarr, setinvoicedata, setrefresh } =
    AppContextfn();

  const [note, setnote] = useState(item.note);
  const [orderstatus, setorderstatus] = useState(item.status);

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
  // date formater
  const dateformater = (value) => {
    const date = new Date(value);

    // Extracting the components
    const year = date.getFullYear();
    let month = (1 + date.getMonth()).toString().padStart(2, "0");
    let day = date.getDate().toString().padStart(2, "0");
    let hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, "0");

    // Convert hours to 12-hour format
    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12; // Handle midnight (0 hours)
    return { year, month, day, hours, minutes, ampm };
  };

  return (
    <div className="blackshadow1 p-[20px] mb-[10px] bg-white">
      <div className="flex flex-wrap-reverse">
        <span>
          <span className="min-w-[130px] inline-block">Order id </span> :{" "}
          {item._id}
        </span>
        <div className="ml-auto flex gap-[10px]">
          {/* status updater */}
          <select
            name="orderstatus"
            id="orderstatus"
            value={orderstatus}
            className="cursor-pointer border border-slate-300 px-[5px] outline-none"
            onInput={async (e) => {
              setorderstatus(e.target.value);
              const res = await changestatus(item._id, e.target.value);
              shownotification(res?.message);
              setrefresh((pre) => {
                return pre + 1;
              });
            }}
          >
            <option value="0">Order placed</option>
            <option value="1">Order varified</option>
            <option value="2">Delivery scheduled</option>
            <option value="3">Delivered</option>
          </select>
          {/* delete button */}
          <button
            className="p-[5px] border border-slate-300 "
            onClick={() => {
              history.pushState(null, "", "");
              setdeleteconf({ show: true, id: item._id });
            }}
          >
            <Deletedvg styles="h-[25px] fill-red-500" />
          </button>
        </div>
      </div>
      <div>
        <span className="min-w-[130px] inline-block">Name </span> :{" "}
        {item?.username}
      </div>
      <div>
        <span className="min-w-[130px] inline-block">Email </span> :{" "}
        {item?.email}
      </div>
      <div>
        <span className="min-w-[130px] inline-block">Phone no </span> :{" "}
        {item?.phonenum}
      </div>
      <div>
        <span className="min-w-[130px] inline-block">Address </span> :{" "}
        {item?.address}
      </div>
      {/* order date */}
      <div>
        <span className="min-w-[130px] inline-block">Order Date </span> :{" "}
        {dateformater(item.orderdate).day}/{dateformater(item.orderdate).month}/
        {dateformater(item.orderdate).year}
      </div>
      <div>
        <span className="min-w-[130px] inline-block">Order Time </span> :{" "}
        {dateformater(item.orderdate).hours}:
        {dateformater(item.orderdate).minutes}{" "}
        {dateformater(item.orderdate).ampm}
      </div>
      {/* order start date */}
      {item.delivered_date && (
        <>
          <div>
            <span className="min-w-[130px] inline-block text-green-600">
              Order Start Date{" "}
            </span>{" "}
            : {dateformater(item.delivered_date).day}/
            {dateformater(item.delivered_date).month}/
            {dateformater(item.delivered_date).year}
          </div>
          <div>
            <span className="min-w-[130px] inline-block text-green-600">
              Order Start Time{" "}
            </span>{" "}
            : {dateformater(item.delivered_date).hours}:
            {dateformater(item.delivered_date).minutes}{" "}
            {dateformater(item.delivered_date).ampm}
          </div>
        </>
      )}
      <div>
        <span className="min-w-[130px] inline-block">Note </span> :{" "}
        <textarea
          value={note}
          onChange={(e) => {
            setnote(e.target.value);
          }}
          className="p-[5px] w-full outline-none border border-slate-300"
        ></textarea>
        <button
          className="py-[5px] px-[20px] rounded-full bg-green-600 text-white"
          onClick={async () => {
            let res = await updatenote(item._id, note);
            shownotification(res.message);
          }}
        >
          Update note
        </button>
      </div>
      <div className="flex flex-col md:flex-row gap-[20px] items-center  border border-slate-300 my-[10px] p-[5px]">
        <Image
          src={"/" + item.image[0]}
          className="h-[200px] w-[200px] object-contain"
          alt="product image"
          height={200}
          width={200}
        ></Image>
        <div>
          <div>Product Name : {item.name}</div>
          <div>Product Id : {item.pid}</div>
          <div>
            Duration : {typeofprices[item.pricetype - 1].time[item.time]}{" "}
            {typeofprices[item.pricetype - 1].suffix}
          </div>
          <div>Quantity : {item.Quantity + 1}</div>

          {item["Quantity of Controlers"] && (
            <div>
              Number of controlers : {item["Quantity of Controlers"] + 1}
            </div>
          )}
          <div>
            Rent : ₹ {item.prices[item.time] * (item.Quantity + 1)}
            /-
          </div>
          <div>
            Security Deposit : ₹ {item.refundableprice * (item.Quantity + 1)}
            /-
          </div>
          <div>
            Total : ₹{" "}
            {item.prices[item.time] * (item.Quantity + 1) +
              item.refundableprice * (item.Quantity + 1)}
            /-
          </div>
        </div>
      </div>
      {/* invoice link */}
      {/* <Link
        href="admin/Invoice"
        onClick={() => {
          setinvoicedata({
            ...item,
            startdate:
              dateformater(item.orderstartdate).day +
              "/" +
              dateformater(item.orderstartdate).month +
              "/" +
              dateformater(item.orderstartdate).year,
            enddate:
              dateformater(item.orderstartdate).day +
              "/" +
              dateformater(item.orderstartdate).month +
              "/" +
              dateformater(item.orderstartdate).year,
          });
        }}
      >
        Generate Invoice
      </Link> */}
    </div>
  );
}

export default Orders;
