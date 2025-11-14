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
          E-COM
        </Link>

        {/* Navigation buttons */}
        <div className="d-flex gap-2">
          <NavLink to="/products" className="btn btn-outline-light btn-sm">
            All Products
          </NavLink>
          <NavLink to="/" className="btn btn-outline-light btn-sm">
            Featured
          </NavLink>
          <NavLink to="/" className="btn btn-outline-light btn-sm">
            New Arrivals
          </NavLink>
        </div>
      </div>
    </header>
  );
}

export default Header;
