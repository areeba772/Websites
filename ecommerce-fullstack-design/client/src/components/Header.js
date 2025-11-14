import React from "react";
import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="bg-dark text-white py-3 shadow">
      <div className="container d-flex flex-column flex-md-row align-items-center justify-content-between">
        {/* Brand */}
        <Link
          to="/"
          className="text-white text-decoration-none fs-3 fw-bold mb-2 mb-md-0"
        >
          E-COMMERCE-WEBSITE
        </Link>

        {/* Navigation buttons */}
        <div className="d-flex gap-2">
          <NavLink to="/" className="btn btn-outline-light btn-sm">
            Home
          </NavLink>
          <NavLink to="/products" className="btn btn-outline-light btn-sm">
            Products
          </NavLink>
          <NavLink to="/products" className="btn btn-outline-light btn-sm">
            Cart
          </NavLink>
        </div>
      </div>
    </header>
  );
}

export default Header;
