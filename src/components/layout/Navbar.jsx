import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

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

        {/* Login Button */}
        <Link
          to="/login"
          className="hidden rounded-xl bg-[#4E19AB] px-6 py-2 text-white transition hover:opacity-90 md:block"
        >
          تسجيل الدخول
        </Link>

        {/* Mobile Button */}
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

            <Link
              to="/login"
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