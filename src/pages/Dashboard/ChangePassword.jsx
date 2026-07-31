function ChangePassword() {
  return (
    <section className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-800">
          🔒 تغيير كلمة المرور
        </h1>

        <p className="mt-2 text-gray-500">
          أدخل كلمة المرور الحالية ثم اختر كلمة مرور جديدة.
        </p>
      </div>

      <div className="mx-auto max-w-xl rounded-2xl bg-white p-8 shadow-sm">
        <form className="space-y-4">
          <div>
            <label className="mb-2 block font-medium text-gray-700">
              كلمة المرور الحالية
            </label>

            <input
              type="password"
              placeholder="أدخل كلمة المرور الحالية"
              className="w-full rounded-xl border border-gray-300 p-3 outline-none transition focus:border-violet-600"
            />
          </div>

          <div>
            <label className="mb-2 block font-medium text-gray-700">
              كلمة المرور الجديدة
            </label>

            <input
              type="password"
              placeholder="أدخل كلمة المرور الجديدة"
              className="w-full rounded-xl border border-gray-300 p-3 outline-none transition focus:border-violet-600"
            />
          </div>

          <div>
            <label className="mb-2 block font-medium text-gray-700">
              تأكيد كلمة المرور
            </label>

            <input
              type="password"
              placeholder="أعد إدخال كلمة المرور الجديدة"
              className="w-full rounded-xl border border-gray-300 p-3 outline-none transition focus:border-violet-600"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-xl bg-violet-600 py-3 font-semibold text-white transition hover:bg-violet-700"
          >
            تحديث كلمة المرور
          </button>
        </form>
      </div>
    </section>
  );
}

export default ChangePassword;