function CartSummary({ cartItems }) {
  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const shipping = subtotal > 0 ? 10 : 0;
  const tax = subtotal * 0.14;
  const total = subtotal + shipping + tax;

  return (
    <div className="rounded-2xl bg-white p-6 shadow-md">
      <h2 className="mb-6 text-2xl font-bold">
        Order Summary
      </h2>

      <div className="space-y-4">
        <div className="flex justify-between">
          <span className="text-gray-600">Subtotal</span>
          <span className="font-semibold">
            ${subtotal.toFixed(2)}
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-600">Shipping</span>
          <span className="font-semibold">
            ${shipping.toFixed(2)}
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-600">Tax (14%)</span>
          <span className="font-semibold">
            ${tax.toFixed(2)}
          </span>
        </div>

        <hr />

        <div className="flex justify-between text-xl font-bold">
          <span>Total</span>
          <span>${total.toFixed(2)}</span>
        </div>
      </div>

      <button className="mt-8 w-full rounded-xl bg-purple-700 py-3 font-semibold text-white transition hover:bg-purple-800">
        Proceed to Checkout
      </button>
    </div>
  );
}

export default CartSummary;