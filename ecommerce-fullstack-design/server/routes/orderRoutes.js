const express = require("express");
const Order = require("../models/Order");
const router = express.Router();

// Create order
router.post("/", async (req, res) => {
  const { user, products, totalPrice } = req.body;
  const order = await Order.create({ user, products, totalPrice });
  res.status(201).json(order);
});

// Get all orders
router.get("/", async (req, res) => {
  const orders = await Order.find()
    .populate("user")
    .populate("products.product");
  res.json(orders);
});

module.exports = router;
