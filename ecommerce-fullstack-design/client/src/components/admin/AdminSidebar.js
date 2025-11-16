// client/src/components/admin/AdminSidebar.js
import React from "react";
import { NavLink } from "react-router-dom";

export default function AdminSidebar() {
  return (
    <div className="border p-3" style={{ width: 200 }}>
      <h5>Admin Menu</h5>
      <NavLink to="/admin/dashboard" className="d-block mb-2">
        Dashboard
      </NavLink>
      <NavLink to="/admin/products" className="d-block mb-2">
        Products
      </NavLink>
    </div>
  );
}
