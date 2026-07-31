import { Outlet } from "react-router-dom";

import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

function DashboardLayout() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex">
        {/* Sidebar */}
        <aside className="hidden w-72 border-l bg-white shadow-lg lg:block">
          <Sidebar />
        </aside>

        {/* Main Content */}
        <div className="flex min-h-screen flex-1 flex-col">
          {/* Topbar */}
          <Topbar />

          {/* Content */}
          <main className="flex-1 p-6">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
}

export default DashboardLayout;