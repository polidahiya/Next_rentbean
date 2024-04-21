"use client";
import { createContext, useContext, useState } from "react";

const AppContext = createContext({});
export function Appwrapper({ children }) {
  const [location, setlocation] = useState("Gurgaon");
  const [cartproducts, setcartproducts] = useState({});
  const [togglelocation, settogglelocation] = useState(false);
  const [toggleorderplacedmenu, settoggleorderplacedmenu] = useState(false);
  const [notifictionarr, setnotifictionarr] = useState([]);

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
