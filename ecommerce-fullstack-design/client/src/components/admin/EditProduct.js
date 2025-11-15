// client/src/components/admin/EditProduct.js
import React, { useState, useContext } from "react";
import axios from "axios";
import { AdminContext } from "../../context/AdminContext";

export default function EditProduct({ product, refresh, close }) {
  const { authHeaders } = useContext(AdminContext);
  const [title, setTitle] = useState(product.title);
  const [price, setPrice] = useState(product.price);
  const [stock, setStock] = useState(product.stock || 0);
  const [desc, setDesc] = useState(product.description || "");
  const [file, setFile] = useState(null);

  const submit = async (e) => {
    e.preventDefault();
    const form = new FormData();
    form.append("title", title);
    form.append("price", price);
    form.append("stock", stock);
    form.append("description", desc);
    if (file) form.append("image", file);

    await axios.put(`http://localhost:5000/api/products/${product._id}`, form, {
      headers: { ...authHeaders(), "Content-Type": "multipart/form-data" },
    });
    refresh();
    close();
  };

  return (
    <form onSubmit={submit} className="border p-3 mb-3">
      <h5>Edit Product</h5>
      <input
        className="form-control mb-2"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        className="form-control mb-2"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        required
      />
      <input
        className="form-control mb-2"
        value={stock}
        onChange={(e) => setStock(e.target.value)}
        required
      />
      <textarea
        className="form-control mb-2"
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
      />
      <input
        type="file"
        className="form-control mb-2"
        onChange={(e) => setFile(e.target.files[0])}
      />
      <div>
        <button className="btn btn-primary me-2">Save</button>
        <button type="button" className="btn btn-secondary" onClick={close}>
          Cancel
        </button>
      </div>
    </form>
  );
}
