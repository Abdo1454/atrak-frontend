import { Link } from "react-router-dom";

function AddToCartModal({
  isOpen,
  onClose,
  perfume,
}) {
  if (!isOpen || !perfume) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
      <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-2xl">
        <div className="text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
            <span className="text-3xl">✅</span>
          </div>

          <h2 className="mt-5 text-2xl font-bold text-gray-900">
            تمت إضافة عطرك بنجاح
          </h2>

          <p className="mt-2 text-gray-600">
            تمت إضافة العطر المخصص إلى سلة التسوق.
          </p>
        </div>

        <div className="mt-8 space-y-3 rounded-2xl bg-gray-50 p-5">
          <div className="flex justify-between">
            <span className="text-gray-600">الاسم</span>
            <span className="font-semibold">{perfume.name}</span>
          </div>

          <div className="flex justify-between">
            <span className="text-gray-600">النوع</span>
            <span className="font-semibold">
              {perfume.perfumeType}
            </span>
          </div>

          <div className="flex justify-between">
            <span className="text-gray-600">النوتات</span>
            <span className="font-semibold">
              {perfume.notes.join(" - ")}
            </span>
          </div>

          <div className="flex justify-between">
            <span className="text-gray-600">الحجم</span>
            <span className="font-semibold">
              {perfume.size}
            </span>
          </div>

          <div className="flex justify-between">
            <span className="text-gray-600">السعر</span>
            <span className="font-bold text-purple-700">
              {perfume.price} EGP
            </span>
          </div>
        </div>

        <div className="mt-8 flex gap-4">
          <button
            onClick={onClose}
            className="flex-1 rounded-xl border border-purple-700 py-3 font-semibold text-purple-700 transition hover:bg-purple-50"
          >
            متابعة التسوق
          </button>

          <Link
            to="/cart"
            className="flex-1 rounded-xl bg-purple-700 py-3 text-center font-semibold text-white transition hover:bg-purple-800"
          >
            الذهاب للسلة
          </Link>
        </div>
      </div>
    </div>
  );
}

export default AddToCartModal;