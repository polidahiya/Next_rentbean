import "./globals.css";
import { Appwrapper } from "./Context/Index";

export const metadata = {
  title: "Rentbean.in",
  description: "Rentbean.in | Elevate Your Lifestyle",
  manifest: "/manifest.json",
};

export default async function RootLayout({ children }) {
  return (
    <html lang="en">
      <script
        src="//code.tidio.co/kmdbtvn0njqmk275lhudh2rvm1kbbaba.js"
        async
      ></script>
      <body>
        <Appwrapper>
          <div>{children}</div>
        </Appwrapper>
      </body>
    </html>
  );
}
