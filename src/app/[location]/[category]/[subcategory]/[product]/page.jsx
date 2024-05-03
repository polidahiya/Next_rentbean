import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { sitename } from "../../../../../components/Commondata";
import { Data, typeofprices } from "../../../../Data";
import Topimages from "./Topimages";
import Settings from "./Settings";
import Relatedproducts from "./Relatedproducts";
import Details from "../../../../components/(svgs)/Details";
import Homesvg from "../../../../components/(svgs)/Home";

export const generateMetadata = ({ params }) => {
  let location = params?.location.replace(/_/g, " ");
  let category = params?.category.replace(/_/g, " ");
  let subcat = params?.subcategory.replace(/_/g, " ");
  let productid = params?.product.replace(/_/g, " ");
  let products = Data()?.data[category]?.subcat[subcat]?.products;
  let product = products?.filter((item) => item.pid == productid)[0];

  return {
    title: product?.name + " on rent in " + location + " | Rentbean.in",
    description: product?.metadesc,
    keywords: product?.keywords,
    openGraph: {
      images: "https://" + sitename + "/" + product?.image[0],
    },
  };
};

function page({ params }) {
  let location = params?.location.replace(/_/g, " ");
  let category = params?.category.replace(/_/g, " ");
  let subcat = params?.subcategory.replace(/_/g, " ");
  let productid = params?.product.replace(/_/g, " ");
  let products = Data()?.data[category]?.subcat[subcat]?.products;
  let product = products?.filter((item) => item.pid == productid)[0];

  const isAvailable = products?.some((product) => product?.pid === productid);
  if (!isAvailable) {
    notFound();
  }

  return (
    <div>
      <div className=" flex items-center gap-[5px] h-[30px] px-[10px] lg:px-[40px]  text-[12px] text-theme select-none whitespace-nowrap ">
        <Link
          className="group hover:text-cyan-500 flex items-center"
          href={"/" + location}
        >
          <Homesvg styles="h-[14px] fill-theme group-hover:fill-cyan-500" />{" "}
          Home
        </Link>{" "}
        &gt;
        <Link
          className="hover:text-cyan-500"
          href={"/" + location + "/" + params.category}
        >
          {category}
        </Link>{" "}
        &gt;
        <Link
          className="hover:text-cyan-500"
          href={
            "/" + location + "/" + params.category + "/" + params.subcategory
          }
        >
          {subcat}
        </Link>
        &gt;
        <div className=" overflow-hidden text-ellipsis max-w-[100%]">
          {product.name}
        </div>
      </div>
      <div className="flex flex-col lg:flex-row items-start gap-[30px] lg:gap-[10px] px-[10px] lg:px-[40px] ">
        {/* imagecontainer */}
        <Topimages images={product.image} name={product.name} />
        {/* product setting */}
        <Settings
          product={product}
          typeofprices={typeofprices}
          link={
            "/" +
            location +
            "/" +
            params.category +
            "/" +
            params.subcategory +
            "/" +
            params.product
          }
        />
      </div>
      {/* procuct details */}
      <div className="mt-[30px] p-[20px] md:p-[40px] py-[30px] bg-bg1">
        <h2 className="flex items-center gap-[10px] text-[22px] font-semibold mb-[10px] ">
          <Details />
          <span className="font-recline">Product Details</span>
        </h2>
        <ul>
          {product.desc.map((desc, i) => {
            return (
              <li key={i} className="text-justify">
                <span className="text-theme ">→</span> {desc}
              </li>
            );
          })}
        </ul>
      </div>
      <Relatedproducts
        products={products}
        typeofprices={typeofprices}
        params={params}
      />
      {/* meta description */}
      <div className="my-[20px] px-[10px] md:px-[40px] text-center">
          <strong className="text-[12px] font-normal">
            {product.metadesc}
          </strong>
        </div>
    </div>
  );
}

export default page;
