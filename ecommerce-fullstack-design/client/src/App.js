// client/src/App.js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { UserProvider } from "./context/UserContext";
import { CartProvider } from "./context/CartContext";
import { AdminProvider } from "./context/AdminContext";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import ProductListing from "./components/ProductListing";
import ProductDetails from "./components/ProductDetails";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Profile from "./components/Profile";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";

// Admin Components
import AdminLogin from "./components/admin/AdminLogin";
import AdminDashboard from "./components/admin/AdminDashboard";
import AdminProducts from "./components/admin/AdminProducts";

function App() {
  const isAdminPage = window.location.pathname.startsWith("/admin");

  return (
    <UserProvider>
      <CartProvider>
        <AdminProvider>
          <Router>
            {/* Hide Header/Footer on admin pages */}
            {!isAdminPage && <Header />}

            <main className="container my-4 flex-grow-1">
              <Routes>
                {/* User Routes */}
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<ProductListing />} />
                <Route path="/product/:id" element={<ProductDetails />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/about" element={<AboutUs />} />
                <Route path="/contact" element={<ContactUs />} />

                {/* Admin Routes */}
                <Route path="/admin/login" element={<AdminLogin />} />
                <Route path="/admin/dashboard" element={<AdminDashboard />} />
                <Route path="/admin/products" element={<AdminProducts />} />
              </Routes>
            </main>

            {!isAdminPage && <Footer />}
          </Router>
        </AdminProvider>
      </CartProvider>
    </UserProvider>
  );
}

export default App;
