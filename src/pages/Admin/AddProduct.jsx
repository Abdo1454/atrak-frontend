import { useState } from "react";
import { Save, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

function AddProduct() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    category: "",
    price: "",
    stock: "",
    image: "",
    description: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(formData);

    // لاحقًا:
    // await adminService.createProduct(formData);

    navigate("/admin/products");
  };

  return (
    <div className="mx-auto max-w-5xl rounded-2xl bg-white p-8 shadow-sm">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">
            إضافة منتج جديد
          </h1>

          <p className="mt-2 text-gray-500">
            أدخل بيانات المنتج لإضافته إلى المتجر.
          </p>
        </div>

        <button
          onClick={() => navigate("/admin/products")}
          className="flex items-center gap-2 rounded-xl border px-5 py-3 transition hover:bg-gray-100"
        >
          <ArrowLeft size={20} />
          رجوع
        </button>
      </div>

      <form
        onSubmit={handleSubmit}
        className="space-y-6"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <label className="mb-2 block font-semibold">
              اسم المنتج
            </label>

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full rounded-xl border p-3 outline-none focus:border-violet-500"
            />
          </div>

          <div>
            <label className="mb-2 block font-semibold">
              التصنيف
            </label>

            <input
              type="text"
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
              className="w-full rounded-xl border p-3 outline-none focus:border-violet-500"
            />
          </div>

          <div>
            <label className="mb-2 block font-semibold">
              السعر (EGP)
            </label>

            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              required
              min="0"
              className="w-full rounded-xl border p-3 outline-none focus:border-violet-500"
            />
          </div>

          <div>
            <label className="mb-2 block font-semibold">
              المخزون
            </label>

            <input
              type="number"
              name="stock"
              value={formData.stock}
              onChange={handleChange}
              required
              min="0"
              className="w-full rounded-xl border p-3 outline-none focus:border-violet-500"
            />
          </div>
        </div>

        <div>
          <label className="mb-2 block font-semibold">
            رابط الصورة
          </label>

          <input
            type="text"
            name="image"
            value={formData.image}
            onChange={handleChange}
            className="w-full rounded-xl border p-3 outline-none focus:border-violet-500"
            placeholder="https://..."
          />
        </div>

        <div>
          <label className="mb-2 block font-semibold">
            وصف المنتج
          </label>

          <textarea
            rows="6"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full rounded-xl border p-3 outline-none focus:border-violet-500"
          />
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="flex items-center gap-2 rounded-xl bg-violet-600 px-8 py-3 font-semibold text-white transition hover:bg-violet-700"
          >
            <Save size={20} />
            حفظ المنتج
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddProduct;