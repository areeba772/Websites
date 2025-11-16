// client/src/components/admin/AdminDashboard.js
import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AdminContext } from "../../context/AdminContext";
import AdminProducts from "./AdminProducts";
import api from "../../utils/api";

export default function AdminDashboard() {
  const { token, logoutAdmin } = useContext(AdminContext);
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!token) {
      navigate("/admin/login");
      return;
    }
    fetchProducts();
    // eslint-disable-next-line
  }, [token]);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const { data } = await api.get("/products");
      setProducts(data);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      console.error(err.response?.data?.message || err.message);
      alert("Failed to fetch products. Make sure you are logged in.");
      if (err.response?.status === 401) {
        logoutAdmin();
        navigate("/admin/login");
      }
    }
  };

  const handleLogout = () => {
    logoutAdmin();
    navigate("/admin/login");
  };

  if (!token) {
    return null;
  }

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="mb-0">Admin Dashboard</h2>
        <button className="btn btn-sm btn-danger" onClick={handleLogout}>
          Logout
        </button>
      </div>

      <div className="alert alert-info">
        <strong>Welcome to Admin Panel!</strong> Manage your products below.
      </div>

      {loading ? (
        <div className="text-center py-5">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <AdminProducts products={products} refresh={fetchProducts} />
      )}
    </div>
  );
}
