import { useState } from "react";

function BillingAddress() {
  const [sameAsShipping, setSameAsShipping] = useState(true);

  return (
    <section className="rounded-2xl bg-white p-6 shadow-sm">
      <h2 className="mb-6 text-2xl font-semibold text-gray-900">
        عنوان الفوترة
      </h2>

      <label className="mb-6 flex cursor-pointer items-center gap-3">
        <input
          type="checkbox"
          checked={sameAsShipping}
          onChange={() => setSameAsShipping(!sameAsShipping)}
          className="h-5 w-5 accent-purple-700"
        />

        <span className="font-medium text-gray-700">
          استخدام نفس عنوان الشحن
        </span>
      </label>

      {!sameAsShipping && (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Full Name */}
          <div>
            <label className="mb-2 block font-medium text-gray-700">
              الاسم الكامل
            </label>

            <input
              type="text"
              placeholder="الاسم الكامل"
              className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-purple-700 focus:outline-none"
            />
          </div>

          {/* Email */}
          <div>
            <label className="mb-2 block font-medium text-gray-700">
              البريد الإلكتروني
            </label>

            <input
              type="email"
              placeholder="example@email.com"
              className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-purple-700 focus:outline-none"
            />
          </div>

          {/* Country */}
          <div>
            <label className="mb-2 block font-medium text-gray-700">
              الدولة
            </label>

            <input
              type="text"
              placeholder="الدولة"
              className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-purple-700 focus:outline-none"
            />
          </div>

          {/* City */}
          <div>
            <label className="mb-2 block font-medium text-gray-700">
              المدينة
            </label>

            <input
              type="text"
              placeholder="المدينة"
              className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-purple-700 focus:outline-none"
            />
          </div>

          {/* Address */}
          <div className="md:col-span-2">
            <label className="mb-2 block font-medium text-gray-700">
              العنوان
            </label>

            <textarea
              rows={4}
              placeholder="عنوان الفوترة"
              className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-purple-700 focus:outline-none"
            />
          </div>
        </div>
      )}
    </section>
  );
}

export default BillingAddress;