import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-gray-800 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          My eCommerce
        </Link>
        <nav className="hidden md:flex space-x-4">
          {" "}
          {/* Desktop navigation */}
          <Link to="/" className="hover:text-gray-300">
            Home
          </Link>
          <Link to="/products" className="hover:text-gray-300">
            Products
          </Link>
          <Link to="/cart" className="hover:text-gray-300">
            Cart
          </Link>
          {/* Add more links later (e.g., Login, Admin) */}
        </nav>
        {/* Mobile menu icon (hamburger) would go here */}
        <div className="md:hidden">
          <button className="text-white focus:outline-none">
            {/* You can use an icon library like Heroicons or Font Awesome */}☰
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
