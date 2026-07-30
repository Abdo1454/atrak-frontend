import {
  LayoutDashboard,
  UserRound,
  ShoppingBag,
  Heart,
  Settings,
  KeyRound,
  LogOut,
} from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";

function Sidebar() {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    navigate("/login");
  };

  const linkClass = ({ isActive }) =>
    `flex items-center gap-3 rounded-xl px-4 py-3 transition-all duration-200 ${
      isActive
        ? "bg-violet-600 text-white shadow-md"
        : "text-gray-700 hover:bg-violet-100 hover:text-violet-700"
    }`;

  return (
    <aside className="flex h-screen w-72 flex-col border-r bg-white shadow-lg">

      {/* Logo */}
      <div className="border-b p-6">
        <h1 className="text-3xl font-black text-violet-700">
          عطرك
        </h1>

        <p className="mt-2 text-sm text-gray-500">
          لوحة تحكم المستخدم
        </p>
      </div>

      {/* User */}
      <div className="border-b p-6">
        <div className="flex items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-violet-600 text-xl font-bold text-white">
            {user?.name?.charAt(0)}
          </div>

          <div>
            <h3 className="font-bold text-gray-800">
              {user?.name}
            </h3>

            <p className="text-sm text-gray-500">
              {user?.email}
            </p>
          </div>
        </div>
      </div>

      {/* Menu */}
      <nav className="flex-1 space-y-2 p-4">

        <NavLink to="/dashboard" end className={linkClass}>
          <LayoutDashboard size={20} />
          <span>الرئيسية</span>
        </NavLink>

        <NavLink to="/dashboard/profile" className={linkClass}>
          <UserRound size={20} />
          <span>الملف الشخصي</span>
        </NavLink>

        <NavLink to="/dashboard/orders" className={linkClass}>
          <ShoppingBag size={20} />
          <span>طلباتي</span>
        </NavLink>

        <NavLink to="/dashboard/favorites" className={linkClass}>
          <Heart size={20} />
          <span>المفضلة</span>
        </NavLink>

        <NavLink to="/dashboard/settings" className={linkClass}>
          <Settings size={20} />
          <span>الإعدادات</span>
        </NavLink>

        <NavLink to="/dashboard/change-password" className={linkClass}>
          <KeyRound size={20} />
          <span>تغيير كلمة المرور</span>
        </NavLink>

      </nav>

      {/* Logout */}
      <div className="border-t p-4">
        <button
          onClick={handleLogout}
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-red-500 px-4 py-3 font-semibold text-white transition hover:bg-red-600"
        >
          <LogOut size={20} />
          تسجيل الخروج
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;