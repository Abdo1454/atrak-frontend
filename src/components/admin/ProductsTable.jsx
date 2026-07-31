import { Pencil, Trash2, Eye } from "lucide-react";

function ProductsTable({ products = [] }) {
  return (
    <div className="overflow-hidden rounded-2xl bg-white shadow-sm">
      <div className="flex items-center justify-between border-b px-6 py-5">
        <h2 className="text-xl font-bold text-gray-800">
          إدارة المنتجات
        </h2>

        <button className="rounded-lg bg-violet-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-violet-700">
          إضافة منتج
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-right">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-4">الصورة</th>
              <th className="px-6 py-4">الاسم</th>
              <th className="px-6 py-4">التصنيف</th>
              <th className="px-6 py-4">السعر</th>
              <th className="px-6 py-4">المخزون</th>
              <th className="px-6 py-4 text-center">الإجراءات</th>
            </tr>
          </thead>

          <tbody>
            {products.length > 0 ? (
              products.map((product) => (
                <tr
                  key={product.id}
                  className="border-b transition hover:bg-gray-50"
                >
                  <td className="px-6 py-4">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-14 w-14 rounded-lg object-cover"
                    />
                  </td>

                  <td className="px-6 py-4 font-medium text-gray-800">
                    {product.name}
                  </td>

                  <td className="px-6 py-4">
                    {product.category}
                  </td>

                  <td className="px-6 py-4 font-semibold">
                    {product.price} EGP
                  </td>

                  <td className="px-6 py-4">
                    <span
                      className={`rounded-full px-3 py-1 text-sm font-medium ${
                        product.stock > 10
                          ? "bg-green-100 text-green-700"
                          : product.stock > 0
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {product.stock}
                    </span>
                  </td>

                  <td className="px-6 py-4">
                    <div className="flex justify-center gap-2">
                      <button
                        className="rounded-lg bg-blue-100 p-2 text-blue-700 transition hover:bg-blue-200"
                        title="عرض"
                      >
                        <Eye size={18} />
                      </button>

                      <button
                        className="rounded-lg bg-yellow-100 p-2 text-yellow-700 transition hover:bg-yellow-200"
                        title="تعديل"
                      >
                        <Pencil size={18} />
                      </button>

                      <button
                        className="rounded-lg bg-red-100 p-2 text-red-700 transition hover:bg-red-200"
                        title="حذف"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="6"
                  className="py-10 text-center text-gray-500"
                >
                  لا توجد منتجات لعرضها.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ProductsTable;