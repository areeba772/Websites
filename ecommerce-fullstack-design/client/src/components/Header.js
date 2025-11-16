// src/components/Header.js
import React, { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { UserContext } from "../context/UserContext";

function Header() {
  const { cartItems, getCartItemsCount } = useContext(CartContext);
  const { user, logout } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const cartCount = getCartItemsCount();

  return (
    <header className="bg-dark text-white shadow-sm sticky-top">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-dark">
          {/* Brand */}
          <Link to="/" className="navbar-brand fs-3 fw-bold">
            E-COM Store
          </Link>

          {/* Mobile toggle button */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navigation menu */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <NavLink to="/" className="nav-link" end>
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/products" className="nav-link">
                  Products
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/about" className="nav-link">
                  About Us
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/contact" className="nav-link">
                  Contact Us
                </NavLink>
              </li>
            </ul>

            {/* Right side navigation */}
            <ul className="navbar-nav align-items-center">
              <li className="nav-item">
                <NavLink to="/cart" className="nav-link position-relative">
                  Cart
                  {cartCount > 0 && (
                    <span className="badge bg-danger rounded-pill position-absolute top-0 start-100 translate-middle">
                      {cartCount}
                    </span>
                  )}
                </NavLink>
              </li>

              {/* User Authentication */}
              {user ? (
                <>
                  <li className="nav-item">
                    <NavLink to="/profile" className="nav-link">
                      {user.name}
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <button
                      onClick={handleLogout}
                      className="btn btn-outline-light btn-sm ms-2"
                    >
                      Logout
                    </button>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <NavLink to="/login" className="nav-link">
                      Login
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/signup" className="btn btn-outline-light btn-sm ms-2">
                      Sign Up
                    </NavLink>
                  </li>
                </>
              )}
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
