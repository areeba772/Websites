import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import ProductListingPage from "./pages/ProductListingPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import CartPage from "./pages/CartPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main className="container mx-auto p-4">
          {" "}
          {/* TailwindCSS container for centering */}
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductListingPage />} />
            <Route path="/products/:id" element={<ProductDetailsPage />} />{" "}
            {/* :id is a URL parameter */}
            <Route path="/cart" element={<CartPage />} />
            {/* Add other routes as needed later */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
