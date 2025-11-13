import React from "react";
import { useParams, useNavigate } from "react-router-dom";

// Import all images
import gadgetImg from "../assets/cool-gadget.png";
import watchImg from "../assets/stylish-watch.png";
import chairImg from "../assets/comfy-chair.png";
import bagImg from "../assets/designer-bag.png";
import coffeeImg from "../assets/coffee-maker.png";
import shoesImg from "../assets/running-shoes.png";
import headphonesImg from "../assets/wireless-headphones.png";

const products = [
  { id: "1", name: "Cool Gadget", price: 99.99, imageUrl: gadgetImg },
  { id: "2", name: "Stylish Watch", price: 150.0, imageUrl: watchImg },
  { id: "3", name: "Comfy Chair", price: 249.0, imageUrl: chairImg },
  {
    id: "4",
    name: "Wireless Headphones",
    price: 79.99,
    imageUrl: headphonesImg,
  },
  { id: "5", name: "Designer Bag", price: 120.0, imageUrl: bagImg },
  { id: "6", name: "Coffee Maker", price: 59.99, imageUrl: coffeeImg },
  { id: "7", name: "Running Shoes", price: 89.0, imageUrl: shoesImg },
];

function ProductDetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find((p) => p.id === id);

  if (!product) return <p>Product not found</p>;

  return (
    <div className="p-8">
      <button
        className="mb-4 text-blue-500 underline"
        onClick={() => navigate(-1)}
      >
        ← Back
      </button>
      <div className="flex flex-col md:flex-row items-center gap-8">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-96 h-96 object-cover rounded"
        />
        <div>
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-gray-700 text-xl mb-4">
            ${product.price.toFixed(2)}
          </p>
          <p className="mb-4">
            Detailed description of {product.name} goes here.
          </p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailsPage;
