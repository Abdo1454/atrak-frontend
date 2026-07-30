import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";
import { ShoppingCart } from "lucide-react";
import { useCart } from "../../context/CartContext";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const { cart } = useCart();

  const cartCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const navLinks = [
    { name: "الرئيسية", path: "/" },
    { name: "العطور", path: "/products" },
    { name: "اصنع عطرك", path: "/builder" },
    { name: "من نحن", path: "/about" },
    { name: "تواصل معنا", path: "/contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-100 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          to="/"
          className="text-3xl font-extrabold text-[#4E19AB]"
        >
          عطرك
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `transition ${
                    isActive
                      ? "font-bold text-[#4E19AB]"
                      : "text-gray-700 hover:text-[#4E19AB]"
                  }`
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-4 md:flex">
          {/* Cart */}
          <Link
            to="/cart"
            className="relative rounded-xl p-2 transition hover:bg-gray-100"
          >
            <ShoppingCart
              size={24}
              className="text-[#4E19AB]"
            />

            {cartCount > 0 && (
              <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white">
                {cartCount}
              </span>
            )}
          </Link>

          {/* Login */}
          <Link
            to="/login"
            className="rounded-xl bg-[#4E19AB] px-6 py-2 text-white transition hover:opacity-90"
          >
            تسجيل الدخول
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-3xl text-[#4E19AB] md:hidden"
        >
          {isOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="border-t bg-white md:hidden">
          <ul className="flex flex-col p-4">
            {navLinks.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className="block rounded-lg px-3 py-3 text-gray-700 hover:bg-gray-100"
                >
                  {item.name}
                </NavLink>
              </li>
            ))}

            {/* Cart */}
            <Link
              to="/cart"
              onClick={() => setIsOpen(false)}
              className="mt-3 flex items-center justify-center gap-2 rounded-lg border py-3"
            >
              <ShoppingCart size={20} />

              سلة التسوق

              {cartCount > 0 && (
                <span className="rounded-full bg-red-500 px-2 py-0.5 text-xs font-bold text-white">
                  {cartCount}
                </span>
              )}
            </Link>

            {/* Login */}
            <Link
              to="/login"
              onClick={() => setIsOpen(false)}
              className="mt-3 rounded-lg bg-[#4E19AB] py-3 text-center text-white"
            >
              تسجيل الدخول
            </Link>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;