import React from "react";
import { useParams } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "Coffee Maker",
    price: 129.99,
    description: "Brew perfection every morning.",
  },
  {
    id: 2,
    name: "Headphones",
    price: 249.0,
    description: "Noise-cancelling headphones.",
  },
  {
    id: 3,
    name: "T-Shirt",
    price: 39.5,
    description: "Organic cotton T-Shirt.",
  },
];

function ProductDetails() {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id)) || products[0];

  return (
    <div>
      <h2>{product.name}</h2>
      <p className="mb-3">${product.price}</p>
      <p>{product.description}</p>
    </div>
  );
}

export default ProductDetails;
