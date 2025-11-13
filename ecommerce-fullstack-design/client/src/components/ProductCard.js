import React from "react";

function ProductCard({ product }) {
  return (
    <div className="border rounded-lg shadow-md p-4 flex flex-col items-center text-center">
      <img
        src={product.imageUrl}
        alt={product.name}
        className="w-48 h-48 object-cover mb-4 rounded"
      />
      <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
      <p className="text-gray-700 mb-2">${product.price.toFixed(2)}</p>
      <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;
