import { Link, NavLink, useNavigate } from "react-router-dom";
import {
  ShoppingCart,
  LogOut,
  User,
  LayoutDashboard,
} from "lucide-react";
import { useEffect, useState } from "react";

function Navbar() {
  const navigate = useNavigate();

  const [user, setUser] = useState(null);


  useEffect(() => {
    const loadUser = () => {
      try {
        const token = localStorage.getItem("token");
        const storedUser = localStorage.getItem("user");

        if (token && storedUser) {
          setUser(JSON.parse(storedUser));
        } else {
          setUser(null);
        }

      } catch {
        setUser(null);
      }
    };


    loadUser();

    window.addEventListener("storage", loadUser);
    window.addEventListener("authChanged", loadUser);


    return () => {
      window.removeEventListener("storage", loadUser);
      window.removeEventListener("authChanged", loadUser);
    };

  }, []);



  const handleLogout = () => {

    localStorage.removeItem("token");
    localStorage.removeItem("user");

    window.dispatchEvent(new Event("authChanged"));

    navigate("/login");
  };



  const isAdmin =
    user?.role === "admin" ||
    user?.is_admin === true ||
    user?.is_admin === 1;



  const navLinkClass = ({ isActive }) =>
    `transition ${
      isActive
        ? "font-bold text-violet-700"
        : "text-gray-700 hover:text-violet-700"
    }`;



  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">

      <div className="container mx-auto flex items-center justify-between px-6 py-4">


        {/* Logo */}
        <Link
          to="/"
          className="text-4xl font-black text-violet-700"
        >
          عطرك
        </Link>



        {/* Navigation */}
        <nav className="hidden gap-10 md:flex">

          <NavLink to="/" className={navLinkClass}>
            الرئيسية
          </NavLink>


          <NavLink to="/products" className={navLinkClass}>
            العطور
          </NavLink>


          <NavLink to="/builder" className={navLinkClass}>
            اصنع عطرك
          </NavLink>


          <NavLink to="/about" className={navLinkClass}>
            من نحن
          </NavLink>


          <NavLink to="/contact" className={navLinkClass}>
            تواصل معنا
          </NavLink>

        </nav>




        {/* Right Side */}

        <div className="flex items-center gap-4">


          {/* Cart */}

          <Link to="/cart">

            <ShoppingCart
              size={28}
              className="text-violet-700 transition hover:scale-110"
            />

          </Link>




          {/* Guest */}

          {!user ? (

            <Link
              to="/login"
              className="rounded-xl bg-violet-700 px-6 py-3 text-white transition hover:bg-violet-800"
            >
              تسجيل الدخول
            </Link>


          ) : (



            <div className="flex items-center gap-3">



              {isAdmin ? (

                <Link
                  to="/admin"
                  className="flex items-center gap-2 rounded-xl bg-violet-700 px-4 py-2 text-white transition hover:bg-violet-800"
                >

                  <LayoutDashboard size={18}/>

                  لوحة الإدارة

                </Link>


              ) : (


                <Link
                  to="/dashboard"
                  className="flex items-center gap-2 rounded-xl bg-violet-50 px-4 py-2 text-violet-700 transition hover:bg-violet-100"
                >

                  <User size={18}/>

                  {user.name}

                </Link>


              )}




              <button
                onClick={handleLogout}
                className="flex items-center gap-2 rounded-xl bg-red-500 px-4 py-2 text-white transition hover:bg-red-600"
              >

                <LogOut size={18}/>

                تسجيل الخروج

              </button>



            </div>


          )}


        </div>


      </div>


    </header>
  );
}


export default Navbar;