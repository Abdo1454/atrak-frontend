import { Star, ShoppingCart, Eye } from "lucide-react";

function ProductCard({ product }) {
  return (
    <div className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* Image */}
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="h-72 w-full object-cover transition duration-500 group-hover:scale-105"
        />

        {product.badge && (
          <span className="absolute right-3 top-3 rounded-full bg-violet-600 px-3 py-1 text-xs font-semibold text-white">
            {product.badge}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="space-y-4 p-5">
        <div>
          <h3 className="text-lg font-bold text-gray-900">
            {product.name}
          </h3>

          <p className="mt-1 text-sm text-gray-500">
            {product.category}
          </p>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-1">
          <Star
            size={18}
            className="fill-yellow-400 text-yellow-400"
          />

          <span className="font-medium">
            {product.rating}
          </span>
        </div>

        {/* Price */}
        <div className="text-2xl font-bold text-violet-700">
          {product.price} EGP
        </div>

        {/* Buttons */}
        <div className="flex gap-3">
          <button className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-violet-600 py-3 text-white transition hover:bg-violet-700">
            <ShoppingCart size={18} />
            أضف للسلة
          </button>

          <button className="rounded-xl border border-violet-600 p-3 text-violet-600 transition hover:bg-violet-600 hover:text-white">
            <Eye size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;