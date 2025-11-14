import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

function Checkout() {
  const { cartItems, clearCart } = useContext(CartContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    paymentMethod: "card",
  });

  const [errors, setErrors] = useState({});

  // Input change handler
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Validate form
  const validate = () => {
    let tempErrors = {};
    if (!formData.name) tempErrors.name = "Name is required";
    if (!formData.email) tempErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      tempErrors.email = "Email is invalid";
    if (!formData.phone) tempErrors.phone = "Phone is required";
    else if (!/^\d{10,15}$/.test(formData.phone))
      tempErrors.phone = "Phone number is invalid";
    if (!formData.city) tempErrors.city = "City is required";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    // For demo, just alert
    alert(
      `Order Confirmed!\n\nName: ${formData.name}\nEmail: ${
        formData.email
      }\nPhone: ${formData.phone}\nCity: ${formData.city}\nPayment: ${
        formData.paymentMethod
      }\nTotal: $${cartItems
        .reduce((acc, item) => acc + item.price * item.quantity, 0)
        .toFixed(2)}`
    );

    clearCart();
    navigate("/"); // go to home after order
  };

  if (cartItems.length === 0)
    return (
      <div>
        <h2>Your cart is empty!</h2>
        <a href="/products" className="btn btn-primary mt-3">
          Go to Products
        </a>
      </div>
    );

  return (
    <div className="row">
      <div className="col-md-6">
        <h2>Checkout</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="text"
              className={`form-control ${errors.name ? "is-invalid" : ""}`}
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            <div className="invalid-feedback">{errors.name}</div>
          </div>

          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              className={`form-control ${errors.email ? "is-invalid" : ""}`}
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            <div className="invalid-feedback">{errors.email}</div>
          </div>

          <div className="mb-3">
            <label className="form-label">Phone</label>
            <input
              type="text"
              className={`form-control ${errors.phone ? "is-invalid" : ""}`}
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
            <div className="invalid-feedback">{errors.phone}</div>
          </div>

          <div className="mb-3">
            <label className="form-label">City</label>
            <input
              type="text"
              className={`form-control ${errors.city ? "is-invalid" : ""}`}
              name="city"
              value={formData.city}
              onChange={handleChange}
            />
            <div className="invalid-feedback">{errors.city}</div>
          </div>

          <div className="mb-3">
            <label className="form-label">Payment Method</label>
            <select
              className="form-select"
              name="paymentMethod"
              value={formData.paymentMethod}
              onChange={handleChange}
            >
              <option value="card">Card</option>
              <option value="jazzcash">JazzCash</option>
              <option value="cash">Cash on Delivery</option>
            </select>
          </div>

          <button type="submit" className="btn btn-success">
            Confirm Order
          </button>
        </form>
      </div>

      <div className="col-md-6">
        <h2>Order Summary</h2>
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="d-flex justify-content-between border p-2 mb-2"
          >
            <span>
              {item.name} x {item.quantity}
            </span>
            <span>${(item.price * item.quantity).toFixed(2)}</span>
          </div>
        ))}
        <h4>
          Total: $
          {cartItems
            .reduce((acc, item) => acc + item.price * item.quantity, 0)
            .toFixed(2)}
        </h4>
      </div>
    </div>
  );
}

export default Checkout;
