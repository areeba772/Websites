// client/src/components/admin/AdminProductForm.js
import React, { useState, useContext } from "react";
import { AdminContext } from "../../context/AdminContext";
import axios from "axios";

const categories = ["Electronics", "Clothing", "Footwear", "Accessories", "Furniture", "Other"];

export default function AdminProductForm({ product = {}, refresh, close }) {
  const { authHeaders } = useContext(AdminContext);

  const [name, setName] = useState(product.name || "");
  const [price, setPrice] = useState(product.price || "");
  const [stock, setStock] = useState(product.stock || 0);
  const [description, setDescription] = useState(product.description || "");
  const [category, setCategory] = useState(product.category || "Electronics");
  const [image, setImage] = useState(product.image || "");
  const [file, setFile] = useState(null);

  const submit = async (e) => {
    e.preventDefault();
    const form = new FormData();
    form.append("name", name);
    form.append("price", price);
    form.append("stock", stock);
    form.append("description", description);
    form.append("category", category);
    if (file) {
      form.append("image", file);
    } else if (image) {
      form.append("image", image);
    }

    try {
      const apiUrl = process.env.REACT_APP_API_URL?.replace("/api", "") || "http://localhost:5000";
      
      if (product._id) {
        await axios.put(
          `${apiUrl}/api/products/${product._id}`,
          form,
          {
            headers: {
              ...authHeaders(),
              "Content-Type": "multipart/form-data",
            },
          }
        );
      } else {
        await axios.post(`${apiUrl}/api/products`, form, {
          headers: { ...authHeaders(), "Content-Type": "multipart/form-data" },
        });
      }
      refresh();
      close();
    } catch (err) {
      alert(err.response?.data?.message || err.message);
    }
  };

  return (
    <form onSubmit={submit} className="border p-4 mb-3 shadow-sm rounded">
      <h5 className="mb-3">{product._id ? "Edit Product" : "Add New Product"}</h5>
      
      <div className="mb-3">
        <label className="form-label">Product Name *</label>
        <input
          className="form-control"
          placeholder="Enter product name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>

      <div className="row">
        <div className="col-md-6 mb-3">
          <label className="form-label">Price ($) *</label>
          <input
            type="number"
            step="0.01"
            className="form-control"
            placeholder="Enter price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
            min="0"
          />
        </div>

        <div className="col-md-6 mb-3">
          <label className="form-label">Stock *</label>
          <input
            type="number"
            className="form-control"
            placeholder="Enter stock quantity"
            value={stock}
            onChange={(e) => setStock(e.target.value)}
            required
            min="0"
          />
        </div>
      </div>

      <div className="mb-3">
        <label className="form-label">Category *</label>
        <select
          className="form-select"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-3">
        <label className="form-label">Description</label>
        <textarea
          className="form-control"
          rows="3"
          placeholder="Enter product description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Product Image</label>
        <input
          type="file"
          className="form-control"
          accept="image/*"
          onChange={(e) => setFile(e.target.files[0])}
        />
        {image && !file && (
          <div className="mt-2">
            <small className="text-muted">Current image URL: {image}</small>
            <input
              type="text"
              className="form-control form-control-sm mt-1"
              placeholder="Or enter image URL"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
          </div>
        )}
        {!image && (
          <input
            type="text"
            className="form-control mt-2"
            placeholder="Or enter image URL"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        )}
      </div>

      <div>
        <button className="btn btn-primary me-2" type="submit">
          {product._id ? "Update Product" : "Add Product"}
        </button>
        <button type="button" className="btn btn-secondary" onClick={close}>
          Cancel
        </button>
      </div>
    </form>
  );
}
