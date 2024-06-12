import React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { AppContextfn } from "../../../Context/Index";
import Checkoutsvg from "../../../components/(svgs)/Checkout";
import Paymentmodesvg from "../../../components/(svgs)/Paymentmode";
import Upisvg from "../../../components/(svgs)/Upi";
import Cashsvg from "../../../components/(svgs)/Cash";
import Placeordersvg from "../../../components/(svgs)/Placeorder";

function Userdetails({ placeorder, total, location, userdata }) {
  const router = useRouter();

  const {
    cartproducts,
    settoggleorderplacedmenu,
    notifictionarr,
    setnotifictionarr,
    setredirectloginlink,
  } = AppContextfn();

  //make order
  const makeorder = async () => {
    let res = await placeorder({
      products: cartproducts,
    });

    if (res.message == "Please login first!") {
      setredirectloginlink(`/${location}/cart`);
      router.push(`/${location}/loginlogout`);
      setnotifictionarr([
        ...notifictionarr,
        {
          id: new Date() + new Date().getMilliseconds(),
          content: res.message,
        },
      ]);
      return;
    }

    if (res.message == "order placed") {
      settoggleorderplacedmenu(true);
    } else {
      setnotifictionarr([
        ...notifictionarr,
        {
          id: new Date() + new Date().getMilliseconds(),
          content: res.message ? res.message : "Unable to place order",
        },
      ]);
    }
  };

  return (
    <div className="sticky top-[80px] h-fit w-full  ">
      {/* chekcout */}
      <div className="blackshadow1 w-full rounded-[10px] overflow-hidden">
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
        <div className="px-[20px]">
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
          {/* address checkout */}
          <div className="relative border  border-slate-300  text-center mt-[20px] p-[15px] text-slate-400 rounded-[10px]">
            <span className="absolute top-0 left-[20px] translate-y-[-50%] bg-white px-[10px] text-textcolor">
              Delivery Address
            </span>
            {JSON.parse(userdata).address}
            {/* edit svg */}
            <Link
              href={"/"+location+"/updateuserdetails"}
              className="absolute right-[10px] top-[50%] h-[30px] aspect-square bg-slate-300 rounded-[5px] p-[5px] cursor-pointer translate-y-[-50%]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="#000"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M20.15 7.94L8.28 19.81c-1.06 1.07-4.23 1.56-4.95.85-.72-.71-.21-3.88.85-4.95L16.05 3.84a2.9 2.9 0 014.1 4.1v0z"
                ></path>
              </svg>
            </Link>
          </div>
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
    </div>
  );
}

export default Userdetails;
