import { useState } from "react";
import { FolderTree, Plus, Pencil, Trash2 } from "lucide-react";

function Categories() {
  const [categories, setCategories] = useState([
    {
      id: 1,
      name: "العطور الرجالية",
      products: 18,
    },
    {
      id: 2,
      name: "العطور النسائية",
      products: 14,
    },
    {
      id: 3,
      name: "العطور الشرقية",
      products: 8,
    },
    {
      id: 4,
      name: "العطور الفرنسية",
      products: 5,
    },
  ]);

  const [newCategory, setNewCategory] = useState("");

  const handleAddCategory = (e) => {
    e.preventDefault();

    if (!newCategory.trim()) return;

    const category = {
      id: Date.now(),
      name: newCategory,
      products: 0,
    };

    setCategories((prev) => [...prev, category]);
    setNewCategory("");
  };

  const handleDelete = (id) => {
    setCategories((prev) =>
      prev.filter((category) => category.id !== id)
    );
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-800">
          إدارة التصنيفات
        </h1>

        <p className="mt-2 text-gray-500">
          إضافة وتعديل وحذف تصنيفات المنتجات.
        </p>
      </div>

      {/* Add Category */}
      <div className="rounded-2xl bg-white p-6 shadow-sm">
        <form
          onSubmit={handleAddCategory}
          className="flex flex-col gap-4 md:flex-row"
        >
          <input
            type="text"
            placeholder="اسم التصنيف..."
            value={newCategory}
            onChange={(e) =>
              setNewCategory(e.target.value)
            }
            className="flex-1 rounded-xl border px-4 py-3 outline-none focus:border-violet-500"
          />

          <button
            type="submit"
            className="flex items-center justify-center gap-2 rounded-xl bg-violet-600 px-6 py-3 font-semibold text-white transition hover:bg-violet-700"
          >
            <Plus size={20} />
            إضافة
          </button>
        </form>
      </div>

      {/* Categories Table */}
      <div className="overflow-hidden rounded-2xl bg-white shadow-sm">
        <div className="border-b px-6 py-5">
          <h2 className="flex items-center gap-2 text-xl font-bold text-gray-800">
            <FolderTree size={22} />
            جميع التصنيفات
          </h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-right">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-4">#</th>
                <th className="px-6 py-4">اسم التصنيف</th>
                <th className="px-6 py-4">عدد المنتجات</th>
                <th className="px-6 py-4 text-center">
                  الإجراءات
                </th>
              </tr>
            </thead>

            <tbody>
              {categories.length > 0 ? (
                categories.map((category) => (
                  <tr
                    key={category.id}
                    className="border-b transition hover:bg-gray-50"
                  >
                    <td className="px-6 py-4">
                      {category.id}
                    </td>

                    <td className="px-6 py-4 font-medium">
                      {category.name}
                    </td>

                    <td className="px-6 py-4">
                      <span className="rounded-full bg-violet-100 px-3 py-1 text-sm font-medium text-violet-700">
                        {category.products}
                      </span>
                    </td>

                    <td className="px-6 py-4">
                      <div className="flex justify-center gap-2">
                        <button
                          className="rounded-lg bg-yellow-100 p-2 text-yellow-700 transition hover:bg-yellow-200"
                          title="تعديل"
                        >
                          <Pencil size={18} />
                        </button>

                        <button
                          onClick={() =>
                            handleDelete(category.id)
                          }
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
                    colSpan="4"
                    className="py-10 text-center text-gray-500"
                  >
                    لا توجد تصنيفات.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Categories;