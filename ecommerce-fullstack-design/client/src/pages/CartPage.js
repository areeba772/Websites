import React from "react";

function CartPage() {
  // Placeholder cart items
  const cartItems = [
    {
      id: "1",
      name: "Cool Gadget",
      price: 99.99,
      quantity: 1,
      imageUrl: "https://via.placeholder.com/100x100?text=Cool+Gadget",
    },
    {
      id: "2",
      name: "Stylish Watch",
      price: 150.0,
      quantity: 2,
      imageUrl: "https://via.placeholder.com/100x100?text=Stylish+Watch",
    },
  ];

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">
        Your Shopping Cart
      </h1>

      {cartItems.length === 0 ? (
        <p className="text-center text-gray-600 text-xl">Your cart is empty.</p>
      ) : (
        <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-lg">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between border-b py-4 last:border-b-0"
            >
              <div className="flex items-center space-x-4">
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded"
                />
                <div>
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <p className="text-gray-600">
                    ${item.price.toFixed(2)} x {item.quantity}
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-xl font-bold">
                  ${(item.price * item.quantity).toFixed(2)}
                </span>
                <button className="text-red-600 hover:text-red-800 transition-colors">
                  Remove
                </button>
              </div>
            </div>
          ))}

          <div className="mt-6 pt-4 border-t flex justify-between items-center text-2xl font-bold">
            <span>Subtotal:</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>

          <div className="mt-8 text-right">
            <button className="bg-green-600 text-white px-8 py-4 rounded-lg text-xl font-semibold hover:bg-green-700 transition-colors">
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default CartPage;
