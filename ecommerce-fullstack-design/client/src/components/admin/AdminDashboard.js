// client/src/components/admin/AdminDashboard.js
import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { AdminContext } from "../../context/AdminContext";
import AddProduct from "./AddProduct";
import EditProduct from "./EditProduct";

export default function AdminDashboard() {
  const { token, authHeaders, logoutAdmin } = useContext(AdminContext);
  const [products, setProducts] = useState([]);
  const [editing, setEditing] = useState(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const { data } = await axios.get("http://localhost:5000/api/products");
    setProducts(data);
  };

  const handleDelete = async (id) => {
    if (!token) return alert("Login required");
    if (!window.confirm("Delete?")) return;
    await axios.delete(`http://localhost:5000/api/products/${id}`, {
      headers: authHeaders(),
    });
    fetchProducts();
  };

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2>Admin Dashboard</h2>
        <div>
          <button className="btn btn-sm btn-danger me-2" onClick={logoutAdmin}>
            Logout
          </button>
        </div>
      </div>

      <AddProduct refresh={fetchProducts} />
      {editing && (
        <EditProduct
          product={editing}
          refresh={fetchProducts}
          close={() => setEditing(null)}
        />
      )}

      <table className="table mt-3">
        <thead>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((p) => (
            <tr key={p._id}>
              <td style={{ width: 120 }}>
                {p.image ? (
                  <img
                    src={`http://localhost:5000/${
                      p.image.startsWith("uploads/")
                        ? p.image
                        : `uploads/${p.image}`
                    }`}
                    alt=""
                    style={{ width: 100 }}
                  />
                ) : (
                  "—"
                )}
              </td>
              <td>{p.title}</td>
              <td>${p.price}</td>
              <td>{p.stock ?? 0}</td>
              <td>
                <button
                  className="btn btn-sm btn-primary me-2"
                  onClick={() => setEditing(p)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => handleDelete(p._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
