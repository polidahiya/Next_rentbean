import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { AppContextfn } from "@/app/Context/Index";
import { logout } from "../logoutaction";
import Usersvg from "../(svgs)/Usersvg";
import Navorders from "../(svgs)/Navorders";
import Heart from "../(svgs)/Heart";
import Logout from "../(svgs)/Logout";
import Updateusersvg from "../(svgs)/Updateuser";

function Usermenu({ toggleusermenu, settoggleusermenu, location, userdata }) {
  const { notifictionarr, setnotifictionarr } = AppContextfn();
  const router = useRouter();

  return (
    <>
      {/* usermenu svg */}
      <button
        className="relative top-[15px] hidden lg:flex h-[30px]  ml-[20px] z-20"
        onClick={() => {
          settoggleusermenu(!toggleusermenu);
        }}
      >
        <Usersvg styles="h-[30px]  border border-slate-300 rounded-full cursor-pointer" />
      </button>
      {/* cancle button */}
      {toggleusermenu && (
        <button
          className="fixed top-0 left-0 h-screen w-screen cursor-default"
          onClick={() => {
            settoggleusermenu(!toggleusermenu);
          }}
        ></button>
      )}
      {/* menu */}
      {toggleusermenu && (
        <div className="fadeup fixed lg:absolute bottom-[55px] right-[10px] lg:bottom-auto lg:top-[50px] lg:right-[40px]  w-[250px]  bg-white border border-slate-300 rounded-[10px] p-[10px] shadow-lg duration-300 ">
          <center>
            <Usersvg styles="h-[30px] border border-slate-300 rounded-full  mt-[20px]" />
          </center>
          <div className="text-center ">{JSON.parse(userdata).username}</div>
          <div className="text-center text-[12px] text-cyan-500 ">
            {JSON.parse(userdata).email}
          </div>
          <div
            className="flex flex-col gap-[2px] w-full mt-[30px]"
            onClick={() => {
              settoggleusermenu(!toggleusermenu);
            }}
          >
            <Link
              href={`/${location}/orderdetails`}
              className="p-[5px] flex items-center gap-[10px] lg:hover:bg-slate-100 cursor-pointer"
            >
              <Navorders styles="h-[25px]" />
              Orders Detail
            </Link>
            <hr />
            <Link
              href={`/${location}/likedproducts`}
              className="p-[5px] flex items-center gap-[10px] lg:hover:bg-slate-100 cursor-pointer"
            >
              <Heart styles="h-[25px] w-[25px] fill-red-500 " />
              Liked Products
            </Link>
            <hr />
            <Link
              href={`/${location}/updateuserdetails`}
              className="p-[5px] flex items-center gap-[10px] lg:hover:bg-slate-100 cursor-pointer"
            >
              <Updateusersvg styles="h-[25px]" />
              Update User Details
            </Link>
            <hr />
            <div
              className="p-[5px] flex items-center gap-[10px] lg:hover:bg-slate-100 cursor-pointer"
              onClick={async () => {
                let res = await logout();
                setnotifictionarr([
                  ...notifictionarr,
                  {
                    id: new Date() + new Date().getMilliseconds(),
                    content: res?.message,
                  },
                ]);
                router.push("/" + location);
                window.location.reload();
              }}
            >
              <Logout styles="h-[25px]" />
              Logout
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Usermenu;
