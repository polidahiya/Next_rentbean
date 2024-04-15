"use client";
import { createContext, useContext, useState } from "react";

const AppContext = createContext({
  hello: "world",
});
export function Appwrapper({ children }) {
  const [cartproducts, setcartproducts] = useState({});
  const [togglelocation, settogglelocation] = useState(false);
  const [toggleorderplacedmenu, settoggleorderplacedmenu] = useState(false);
  const [notifictionarr, setnotifictionarr] = useState([]);
  return (
    <AppContext.Provider
      value={{
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
