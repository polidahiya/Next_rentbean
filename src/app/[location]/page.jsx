import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import Pickups from "../components/pickups/Pickups";
import { Data } from "../../components/Getdata";
import { typeofprices } from "../../components/Commondata";
import Posteradds from "../components/Posterads";
import Description from "../components/Description";
import { listoflocation } from "../../components/Commondata";

export const generateMetadata = ({ params }) => {
  let location = params.location.replace(/_/g, " ");

  return {
    title: `Rent affordable products in ${location} | Rentbean`,
  };
};

let data = await Data();
let randomproducts = Object.keys(data.data)
  .flatMap((i) =>
    Object.keys(data.data[i].subcat).flatMap((j) =>
      Object.keys(data.data[i].subcat[j].products).map((k) => ({
        product: data.data[i].subcat[j].products[k],
        category: i,
        subcat: j,
      }))
    )
  )
  .sort(() => Math.random() - 0.5);
const commnets = [
  {
    img: "/logo&ui/client1.png",
    name: "Parvesh",
    comment:
      "Impressed with the quality and variety of products available forrent. A convenient solution for occasional needs.",
  },
  {
    img: "/logo&ui/client2.png",
    name: "Rahul",
    comment:
      "Smooth rental process, great customer support. Found exactly what I needed at a reasonable price. Very satisfied!",
  },
  {
    img: "/logo&ui/client3.png",
    name: "Vishal",
    comment:
      "Love the flexibility to rent for short periods. Reliable service and easy returns. Makes life so much easier!",
  },
  {
    img: "/logo&ui/client4.png",
    name: "Tarun",
    comment:
      "Website is intuitive, making it easy to find what I need. Renting saved me money and storage space. Win-win!",
  },
  {
    img: "/logo&ui/client5.png",
    name: "Sumit",
    comment:
      "Renting from here was a game-changer for my event planning. Affordable rates and top-notch equipment. Will be back!",
  },
];

export default async function Home({ params }) {
  let location = params.location.replace(/_/g, " ");
  if (!listoflocation.includes(location)) {
    notFound();
  }

  return (
    <>
      {/* poster ads */}
      <Posteradds location={location.replace(/ /g, "_")} />
      {/* tiles */}
      <div className="flex items-center justify-center gap-[10px] md:gap-[20px] px-[10px] py-[40px] md:px-[40px] flex-wrap">
        {Object.keys(data.data).map((categories, i) => {
          return (
            <Link
              className="categoriestile shadow2hover h-[60px] w-[60px] md:h-[70px] md:w-[120px]  rounded-lg flex flex-col items-center justify-center border border-gray-200 lg:hover:border-none lg:hover:scale-110   duration-200"
              href={
                "/" +
                location.replace(/ /g, "_") +
                "/" +
                categories.replace(/ /g, "_")
              }
              key={i}
              title={Object.keys(data.data[categories].subcat).join(" , ")}
            >
              <Image
                height={20}
                width={20}
                className="h-[30%] md:h-[20px]"
                src={data.data[categories].image}
                alt={data.data[categories].image}
              />
              <p className="text-[8px] md:text-[11px] text-center md:whitespace-nowrap">
                {categories}
              </p>
            </Link>
          );
        })}
      </div>
      {/* pickups */}
      <Pickups
        location={location}
        randomproducts={randomproducts}
        typeofprices={typeofprices}
      />
      {/* commnets */}
      <div className="py-[50px] commentscontainer ">
        <p className="text-center text-[30px] font-recline">
          What our clients say!
        </p>
        <div className="flex flex-col md:flex-row md:justify-center gap-[10px] md:flex-wrap mt-[50px] min-w-[100vw] px-[30px] pb-[30px] md:px-0 md:pb-[30px] ">
          {commnets.map((item, i) => {
            return (
              <div
                className={`card blackshadow1 relative min-w-[220px] w-full md:w-[220px] flex  md:flex-col items-center justify-center gap-[20px] md:gap-0 rounded-xl  p-[40px] md:p-[20px] py-[50px] md:py-[30px] ${
                  i == 0 || i == 4 ? "md:scale-[0.9]" : "md:scale-[0.95]"
                } ${i == 2 ? "md:scale-[1.00]" : ""}`}
                key={i}
              >
                <div className="star absolute top-[20px] left-[20px]">⭐</div>
                <Image
                  src={item.img}
                  height={70}
                  width={70}
                  alt={item.name}
                  className="rounded-full duration-300"
                ></Image>
                <p className="absolute top-[0px]  mt-[10px] md:relative commentname ">
                  {item.name}
                </p>
                <p className={"text-[12px] text-justify md:mt-[30px]"}>
                  {item.comment}
                </p>
              </div>
            );
          })}
        </div>
      </div>
      {/* descriptions  */}
      <Description location={location} />
    </>
  );
}
