import {
  LayoutDashboard,
  Package,
  PlusSquare,
  FolderTree,
  ShoppingCart,
  Users,
  Mail,
  Settings,
  LogOut,
} from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";

function Sidebar() {
  const navigate = useNavigate();

  const admin = JSON.parse(localStorage.getItem("user")) || {};

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    navigate("/login");
  };

  const linkClass = ({ isActive }) =>
    `flex items-center gap-3 rounded-xl px-4 py-3 font-medium transition-all duration-200 ${
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
          لوحة تحكم الإدارة
        </p>
      </div>

      {/* Admin Info */}
      <div className="border-b p-6">
        <div className="flex items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-violet-600 text-xl font-bold text-white">
            {admin?.name?.charAt(0) || "A"}
          </div>

          <div>
            <h3 className="font-bold text-gray-800">
              {admin?.name || "Admin"}
            </h3>

            <p className="text-sm text-gray-500">
              {admin?.email}
            </p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-2 p-4">
        <NavLink to="/admin" end className={linkClass}>
          <LayoutDashboard size={20} />
          <span>لوحة التحكم</span>
        </NavLink>

        <NavLink to="/admin/products" className={linkClass}>
          <Package size={20} />
          <span>المنتجات</span>
        </NavLink>

        <NavLink to="/admin/products/add" className={linkClass}>
          <PlusSquare size={20} />
          <span>إضافة منتج</span>
        </NavLink>

        <NavLink to="/admin/categories" className={linkClass}>
          <FolderTree size={20} />
          <span>التصنيفات</span>
        </NavLink>

        <NavLink to="/admin/orders" className={linkClass}>
          <ShoppingCart size={20} />
          <span>الطلبات</span>
        </NavLink>

        <NavLink to="/admin/customers" className={linkClass}>
          <Users size={20} />
          <span>العملاء</span>
        </NavLink>

        <NavLink to="/admin/messages" className={linkClass}>
          <Mail size={20} />
          <span>الرسائل</span>
        </NavLink>

        <NavLink to="/admin/settings" className={linkClass}>
          <Settings size={20} />
          <span>الإعدادات</span>
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