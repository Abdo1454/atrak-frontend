import { useEffect, useState } from "react";
import { Save, ArrowLeft } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";

function EditProduct() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [formData, setFormData] = useState({
    name: "",
    category: "",
    price: "",
    stock: "",
    image: "",
    description: "",
  });

  useEffect(() => {
    // بيانات مؤقتة
    const product = {
      id,
      name: "Royal Oud",
      category: "العطور الشرقية",
      price: 850,
      stock: 20,
      image: "https://via.placeholder.com/300",
      description: "Luxury perfume",
    };

    setFormData(product);

    // لاحقًا:
    // loadProduct(id);
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Update Product", formData);

    // await adminService.updateProduct(id, formData);

    navigate("/admin/products");
  };

  return (
    <div className="mx-auto max-w-5xl rounded-2xl bg-white p-8 shadow-sm">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">
            تعديل المنتج
          </h1>

          <p className="mt-2 text-gray-500">
            قم بتحديث بيانات المنتج.
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
              className="w-full rounded-xl border p-3 outline-none focus:border-violet-500"
            />
          </div>

          <div>
            <label className="mb-2 block font-semibold">
              السعر
            </label>

            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
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
            حفظ التعديلات
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditProduct;