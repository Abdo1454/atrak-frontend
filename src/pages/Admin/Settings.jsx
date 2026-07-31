import { useState } from "react";
import { Save } from "lucide-react";

function Settings() {
  const [settings, setSettings] = useState({
    storeName: "عطرك",
    email: "admin@atrak.com",
    phone: "+20 100 000 0000",
    address: "القاهرة، مصر",
    currency: "EGP",
    shippingCost: 50,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setSettings((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(settings);

    // لاحقًا
    // await adminService.updateSettings(settings);

    alert("تم حفظ الإعدادات بنجاح");
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-800">
          إعدادات المتجر
        </h1>

        <p className="mt-2 text-gray-500">
          إدارة بيانات المتجر والإعدادات العامة.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="rounded-2xl bg-white p-8 shadow-sm"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <label className="mb-2 block font-medium">
              اسم المتجر
            </label>

            <input
              type="text"
              name="storeName"
              value={settings.storeName}
              onChange={handleChange}
              className="w-full rounded-xl border px-4 py-3 outline-none focus:border-violet-500"
            />
          </div>

          <div>
            <label className="mb-2 block font-medium">
              البريد الإلكتروني
            </label>

            <input
              type="email"
              name="email"
              value={settings.email}
              onChange={handleChange}
              className="w-full rounded-xl border px-4 py-3 outline-none focus:border-violet-500"
            />
          </div>

          <div>
            <label className="mb-2 block font-medium">
              رقم الهاتف
            </label>

            <input
              type="text"
              name="phone"
              value={settings.phone}
              onChange={handleChange}
              className="w-full rounded-xl border px-4 py-3 outline-none focus:border-violet-500"
            />
          </div>

          <div>
            <label className="mb-2 block font-medium">
              العملة
            </label>

            <select
              name="currency"
              value={settings.currency}
              onChange={handleChange}
              className="w-full rounded-xl border px-4 py-3 outline-none focus:border-violet-500"
            >
              <option value="EGP">EGP</option>
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
            </select>
          </div>

          <div>
            <label className="mb-2 block font-medium">
              تكلفة الشحن
            </label>

            <input
              type="number"
              name="shippingCost"
              value={settings.shippingCost}
              onChange={handleChange}
              className="w-full rounded-xl border px-4 py-3 outline-none focus:border-violet-500"
            />
          </div>

          <div className="md:col-span-2">
            <label className="mb-2 block font-medium">
              عنوان المتجر
            </label>

            <textarea
              rows="4"
              name="address"
              value={settings.address}
              onChange={handleChange}
              className="w-full rounded-xl border px-4 py-3 outline-none focus:border-violet-500"
            />
          </div>
        </div>

        <div className="mt-8 flex justify-end">
          <button
            type="submit"
            className="flex items-center gap-2 rounded-xl bg-violet-600 px-6 py-3 font-semibold text-white transition hover:bg-violet-700"
          >
            <Save size={20} />
            حفظ الإعدادات
          </button>
        </div>
      </form>
    </div>
  );
}

export default Settings;