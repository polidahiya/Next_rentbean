"use client";

import { createContext, useContext, useEffect, useState } from "react";

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
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function AppContextfn() {
  return useContext(AppContext);
}
