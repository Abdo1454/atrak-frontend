import { useCart } from "../../context/CartContext";

function OrderSummary() {
  const { cart, subtotal } = useCart();

  const shipping = cart.length > 0 ? 100 : 0;
  const tax = subtotal * 0.14; // 14% VAT
  const discount = 0;

  const total = subtotal + shipping + tax - discount;

  return (
    <section className="rounded-2xl bg-white p-6 shadow-sm">
      <h2 className="mb-6 text-2xl font-semibold text-gray-900">
        ملخص الطلب
      </h2>

      <div className="space-y-4 text-gray-700">
        <div className="flex justify-between">
          <span>عدد المنتجات</span>

          <span className="font-medium">
            {cart.reduce(
              (total, item) => total + item.quantity,
              0
            )}
          </span>
        </div>

        <div className="flex justify-between">
          <span>المجموع الفرعي</span>

          <span className="font-medium">
            {subtotal.toFixed(2)} EGP
          </span>
        </div>

        <div className="flex justify-between">
          <span>الشحن</span>

          <span className="font-medium">
            {shipping.toFixed(2)} EGP
          </span>
        </div>

        <div className="flex justify-between">
          <span>الضريبة (14%)</span>

          <span className="font-medium">
            {tax.toFixed(2)} EGP
          </span>
        </div>

        <div className="flex justify-between">
          <span>الخصم</span>

          <span className="font-medium text-green-600">
            - {discount.toFixed(2)} EGP
          </span>
        </div>

        <hr />

        <div className="flex justify-between text-lg font-bold text-gray-900">
          <span>الإجمالي</span>

          <span className="text-purple-700">
            {total.toFixed(2)} EGP
          </span>
        </div>
      </div>
    </section>
  );
}

export default OrderSummary;