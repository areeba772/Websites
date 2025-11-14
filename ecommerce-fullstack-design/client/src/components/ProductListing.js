import React from "react";
import { Link } from "react-router-dom";

// Import product images from assets
import coffeeMakerImg from "../assets/products/coffee-maker.png";
import headphonesImg from "../assets/products/headphones.png";
import tshirtImg from "../assets/products/t-shirt.png";

const products = [
  { id: 1, name: "Coffee Maker", price: 129.99, image: coffeeMakerImg },
  { id: 2, name: "Headphones", price: 249.0, image: headphonesImg },
  { id: 3, name: "T-Shirt", price: 39.5, image: tshirtImg },
];

function ProductListing() {
  return (
    <div>
      <h2 className="mb-4">Products</h2>
      <div className="row">
        {products.map((product) => (
          <div key={product.id} className="col-md-4 mb-3">
            <div className="card h-100 shadow-sm">
              <img
                src={product.image}
                alt={product.name}
                className="card-img-top p-3"
                style={{ height: "200px", objectFit: "contain" }}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">${product.price.toFixed(2)}</p>
                <Link
                  to={`/product/${product.id}`}
                  className="btn btn-primary mt-auto"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductListing;
