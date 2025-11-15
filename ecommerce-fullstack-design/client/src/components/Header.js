// src/components/Header.js
import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { UserContext } from "../context/UserContext";

function Header() {
  const { cartItems } = useContext(CartContext); // Cart items count
  const { currentUser, logoutUser } = useContext(UserContext); // Logged-in user info

  return (
    <header className="bg-dark text-white shadow-sm">
      <div className="container d-flex flex-column flex-md-row align-items-center justify-content-between py-3">
        {/* Brand */}
        <Link
          to="/"
          className="text-white text-decoration-none fs-3 fw-bold mb-2 mb-md-0"
        >
          E-COMMERCE WEBSITE
        </Link>

        {/* Navigation buttons */}
        <div className="d-flex gap-2 align-items-center flex-wrap">
          <NavLink
            to="/"
            className="btn btn-outline-light btn-sm"
            style={({ isActive }) => ({
              fontWeight: isActive ? "bold" : "normal",
            })}
          >
            Home
          </NavLink>

          <NavLink
            to="/products"
            className="btn btn-outline-light btn-sm"
            style={({ isActive }) => ({
              fontWeight: isActive ? "bold" : "normal",
            })}
          >
            Products
          </NavLink>

          <NavLink
            to="/about"
            className="btn btn-outline-light btn-sm"
            style={({ isActive }) => ({
              fontWeight: isActive ? "bold" : "normal",
            })}
          >
            About Us
          </NavLink>

          <NavLink
            to="/contact"
            className="btn btn-outline-light btn-sm"
            style={({ isActive }) => ({
              fontWeight: isActive ? "bold" : "normal",
            })}
          >
            Contact Us
          </NavLink>

          <NavLink
            to="/cart"
            className="btn btn-outline-light btn-sm position-relative"
          >
            Cart
            {cartItems.length > 0 && (
              <span
                className="badge bg-danger rounded-circle position-absolute top-0 start-100 translate-middle"
                style={{ fontSize: "0.7rem" }}
              >
                {cartItems.length}
              </span>
            )}
          </NavLink>

          {/* User Authentication Buttons */}
          {currentUser ? (
            <>
              <NavLink to="/profile" className="btn btn-outline-light btn-sm">
                {currentUser.name}
              </NavLink>
              <button
                onClick={logoutUser}
                className="btn btn-outline-light btn-sm"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <NavLink to="/login" className="btn btn-outline-light btn-sm">
                Login
              </NavLink>
              <NavLink to="/signup" className="btn btn-outline-light btn-sm">
                Signup
              </NavLink>
            </>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
