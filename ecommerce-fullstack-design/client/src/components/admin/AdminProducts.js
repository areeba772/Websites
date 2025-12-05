// client/src/components/admin/AdminProducts.js
import React, { useState, useContext } from "react";
import { AdminContext } from "../../context/AdminContext";
import AdminProductForm from "./AdminProductForm";
import axios from "axios";

export default function AdminProducts({ products = [], refresh }) {
  const { authHeaders } = useContext(AdminContext);
  const [editingProduct, setEditingProduct] = useState(null);
  const [adding, setAdding] = useState(false);

  const handleDelete = async (id) => {
    if (
      !window.confirm(
        "Are you sure you want to delete this product? This action cannot be undone."
      )
    )
      return;
    try {
      const apiUrl =
        process.env.REACT_APP_API_URL || "http://localhost:5000/api";
      await axios.delete(`${apiUrl}/products/${id}`, {
        headers: authHeaders(),
      });
      refresh();
      alert("Product deleted successfully!");
    } catch (err) {
      alert(
        err.response?.data?.message || err.message || "Failed to delete product"
      );
    }
  };

  return (
    <div>
      <button className="btn btn-success mb-3" onClick={() => setAdding(true)}>
        + Add Product
      </button>

      {adding && (
        <AdminProductForm refresh={refresh} close={() => setAdding(false)} />
      )}
      {editingProduct && (
        <AdminProductForm
          product={editingProduct}
          refresh={refresh}
          close={() => setEditingProduct(null)}
        />
      )}

      <table className="table table-striped table-hover shadow-sm">
        <thead className="table-dark">
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
              <td>
                {p.image && (
                  <img
                    src={`http://localhost:5000/${p.image}`}
                    alt=""
                    width={60}
                  />
                )}
              </td>
              <td>{p.name}</td>
              <td>${p.price}</td>
              <td>{p.stock || 0}</td>
              <td>
                <button
                  className="btn btn-primary btn-sm me-2"
                  onClick={() => setEditingProduct(p)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-danger btn-sm"
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
