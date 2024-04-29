"use client";

import { createContext, useContext, useEffect, useState, useRef } from "react";

const AppContext = createContext({});

export function Appwrapper({ children }) {
  const [location, setlocation] = useState("Gurgaon");
  const [cartproducts, setcartproducts] = useState({});
  const [togglelocation, settogglelocation] = useState(false);
  const [toggleorderplacedmenu, settoggleorderplacedmenu] = useState(false);
  const [notifictionarr, setnotifictionarr] = useState([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setlocation(localStorage?.getItem("rblocation") || "Gurgaon");
      // setcartproducts(JSON.parse(localStorage.getItem("rbproducts")));
      // localStorage.setItem("rbproducts", JSON.stringify(cartproducts));
    }
  }, []);

  // admin contexts
  const [ordercomps, setordercomps] = useState(0);
  const ordercompsref = useRef();
  const [invoicedata, setinvoicedata] = useState({});
  const [showlogin, setshowlogin] = useState(true);
  const [refresh, refreshfn] = useState(0);

  return (
    <AppContext.Provider
      value={{
        location,
        setlocation,
        cartproducts,
        setcartproducts,
        togglelocation,
        settogglelocation,
        toggleorderplacedmenu,
        settoggleorderplacedmenu,
        notifictionarr,
        setnotifictionarr,
        ordercomps,
        setordercomps,
        ordercompsref,
        invoicedata,
        setinvoicedata,
        showlogin,
        setshowlogin,
        refresh,
        refreshfn,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function AppContextfn() {
  return useContext(AppContext);
}
