import React from "react";

function ShippingForm({ form, setForm, errors = {} }) {
  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <section className="rounded-2xl bg-white p-6 shadow-sm">
      <h2 className="mb-6 text-2xl font-semibold text-gray-900">
        معلومات الشحن
      </h2>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">

        {/* Full Name */}
        <div>
          <label className="mb-2 block font-medium text-gray-700">
            الاسم الكامل
          </label>

          <input
            type="text"
            name="customer_name"
            value={form.customer_name}
            onChange={handleChange}
            placeholder="أدخل الاسم الكامل"
            className={`w-full rounded-xl border px-4 py-3 focus:outline-none ${
              errors.customer_name
                ? "border-red-500 focus:border-red-500"
                : "border-gray-300 focus:border-purple-700"
            }`}
          />

          {errors.customer_name && (
            <p className="mt-1 text-sm text-red-500">
              {errors.customer_name}
            </p>
          )}
        </div>

        {/* Email */}
        <div>
          <label className="mb-2 block font-medium text-gray-700">
            البريد الإلكتروني
          </label>

          <input
            type="email"
            name="customer_email"
            value={form.customer_email}
            onChange={handleChange}
            placeholder="example@email.com"
            className={`w-full rounded-xl border px-4 py-3 focus:outline-none ${
              errors.customer_email
                ? "border-red-500 focus:border-red-500"
                : "border-gray-300 focus:border-purple-700"
            }`}
          />

          {errors.customer_email && (
            <p className="mt-1 text-sm text-red-500">
              {errors.customer_email}
            </p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label className="mb-2 block font-medium text-gray-700">
            رقم الهاتف
          </label>

          <input
            type="tel"
            name="customer_phone"
            value={form.customer_phone}
            onChange={handleChange}
            placeholder="01xxxxxxxxx"
            className={`w-full rounded-xl border px-4 py-3 focus:outline-none ${
              errors.customer_phone
                ? "border-red-500 focus:border-red-500"
                : "border-gray-300 focus:border-purple-700"
            }`}
          />

          {errors.customer_phone && (
            <p className="mt-1 text-sm text-red-500">
              {errors.customer_phone}
            </p>
          )}
        </div>

        {/* Country */}
        <div>
          <label className="mb-2 block font-medium text-gray-700">
            الدولة
          </label>

          <input
            type="text"
            name="country"
            value={form.country}
            onChange={handleChange}
            placeholder="الدولة"
            className={`w-full rounded-xl border px-4 py-3 focus:outline-none ${
              errors.country
                ? "border-red-500 focus:border-red-500"
                : "border-gray-300 focus:border-purple-700"
            }`}
          />

          {errors.country && (
            <p className="mt-1 text-sm text-red-500">
              {errors.country}
            </p>
          )}
        </div>

        {/* City */}
        <div>
          <label className="mb-2 block font-medium text-gray-700">
            المدينة
          </label>

          <input
            type="text"
            name="city"
            value={form.city}
            onChange={handleChange}
            placeholder="المدينة"
            className={`w-full rounded-xl border px-4 py-3 focus:outline-none ${
              errors.city
                ? "border-red-500 focus:border-red-500"
                : "border-gray-300 focus:border-purple-700"
            }`}
          />

          {errors.city && (
            <p className="mt-1 text-sm text-red-500">
              {errors.city}
            </p>
          )}
        </div>

        {/* Address */}
        <div className="md:col-span-2">
          <label className="mb-2 block font-medium text-gray-700">
            العنوان
          </label>

          <textarea
            rows={4}
            name="address"
            value={form.address}
            onChange={handleChange}
            placeholder="أدخل عنوان الشحن"
            className={`w-full rounded-xl border px-4 py-3 focus:outline-none ${
              errors.address
                ? "border-red-500 focus:border-red-500"
                : "border-gray-300 focus:border-purple-700"
            }`}
          />

          {errors.address && (
            <p className="mt-1 text-sm text-red-500">
              {errors.address}
            </p>
          )}
        </div>

      </div>
    </section>
  );
}

export default ShippingForm;