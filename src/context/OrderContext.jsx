import React,{createContext,useContext} from "react";
import {useLocalStorage} from "../hooks/useLocalStorage";
const C=createContext();
export function OrderProvider({children}){
 const [order,setOrder]=useLocalStorage("foodrush_active_order",null);
 const place=data=>setOrder({...data,id:"FR"+Date.now().toString().slice(-7),status:"Pending",placedAt:Date.now()});
 const clear=()=>setOrder(null);
 return <C.Provider value={{order,place,clear}}>{children}</C.Provider>
}
export const useOrder=()=>useContext(C);