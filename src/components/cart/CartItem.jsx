import { FaMinus, FaPlus, FaTrash } from "react-icons/fa";

function CartItem({
  item,
  onIncrease,
  onDecrease,
  onRemove,
}) {
  return (
    <div className="flex flex-col gap-6 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm md:flex-row md:items-center">
      {/* Product Image */}
      <div className="h-32 w-32 overflow-hidden rounded-xl">
        <img
          src={item.image}
          alt={item.name}
          className="h-full w-full object-cover"
        />
      </div>

      {/* Product Info */}
      <div className="flex-1">
        <h3 className="text-xl font-semibold text-gray-900">
          {item.name}
        </h3>

        <p className="mt-2 text-sm text-gray-500">
          {item.category}
        </p>

        <p className="mt-3 text-lg font-bold text-purple-700">
          ${item.price}
        </p>
      </div>

      {/* Quantity Controls */}
      <div className="flex items-center gap-3">
        <button
          onClick={() => onDecrease(item.id)}
          className="rounded-lg border p-2 transition hover:bg-gray-100"
        >
          <FaMinus size={14} />
        </button>

        <span className="min-w-[30px] text-center text-lg font-semibold">
          {item.quantity}
        </span>

        <button
          onClick={() => onIncrease(item.id)}
          className="rounded-lg border p-2 transition hover:bg-gray-100"
        >
          <FaPlus size={14} />
        </button>
      </div>

      {/* Total Price */}
      <div className="w-24 text-center">
        <p className="text-lg font-bold text-gray-900">
          ${(item.price * item.quantity).toFixed(2)}
        </p>
      </div>

      {/* Remove Button */}
      <button
        onClick={() => onRemove(item.id)}
        className="rounded-lg p-3 text-red-500 transition hover:bg-red-50"
      >
        <FaTrash />
      </button>
    </div>
  );
}

export default CartItem;