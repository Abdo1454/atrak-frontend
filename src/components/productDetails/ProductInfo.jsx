import { useState } from "react";
import { Star, Heart, ShoppingCart } from "lucide-react";

function ProductInfo({ product }) {
  const [size, setSize] = useState("100ml");
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return <p>Loading...</p>;
  }

  return (
    <div className="space-y-6">
      {/* Category */}
      <span className="text-sm font-medium text-violet-600">
        {product.category}
      </span>

      {/* Name */}
      <h1 className="text-4xl font-bold text-gray-900">
        {product.name}
      </h1>

      {/* Rating */}
      <div className="flex items-center gap-2">
        <Star className="fill-yellow-400 text-yellow-400" size={20} />
        <span className="font-medium">{product.rating}</span>
        <span className="text-gray-500">
          ({product.reviews} مراجعة)
        </span>
      </div>

      {/* Price */}
      <h2 className="text-3xl font-bold text-violet-700">
        {product.price} EGP
      </h2>

      {/* Description */}
      <p className="leading-7 text-gray-600">
        {product.description}
      </p>

      {/* Size */}
      <div>
        <h3 className="mb-3 font-semibold">الحجم</h3>

        <div className="flex gap-3">
          {["50ml", "100ml", "200ml"].map((item) => (
            <button
              key={item}
              onClick={() => setSize(item)}
              className={`rounded-lg border px-5 py-2 transition ${
                size === item
                  ? "border-violet-600 bg-violet-600 text-white"
                  : "border-gray-300"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      {/* Quantity */}
      <div>
        <h3 className="mb-3 font-semibold">الكمية</h3>

        <div className="flex w-36 items-center justify-between rounded-lg border px-4 py-2">
          <button
            onClick={() =>
              quantity > 1 && setQuantity(quantity - 1)
            }
          >
            −
          </button>

          <span>{quantity}</span>

          <button
            onClick={() => setQuantity(quantity + 1)}
          >
            +
          </button>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex flex-wrap gap-4">
        <button className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-violet-600 px-6 py-3 text-white transition hover:bg-violet-700">
          <ShoppingCart size={20} />
          أضف إلى السلة
        </button>

        <button className="rounded-xl border border-violet-600 p-3 text-violet-600 transition hover:bg-violet-600 hover:text-white">
          <Heart size={20} />
        </button>
      </div>
    </div>
  );
}

export default ProductInfo;