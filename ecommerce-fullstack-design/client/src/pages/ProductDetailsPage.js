import React from "react";
import { useParams } from "react-router-dom";

function ProductDetailsPage() {
  const { id } = useParams(); // Get product ID from URL

  // Placeholder data for a specific product
  // In Week 2, this will be fetched from the backend
  const product = {
    id: id,
    name: `Product ${id} Name`,
    price: 49.99,
    description: `This is a detailed description for Product ${id}. It's an amazing product with many features that you will love. It is durable, efficient, and stylish.`,
    imageUrl: `https://via.placeholder.com/400x400?text=Product+${id}+Image`,
    category: "General",
    stock: 10,
  };

  if (!product) {
    return <div className="text-center py-8">Product not found.</div>;
  }

  return (
    <div className="py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Product Details</h1>
      <div className="flex flex-col md:flex-row gap-8 items-center md:items-start max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <div className="md:w-1/2">
          <img
            src={product.imageUrl}
            alt={product.name}
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold mb-4">{product.name}</h2>
          <p className="text-2xl text-green-600 font-semibold mb-4">
            ${product.price.toFixed(2)}
          </p>
          <p className="text-gray-700 mb-4">{product.description}</p>
          <p className="text-gray-600 mb-2">**Category:** {product.category}</p>
          <p className="text-gray-600 mb-4">
            **Availability:**{" "}
            {product.stock > 0 ? `${product.stock} in stock` : "Out of Stock"}
          </p>

          <div className="flex items-center space-x-4 mb-4">
            <label htmlFor="quantity" className="font-semibold">
              Quantity:
            </label>
            <input
              type="number"
              id="quantity"
              defaultValue="1"
              min="1"
              max={product.stock}
              className="border rounded px-3 py-2 w-20 text-center"
            />
          </div>

          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailsPage;
