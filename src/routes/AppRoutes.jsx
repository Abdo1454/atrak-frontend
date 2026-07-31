import { Routes, Route } from "react-router-dom";

import Layout from "../components/layout/Layout";
import DashboardLayout from "../components/dashboard/DashboardLayout";

// Public Pages
import Home from "../pages/Home/Home";
import Products from "../pages/Products/Products";
import ProductDetails from "../pages/ProductDetails/ProductDetails";
import Cart from "../pages/Cart/Cart";
import Checkout from "../pages/Checkout/Checkout";
import Success from "../pages/Success/Success";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import Builder from "../pages/Builder/Builder";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";

// Dashboard Pages
import Dashboard from "../pages/dashboard/Dashboard";
import Profile from "../pages/dashboard/Profile";
import Orders from "../pages/dashboard/Orders";
import Favorites from "../pages/dashboard/Favorites";
import Settings from "../pages/dashboard/Settings";
import ChangePassword from "../pages/dashboard/ChangePassword";

function AppRoutes() {
  return (
    <Routes>
      {/* Public Layout */}
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />

        <Route path="/products" element={<Products />} />

        <Route
          path="/products/:id"
          element={<ProductDetails />}
        />

        <Route path="/cart" element={<Cart />} />

        <Route path="/checkout" element={<Checkout />} />

        <Route path="/success" element={<Success />} />

        <Route path="/about" element={<About />} />

        <Route path="/contact" element={<Contact />} />

        <Route path="/builder" element={<Builder />} />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />
      </Route>

      {/* Dashboard Layout */}
      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route index element={<Dashboard />} />

        <Route path="profile" element={<Profile />} />

        <Route path="orders" element={<Orders />} />

        <Route path="favorites" element={<Favorites />} />

        <Route path="settings" element={<Settings />} />

        <Route
          path="change-password"
          element={<ChangePassword />}
        />
      </Route>
    </Routes>
  );
}

export default AppRoutes;