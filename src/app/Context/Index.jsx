"use client";

import { createContext, useContext, useState, useRef } from "react";

const AppContext = createContext({});

export function Appwrapper({ children }) {
  const [redirectloginlink, setredirectloginlink] = useState("");
  const [cartproducts, setcartproducts] = useState({});
  const [togglelocation, settogglelocation] = useState(false);
  const [toggleorderplacedmenu, settoggleorderplacedmenu] = useState(false);
  const [notifictionarr, setnotifictionarr] = useState([]);
  const [cartprodremove, setcartprodremove] = useState({
    show: false,
    productid: null,
  });
  const [togglemobilesearch, settogglemobilesearch] = useState(false);
  const searchinputref = useRef();

  // admin contexts
  const [ordercomps, setordercomps] = useState(0);
  const ordercompsref = useRef();
  const [invoicedata, setinvoicedata] = useState({});
  const [showlogin, setshowlogin] = useState(true);
  const [refresh, refreshfn] = useState(0);

  return (
    <AppContext.Provider
      value={{
        redirectloginlink,
        setredirectloginlink,
        cartproducts,
        setcartproducts,
        togglelocation,
        settogglelocation,
        toggleorderplacedmenu,
        settoggleorderplacedmenu,
        togglemobilesearch,
        settogglemobilesearch,
        searchinputref,
        notifictionarr,
        setnotifictionarr,
        cartprodremove,
        setcartprodremove,
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
