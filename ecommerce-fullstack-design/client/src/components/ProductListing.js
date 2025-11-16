import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import api from "../utils/api";

function ProductListing() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, [searchTerm, selectedCategory]);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const params = {};
      if (searchTerm) params.keyword = searchTerm;
      if (selectedCategory) params.category = selectedCategory;

      const response = await api.get("/products", { params });
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  const fetchCategories = async () => {
    try {
      const response = await api.get("/products");
      const uniqueCategories = [...new Set(response.data.map((p) => p.category))];
      setCategories(uniqueCategories);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  return (
    <div>
      <h2 className="mb-4">All Products</h2>

      {/* Search and Filter Section */}
      <div className="row mb-4">
        <div className="col-md-6 mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search products by name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="col-md-6 mb-3">
          <select
            className="form-select"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="">All Categories</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Products Grid */}
      {loading ? (
        <div className="text-center py-5">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : products.length === 0 ? (
        <div className="alert alert-info">
          No products found. Try adjusting your search or filter.
        </div>
      ) : (
        <div className="row">
          {products.map((product) => (
            <div key={product._id} className="col-lg-4 col-md-6 mb-4">
              <div className="card h-100 shadow-sm">
                <div className="text-center p-3" style={{ height: "250px", display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#f8f9fa" }}>
                  <img
                    src={product.image?.startsWith("http") ? product.image : `${process.env.REACT_APP_API_URL || "http://localhost:5000"}${product.image}`}
                    alt={product.name}
                    className="img-fluid"
                    style={{ maxHeight: "200px", maxWidth: "100%", objectFit: "contain" }}
                    onError={(e) => {
                      e.target.src = "https://via.placeholder.com/300x300?text=No+Image";
                    }}
                  />
                </div>
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text text-muted small">{product.category}</p>
                  <p className="card-text">
                    <span className="fw-bold text-primary">${product.price.toFixed(2)}</span>
                    {product.stock > 0 ? (
                      <span className="badge bg-success ms-2">In Stock</span>
                    ) : (
                      <span className="badge bg-danger ms-2">Out of Stock</span>
                    )}
                  </p>
                  <Link
                    to={`/product/${product._id}`}
                    className="btn btn-primary mt-auto"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ProductListing;
