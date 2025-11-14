const express = require("express");
const router = express.Router();
const Order = require("../models/Order");

// Place Order
router.post("/", async (req, res) => {
  const { userId, items, total, address, city, phone, paymentMethod } =
    req.body;
  try {
    const order = await Order.create({
      user: userId,
      items,
      total,
      address,
      city,
      phone,
      paymentMethod,
    });
    res.json(order);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get Orders by User
router.get("/:userId", async (req, res) => {
  try {
    const orders = await Order.find({ user: req.params.userId });
    res.json(orders);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
