import React,{createContext,useContext,useMemo} from "react";
import {useLocalStorage} from "../hooks/useLocalStorage";
const C=createContext();
export function CartProvider({children}){
 const [cart,setCart]=useLocalStorage("foodrush_cart",[]);
 const add=(food)=>setCart(c=>{const x=c.find(i=>i.id===food.id);return x?c.map(i=>i.id===food.id?{...i,qty:i.qty+1}:i):[...c,{...food,qty:1}]});
 const change=(id,delta)=>setCart(c=>c.map(i=>i.id===id?{...i,qty:i.qty+delta}:i).filter(i=>i.qty>0));
 const remove=id=>setCart(c=>c.filter(i=>i.id!==id));
 const clear=()=>setCart([]);
 const total=useMemo(()=>cart.reduce((s,i)=>s+i.price*i.qty,0),[cart]);
 const count=useMemo(()=>cart.reduce((s,i)=>s+i.qty,0),[cart]);
 return <C.Provider value={{cart,add,change,remove,clear,total,count}}>{children}</C.Provider>
}
export const useCart=()=>useContext(C);