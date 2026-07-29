import { Link } from "react-router-dom";
import { FaCheckCircle, FaShoppingCart } from "react-icons/fa";

function AddToCartModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-2xl">
        <div className="flex flex-col items-center text-center">
          <FaCheckCircle className="mb-4 text-6xl text-green-500" />

          <h2 className="text-3xl font-bold text-gray-900">
            تمت الإضافة بنجاح
          </h2>

          <p className="mt-3 text-gray-600">
            تم إضافة عطرك المخصص إلى سلة التسوق.
          </p>

          <div className="mt-8 flex w-full flex-col gap-4">
            <Link
              to="/cart"
              className="flex items-center justify-center gap-2 rounded-xl bg-purple-700 py-3 font-semibold text-white transition hover:bg-purple-800"
            >
              <FaShoppingCart />
              الذهاب إلى السلة
            </Link>

            <button
              onClick={onClose}
              className="rounded-xl border border-gray-300 py-3 font-semibold text-gray-700 transition hover:bg-gray-100"
            >
              متابعة التسوق
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddToCartModal;