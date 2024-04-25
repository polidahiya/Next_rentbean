import { Data } from "../Data";
let data = Data();

// import { sitedata } from "../components/mongodb";
// let data = await sitedata.findOne({});

export default async function RootLayout({ children }) {
  return (
    <>
      <div>{children}</div>
    </>
  );
}
