import Navbar from "../components/Navbar/Navbar";
import Notification from "../components/Notification";
import Location from "../components/Location";
import Footer from "../components/Footer";
import Orderplacedmenu from "../components/Orderplacedmenu";
import { Data } from "../../components/Getdata";
import { cookies } from "next/headers";

let data = await Data();

export const metadata = {
  title: "Rentbean.in",
  description: "Rent Furniture, Electronics, Appliances and more",
  manifest: "/manifest.json",
};

export default async function RootLayout({ children }) {
  const location = cookies()?.get("Rentbeanloction")?.value || "Gurgaon";
  return (
    <>
      <Navbar data={data.data} location={location} />
      <Location removable={true} location={location} />
      <Orderplacedmenu />
      <Notification />
      <div className="mt-[60px]">{children}</div>
      <Footer location={location} />
    </>
  );
}
