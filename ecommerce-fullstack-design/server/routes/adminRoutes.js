const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const Admin = require("../models/Admin");

// Generate token
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET || "your-secret-key", { expiresIn: "7d" });
};

// Admin signup
router.post("/signup", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ message: "Please provide all fields" });
    }

    const existingAdmin = await Admin.findOne({ email });
    if (existingAdmin) return res.status(400).json({ message: "Admin already exists" });

    const admin = await Admin.create({ name, email, password });
    res.json({
      _id: admin._id,
      name: admin.name,
      email: admin.email,
      token: generateToken(admin._id),
    });
  } catch (error) {
    console.error("Admin signup error:", error);
    res.status(500).json({ message: "Error creating admin", error: error.message });
  }
});

// Admin login
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "Please provide email and password" });
    }

    const admin = await Admin.findOne({ email });
    if (!admin) {
      console.log(`Admin login attempt failed: Admin with email ${email} not found`);
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const isMatch = await admin.matchPassword(password);
    if (!isMatch) {
      console.log(`Admin login attempt failed: Wrong password for ${email}`);
      return res.status(401).json({ message: "Invalid credentials" });
    }

    res.json({
      _id: admin._id,
      name: admin.name,
      email: admin.email,
      token: generateToken(admin._id),
    });
  } catch (error) {
    console.error("Admin login error:", error);
    res.status(500).json({ message: "Error during login", error: error.message });
  }
});

module.exports = router;
