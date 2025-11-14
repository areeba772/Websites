import React from "react";
import { Link } from "react-router-dom";

const products = [
  { id: 1, name: "Coffee Maker", price: 129.99 },
  { id: 2, name: "Headphones", price: 249.0 },
  { id: 3, name: "T-Shirt", price: 39.5 },
];

function ProductListing() {
  return (
    <div>
      <h2 className="mb-4">Products</h2>
      <div className="row">
        {products.map((product) => (
          <div key={product.id} className="col-md-4 mb-3">
            <div className="card p-3 h-100">
              <h5>{product.name}</h5>
              <p>${product.price}</p>
              <Link
                to={`/product/${product.id}`}
                className="btn btn-sm btn-outline-primary"
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

export default ProductListing;
