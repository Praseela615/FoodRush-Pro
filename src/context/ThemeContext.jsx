import React,{createContext,useContext,useEffect} from "react";
import {useLocalStorage} from "../hooks/useLocalStorage";
const C=createContext();
export function ThemeProvider({children}){const [theme,setTheme]=useLocalStorage("foodrush_theme","light");useEffect(()=>{document.documentElement.setAttribute("data-bs-theme",theme)},[theme]);return <C.Provider value={{theme,setTheme}}>{children}</C.Provider>}
export const useTheme=()=>useContext(C);