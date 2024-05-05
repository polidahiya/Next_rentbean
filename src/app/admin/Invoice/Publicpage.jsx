"use client";
import React, { useState } from "react";
import { AppContextfn } from "../../Context/Index";
import Image from "next/image";

function Publicpage() {
  const { invoicedata } = AppContextfn();
  let totalrent = 0;
  let totalrefundable = 0;
  if (Object.keys(invoicedata).length > 0) {
    Object.keys(invoicedata?.products)?.forEach((product, j) => {
      let eachpro = invoicedata?.products[product];
      totalrent += eachpro.prices[eachpro.time] * (eachpro.Quantity + 1);
      totalrefundable += eachpro.refundableprice * (eachpro.Quantity + 1);
    });
  }

  // second table
  const [secondtabledata, setsecondtabledata] = useState({
    rent: totalrent,
    installationcharges: 0,
    shippingcharges: 0,
    refundabledeposit: totalrefundable,
    saving: 0,
  });

  const total =
    Number(secondtabledata.rent) +
    Number(secondtabledata.installationcharges) +
    Number(secondtabledata.shippingcharges) +
    Number(secondtabledata.refundabledeposit) +
    Number(secondtabledata.saving);

  if (Object.keys(invoicedata).length > 0) {
    return (
      <div className="flex flex-col min-h-screen items-end p-[40px]">
        <div className="absolute top-[10px] left-[40px]" contentEditable="true">
          {new Date().getDate() +
            "/" +
            (new Date().getMonth() + 1) +
            "/" +
            new Date().getFullYear()}
        </div>
        <div className="flex justify-between w-full h-[100px] mt-[50px]">
          <Image
            className="h-full object-contain"
            src="/logo&ui/3dlogo.png"
            alt="rentbean.in logo image"
            width={156}
            height={60}
            priority
          ></Image>
          <div>
            <div>
              www.rentbean.in | # <span contentEditable="true">74835</span>
            </div>
            <br />
            <strong>INVOICE #</strong>
            <span className="invoiceid" contentEditable="true">
              fh5hfbhb
            </span>
          </div>
        </div>
        <hr className="w-full h-[1.5px] bg-theme border-none" />
        <div className="flex justify-between w-full py-[20px] ">
          <div className="left">
            <strong contentEditable="true">
              Name : {invoicedata?.userdetails?.name}
            </strong>
            <br />
            <br />
            <strong>Order id : </strong>
            <span className="orderid" contentEditable="true">
              {invoicedata?._id}
            </span>
          </div>
          <div className="flex flex-col gap-[5px]">
            <strong>Shipping address</strong>
            <div className="address" contentEditable="true">
              {invoicedata?.userdetails?.address}
            </div>
            <div>
              Ph :{" "}
              <span className="mobile" contentEditable="true">
                {invoicedata?.userdetails?.phonenumber}
              </span>
            </div>
            <div className="mail" contentEditable="true">
              Email : {invoicedata?.userdetails?.email}
            </div>
          </div>
        </div>
        <hr className="w-full h-[1.5px] bg-theme border-none" />

        <table className="border-collapse w-full mt-[20px] border-[1.5px] border-slate-300">
          <thead className="border-[1.5px] border-slate-300">
            <tr className="relative">
              <th className="p-[8px] text-center border-[1.5px] border-slate-300 ">
                #
              </th>
              <th className="p-[8px] text-center">Product</th>
              <th className="p-[8px] text-center">Booking Price</th>
              <th className="p-[8px] text-center">Saving</th>
              <th className="p-[8px] text-center border-[1.5px] border-slate-300">
                Total
              </th>
            </tr>
          </thead>
          <tbody className="productsbody">
            {Object.keys(invoicedata?.products)?.map((product, j) => {
              let eachpro = invoicedata?.products[product];
              return (
                <tr key={j} className="relative">
                  <td
                    className="p-[8px] text-center border-[1.5px] border-slate-300 border-y-0"
                    contentEditable="true"
                  >
                    {j + 1}
                  </td>
                  <td className="p-[8px] text-center">
                    <span contentEditable="true">{eachpro?.name}</span> <br />
                    <span contentEditable="true">
                      {invoicedata?.startdate}
                    </span>{" "}
                    to{" "}
                    <span contentEditable="true">{invoicedata?.enddate}</span>
                  </td>
                  <td className="p-[8px] text-center">
                    <span contentEditable="true">
                      {eachpro.prices[eachpro.time] * (eachpro.Quantity + 1)}
                      /-
                    </span>
                    <br />
                    <span contentEditable="true">
                      *(Deposit :{" "}
                      {eachpro.refundableprice * (eachpro.Quantity + 1)}
                      /-)
                    </span>
                  </td>
                  <td className="p-[8px] text-center" contentEditable="true">
                    0
                  </td>
                  <td
                    className="p-[8px] text-center border-[1.5px] border-slate-300 border-y-0"
                    contentEditable="true"
                  >
                    {eachpro.prices[eachpro.time] * (eachpro.Quantity + 1) +
                      eachpro.refundableprice * (eachpro.Quantity + 1)}
                    /-
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        {/* second table */}
        <table className="table2 border-collapse w-[300px] mt-[20px] border-[1.5px] border-theme">
          <tbody>
            <tr className="relative hover:opacity-100 hover:pointer-events-auto">
              <td className="p-[7px] border-collapse border-[1.5px] border-slate-300 text-center">
                Rent
              </td>
              <td className="p-[7px] border-collapse border-[1.5px] border-slate-300 text-center">
                <input
                  type="number"
                  className="h-full w-full outline-none border-none text-center"
                  value={secondtabledata.rent}
                  onChange={(e) => {
                    setsecondtabledata({
                      ...secondtabledata,
                      rent: e.target.value,
                    });
                  }}
                />
              </td>
            </tr>
            <tr className="relative hover:opacity-100 hover:pointer-events-auto">
              <td className="p-[7px] border-collapse border-[1.5px] border-slate-300 text-center">
                Installation Charges
              </td>
              <td className="p-[7px] border-collapse border-[1.5px] border-slate-300 text-center">
                <input
                  type="number"
                  className="h-full w-full outline-none border-none text-center"
                  value={secondtabledata.installationcharges}
                  onChange={(e) => {
                    setsecondtabledata({
                      ...secondtabledata,
                      installationcharges: e.target.value,
                    });
                  }}
                />
              </td>
            </tr>
            <tr className="relative hover:opacity-100 hover:pointer-events-auto">
              <td className="p-[7px] border-collapse border-[1.5px] border-slate-300 text-center">
                Headline & Shipping Charges
              </td>
              <td className="p-[7px] border-collapse border-[1.5px] border-slate-300 text-center">
                <input
                  type="number"
                  className="h-full w-full outline-none border-none text-center"
                  value={secondtabledata.shippingcharges}
                  onChange={(e) => {
                    setsecondtabledata({
                      ...secondtabledata,
                      shippingcharges: e.target.value,
                    });
                  }}
                />
              </td>
            </tr>
            <tr className="relative hover:opacity-100 hover:pointer-events-auto">
              <td className="p-[7px] border-collapse border-[1.5px] border-slate-300 text-center">
                Refundable Deposit
              </td>
              <td className="p-[7px] border-collapse border-[1.5px] border-slate-300 text-center">
                <input
                  type="number"
                  className="h-full w-full outline-none border-none text-center"
                  value={secondtabledata.refundabledeposit}
                  onChange={(e) => {
                    setsecondtabledata({
                      ...secondtabledata,
                      refundabledeposit: e.target.value,
                    });
                  }}
                />
              </td>
            </tr>
            <tr className="relative hover:opacity-100 hover:pointer-events-auto">
              <td className="p-[7px] border-collapse border-[1.5px] border-slate-300 text-center">
                Saving
              </td>
              <td className="p-[7px] border-collapse border-[1.5px] border-slate-300 text-center">
                <input
                  type="number"
                  className="h-full w-full outline-none border-none text-center"
                  value={secondtabledata.saving}
                  onChange={(e) => {
                    setsecondtabledata({
                      ...secondtabledata,
                      saving: e.target.value,
                    });
                  }}
                />
              </td>
            </tr>
            <tr className="relative hover:opacity-100 hover:pointer-events-auto">
              <td className="p-[7px] border-collapse border-[1.5px] border-slate-300 text-center">
                <strong>
                  Payable/Paid <br />
                  Total
                </strong>
              </td>
              <td className="p-[7px] border-collapse border-[1.5px] border-slate-300 text-center">
                <input
                  type="number"
                  className="h-full w-full outline-none border-none text-center"
                  value={total}
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Publicpage;
