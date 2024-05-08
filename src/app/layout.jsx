import "./globals.css";
import Script from "next/script";
import { Appwrapper } from "./Context/Index";

export const metadata = {
  title: "Rentbean.in",
  description: "Rentbean.in | Elevate Your Lifestyle",
  manifest: "/manifest.json",
};

export default async function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-XRTTC0XC3Z"
        ></Script>
        <Script async src="Googlescript.js"></Script>
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7398670337880164"
          crossorigin="anonymous"
        ></Script>
      </head>
      <body>
        <Appwrapper>
          <div>{children}</div>
        </Appwrapper>
      </body>
    </html>
  );
}
