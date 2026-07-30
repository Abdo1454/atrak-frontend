import Sidebar from "../../components/dashboard/Sidebar";
import Topbar from "../../components/dashboard/Topbar";

function ChangePassword() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />

      <main className="flex-1">
        <Topbar />

        <div className="mx-auto max-w-xl p-6">
          <div className="rounded-2xl bg-white p-8 shadow-sm">
            <h2 className="mb-6 text-2xl font-bold">
              🔒 تغيير كلمة المرور
            </h2>

            <form className="space-y-4">
              <input
                type="password"
                placeholder="كلمة المرور الحالية"
                className="w-full rounded-xl border p-3"
              />

              <input
                type="password"
                placeholder="كلمة المرور الجديدة"
                className="w-full rounded-xl border p-3"
              />

              <input
                type="password"
                placeholder="تأكيد كلمة المرور"
                className="w-full rounded-xl border p-3"
              />

              <button className="w-full rounded-xl bg-violet-600 py-3 font-semibold text-white hover:bg-violet-700">
                تحديث كلمة المرور
              </button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}

export default ChangePassword;