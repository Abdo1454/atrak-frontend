import { useMemo, useState } from "react";
import { Search, Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";

import ProductsTable from "../../components/admin/ProductsTable";

function Products() {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");

  // بيانات مؤقتة حتى ربط Laravel API
  const [products] = useState([
    {
      id: 1,
      image: "https://via.placeholder.com/80",
      name: "Royal Oud",
      category: "العطور الشرقية",
      price: 850,
      stock: 25,
    },
    {
      id: 2,
      image: "https://via.placeholder.com/80",
      name: "Amber Gold",
      category: "العطور الرجالية",
      price: 690,
      stock: 14,
    },
    {
      id: 3,
      image: "https://via.placeholder.com/80",
      name: "White Musk",
      category: "العطور النسائية",
      price: 540,
      stock: 8,
    },
    {
      id: 4,
      image: "https://via.placeholder.com/80",
      name: "French Rose",
      category: "العطور الفرنسية",
      price: 790,
      stock: 0,
    },
  ]);

  const filteredProducts = useMemo(() => {
    const keyword = search.toLowerCase();

    return products.filter(
      (product) =>
        product.name.toLowerCase().includes(keyword) ||
        product.category.toLowerCase().includes(keyword)
    );
  }, [products, search]);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">
            إدارة المنتجات
          </h1>

          <p className="mt-2 text-gray-500">
            عرض وإدارة جميع منتجات المتجر.
          </p>
        </div>

        <button
          onClick={() => navigate("/admin/products/add")}
          className="flex items-center gap-2 rounded-xl bg-violet-600 px-6 py-3 font-semibold text-white transition hover:bg-violet-700"
        >
          <Plus size={20} />
          إضافة منتج
        </button>
      </div>

      {/* Search */}
      <div className="rounded-2xl bg-white p-6 shadow-sm">
        <div className="relative">
          <Search
            size={20}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
          />

          <input
            type="text"
            placeholder="ابحث باسم المنتج أو التصنيف..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-xl border py-3 pl-12 pr-4 outline-none focus:border-violet-500"
          />
        </div>
      </div>

      {/* Products Table */}
      <ProductsTable products={filteredProducts} />
    </div>
  );
}

export default Products;