import React from "react";
import { Link } from "react-router-dom";

// Import product images
import coffeeMakerImg from "../assets/products/coffee-maker.png";
import headphonesImg from "../assets/products/headphones.png";
import tshirtImg from "../assets/products/t-shirt.png";

const featuredProducts = [
  { id: 1, name: "Coffee Maker", price: 129.99, image: coffeeMakerImg },
  { id: 2, name: "Headphones", price: 249.0, image: headphonesImg },
  { id: 3, name: "T-Shirt", price: 39.5, image: tshirtImg },
];

function Home() {
  return (
    <div>
      {/* Hero section */}
      <div className="p-5 mb-4 bg-light rounded-3 text-center">
        <h1>Welcome to E-COM Store!</h1>
        <p className="lead">Find amazing products at great prices!</p>
        <Link to="/products" className="btn btn-primary btn-lg">
          Shop Now
        </Link>
      </div>

      {/* Featured products */}
      <h2 className="mb-4">Featured Products</h2>
      <div className="row">
        {featuredProducts.map((product) => (
          <div key={product.id} className="col-md-4 mb-3">
            <div className="card p-3 h-100 text-center">
              <img
                src={product.image}
                alt={product.name}
                className="img-fluid mb-3"
                style={{ height: "200px", objectFit: "contain" }}
              />
              <h5>{product.name}</h5>
              <p>${product.price.toFixed(2)}</p>
              <Link
                to={`/product/${product.id}`}
                className="btn btn-outline-primary btn-sm"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
