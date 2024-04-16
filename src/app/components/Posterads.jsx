"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

function Posteradds() {
  const [activeImage, setActiveImage] = useState(0);

  const imageArray = [
    {img:"/images/highlights/ad1.jpg",link:"/Furniture"},
    {img:"/images/highlights/ad2.jpg",link:"/Fitness_and_Gym"},
    {img:"/images/highlights/ad3.jpg",link:"/Furniture"},
    {img:"/images/highlights/ad4.jpg",link:"/Electronics/Laptop"},
  ];

  useEffect(() => {
    const imageTimer = setInterval(() => {
      setActiveImage((prevIndex) => (prevIndex + 1) % imageArray.length);
    }, 5000);
    return () => clearInterval(imageTimer);
  }, []);

  return (
    <div className="flex  px-[40px] pt-[20px] gap-[20px] overflow-hidden">
      <div className="w-[400px] min-h-full bg-purple-300">hi</div>
      <div className="relative w-full aspect-[16/9]">
        {imageArray.map((item, i) => (
          <Link
            key={i}
            href={item.link}
            className={`absolute min-w-full min-h-full duration-[1s] ${i === activeImage ? "opacity-100" : "opacity-0 pointer-events-none"}`}
          >
            <Image
              className="  object-fill "
              fill
              src={item.img}
              alt={`ads${i}`}
            />
          </Link>
        ))}
      </div>
      <div className="flex items-center justify-center w-[400px] bg-pink-300 text-[40px] gap-[10px]"></div>
    </div>
  );
}

export default Posteradds;
