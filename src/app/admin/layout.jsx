import { Appwrapper } from "../Context/Index";
import Notification from "../components/Notification";

export default async function RootLayout({ children }) {
  return (
    <>
      <Appwrapper>
        <Notification />
        <div>{children}</div>
      </Appwrapper>
    </>
  );
}
