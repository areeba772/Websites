const Order = require("../models/Order");

// Create new order
const createOrder = async (req, res) => {
  const { orderItems, shippingInfo, totalPrice } = req.body;

  if (!orderItems || orderItems.length === 0) {
    return res.status(400).json({ message: "No order items" });
  }

  const order = new Order({
    user: req.user._id,
    orderItems,
    shippingInfo,
    totalPrice,
  });

  const createdOrder = await order.save();
  res.status(201).json(createdOrder);
};

// Get all orders for logged-in user
const getOrders = async (req, res) => {
  const orders = await Order.find({ user: req.user._id });
  res.json(orders);
};

module.exports = { createOrder, getOrders };
