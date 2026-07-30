import Sidebar from "../../components/dashboard/Sidebar";
import Topbar from "../../components/dashboard/Topbar";

function Settings() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />

      <main className="flex-1">
        <Topbar />

        <div className="p-6">
          <div className="rounded-2xl bg-white p-10 shadow-sm">
            <h2 className="text-2xl font-bold">
              ⚙️ الإعدادات
            </h2>

            <p className="mt-4 text-gray-500">
              سيتم إضافة إعدادات الحساب قريبًا.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Settings;