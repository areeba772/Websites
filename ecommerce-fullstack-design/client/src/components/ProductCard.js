import React from "react";
import { Link } from "react-router-dom";

function ProductCard({ product }) {
  // Static placeholder data for now
  const staticProduct = {
    id: "1",
    name: "Fancy T-Shirt",
    price: 29.99,
    imageUrl: "https://via.placeholder.com/200x200?text=Product+Image", // Placeholder image
    category: "Apparel",
  };

  const displayProduct = product || staticProduct; // Use actual product if passed, otherwise static

  return (
    <div className="border rounded-lg shadow-md p-4 flex flex-col items-center text-center">
      <Link to={`/products/${displayProduct.id}`}>
        <img
          src={displayProduct.imageUrl}
          alt={displayProduct.name}
          className="w-48 h-48 object-cover mb-4 rounded"
        />
        <h3 className="text-lg font-semibold mb-2">{displayProduct.name}</h3>
      </Link>
      <p className="text-gray-700 mb-2">${displayProduct.price.toFixed(2)}</p>
      <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;
