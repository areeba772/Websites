import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import api from "../utils/api";

function Home() {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFeaturedProducts = async () => {
      try {
        const response = await api.get("/products");
        // Get first 6 products as featured
        const products = response.data.slice(0, 6);
        setFeaturedProducts(products);
      } catch (error) {
        console.error("Error fetching featured products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchFeaturedProducts();
  }, []);

  if (loading) {
    return (
      <div className="text-center py-5">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Hero section */}
      <div className="p-5 mb-4 bg-light rounded-3 text-center">
        <h1 className="display-4 fw-bold">Welcome to E-COM Store!</h1>
        <p className="lead">Find amazing products at great prices!</p>
        <Link to="/products" className="btn btn-primary btn-lg mt-3">
          Shop Now
        </Link>
      </div>

      {/* Featured products */}
      <h2 className="mb-4">Featured Products</h2>
      {featuredProducts.length === 0 ? (
        <p className="text-center">No products available at the moment.</p>
      ) : (
        <div className="row">
          {featuredProducts.map((product) => (
            <div key={product._id} className="col-md-4 col-sm-6 mb-4">
              <div className="card h-100 shadow-sm">
                <div className="text-center p-3" style={{ height: "250px", display: "flex", alignItems: "center", justifyContent: "center" }}>
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
                  <p className="card-text text-muted">{product.category}</p>
                  <p className="card-text fw-bold text-primary">${product.price.toFixed(2)}</p>
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

export default Home;
