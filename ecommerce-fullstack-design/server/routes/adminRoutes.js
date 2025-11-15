const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Admin = require("../models/Admin");

// -------- Admin Signup --------
router.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;

  const exists = await Admin.findOne({ email });
  if (exists) return res.json({ message: "Admin already exists" });

  const hashed = await bcrypt.hash(password, 10);

  const admin = new Admin({
    name,
    email,
    password: hashed,
  });

  await admin.save();
  res.json({ message: "Admin Registered Successfully" });
});

// -------- Admin Login --------
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const admin = await Admin.findOne({ email });
  if (!admin) return res.json({ message: "Invalid credentials" });

  const isMatch = await bcrypt.compare(password, admin.password);
  if (!isMatch) return res.json({ message: "Invalid credentials" });

  const token = jwt.sign(
    { id: admin._id, email: admin.email },
    process.env.JWT_SECRET,
    { expiresIn: "7d" }
  );

  res.json({
    message: "Login successful",
    token,
    admin: { name: admin.name, email: admin.email },
  });
});

module.exports = router;
