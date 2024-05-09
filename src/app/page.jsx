import Image from "next/image";
import Location from "./components/Location";
import Homesvg from "./components/(svgs)/Home";
import Menusvg from "./components/(svgs)/Menu";
import Cartsvg from "./components/(svgs)/Cartstroke";
import Description from "./components/Description";
import { listoflocation } from "../components/Commondata";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default function Home() {
  let locationcookie = cookies().get("Rentbeanloction");
  if (locationcookie) redirect("/" + locationcookie.value);

  const navlist = [
    "Fitness and Gym",
    "Electronics",
    "Furniture",
    "Events and Parties",
    "Others",
  ];

  return (
    <>
      <nav className="flex items-center px-[40px] h-[60px] whitespace-nowrap">
        <Image
          src="/logo&ui/3dlogo.png"
          alt="rentbean.in logo image"
          width={156}
          height={60}
        ></Image>
        {/* location */}
        <div className="location h-[30px] flex items-center justify-center gap-[5px] text-sm px-[20px] ml-auto border-[0] lg:border border-textcolor rounded-md cursor-pointer">
          <svg
            className="h-[15px] scale-[1.6] lg:scale-[1]"
            xmlns="http://www.w3.org/2000/svg"
            fill="var(--theme)"
            version="1"
            viewBox="0 0 64 64"
            xmlSpace="preserve"
          >
            <path d="M32 0C18.746 0 8 10.746 8 24c0 5.219 1.711 10.008 4.555 13.93.051.094.059.199.117.289l16 24a4.001 4.001 0 006.656 0l16-24c.059-.09.066-.195.117-.289C54.289 34.008 56 29.219 56 24 56 10.746 45.254 0 32 0zm0 32a8 8 0 110-16 8 8 0 010 16z"></path>
          </svg>
          <span className="hidden lg:block">Choose location</span>
        </div>
        <div className="hidden lg:flex items-center gap-[10px]">
          {navlist.map((item, i) => {
            return (
              <div
                key={i}
                className="flex items-center justify-center gap-[5px] px-[5px] text-[14px]"
              >
                <svg
                  className="h-[20px] lg:group-hover:rotate-[-180deg] duration-300 hidden lg:block"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="var(--textcolor)"
                    d="M5.707 9.71a1 1 0 000 1.415l4.892 4.887a2 2 0 002.828 0l4.89-4.89a1 1 0 10-1.414-1.415l-4.185 4.186a1 1 0 01-1.415 0L7.121 9.71a1 1 0 00-1.414 0z"
                  ></path>
                </svg>
                {item}
              </div>
            );
          })}
        </div>
        {/* cart */}
        <div className="h-[30px] ml-[30px] hidden lg:flex  items-center px-[20px] rounded-md cursor-pointer border border-theme no-underline text-theme text-sm ">
          <svg
            className="h-[20px] fill-theme"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g>
              <path d="M2.237 2.288a.75.75 0 10-.474 1.423l.265.089c.676.225 1.124.376 1.453.529.312.145.447.262.533.382.087.12.155.284.194.626.041.361.042.833.042 1.546v2.672c0 1.367 0 2.47.117 3.337.12.9.38 1.658.982 2.26.601.602 1.36.86 2.26.981.866.117 1.969.117 3.336.117H18a.75.75 0 000-1.5h-7c-1.435 0-2.436-.002-3.192-.103-.733-.099-1.122-.28-1.399-.556-.235-.235-.4-.551-.506-1.091h10.12c.959 0 1.438 0 1.814-.248.376-.248.565-.688.943-1.57l.428-1c.81-1.89 1.215-2.834.77-3.508C19.533 6 18.506 6 16.45 6H5.745a8.996 8.996 0 00-.047-.833c-.055-.485-.176-.93-.467-1.333-.291-.404-.675-.66-1.117-.865-.417-.194-.946-.37-1.572-.58l-.305-.1zM7.5 18a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM16.5 18a1.5 1.5 0 110 3 1.5 1.5 0 010-3z"></path>
            </g>
          </svg>
          <span>Cart</span>
        </div>
      </nav>
      {/* mobile nav */}
      <div className="flex lg:hidden items-center justify-evenly fixed bottom-0  left-0 z-[-1] h-[50px] w-full  bg-white ">
        <div>
          <Homesvg styles="h-[30px] fill-textcolor" />
        </div>
        <button>
          <Menusvg styles={`h-[30px] stroke-textcolor`} />
        </button>
        <div className="relative">
          <Cartsvg styles="h-[30px] fill-none stroke-textcolor" />
        </div>
      </div>
      {/* location selection */}
      <div className="opacity-0">
        {listoflocation?.map((item, i) => {
          return <Description key={i} location={item} />;
        })}
      </div>
      <Location removable={false} />
    </>
  );
}
