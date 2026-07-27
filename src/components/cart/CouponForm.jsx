import { useState } from "react";

function CouponForm() {
  const [coupon, setCoupon] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!coupon.trim()) {
      alert("يرجى إدخال رمز الخصم.");
      return;
    }

    alert(`تم تطبيق كوبون الخصم "${coupon}" بنجاح.`);
    setCoupon("");
  };

  return (
    <div className="rounded-2xl bg-white p-6 shadow-md">
      <h2 className="mb-4 text-right text-xl font-bold">
        كوبون الخصم
      </h2>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4"
      >
        <input
          type="text"
          placeholder="أدخل رمز الخصم"
          value={coupon}
          onChange={(e) => setCoupon(e.target.value)}
          className="rounded-xl border border-gray-300 px-4 py-3 text-right outline-none transition focus:border-purple-700"
        />

        <button
          type="submit"
          className="rounded-xl bg-purple-700 py-3 font-semibold text-white transition hover:bg-purple-800"
        >
          تطبيق الكوبون
        </button>
      </form>
    </div>
  );
}

export default CouponForm;