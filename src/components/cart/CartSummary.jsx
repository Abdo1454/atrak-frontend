function CartSummary({ cartItems, giftWrap }) {
  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const shipping = subtotal > 0 ? 10 : 0;
  const giftWrapCost = giftWrap ? 15 : 0;
  const tax = subtotal * 0.14;
  const total = subtotal + shipping + giftWrapCost + tax;

  return (
    <div className="rounded-2xl bg-white p-6 shadow-md">
      <h2 className="mb-6 text-right text-2xl font-bold">
        ملخص الطلب
      </h2>

      <div className="space-y-4 text-right">
        <div className="flex items-center justify-between">
          <span className="text-gray-600">
            المجموع الفرعي
          </span>

          <span className="font-semibold">
            ${subtotal.toFixed(2)}
          </span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-gray-600">
            الشحن
          </span>

          <span className="font-semibold">
            ${shipping.toFixed(2)}
          </span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-gray-600">
            تغليف الهدايا
          </span>

          <span className="font-semibold">
            {giftWrap
              ? `$${giftWrapCost.toFixed(2)}`
              : "مجاني"}
          </span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-gray-600">
            الضريبة (14%)
          </span>

          <span className="font-semibold">
            ${tax.toFixed(2)}
          </span>
        </div>

        <hr />

        <div className="flex items-center justify-between text-xl font-bold">
          <span>الإجمالي</span>

          <span className="text-purple-700">
            ${total.toFixed(2)}
          </span>
        </div>
      </div>

      <button className="mt-8 w-full rounded-xl bg-purple-700 py-3 font-semibold text-white transition hover:bg-purple-800">
        إتمام الطلب
      </button>
    </div>
  );
}

export default CartSummary;