import { useState } from "react";

const BillingAddress = () => {
  const [sameAddress, setSameAddress] = useState(true);

  return (
    <section className="rounded-2xl bg-white p-6 shadow-sm">

      <h2 className="mb-6 text-2xl font-semibold text-gray-900">
        عنوان الفوترة
      </h2>


      {/* Same Shipping Address */}
      <div className="mb-6 flex items-center gap-3">

        <input
          type="checkbox"
          checked={sameAddress}
          onChange={() => setSameAddress(!sameAddress)}
          className="h-5 w-5 rounded border-gray-300 text-purple-700 focus:ring-purple-700"
        />

        <label className="font-medium text-gray-700">
          استخدام نفس عنوان الشحن
        </label>

      </div>


      {/* Different Billing Address */}
      {!sameAddress && (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">

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
              rows="4"
              placeholder="عنوان الفوترة"
              className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-purple-700 focus:outline-none"
            />
          </div>


          {/* Postal Code */}
          <div>
            <label className="mb-2 block font-medium text-gray-700">
              الرمز البريدي
            </label>

            <input
              type="text"
              placeholder="اختياري"
              className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-purple-700 focus:outline-none"
            />
          </div>

        </div>
      )}

    </section>
  );
};

export default BillingAddress;