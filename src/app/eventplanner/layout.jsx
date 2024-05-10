import "./evglobals.css";
import Navbar from "./components/Navbar";

export const metadata = {
  title: "Rentbean.in",
  description: "Rentbean.in | Elevate Your Lifestyle",
  manifest: "/manifest.json",
  favicon: "/eventmanager/images/favicon.png",
};

export default async function RootLayout({ children }) {
  return (
    <>
      <Navbar />
      <div>{children}</div>
    </>
  );
}
