import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom"; // ✅ Import useNavigate

function Cart() {
  const { cartItems, removeFromCart, clearCart } = useContext(CartContext);
  const navigate = useNavigate(); // ✅ Initialize navigate

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  if (cartItems.length === 0)
    return (
      <div>
        <h2>Your Cart is Empty</h2>
        <a href="/products" className="btn btn-primary mt-3">
          Go to Products
        </a>
      </div>
    );

  return (
    <div>
      <h2>Shopping Cart</h2>
      {cartItems.map((item) => (
        <div
          key={item.id}
          className="d-flex justify-content-between align-items-center border p-2 mb-2"
        >
          <div className="d-flex align-items-center">
            <img
              src={item.image}
              alt={item.name}
              style={{ width: "60px", height: "60px", objectFit: "contain" }}
              className="me-3"
            />
            <div>
              <h5>{item.name}</h5>
              <p>
                ${item.price.toFixed(2)} x {item.quantity}
              </p>
            </div>
          </div>
          <button
            className="btn btn-danger btn-sm"
            onClick={() => removeFromCart(item.id)}
          >
            Remove
          </button>
        </div>
      ))}
      <h4>Total: ${total.toFixed(2)}</h4>
      {/* ✅ Updated button to navigate to checkout page */}
      <button
        className="btn btn-success me-2"
        onClick={() => navigate("/checkout")}
      >
        Proceed to Checkout
      </button>
      <button className="btn btn-secondary" onClick={clearCart}>
        Clear Cart
      </button>
    </div>
  );
}

export default Cart;
