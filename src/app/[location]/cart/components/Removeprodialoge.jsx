import React, { useEffect } from "react";
import { AppContextfn } from "../../../Context/Index";

function Removeprodialoge() {
  const {
    cartprodremove,
    setcartprodremove,
    setcartproducts,
    shownotification,
  } = AppContextfn();

  useEffect(() => {
    const handleBackButton = () => {
      setcartprodremove({ ...cartprodremove, show: false });
    };
    window.addEventListener("popstate", handleBackButton);
    return () => {
      window.removeEventListener("popstate", handleBackButton);
    };
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 flex items-center justify-center h-full w-full bg-black bg-opacity-[40%]  z-20 duration-300
        ${
          cartprodremove?.show
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
            cartprodremove?.show
              ? "translate-y-[-10%] opacity-1"
              : "translate-y-[0%] opacity-0 "
          }`}
      >
        <p className="text-center px-[20px] text-[22px] font-recline">
          Do you want to remove this product from the cart?
        </p>
        <div className="flex justify-center gap-[20px]">
          <button
            className="px-[30px] py-[5px] border border-slate-300 rounded-full text-red-500"
            onClick={() => {
              window.history.back();
              setcartprodremove({ ...cartprodremove, show: false });
              setcartproducts((prevCartProducts) => {
                const updatedCartProducts = { ...prevCartProducts };
                delete updatedCartProducts[cartprodremove.productid];
                return updatedCartProducts;
              });
              // notification
              shownotification("Removed Successfully")
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
  );
}

export default Removeprodialoge;
