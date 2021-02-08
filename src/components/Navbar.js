import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./css/Navbar.css";

// Fix link locations

function Navbar() {
  const [click, setClick] = useState(false);

  const clickHandler = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            MO
          </Link>
          {/* sets click to false true and applies x to menu on mobile */}
          <div className="menu-icon" onClick={clickHandler}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          {/* Applies css styling if on mobile and menu is open */}
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-links" onClick={closeMobileMenu}>
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/products"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
