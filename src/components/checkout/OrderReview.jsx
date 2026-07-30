import { useCart } from "../../context/CartContext";

const IMAGE_BASE_URL = "http://127.0.0.1:8000";

function OrderReview() {
  const { cart } = useCart();

  if (cart.length === 0) {
    return (
      <section className="rounded-2xl bg-white p-6 shadow-sm">
        <h2 className="mb-6 text-2xl font-semibold text-gray-900">
          مراجعة الطلب
        </h2>

        <div className="rounded-xl bg-gray-50 py-10 text-center text-gray-500">
          لا توجد منتجات في السلة.
        </div>
      </section>
    );
  }

  return (
    <section className="rounded-2xl bg-white p-6 shadow-sm">
      <h2 className="mb-6 text-2xl font-semibold text-gray-900">
        مراجعة الطلب
      </h2>

      <div className="space-y-5">
        {cart.map((product) => {
          const image =
            product.image
              ? `${IMAGE_BASE_URL}/${product.image}`
              : "/images/products/placeholder.jpg";

          return (
            <div
              key={product.id}
              className="flex items-center justify-between border-b border-gray-200 pb-5"
            >
              <div className="flex items-center gap-4">
                <img
                  src={image}
                  alt={product.name}
                  className="h-20 w-20 rounded-xl object-cover"
                />

                <div>
                  <h3 className="font-medium text-gray-900">
                    {product.name}
                  </h3>

                  <p className="text-sm text-gray-500">
                    الكمية: {product.quantity}
                  </p>

                  <p className="text-sm text-gray-500">
                    سعر الوحدة: {Number(product.price).toFixed(2)} EGP
                  </p>
                </div>
              </div>

              <span className="font-semibold text-purple-700">
                {(product.price * product.quantity).toFixed(2)} EGP
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default OrderReview;