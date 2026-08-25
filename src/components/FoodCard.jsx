import React from "react";
import toast from "react-hot-toast";
import {useCart} from "../context/CartContext";
export default function FoodCard({food}){
 const {add}=useCart();
 return <article className="card food-card h-100 border-0"><div className="food-photo"><img src={food.img} alt={food.name} loading="lazy"/><span className="photo-badge">{food.diet==="veg"?"VEG":"CHEF PICK"}</span></div><div className="card-body p-3"><div className="d-flex justify-content-between gap-2"><h5 className="fw-bold mb-1">{food.name}</h5><span className="rating">★ {food.rating}</span></div><small className="text-secondary">{food.cat} • {food.time} min</small><p className="text-secondary small mt-2 mb-3">{food.desc}</p><div className="d-flex justify-content-between align-items-center"><strong className="price">₹{food.price}</strong><button className="btn btn-primary btn-sm" onClick={()=>{add(food);toast.success(`${food.name} added to cart`)}}>+ Add</button></div></div></article>
}