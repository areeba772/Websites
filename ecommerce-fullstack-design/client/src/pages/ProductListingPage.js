import React from "react";
import ProductCard from "../components/ProductCard";

function ProductListingPage() {
  // Placeholder data for all products
  const products = [
    {
      id: "1",
      name: "Cool Gadget",
      price: 99.99,
      imageUrl: "https://via.placeholder.com/200x200?text=Cool+Gadget",
      category: "Electronics",
    },
    {
      id: "2",
      name: "Stylish Watch",
      price: 150.0,
      imageUrl: "https://via.placeholder.com/200x200?text=Stylish+Watch",
      category: "Accessories",
    },
    {
      id: "3",
      name: "Comfy Chair",
      price: 249.0,
      imageUrl: "https://via.placeholder.com/200x200?text=Comfy+Chair",
      category: "Furniture",
    },
    {
      id: "4",
      name: "Wireless Headphones",
      price: 79.99,
      imageUrl: "https://via.placeholder.com/200x200?text=Headphones",
      category: "Electronics",
    },
    {
      id: "5",
      name: "Designer Bag",
      price: 120.0,
      imageUrl: "https://via.placeholder.com/200x200?text=Designer+Bag",
      category: "Fashion",
    },
    {
      id: "6",
      name: "Coffee Maker",
      price: 59.99,
      imageUrl: "https://via.placeholder.com/200x200?text=Coffee+Maker",
      category: "Home Appliances",
    },
    {
      id: "7",
      name: "Running Shoes",
      price: 89.0,
      imageUrl: "https://via.placeholder.com/200x200?text=Running+Shoes",
      category: "Sports",
    },
  ];

  return (
    <div className="py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">All Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default ProductListingPage;
