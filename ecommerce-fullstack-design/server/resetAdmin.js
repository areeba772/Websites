const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Admin = require("./models/Admin");

dotenv.config();

const resetAdmin = async () => {
  try {
    const mongoUri = process.env.MONGO_URI || "mongodb://localhost:27017/ecommerce";
    console.log("Connecting to MongoDB...");
    await mongoose.connect(mongoUri);
    console.log("✅ MongoDB connected!");

    // Delete existing admin
    const deleted = await Admin.deleteOne({ email: "admin@example.com" });
    if (deleted.deletedCount > 0) {
      console.log("✅ Deleted existing admin");
    } else {
      console.log("ℹ️  No existing admin found to delete");
    }

    // Create new admin with correct password
    const admin = await Admin.create({
      name: "Admin User",
      email: "admin@example.com",
      password: "admin123", // This will be hashed automatically
    });

    console.log("\n✅ Admin created successfully!");
    console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
    console.log("Email:    admin@example.com");
    console.log("Password: admin123");
    console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n");

    // Verify password works
    const testMatch = await admin.matchPassword("admin123");
    if (testMatch) {
      console.log("✅ Password verification: SUCCESS");
    } else {
      console.log("❌ Password verification: FAILED");
    }

    process.exit(0);
  } catch (error) {
    console.error("❌ Error:", error);
    process.exit(1);
  }
};

resetAdmin();

