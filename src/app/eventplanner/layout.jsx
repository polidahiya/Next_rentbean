import "./epglobals.css";
import Navbar from "./components/Navbar";

export const metadata = {
  title: "Rentbean Event Planners | Craft your beautiful moments",
  description: "Craft your beautiful moments with Rentbean Event Planners",
  manifest: "/eventmanager/manifest.json",
};

export default async function RootLayout({ children }) {
  return (
    <>
      <Navbar />
      <div>{children}</div>
    </>
  );
}
