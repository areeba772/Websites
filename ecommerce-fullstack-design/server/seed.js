const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Product = require("./models/Product");
const User = require("./models/User");
const Admin = require("./models/Admin");

dotenv.config();

const products = [
  {
    name: "Coffee Maker",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1517668808823-f902bb270953?w=500&h=500&fit=crop",
    description: "Premium coffee maker with programmable timer and thermal carafe. Perfect for your morning brew!",
    category: "Electronics",
    stock: 50,
  },
  {
    name: "Headphones",
    price: 249.0,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop",
    description: "High-quality noise-cancelling headphones with crystal clear sound and comfortable design.",
    category: "Electronics",
    stock: 30,
  },
  {
    name: "T-Shirt",
    price: 39.5,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=500&fit=crop",
    description: "Comfortable cotton t-shirt available in multiple colors. Perfect for everyday wear.",
    category: "Clothing",
    stock: 100,
  },
  {
    name: "Running Shoes",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&h=500&fit=crop",
    description: "Lightweight running shoes with cushioned sole for maximum comfort during your workouts.",
    category: "Footwear",
    stock: 75,
  },
  {
    name: "Stylish Watch",
    price: 299.99,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop",
    description: "Elegant wristwatch with premium materials and precision movement. A timeless accessory.",
    category: "Accessories",
    stock: 25,
  },
  {
    name: "Designer Bag",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=500&h=500&fit=crop",
    description: "Trendy designer bag with spacious compartments and durable materials.",
    category: "Accessories",
    stock: 40,
  },
  {
    name: "Cool Gadget",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1526947425960-945c6e72858f?w=500&h=500&fit=crop",
    description: "Innovative gadget that makes your life easier with smart features and sleek design.",
    category: "Electronics",
    stock: 60,
  },
  {
    name: "Comfy Chair",
    price: 159.99,
    image: "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=500&h=500&fit=crop",
    description: "Ergonomic office chair with lumbar support and adjustable height. Perfect for long work sessions.",
    category: "Furniture",
    stock: 35,
  },
];

const seedDatabase = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGO_URI || "mongodb://localhost:27017/ecommerce");
    console.log("MongoDB connected");

    // Clear existing products
    await Product.deleteMany({});
    console.log("Cleared existing products");

    // Insert sample products
    const createdProducts = await Product.insertMany(products);
    console.log(`Inserted ${createdProducts.length} products`);

    // Create a sample admin user (optional)
    const adminExists = await Admin.findOne({ email: "admin@example.com" });
    if (!adminExists) {
      await Admin.create({
        name: "Admin User",
        email: "admin@example.com",
        password: "admin123",
      });
      console.log("Created admin user: admin@example.com / admin123");
    }

    // Create a sample regular user (optional)
    const userExists = await User.findOne({ email: "user@example.com" });
    if (!userExists) {
      await User.create({
        name: "Test User",
        email: "user@example.com",
        password: "user123",
      });
      console.log("Created test user: user@example.com / user123");
    }

    console.log("Database seeded successfully!");
    process.exit(0);
  } catch (error) {
    console.error("Error seeding database:", error);
    process.exit(1);
  }
};

seedDatabase();

