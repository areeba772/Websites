import React, { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import api from "../utils/api";

function ProductDetails() {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await api.get(`/products/${id}`);
        setProduct(response.data);
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleAddToCart = () => {
    if (!product) return;
    
    if (product.stock <= 0) {
      alert("This product is out of stock!");
      return;
    }

    const quantityToAdd = Math.min(quantity, product.stock);
    addToCart(product, quantityToAdd);
    
    // Show success message and navigate
    alert(`Added ${quantityToAdd} item(s) to cart!`);
    navigate("/cart");
  };

  if (loading) {
    return (
      <div className="text-center py-5">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="alert alert-danger">
        <h4>Product not found!</h4>
        <p>The product you're looking for doesn't exist.</p>
        <button className="btn btn-primary" onClick={() => navigate("/products")}>
          Go to Products
        </button>
      </div>
    );
  }

  return (
    <div className="row">
      <div className="col-md-6 mb-4">
        <div className="text-center p-4" style={{ backgroundColor: "#f8f9fa", minHeight: "400px", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <img
            src={product.image?.startsWith("http") ? product.image : `${process.env.REACT_APP_API_URL || "http://localhost:5000"}${product.image}`}
            alt={product.name}
            className="img-fluid"
            style={{ maxHeight: "400px", maxWidth: "100%", objectFit: "contain" }}
            onError={(e) => {
              e.target.src = "https://via.placeholder.com/500x500?text=No+Image";
            }}
          />
        </div>
      </div>
      <div className="col-md-6">
        <h2 className="mb-3">{product.name}</h2>
        <p className="text-muted mb-3">
          <span className="badge bg-secondary">{product.category}</span>
        </p>
        <h4 className="text-primary mb-3">${product.price.toFixed(2)}</h4>
        
        {product.stock > 0 ? (
          <span className="badge bg-success mb-3">In Stock ({product.stock} available)</span>
        ) : (
          <span className="badge bg-danger mb-3">Out of Stock</span>
        )}

        <div className="mb-4">
          <p className="text-muted">{product.description || "No description available."}</p>
        </div>

        {product.stock > 0 && (
          <div className="mb-3">
            <label htmlFor="quantity" className="form-label">Quantity:</label>
            <input
              type="number"
              id="quantity"
              className="form-control d-inline-block w-auto ms-2"
              min="1"
              max={product.stock}
              value={quantity}
              onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
              style={{ width: "100px" }}
            />
          </div>
        )}

        <div className="d-flex gap-2">
          <button
            className="btn btn-success btn-lg"
            onClick={handleAddToCart}
            disabled={product.stock <= 0}
          >
            Add to Cart
          </button>
          <button
            className="btn btn-outline-secondary btn-lg"
            onClick={() => navigate("/products")}
          >
            Back to Products
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
