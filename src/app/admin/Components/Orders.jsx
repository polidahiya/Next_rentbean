"use client";
import React from "react";
import Image from "next/image";

function Orders({
  allorders,
  typeofprices,
  deleteorder,
  setverifiedorder,
  changestatus,
}) {
  return (
    <>
      {allorders.map((item, i) => {
        return (
          <div key={i} className="blackshadow1 p-[20px] mb-[10px] bg-white">
            <div className="flex flex-wrap">
              <span>Order id : {item._id}</span>
              <div className="ml-auto flex gap-[10px]">
                {/* verify button */}
                {item.status == "order" && (
                  <button
                    className={`px-[10px] py-[5px] border border-slate-300 ${
                      item.verified ? "bg-green-500 text-white" : ""
                    }`}
                    onClick={() => {
                      setverifiedorder(item._id);
                    }}
                  >
                    Verified
                  </button>
                )}
                {/* add to running orders button */}
                {item.status == "order" && (
                  <button
                    className={`px-[10px] py-[5px] border border-slate-300`}
                    onClick={() => {
                      if (item.verified) {
                        changestatus(item._id, "running");
                      }
                    }}
                  >
                    Add to running orders
                  </button>
                )}
                {/* add to orders button */}
                {item.status == "running" && (
                  <button
                    className={`px-[10px] py-[5px] border border-slate-300`}
                    onClick={() => {
                      if (item.verified) {
                        changestatus(item._id, "order");
                      }
                    }}
                  >
                    Add to orders
                  </button>
                )}
                {/* add to completed orders button */}
                {item.status == "running" && (
                  <button
                    className={`px-[10px] py-[5px] border border-slate-300`}
                    onClick={() => {
                      if (item.verified) {
                        changestatus(item._id, "completed");
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
                    onClick={() => {
                      if (item.verified) {
                        changestatus(item._id, "running");
                      }
                    }}
                  >
                    Add to Running orders
                  </button>
                )}

                {/* delete button */}
                <button
                  className="px-[10px] py-[5px] bg-red-400 text-white border border-slate-300"
                  onClick={() => {
                    deleteorder(item._id);
                  }}
                >
                  Delete Order
                </button>
              </div>
            </div>
            <div>Name : {item.userdetails.name}</div>
            <div>Email : {item.userdetails.email}</div>
            <div>Phoneno : {item.userdetails.phonenumber}</div>
            <div>Address : {item.userdetails.address}</div>
            <div>Note : {item.note}</div>
            <div className="flex flex-wrap gap-[5px]">
              {Object.keys(item.products).map((product, j) => {
                return (
                  <div
                    key={j}
                    className="border border-slate-300 my-[10px] p-[5px]"
                  >
                    <Image
                      src={"/" + item.products[product].image[0]}
                      className="h-[200px] w-[200px] object-contain"
                      alt="product image"
                      height={200}
                      width={200}
                    ></Image>
                    <div>
                      <div>Product Name : {item.products[product].name}</div>
                      <div>Product Id : {item.products[product].pid}</div>
                      <div>
                        Duration :{" "}
                        {
                          typeofprices[item.products[product].pricetype - 1]
                            .time[item.products[product].time]
                        }{" "}
                        {
                          typeofprices[item.products[product].pricetype - 1]
                            .suffix
                        }
                      </div>
                      <div>
                        Quantity : {item.products[product].Quantity + 1}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Orders;
