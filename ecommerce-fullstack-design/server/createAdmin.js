const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Admin = require("./models/Admin");

dotenv.config();

const createAdmin = async () => {
  try {
    // Connect to MongoDB
    const mongoUri = process.env.MONGO_URI || "mongodb://localhost:27017/ecommerce";
    console.log("Connecting to MongoDB...");
    await mongoose.connect(mongoUri);
    console.log("MongoDB connected successfully!");

    // Check if admin exists
    const adminExists = await Admin.findOne({ email: "admin@example.com" });
    
    if (adminExists) {
      console.log("Admin already exists!");
      console.log("Email: admin@example.com");
      console.log("To reset password, delete the admin and run this script again.");
    } else {
      // Create admin
      const admin = await Admin.create({
        name: "Admin User",
        email: "admin@example.com",
        password: "admin123",
      });
      console.log("\n✅ Admin created successfully!");
      console.log("Email: admin@example.com");
      console.log("Password: admin123");
      console.log("Admin ID:", admin._id);
    }

    process.exit(0);
  } catch (error) {
    console.error("❌ Error creating admin:", error);
    process.exit(1);
  }
};

createAdmin();

