// client/src/components/admin/LeftSidebar.js
import React from "react";
import { NavLink } from "react-router-dom";

function LeftSidebar({ handleLogout }) {
  // Yehi woh categories hain jo aapke E-COM store mein hain
  const categories = [
    "Electronics",
    "Clothing",
    "Footwear",
    "Accessories",
    "Furniture",
  ];

  return (
    <div className="left-sidebar">
      <h4 className="mb-4" style={{ color: "#007bff" }}>
        🛒 E-COM Admin
      </h4>

      <hr />

      {/* Main Navigation Links */}
      <h6 className="text-uppercase mb-2">Dashboard Actions</h6>
      <ul className="sidebar-nav-list">
        <li>
          {/* Active class ke liye custom style use kar sakte hain ya NavLink ka default */}
          <NavLink to="/admin" end>
            Dashboard Overview
          </NavLink>
        </li>
        <li>
          <NavLink to="/admin/orders">Manage Orders</NavLink>
        </li>
        <li>
          <NavLink to="/admin/users">Manage Users</NavLink>
        </li>
      </ul>

      <hr />

      {/* Category Filter Section */}
      <h6 className="text-uppercase mb-2">Filter by Category</h6>
      <ul className="sidebar-nav-list">
        {categories.map((cat, index) => (
          <li key={index}>
            <a href={`#category-${cat.toLowerCase()}`}>{cat}</a>
          </li>
        ))}
      </ul>

      <hr />

      {/* Settings/Logout */}
      <h6 className="text-uppercase mb-2">Account</h6>
      <ul className="sidebar-nav-list">
        <li>
          <NavLink to="/admin/settings">Settings</NavLink>
        </li>
        <li>
          <li>
            <button
              onClick={handleLogout}
              className="sidebar-action-btn" // Naya custom class
              style={{
                color: "#dc3545",
                background: "none",
                border: "none",
                width: "100%",
                textAlign: "left",
                padding: "8px 10px",
              }}
            >
              Logout (Fast)
            </button>
          </li>
        </li>
      </ul>
    </div>
  );
}

export default LeftSidebar;
