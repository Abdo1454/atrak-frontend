import {
  Bell,
  Search,
  UserCircle,
} from "lucide-react";

function Topbar() {
  const admin = JSON.parse(localStorage.getItem("user")) || {};

  return (
    <header className="flex flex-col gap-4 border-b bg-white px-6 py-5 shadow-sm md:flex-row md:items-center md:justify-between">
      {/* Welcome */}
      <div>
        <h1 className="text-3xl font-bold text-gray-800">
          مرحبًا، {admin?.name || "Admin"} 👋
        </h1>

        <p className="mt-1 text-gray-500">
          مرحبًا بك في لوحة تحكم الإدارة، يمكنك إدارة المتجر من هنا.
        </p>
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-4">
        {/* Search */}
        <div className="relative hidden md:block">
          <Search
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          />

          <input
            type="text"
            placeholder="ابحث عن منتج، طلب، عميل..."
            className="w-80 rounded-xl border border-gray-300 py-2 pl-10 pr-4 outline-none transition focus:border-violet-600"
          />
        </div>

        {/* Notifications */}
        <button className="relative rounded-xl bg-gray-100 p-3 transition hover:bg-violet-100">
          <Bell size={22} className="text-violet-700" />

          <span className="absolute right-2 top-2 h-2.5 w-2.5 rounded-full bg-red-500"></span>
        </button>

        {/* Admin */}
        <div className="flex items-center gap-3 rounded-xl bg-violet-50 px-3 py-2">
          <UserCircle
            size={40}
            className="text-violet-700"
          />

          <div className="hidden text-right sm:block">
            <h3 className="font-semibold text-gray-800">
              {admin?.name || "Administrator"}
            </h3>

            <p className="text-sm text-gray-500">
              {admin?.email || "admin@example.com"}
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Topbar;