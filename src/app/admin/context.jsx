"use client";
import { createContext, useContext, useRef, useState } from "react";

const AppContext = createContext({});

export function Appwrapper({ children }) {
  const [ordercomps, setordercomps] = useState(0);
  const ordercompsref=useRef()
  return (
    <AppContext.Provider value={{ ordercomps, setordercomps,ordercompsref }}>
      {children}
    </AppContext.Provider>
  );
}

export function AppContextfn() {
  return useContext(AppContext);
}
