import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";

function EmptyCart() {
  return (
    <section className="flex min-h-[70vh] items-center justify-center bg-gray-50 px-4">
      <div className="text-center">
        <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-purple-100">
          <ShoppingCart
            size={48}
            className="text-purple-700"
          />
        </div>

        <h2 className="mb-3 text-3xl font-bold text-gray-900">
          Your Cart is Empty
        </h2>

        <p className="mx-auto mb-8 max-w-md text-gray-500">
          Looks like you haven't added any perfumes yet.
          Explore our collection and find your perfect scent.
        </p>

        <Link
          to="/products"
          className="inline-block rounded-xl bg-purple-700 px-8 py-3 font-semibold text-white transition hover:bg-purple-800"
        >
          Continue Shopping
        </Link>
      </div>
    </section>
  );
}

export default EmptyCart;