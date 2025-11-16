const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Admin = require("./models/Admin");

dotenv.config();

const testAdminLogin = async () => {
  try {
    const mongoUri = process.env.MONGO_URI || "mongodb://localhost:27017/ecommerce";
    await mongoose.connect(mongoUri);
    console.log("✅ MongoDB connected");

    // Find admin
    const admin = await Admin.findOne({ email: "admin@example.com" });
    
    if (!admin) {
      console.log("❌ Admin not found!");
      return;
    }

    console.log("✅ Admin found:");
    console.log("   Email:", admin.email);
    console.log("   Name:", admin.name);
    console.log("   Password hash:", admin.password.substring(0, 20) + "...");

    // Test password match
    const testPassword = "admin123";
    const isMatch = await admin.matchPassword(testPassword);
    
    if (isMatch) {
      console.log("✅ Password match: CORRECT");
    } else {
      console.log("❌ Password match: FAILED");
      console.log("   Trying to match: 'admin123'");
    }

    process.exit(0);
  } catch (error) {
    console.error("❌ Error:", error);
    process.exit(1);
  }
};

testAdminLogin();

