import React from "react";
import {useCart} from "../context/CartContext";
import {useTheme} from "../context/ThemeContext";
export default function Navbar({onCart}){
 const {count}=useCart();const {theme,setTheme}=useTheme();
 const toggle=()=>setTheme(theme==="dark"?"light":"dark");
 return <nav className="navbar navbar-expand-lg sticky-top glass-nav"><div className="container py-2">
  <a className="navbar-brand fw-800" href="#home"><span className="brand-dot">🍽️</span> FoodRush<span className="accent">Pro</span></a>
  <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#nav"><span className="navbar-toggler-icon"></span></button>
  <div id="nav" className="collapse navbar-collapse"><ul className="navbar-nav mx-auto gap-lg-3">
   {["Home","Restaurants","Menu","Tracking","Dashboard"].map(x=><li className="nav-item" key={x}><a className="nav-link" href={"#"+x.toLowerCase()}>{x}</a></li>)}
  </ul><div className="d-flex gap-2"><button className="btn btn-light-soft" onClick={toggle}>{theme==="dark"?"☀️":"🌙"}</button><button className="btn btn-primary position-relative" onClick={onCart}>🛒 Cart {count>0&&<span className="badge rounded-pill bg-dark ms-1">{count}</span>}</button></div></div>
 </div></nav>
}