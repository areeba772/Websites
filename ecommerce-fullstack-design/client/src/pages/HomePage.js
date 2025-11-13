import React from "react";
import ProductCard from "../components/ProductCard";

function HomePage() {
  // Placeholder data for featured products
  const featuredProducts = [
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
  ];

  return (
    <div className="py-8">
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">
          Welcome to My eCommerce Store!
        </h1>
        <p className="text-lg text-gray-600">
          Discover amazing products and deals.
        </p>
        <div className="mt-6">
          <img
            src="https://via.placeholder.com/1200x400?text=Hero+Banner"
            alt="Hero Banner"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-6 text-center">
          Featured Products
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto py-12">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default HomePage;
