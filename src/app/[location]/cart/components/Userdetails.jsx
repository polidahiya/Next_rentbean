import React, { useRef, useState } from "react";
import { AppContextfn } from "../../../Context/Index";
import Usersvg from "../../../components/(svgs)/User";
import Checkoutsvg from "../../../components/(svgs)/Checkout";
import Paymentmodesvg from "../../../components/(svgs)/Paymentmode";
import Upisvg from "../../../components/(svgs)/Upi";
import Cashsvg from "../../../components/(svgs)/Cash";
import Placeordersvg from "../../../components/(svgs)/Placeorder";
import Link from "next/link";

function Userdetails({ placeorder, total }) {
  const {
    cartproducts,
    settoggleorderplacedmenu,
    notifictionarr,
    setnotifictionarr,
  } = AppContextfn();
  const [currentlocation, setcurrentlocation] = useState(null);

  const nameref = useRef("");
  const emailref = useRef("");
  const phonenumref = useRef("");
  const addressref = useRef("");

  const getlivelocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setcurrentlocation(
            `https://www.google.com/maps?q=${latitude},${longitude}`
          );
        },
        (error) => {
          console.error("Error getting user location:", error);
          setnotifictionarr([
            ...notifictionarr,
            {
              id: new Date() + new Date().getMilliseconds(),
              content: "Error getting location",
            },
          ]);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
      setnotifictionarr([
        ...notifictionarr,
        {
          id: new Date() + new Date().getMilliseconds(),
          content: "Geolocation is not supported",
        },
      ]);
    }
  };
  // empty 
  //make order
  const makeorder = async () => {
    if (nameref.current.value == "") {
      nameref.current.focus();
      return;
    }
    if (emailref.current.value == "") {
      emailref.current.focus();
      return;
    }
    if (phonenumref.current.value == "") {
      phonenumref.current.focus();
      return;
    }
    if (addressref.current.value == "") {
      addressref.current.focus();
      return;
    }

    // send data

    let res = await placeorder({
      products: cartproducts,
      userdetails: {
        name: nameref.current.value,
        email: emailref.current.value,
        phonenumber: phonenumref.current.value,
        address: addressref.current.value,
        currentlocation: currentlocation,
      },
    });

    if (res.message == "order placed") {
      settoggleorderplacedmenu(true);
    } else {
      setnotifictionarr([
        ...notifictionarr,
        {
          id: new Date() + new Date().getMilliseconds(),
          content: "Unable to place order",
        },
      ]);
    }
  };

  return (
    <div className="sticky top-[80px] h-fit w-full  ">
      {/* customer details */}
      <div className="blackshadow1 w-full rounded-[10px] overflow-hidden">
        <div
          className="relative flex items-center justify-center gap-[10px] h-[80px] text-[20px] text-white"
          style={{
            background:
              "linear-gradient(223deg, rgba(26, 228, 244, 0.15) 0%,rgba(50, 206, 35, 0.15) 100%),linear-gradient(313deg, rgb(44, 56, 250),rgb(88, 219, 228))",
          }}
        >
          <Usersvg styles="h-[55px]" />
          <span className="text-[25px] font-recline">User Details</span>
        </div>
        <div className="p-[30px]">
          <div className=" relative h-[35px] w-full my-[30px] bg-transparent">
            <input
              ref={nameref}
              className="forminput absolute h-full w-full top-0 left-0 flex items-center outline-none  border-b border-b-theme box-content bg-white text-black"
              type="text"
              name="name"
              required
            />
            <label
              className="formlabel absolute h-full w-full top-0 left-0 z-10 flex items-center bg-white  pointer-events-none duration-150"
              htmlFor="name"
            >
              Name
            </label>
          </div>
          <div className="relative h-[35px] w-full my-[30px] bg-transparent">
            <input
              ref={emailref}
              className="forminput absolute h-full w-full top-0 left-0 flex items-center outline-none  border-b border-b-theme box-content bg-white text-black"
              type="email"
              name="name"
              required
            />
            <label
              className="formlabel absolute h-full w-full top-0 left-0 z-10 flex items-center bg-white  pointer-events-none duration-150"
              htmlFor="name"
            >
              Email
            </label>
          </div>
          <div className="relative h-[35px] w-full my-[30px] bg-transparent">
            <input
              ref={phonenumref}
              className="forminput absolute h-full w-full top-0 left-0 flex items-center outline-none  border-b border-b-theme box-content bg-white text-black"
              type="number"
              name="name"
              required
            />
            <label
              className="formlabel absolute h-full w-full top-0 left-0 z-10 flex items-center bg-white  pointer-events-none duration-150"
              htmlFor="name"
            >
              Mobile Number
            </label>
          </div>
          <div className="relative h-[35px] w-full my-[30px] bg-transparent">
            <input
              ref={addressref}
              className="forminput absolute h-full w-full top-0 left-0 flex items-center outline-none  border-b border-b-theme box-content bg-white text-black"
              type="text"
              name="name"
              required
            />
            <label
              className="formlabel absolute h-full w-full top-0 left-0 z-10 flex items-center bg-white  pointer-events-none duration-150"
              htmlFor="name"
            >
              Address
            </label>
          </div>

          {currentlocation ? (
            <div
              className={` w-full flex items-center justify-center gap-[10px] text-center h-[30px] md:px-[20px] z-20 `}
            >
              <Link
                href={currentlocation}
                target="_blank"
                className="min-h-full w-full flex items-center justify-center text-green-500  rounded-full border border-slate-300"
              >
                Check shared location
              </Link>
              <button
                className=" text-red-500  h-full px-[15px] rounded-full border border-slate-300"
                onClick={() => {
                  setcurrentlocation(null);
                }}
              >
                Remove
              </button>
            </div>
          ) : (
            <button
              className={`w-full text-center h-[30px] px-[20px] z-20 border border-slate-300 rounded-full overflow-hidden`}
              onClick={getlivelocation}
            >
              Share your current location
            </button>
          )}
        </div>
      </div>
      {/* chekcout */}
      <div className="blackshadow1 w-full rounded-[10px] overflow-hidden my-[20px]">
        <div
          className="relative flex items-center justify-center gap-[20px] h-[80px] text-[20px] text-white"
          style={{
            background:
              "linear-gradient(223deg, rgba(26, 228, 244, 0.15) 0%,rgba(50, 206, 35, 0.15) 100%),linear-gradient(313deg, rgb(44, 56, 250),rgb(88, 219, 228))",
          }}
        >
          <Checkoutsvg styles="h-[40px]" />
          <span className="text-[25px] font-recline">Checkout</span>
        </div>
        <div>
          <p className="flex justify-between items-center my-[20px] px-[30px]">
            <span> Number of items </span>
            <span>{Object.keys(cartproducts).length}</span>
          </p>
          <p className="flex justify-between items-center my-[20px] px-[30px]">
            <span>Total Payable</span> <span>₹ {total}/-</span>
          </p>
        </div>
      </div>
      {/* Payment mode */}
      <div className="blackshadow1 w-full rounded-[10px] overflow-hidden my-[20px]">
        <div
          className="relative flex items-center justify-center gap-[20px] h-[80px] text-[20px] text-white"
          style={{
            background:
              "linear-gradient(223deg, rgba(26, 228, 244, 0.15) 0%,rgba(50, 206, 35, 0.15) 100%),linear-gradient(313deg, rgb(44, 56, 250),rgb(88, 219, 228))",
          }}
        >
          <Paymentmodesvg styles="h-[40px]" />
          <span className="text-[25px] font-recline">Payment Mode</span>
        </div>
        <div className="flex items-center justify-around p-[30px] select-none">
          <div className="flex flex-col items-center justify-center h-[80px] w-[150px] p-[10px] border border-gray-400 rounded-[10px] cursor-not-allowed opacity-[0.6]">
            <Upisvg styles=" h-full" />
            <p className=" text-center">UPI</p>
          </div>
          <div className="flex flex-col items-center justify-center h-[80px] w-[150px] p-[10px] border border-cyan-500 rounded-[10px] cursor-pointer">
            <Cashsvg styles="  h-full" />
            <p className=" text-center">Cash on delivery</p>
          </div>
        </div>
        <hr className="border-gray-400" />
        {/* order button */}
        <div className="flex flex-col items-center py-[10px]">
          <button
            className="group flex justify-center items-center gap-[5px] h-[35px] w-[200px] border border-theme text-theme my-[5px] rounded-full hover:bg-theme hover:text-white duration-200"
            onClick={makeorder}
          >
            <Placeordersvg styles="h-[25px] fill-theme group-hover:fill-white duration-200" />
            <span> Place Order</span>
          </button>
          <div>
            <span className="text-[12px] text-gray-400">
              *Delivery in 1-2 days post KYC
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Userdetails;
