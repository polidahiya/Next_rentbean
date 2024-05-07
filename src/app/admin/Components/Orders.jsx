"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AppContextfn } from "../../Context/Index";
import {
  setverifiedorder,
  changestatus,
  deleteorder,
  updatenote,
} from "../Serveraction";
import { typeofprices } from "../../../components/Commondata";

function Orders({ item }) {
  const { notifictionarr, setnotifictionarr, setinvoicedata, refreshfn } =
    AppContextfn();
  const [note, setnote] = useState(item.note);

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
          {/* verify button */}
          {item.status == "order" && (
            <button
              className={`px-[10px] py-[5px] border border-slate-300 ${
                item.verified ? "bg-green-500 text-white" : ""
              }`}
              onClick={async () => {
                await setverifiedorder(item._id);
                refreshfn((pre) => {
                  return pre + 1;
                });
              }}
            >
              Verified
            </button>
          )}
          {/* add to running orders button */}
          {item.status == "order" && (
            <button
              className={`px-[10px] py-[5px] border border-slate-300`}
              onClick={async () => {
                if (item.verified) {
                  await changestatus(item._id, "running");
                  refreshfn((pre) => {
                    return pre + 1;
                  });
                }
              }}
            >
              Start Order
            </button>
          )}
          {/* add to orders button */}
          {item.status == "running" && (
            <button
              className={`px-[10px] py-[5px] border border-slate-300`}
              onClick={async () => {
                if (item.verified) {
                  await changestatus(item._id, "order");
                  refreshfn((pre) => {
                    return pre + 1;
                  });
                }
              }}
            >
              Set back to Orders
            </button>
          )}
          {/* add to completed orders button */}
          {item.status == "running" && (
            <button
              className={`px-[10px] py-[5px] border border-slate-300`}
              onClick={async () => {
                if (item.verified) {
                  await changestatus(item._id, "completed");
                  refreshfn((pre) => {
                    return pre + 1;
                  });
                }
              }}
            >
              Set Completed
            </button>
          )}
          {/* add to running orders button */}
          {item.status == "completed" && (
            <button
              className={`px-[10px] py-[5px] border border-slate-300`}
              onClick={async () => {
                if (item.verified) {
                  await changestatus(item._id, "running");
                  refreshfn((pre) => {
                    return pre + 1;
                  });
                }
              }}
            >
              Set Not Completed
            </button>
          )}
          {/* delete button */}
          <button
            className="px-[10px] py-[5px] bg-red-400 text-white border border-slate-300"
            onClick={async () => {
              await deleteorder(item._id);
              refreshfn((pre) => {
                return pre + 1;
              });
            }}
          >
            Delete Order
          </button>
        </div>
      </div>
      <div>
        <span className="min-w-[130px] inline-block">Name </span> :{" "}
        {item.userdetails.name}
      </div>
      <div>
        <span className="min-w-[130px] inline-block">Email </span> :{" "}
        {item.userdetails.email}
      </div>
      <div>
        <span className="min-w-[130px] inline-block">Phone no </span> :{" "}
        {item.userdetails.phonenumber}
      </div>
      <div>
        <span className="min-w-[130px] inline-block">Address </span> :{" "}
        {item.userdetails.address}
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
      {item.orderstartdate && (
        <>
          <div>
            <span className="min-w-[130px] inline-block text-green-600">
              Order Start Date{" "}
            </span>{" "}
            : {dateformater(item.orderstartdate).day}/
            {dateformater(item.orderstartdate).month}/
            {dateformater(item.orderstartdate).year}
          </div>
          <div>
            <span className="min-w-[130px] inline-block text-green-600">
              Order Start Time{" "}
            </span>{" "}
            : {dateformater(item.orderstartdate).hours}:
            {dateformater(item.orderstartdate).minutes}{" "}
            {dateformater(item.orderstartdate).ampm}
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
            setnotifictionarr([
              ...notifictionarr,
              {
                id: new Date() + new Date().getMilliseconds(),
                content: res.message,
              },
            ]);
          }}
        >
          Update note
        </button>
      </div>
      <div className="flex flex-wrap gap-[5px]">
        {Object.keys(item.products).map((product, j) => {
          let eachpro = item.products[product];
          return (
            <div key={j} className="border border-slate-300 my-[10px] p-[5px]">
              <Image
                src={"/" + eachpro.image[0]}
                className="h-[200px] w-[200px] object-contain"
                alt="product image"
                height={200}
                width={200}
              ></Image>
              <div>
                <div>Product Name : {eachpro.name}</div>
                <div>Product Id : {eachpro.pid}</div>
                <div>
                  Duration :{" "}
                  {typeofprices[eachpro.pricetype - 1].time[eachpro.time]}{" "}
                  {typeofprices[eachpro.pricetype - 1].suffix}
                </div>
                <div>Quantity : {eachpro.Quantity + 1}</div>
                <div>
                  Rent : ₹{" "}
                  {eachpro.prices[eachpro.time] * (eachpro.Quantity + 1)}
                  /-
                </div>
                <div>
                  Security Deposit : ₹{" "}
                  {eachpro.refundableprice * (eachpro.Quantity + 1)}
                  /-
                </div>
                <div>
                  Total : ₹{" "}
                  {eachpro.prices[eachpro.time] * (eachpro.Quantity + 1) +
                    eachpro.refundableprice * (eachpro.Quantity + 1)}
                  /-
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {/* invoice link */}
      <Link
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
      </Link>
    </div>
  );
}

export default Orders;
