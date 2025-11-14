import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="text-center">
      <h1 className="display-4 mb-3">Welcome to E-COM Store</h1>
      <p className="lead mb-4">Shop the best products at amazing prices!</p>
      <Link to="/products" className="btn btn-primary btn-lg">
        Shop Now
      </Link>
    </div>
  );
}

export default Home;
