import { Routes, Route } from "react-router-dom";

import Layout from "../components/layout/Layout";
import DashboardLayout from "../components/dashboard/DashboardLayout";
import AdminLayout from "../components/admin/AdminLayout";


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


// User Dashboard Pages
import Dashboard from "../pages/dashboard/Dashboard";
import Profile from "../pages/dashboard/Profile";
import Orders from "../pages/dashboard/Orders";
import Favorites from "../pages/dashboard/Favorites";
import Settings from "../pages/dashboard/Settings";
import ChangePassword from "../pages/dashboard/ChangePassword";


// Admin Pages
import AdminDashboard from "../pages/Admin/Dashboard";
import AdminProducts from "../pages/Admin/Products";
import AddProduct from "../pages/Admin/AddProduct";
import EditProduct from "../pages/Admin/EditProduct";
import Categories from "../pages/Admin/Categories";
import AdminOrders from "../pages/Admin/Orders";
import Customers from "../pages/Admin/Customers";
import Messages from "../pages/Admin/Messages";
import AdminSettings from "../pages/Admin/Settings";


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



      {/* User Dashboard */}
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



      {/* Admin Dashboard */}
      <Route path="/admin" element={<AdminLayout />}>

        <Route index element={<AdminDashboard />} />

        <Route
          path="products"
          element={<AdminProducts />}
        />

        <Route
          path="products/add"
          element={<AddProduct />}
        />

        <Route
          path="products/edit/:id"
          element={<EditProduct />}
        />

        <Route
          path="categories"
          element={<Categories />}
        />

        <Route
          path="orders"
          element={<AdminOrders />}
        />

        <Route
          path="customers"
          element={<Customers />}
        />

        <Route
          path="messages"
          element={<Messages />}
        />

        <Route
          path="settings"
          element={<AdminSettings />}
        />

      </Route>


    </Routes>
  );
}

export default AppRoutes;