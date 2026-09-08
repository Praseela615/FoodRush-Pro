import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { useTheme } from "../context/ThemeContext";

export default function Navbar({ onCart }) {
  const { count } = useCart();
  const { theme, setTheme } = useTheme();

  const [menuOpen, setMenuOpen] = useState(false);

  const toggle = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar sticky-top glass-nav">
      <div className="container py-2">

       
        <a
          className="navbar-brand fw-800"
          href="#home"
          onClick={closeMenu}
        >
          <span className="brand-dot">🍽️</span>{" "}
          FoodRush<span className="accent">Pro</span>
        </a>

        
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

       
        <div className={`navbar-collapse ${menuOpen ? "show" : ""}`}>
          <ul className="navbar-nav mx-auto gap-lg-3">
            {["Home", "Restaurants", "Menu", "Tracking", "Dashboard"].map(
              (x) => (
                <li className="nav-item" key={x}>
                  <a
                    className="nav-link"
                    href={"#" + x.toLowerCase()}
                    onClick={closeMenu}
                  >
                    {x}
                  </a>
                </li>
              )
            )}
          </ul>

          
          <div className="d-flex gap-2">
            <button className="btn btn-light-soft" onClick={toggle}>
              {theme === "dark" ? "☀️" : "🌙"}
            </button>

            <button
              className="btn btn-primary position-relative"
              onClick={onCart}
            >
              🛒 Cart{" "}
              {count > 0 && (
                <span className="badge rounded-pill bg-dark ms-1">
                  {count}
                </span>
              )}
            </button>
          </div>
        </div>

      </div>
    </nav>
  );
}