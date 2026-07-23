import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaPhone,
  FaEnvelope,
  FaLocationDot,
} from "react-icons/fa6";

import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-[#1F1235] text-white">

      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-2 lg:grid-cols-4">

        {/* Logo */}
        <div>
          <h2 className="mb-5 text-3xl font-bold text-amber-400">
            عطرك
          </h2>

          <p className="leading-8 text-gray-300">
            متجر متخصص في تقديم أفخم العطور العالمية والمحلية مع تجربة
            تسوق راقية وخدمة عملاء مميزة.
          </p>

          <div className="mt-6 flex gap-4">

            <a
              href="#"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 transition hover:bg-[#4E19AB]"
            >
              <FaFacebookF />
            </a>

            <a
              href="#"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 transition hover:bg-[#4E19AB]"
            >
              <FaInstagram />
            </a>

            <a
              href="#"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 transition hover:bg-[#4E19AB]"
            >
              <FaTwitter />
            </a>

            <a
              href="#"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 transition hover:bg-[#4E19AB]"
            >
              <FaLinkedinIn />
            </a>

          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="mb-5 text-2xl font-bold">
            روابط سريعة
          </h3>

          <ul className="space-y-3 text-gray-300">

            <li>
              <Link className="transition hover:text-amber-400" to="/">
                الرئيسية
              </Link>
            </li>

            <li>
              <Link className="transition hover:text-amber-400" to="/products">
                العطور
              </Link>
            </li>

            <li>
              <Link className="transition hover:text-amber-400" to="/builder">
                اصنع عطرك
              </Link>
            </li>

            <li>
              <Link className="transition hover:text-amber-400" to="/about">
                من نحن
              </Link>
            </li>

            <li>
              <Link className="transition hover:text-amber-400" to="/contact">
                تواصل معنا
              </Link>
            </li>

          </ul>
        </div>

        {/* Categories */}
        <div>
          <h3 className="mb-5 text-2xl font-bold">
            الفئات
          </h3>

          <ul className="space-y-3 text-gray-300">
            <li>عطور رجالية</li>
            <li>عطور نسائية</li>
            <li>العطور الشرقية</li>
            <li>العطور الفرنسية</li>
            <li>العطور الصيفية</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="mb-5 text-2xl font-bold">
            تواصل معنا
          </h3>

          <div className="space-y-5 text-gray-300">

            <div className="flex items-center gap-3">
              <FaPhone className="text-amber-400" />
              <span>+20 01066250647</span>
            </div>

            <div className="flex items-center gap-3">
              <FaEnvelope className="text-amber-400" />
              <span>info@atrak.com</span>
            </div>

            <div className="flex items-center gap-3">
              <FaLocationDot className="text-amber-400" />
              <span>القاهرة، مصر</span>
            </div>

          </div>
        </div>

      </div>

      <div className="border-t border-white/10 py-6 text-center text-gray-400">
        © {new Date().getFullYear()} عطرك | جميع الحقوق محفوظة.
      </div>

    </footer>
  );
}

export default Footer;