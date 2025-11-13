// server/routes/productRoutes.js
const express = require("express");
const router = express.Router();
const Product = require("../models/Product"); // Import the Product Model

// GET /api/products - Fetch all products
router.get("/", async (req, res) => {
  try {
    // Find all documents in the 'products' collection
    const products = await Product.find({});
    res.json(products);
  } catch (err) {
    // Handle server errors
    res.status(500).json({ message: err.message });
  }
});

// GET /api/products/:id - Fetch a single product by its MongoDB ID
router.get("/:id", async (req, res) => {
  try {
    // Find a specific product by its unique ID
    const product = await Product.findById(req.params.id);

    if (product == null) {
      // If ID is valid but no product is found
      return res.status(404).json({ message: "Product not found" });
    }
    res.json(product);
  } catch (err) {
    // Handle errors (e.g., invalid ID format)
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
