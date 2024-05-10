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
  return (
    <>
      <Navbar
        data={data.data}
        location={cookies()?.get("Rentbeanloction")?.value || "Gurgaon"}
      />
      <Location
        removable={true}
        location={cookies()?.get("Rentbeanloction")?.value || "Gurgaon"}
      />
      <Orderplacedmenu />
      <Notification />
      <div className="mt-[60px]">{children}</div>
      <Footer
        location={cookies()?.get("Rentbeanloction")?.value || "Gurgaon"}
      />
    </>
  );
}
