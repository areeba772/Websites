import Product from "../models/Product.js";

// @desc    Fetch all products, including search/filter logic (Week 2 Task)
// @route   GET /api/products
// @access  Public
const getProducts = async (req, res) => {
  // Implement search logic (Week 2)
  const keyword = req.query.keyword
    ? {
        name: {
          $regex: req.query.keyword,
          $options: "i", // Case-insensitive
        },
      }
    : {};

  // Optional: Filter by Category
  const category = req.query.category ? { category: req.query.category } : {};

  try {
    const products = await Product.find({ ...keyword, ...category });
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: "Error fetching products" });
  }
};

// @desc    Fetch single product by ID
// @route   GET /api/products/:id
// @access  Public
const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ message: "Product not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error fetching product" });
  }
};

// --- CRUD Operations for Admin (Week 3 Task - Basic setup) ---

// @desc    Create a new product
// @route   POST /api/products
// @access  Private/Admin
const createProduct = async (req, res) => {
  // This is a basic implementation. You should add validation.
  const product = new Product({
    name: req.body.name || "Sample Product",
    price: req.body.price || 0,
    image: req.body.image || "/images/sample.jpg",
    description: req.body.description || "Sample description",
    category: req.body.category || "Electronics",
    stock: req.body.stock || 0,
    // user: req.user._id, // Will be needed for Week 3 (Admin Auth)
  });

  try {
    const createdProduct = await product.save();
    res.status(201).json(createdProduct);
  } catch (error) {
    res
      .status(400)
      .json({ message: "Failed to create product", error: error.message });
  }
};

// More controllers (updateProduct, deleteProduct) would go here for Week 3
// ...

export { getProducts, getProductById, createProduct };
