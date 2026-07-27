import { useState } from "react";

function CouponForm() {
  const [coupon, setCoupon] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!coupon.trim()) {
      alert("Please enter a coupon code.");
      return;
    }

    alert(`Coupon "${coupon}" applied successfully!`);
    setCoupon("");
  };

  return (
    <div className="mt-6 rounded-2xl bg-white p-6 shadow-md">
      <h2 className="mb-4 text-xl font-bold">
        Discount Coupon
      </h2>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4"
      >
        <input
          type="text"
          placeholder="Enter coupon code"
          value={coupon}
          onChange={(e) => setCoupon(e.target.value)}
          className="rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-purple-700"
        />

        <button
          type="submit"
          className="rounded-xl bg-purple-700 py-3 font-semibold text-white transition hover:bg-purple-800"
        >
          Apply Coupon
        </button>
      </form>
    </div>
  );
}

export default CouponForm;