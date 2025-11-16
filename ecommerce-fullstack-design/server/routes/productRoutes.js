const express = require("express");
const router = express.Router();
const multer = require("multer");
const Product = require("../models/Product");
const { protectAdmin } = require("../middleware/auth");

// Multer storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname),
});
const upload = multer({ storage });

// Get all products (public) - with search and filter
router.get("/", async (req, res) => {
  try {
    const keyword = req.query.keyword
      ? {
          name: {
            $regex: req.query.keyword,
            $options: "i", // Case-insensitive
          },
        }
      : {};

    const category = req.query.category ? { category: req.query.category } : {};

    const products = await Product.find({ ...keyword, ...category });
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: "Error fetching products", error: error.message });
  }
});

// Get single product by ID
router.get("/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: "Error fetching product", error: error.message });
  }
});

// Add product (Admin only)
router.post("/", protectAdmin, upload.single("image"), async (req, res) => {
  try {
    const { name, price, description, category, stock } = req.body;
    
    if (!name || !price || !category) {
      return res.status(400).json({ message: "Please provide name, price, and category" });
    }

    const newProduct = new Product({
      name,
      price: parseFloat(price),
      description: description || "",
      category,
      stock: parseInt(stock) || 0,
      image: req.file ? `/uploads/${req.file.filename}` : req.body.image || "",
    });
    
    await newProduct.save();
    res.status(201).json({ message: "Product added successfully", product: newProduct });
  } catch (error) {
    res.status(500).json({ message: "Error creating product", error: error.message });
  }
});

// Update product (Admin only)
router.put("/:id", protectAdmin, upload.single("image"), async (req, res) => {
  try {
    const { name, price, description, category, stock } = req.body;
    const updateData = { name, price, description, category, stock };
    
    if (req.file) {
      updateData.image = `/uploads/${req.file.filename}`;
    } else if (req.body.image) {
      updateData.image = req.body.image;
    }

    const updated = await Product.findByIdAndUpdate(req.params.id, updateData, {
      new: true,
      runValidators: true,
    });
    
    if (!updated) {
      return res.status(404).json({ message: "Product not found" });
    }
    
    res.json({ message: "Product updated successfully", product: updated });
  } catch (error) {
    res.status(500).json({ message: "Error updating product", error: error.message });
  }
});

// Delete product (Admin only)
router.delete("/:id", protectAdmin, async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.json({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting product", error: error.message });
  }
});

module.exports = router;
