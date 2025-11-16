import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate, Link } from "react-router-dom";

function Cart() {
  const { cartItems, removeFromCart, updateQuantity, clearCart, getCartTotal } = useContext(CartContext);
  const navigate = useNavigate();

  const total = getCartTotal();

  if (cartItems.length === 0) {
    return (
      <div className="text-center py-5">
        <h2>Your Cart is Empty</h2>
        <p className="text-muted mb-4">Add some products to your cart to get started!</p>
        <Link to="/products" className="btn btn-primary btn-lg">
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div>
      <h2 className="mb-4">Shopping Cart</h2>
      
      <div className="row">
        <div className="col-md-8">
          {cartItems.map((item) => (
            <div
              key={item._id}
              className="card mb-3 shadow-sm"
            >
              <div className="card-body">
                <div className="row align-items-center">
                  <div className="col-md-2 text-center">
                    <img
                      src={item.image?.startsWith("http") ? item.image : `${process.env.REACT_APP_API_URL || "http://localhost:5000"}${item.image}`}
                      alt={item.name}
                      className="img-fluid"
                      style={{ maxHeight: "100px", maxWidth: "100%", objectFit: "contain" }}
                      onError={(e) => {
                        e.target.src = "https://via.placeholder.com/150x150?text=No+Image";
                      }}
                    />
                  </div>
                  <div className="col-md-4">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="text-muted small mb-0">{item.category}</p>
                    <p className="text-primary fw-bold mb-0">${item.price.toFixed(2)}</p>
                  </div>
                  <div className="col-md-3">
                    <label className="form-label small">Quantity:</label>
                    <input
                      type="number"
                      className="form-control"
                      min="1"
                      max={item.stock || 999}
                      value={item.quantity}
                      onChange={(e) => updateQuantity(item._id, parseInt(e.target.value) || 1)}
                    />
                  </div>
                  <div className="col-md-2 text-end">
                    <p className="fw-bold">${(item.price * item.quantity).toFixed(2)}</p>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => removeFromCart(item._id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="col-md-4">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title mb-4">Order Summary</h5>
              <div className="d-flex justify-content-between mb-3">
                <span>Items ({cartItems.reduce((sum, item) => sum + item.quantity, 0)})</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <hr />
              <div className="d-flex justify-content-between mb-4">
                <strong>Total:</strong>
                <strong className="text-primary">${total.toFixed(2)}</strong>
              </div>
              <button
                className="btn btn-success w-100 btn-lg mb-2"
                onClick={() => navigate("/checkout")}
              >
                Proceed to Checkout
              </button>
              <button
                className="btn btn-outline-secondary w-100"
                onClick={clearCart}
              >
                Clear Cart
              </button>
              <Link
                to="/products"
                className="btn btn-outline-primary w-100 mt-2"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
