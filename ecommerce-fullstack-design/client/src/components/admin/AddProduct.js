// client/src/components/admin/AddProduct.js
import React, { useState, useContext } from "react";
import axios from "axios";
import { AdminContext } from "../../context/AdminContext";

export default function AddProduct({ refresh }) {
  const { authHeaders } = useContext(AdminContext);
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState(0);
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState(null);

  const submit = async (e) => {
    e.preventDefault();
    const form = new FormData();
    form.append("title", title);
    form.append("price", price);
    form.append("stock", stock);
    form.append("description", desc);
    if (file) form.append("image", file);

    await axios.post("http://localhost:5000/api/products", form, {
      headers: { ...authHeaders(), "Content-Type": "multipart/form-data" },
    });
    setTitle("");
    setPrice("");
    setStock(0);
    setDesc("");
    setFile(null);
    refresh();
  };

  return (
    <form onSubmit={submit} className="border p-3">
      <h5>Add Product</h5>
      <input
        className="form-control mb-2"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        className="form-control mb-2"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        required
      />
      <input
        className="form-control mb-2"
        placeholder="Stock"
        value={stock}
        onChange={(e) => setStock(e.target.value)}
        required
      />
      <textarea
        className="form-control mb-2"
        placeholder="Description"
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
      />
      <input
        type="file"
        className="form-control mb-2"
        onChange={(e) => setFile(e.target.files[0])}
      />
      <button className="btn btn-success">Add Product</button>
    </form>
  );
}
