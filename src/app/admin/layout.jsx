import { Data } from "../Data";
let data = Data();
import { Appwrapper } from "./context";

// import { sitedata } from "../components/mongodb";
// let data = await sitedata.findOne({});

export default async function RootLayout({ children }) {
  return (
    <>
      <Appwrapper>
        <div>{children}</div>
      </Appwrapper>
    </>
  );
}
