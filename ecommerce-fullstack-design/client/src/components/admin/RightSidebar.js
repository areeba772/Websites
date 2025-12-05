// client/src/components/admin/RightSidebar.js
import React from "react";

function RightSidebar() {
  return (
    <div className="right-sidebar">
      {/* Quick Stats/User Info */}
      <div className="sidebar-section mb-4 p-3 border rounded shadow-sm">
        <h6 className="text-uppercase mb-3">User & Stats</h6>
        <p className="small mb-1">
          <span className="fw-bold">Total Products:</span> 150
        </p>
        <p className="small mb-1">
          <span className="fw-bold">Pending Orders:</span> 5
        </p>
        <p className="small mb-1">
          <span className="fw-bold">New Customers:</span> 12 (Today)
        </p>
      </div>

      {/* Trending Items/Alerts Section */}
      <div className="sidebar-section mb-4">
        <h6 className="text-uppercase mb-3">🔥 Trending Items</h6>
        <ul className="list-unstyled">
          <li className="mb-2 p-2 border-bottom">
            <span className="fw-bold">Headphones</span> (Sold: 50)
          </li>
          <li className="mb-2 p-2 border-bottom">
            <span className="fw-bold">Stylish Watch</span> (Stock: Low!)
          </li>
          <li className="mb-2 p-2 border-bottom">
            <span className="fw-bold">Coffee Maker</span> (Rating: 4.8)
          </li>
        </ul>
      </div>

      {/* Sales Summary / Important Note */}
      <div className="sidebar-section p-3 bg-light rounded">
        <h6 className="text-uppercase mb-3">Quick Note</h6>
        <p className="small text-muted">
          Remember to update product images to maintain design consistency
          across all cards.
        </p>
        <button className="btn btn-sm btn-outline-primary w-100 mt-2">
          Generate Report
        </button>
      </div>
    </div>
  );
}

export default RightSidebar;
