import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Data } from "../../../../../components/Getdata";
import Topimages from "./Topimages";
import Settings from "./Settings";
import Relatedproducts from "./Relatedproducts";
import Details from "../../../../components/(svgs)/Details";
import Homesvg from "../../../../components/(svgs)/Home";
import {
  listoflocation,
  typeofprices,
  sitename,
} from "../../../../../components/Commondata";

export const generateMetadata = async ({ params }) => {
  const data = await Data();
  let location = params?.location.replace(/_/g, " ");
  let category = params?.category.replace(/_/g, " ");
  let subcat = params?.subcategory.replace(/_/g, " ");
  let productid = params?.product.replace(/_/g, " ");
  let products = data?.data[category]?.subcat[subcat]?.products;
  let product = products?.filter((item) => item.pid == productid)[0];

  return {
    title: `${product?.name} on rent in ${location} | Rentbean`,
    description: product?.metadesc,
    keywords: product?.keywords,
    openGraph: {
      images: `https://${sitename}/${product?.image[0]}`,
    },
  };
};

async function page({ params }) {
  const data = await Data();
  let location = params?.location.replace(/_/g, " ");
  let category = params?.category.replace(/_/g, " ");
  let subcat = params?.subcategory.replace(/_/g, " ");
  let productid = params?.product.replace(/_/g, " ");
  let products = data?.data[category]?.subcat[subcat]?.products;
  let product = products?.filter((item) => item.pid == productid)[0];

  if (
    !listoflocation.includes(location) ||
    !Object.keys(data.data).includes(category) ||
    !Object.keys(data?.data[category]?.subcat)?.includes(subcat) ||
    !products?.some((product) => product?.pid === productid)
  ) {
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
        <Topimages images={product.image} name={product.name} productid={productid}/>
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
        <strong className="text-[12px] font-normal">{product.metadesc}</strong>
      </div>
    </div>
  );
}

export default page;
