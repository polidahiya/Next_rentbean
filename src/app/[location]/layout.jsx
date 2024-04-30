import Navbar from "../components/Navbar/Navbar";
import Notification from "../components/Notification";
import Location from "../components/Location";
import Footer from "../components/Footer";
import Orderplacedmenu from "../components/Orderplacedmenu";
import { Data } from "../Data";

let data = Data();

// import { sitedata } from "../components/mongodb";
// let data = await sitedata.findOne({});

export const metadata = {
  title: "Rentbean.in",
  description: "Rent Furniture, Electronics, Appliances and more",
  manifest: "/manifest.json",
};

export default async function RootLayout({ children }) {
  return (
    <>
      <Navbar data={data.data} />
      <Location removable={true}/>
      <Orderplacedmenu />
      <Notification />
      <div className="mt-[60px]">{children}</div>
      <Footer />
    </>
  );
}
