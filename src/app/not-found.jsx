import Link from "next/link";
import React from "react";

function page() {
  return (
    <div className="m-0 h-screen overflow-hidden flex items-center justify-center">
      <section>
        <h1 className="m-0 p-0 translate-y-[50px] text-[30px] font-extrabold text-center">
          404
        </h1>
        <img
          src="/logo&ui/notfound.gif"
          alt="not found gif image"
          className="max-w-[400px] m-auto w-full object-contain object-center"
        />
        <h3 className=" font-bold text-center">Look like you're lost</h3>
        <p className="text-center">
          The page you are looking for is not avaible!
        </p>
        <Link
          href="/"
          className="block bg-green-500 text-white px-[50px] py-[10px] w-fit m-auto mt-[30px] hover:text-green-500 outline outline-[1px] hover:outline-green-500 hover:bg-white"
        >
          Go to Home
        </Link>
      </section>
    </div>
  );
}

export default page;
