import React from "react";
import ProductCard from "../components/ProductCard";

// Import all images from assets
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

function ProductListingPage() {
  return (
    <div className="py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">All Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default ProductListingPage;
