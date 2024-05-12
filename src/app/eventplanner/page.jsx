import React from "react";
import Image from "next/image";
import Trustedby from "./components/Trustedby";
import Events from "./components/Events";

function page() {
  return (
    <div>
      <Image
        src="/eventmanager/images/wedding.jpg"
        alt="Main theme image"
        width={1280}
        height={551}
        quality={100}
        className="h-[100dvh] w-full object-cover object-center"
      ></Image>
      <main
        className="relative"
        style={{
          background: `radial-gradient(
          circle at center center,
          rgba(217, 217, 217, 0.05) 0%,
          rgba(217, 217, 217, 0.05) 15%,
          rgba(197, 197, 197, 0.05) 15%,
          rgba(197, 197, 197, 0.05) 34%,
          rgba(178, 178, 178, 0.05) 34%,
          rgba(178, 178, 178, 0.05) 51%,
          rgba(237, 237, 237, 0.05) 51%,
          rgba(237, 237, 237, 0.05) 75%,
          rgba(138, 138, 138, 0.05) 75%,
          rgba(138, 138, 138, 0.05) 89%,
          rgba(158, 158, 158, 0.05) 89%,
          rgba(158, 158, 158, 0.05) 100%
        ),
        radial-gradient(
          circle at center center,
          rgb(255, 255, 255) 0%,
          rgb(255, 255, 255) 6%,
          rgb(255, 255, 255) 6%,
          rgb(255, 255, 255) 12%,
          rgb(255, 255, 255) 12%,
          rgb(255, 255, 255) 31%,
          rgb(255, 255, 255) 31%,
          rgb(255, 255, 255) 92%,
          rgb(255, 255, 255) 92%,
          rgb(255, 255, 255) 97%,
          rgb(255, 255, 255) 97%,
          rgb(255, 255, 255) 100%
        );
      background-size: 42px 42px`,
        }}
      >
        {/* grass */}
        <div
          className="h-[100px] w-full absolute top-[-100px]"
          style={{
            background:
              "url(/eventmanager/flowers.png) center / contain repeat-x",
          }}
        ></div>
        {/*  */}
        <Events />
        {/* promises  */}
        <div
          className="grid grid-cols-2 md:flex items-center justify-evenly gap-[30px] py-[40px] flex-wrap px-[10px] lg:px-0"
          style={{
            background: `linear-gradient(
          45deg,
          rgba(254, 246, 210, 0.53) 0%,
          rgba(254, 246, 210, 0.53) 14.286%,
          rgba(221, 240, 216, 0.53) 14.286%,
          rgba(221, 240, 216, 0.53) 28.572%,
          rgba(188, 233, 223, 0.53) 28.572%,
          rgba(188, 233, 223, 0.53) 42.858%,
          rgba(156, 227, 229, 0.53) 42.858%,
          rgba(156, 227, 229, 0.53) 57.144%,
          rgba(123, 220, 235, 0.53) 57.144%,
          rgba(123, 220, 235, 0.53) 71.42999999999999%,
          rgba(90, 214, 242, 0.53) 71.43%,
          rgba(90, 214, 242, 0.53) 85.71600000000001%,
          rgba(57, 207, 248, 0.53) 85.716%,
          rgba(57, 207, 248, 0.53) 100.002%
        ),
        linear-gradient(
          135deg,
          rgb(246, 99, 200) 0%,
          rgb(246, 99, 200) 12.5%,
          rgb(223, 98, 196) 12.5%,
          rgb(223, 98, 196) 25%,
          rgb(199, 97, 192) 25%,
          rgb(199, 97, 192) 37.5%,
          rgb(176, 96, 188) 37.5%,
          rgb(176, 96, 188) 50%,
          rgb(152, 95, 184) 50%,
          rgb(152, 95, 184) 62.5%,
          rgb(129, 94, 180) 62.5%,
          rgb(129, 94, 180) 75%,
          rgb(105, 93, 176) 75%,
          rgb(105, 93, 176) 87.5%,
          rgb(82, 92, 172) 87.5%,
          rgb(82, 92, 172) 100%
        )`,
          }}
        >
          <div className="bg-white flex flex-col items-center justify-center gap-[20px] rounded-tl-[50px] rounded-br-[50px] h-full aspect-[1/1] md:aspect-[3/2] ">
            <Image
              src="/eventmanager/primises vectors/gift-svgrepo-com.svg"
              alt="gifts"
              height={200}
              width={200}
              className="h-[30%] md:h-[50%] aspect-square"
            ></Image>
            <p className="text-themepink">Best Collection</p>
          </div>
          <div className="bg-white flex flex-col items-center justify-center gap-[20px] rounded-tl-[50px] rounded-br-[50px] h-full aspect-[1/1] md:aspect-[3/2] ">
            <Image
              src="/eventmanager/primises vectors/fast-delivery-truck-svgrepo-com.svg"
              alt="Fast delivery"
              height={200}
              width={200}
              className="h-[30%] md:h-[50%] aspect-square"
            ></Image>

            <p className="text-themepink">Instant Service</p>
          </div>
          <div className="bg-white flex flex-col items-center justify-center gap-[20px] rounded-tl-[50px] rounded-br-[50px] h-full aspect-[1/1] md:aspect-[3/2] ">
            <Image
              src="/eventmanager/primises vectors/telemarketer-support-svgrepo-com.svg"
              alt="Customer support "
              height={200}
              width={200}
              className="h-[30%] md:h-[50%] aspect-square"
            ></Image>

            <p className="text-themepink">Customer Support</p>
          </div>
          <div className="bg-white flex flex-col items-center justify-center gap-[20px] rounded-tl-[50px] rounded-br-[50px] h-full aspect-[1/1] md:aspect-[3/2] ">
            <Image
              src="/eventmanager/primises vectors/payment-method-bank-svgrepo-com.svg"
              alt="Safe payment"
              height={200}
              width={200}
              className="h-[30%] md:h-[50%] aspect-square"
            ></Image>

            <p className="text-themepink">Secure Payment</p>
          </div>
        </div>
        {/*note from ceo  */}
        <div
          className="py-[100px] text-white text-center flex flex-col items-center"
          style={{
            background:
              "url(/eventmanager/images/aboutusbg2.jpg) center / cover",
          }}
        >
          <h2 className="font-recline text-[30px] underline ">
            A Note from CEO{" "}
          </h2>
          <p className="italic mt-[20px] max-w-[700px] px-[10px] font-recline">
            Welcome to{" "}
            <span className="text-themepink">Rentbean Event Planners</span>,
            where unforgettable moments are crafted with care. With our
            expertise spanning across Delhi, Gurgaon, and Noida, we specialize
            in curating exceptional experiences for a variety of occasions.
          </p>
          <p className="italic mt-[20px] max-w-[700px] px-[10px] font-recline">
            Whether it&apos;s the joyous festivities of a Birthday Celebration,
            the timeless romance of a Wedding Celebration, the professional
            finesse of a Corporate Event, the intimate charm of a Private Party,
            the exhilarating countdown of a New Year&apos;s Eve bash, or the
            spirited enthusiasm of a School Event, we are dedicated to turning
            your vision into reality.
          </p>
          <p className="italic mt-[20px] max-w-[700px] px-[10px] font-recline">
            From conceptualization to execution, our team ensures every detail
            is meticulously planned, leaving you free to immerse yourself in the
            joy of the moment. Let us transform your event into a cherished
            memory that will be treasured for a lifetime.
          </p>
          <p className="italic mt-[20px] max-w-[700px] px-[10px] font-recline">
            Contact us today to begin planning your next extraordinary event.
          </p>
          <p className="italic mt-[20px] max-w-[700px] px-[10px] font-recline underline">
            Thank you
          </p>
        </div>
        {/* trusted by */}
        <Trustedby />
      </main>
    </div>
  );
}

export default page;
