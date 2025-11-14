import React, { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";

// Import product images
import coffeeMakerImg from "../assets/products/coffee-maker.png";
import headphonesImg from "../assets/products/headphones.png";
import tshirtImg from "../assets/products/t-shirt.png";

const products = [
  { id: 1, name: "Coffee Maker", price: 129.99, image: coffeeMakerImg },
  { id: 2, name: "Headphones", price: 249.0, image: headphonesImg },
  { id: 3, name: "T-Shirt", price: 39.5, image: tshirtImg },
];

function ProductDetails() {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();

  const product = products.find((p) => p.id === parseInt(id));
  if (!product) return <p>Product not found!</p>;

  const handleAddToCart = () => {
    addToCart(product);
    navigate("/cart"); // go to cart page after adding
  };

  return (
    <div className="row">
      <div className="col-md-6">
        <img
          src={product.image}
          alt={product.name}
          className="img-fluid"
          style={{ objectFit: "contain" }}
        />
      </div>
      <div className="col-md-6">
        <h2>{product.name}</h2>
        <h4>${product.price.toFixed(2)}</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
          tincidunt nunc lorem, sed tempor sapien tincidunt nec.
        </p>
        <button className="btn btn-success" onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductDetails;
