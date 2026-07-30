import { Link } from "react-router-dom";
import { Trash2 } from "lucide-react";
import { useCart } from "../../context/CartContext";

const IMAGE_BASE_URL = "http://127.0.0.1:8000";

function Cart() {
  const {
    cart,
    subtotal,
    removeFromCart,
    updateQuantity,
  } = useCart();

  const shipping = cart.length ? 100 : 0;
  const total = subtotal + shipping;

  if (cart.length === 0) {
    return (
      <section className="container mx-auto px-4 py-20 text-center">
        <h2 className="mb-4 text-3xl font-bold">
          سلة التسوق فارغة
        </h2>

        <Link
          to="/products"
          className="rounded-xl bg-violet-600 px-6 py-3 text-white"
        >
          تصفح المنتجات
        </Link>
      </section>
    );
  }

  return (
    <section className="container mx-auto px-4 py-10">
      <h1 className="mb-10 text-4xl font-bold">
        سلة التسوق
      </h1>

      <div className="grid gap-10 lg:grid-cols-3">
        {/* Products */}
        <div className="space-y-6 lg:col-span-2">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-5 rounded-2xl bg-white p-5 shadow"
            >
              <img
                src={`${IMAGE_BASE_URL}/${item.image}`}
                alt={item.name}
                className="h-28 w-28 rounded-xl object-cover"
              />

              <div className="flex-1">
                <h3 className="text-xl font-bold">
                  {item.name}
                </h3>

                <p className="text-gray-500">
                  الحجم: {item.size}
                </p>

                <p className="mt-2 font-semibold text-violet-700">
                  {Number(item.price).toFixed(2)} EGP
                </p>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() =>
                    updateQuantity(
                      item.id,
                      item.quantity - 1
                    )
                  }
                  className="rounded border px-3 py-1"
                >
                  -
                </button>

                <span>{item.quantity}</span>

                <button
                  onClick={() =>
                    updateQuantity(
                      item.id,
                      item.quantity + 1
                    )
                  }
                  className="rounded border px-3 py-1"
                >
                  +
                </button>
              </div>

              <button
                onClick={() =>
                  removeFromCart(item.id)
                }
                className="text-red-600"
              >
                <Trash2 />
              </button>
            </div>
          ))}
        </div>

        {/* Summary */}
        <div className="rounded-2xl bg-white p-6 shadow">
          <h2 className="mb-6 text-2xl font-bold">
            ملخص الطلب
          </h2>

          <div className="space-y-4">
            <div className="flex justify-between">
              <span>Subtotal</span>

              <span>
                {subtotal.toFixed(2)} EGP
              </span>
            </div>

            <div className="flex justify-between">
              <span>Shipping</span>

              <span>
                {shipping.toFixed(2)} EGP
              </span>
            </div>

            <hr />

            <div className="flex justify-between text-xl font-bold">
              <span>Total</span>

              <span>
                {total.toFixed(2)} EGP
              </span>
            </div>

            <Link
              to="/checkout"
              className="mt-6 block rounded-xl bg-violet-600 py-3 text-center text-white"
            >
              متابعة الدفع
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cart;