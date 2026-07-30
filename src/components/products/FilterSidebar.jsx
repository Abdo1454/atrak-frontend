import { useEffect, useState } from "react";
import { getCategories } from "../../api/categoryService";

function FilterSidebar({
  selectedCategory,
  setSelectedCategory,
  priceRange,
  setPriceRange,
}) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchCategories();
  }, []);

  async function fetchCategories() {
    try {
      const response = await getCategories();
      setCategories(response.data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  }

  return (
    <aside className="rounded-2xl bg-white p-6 shadow-md">
      <h2 className="mb-6 text-xl font-bold text-gray-900">
        الفلاتر
      </h2>

      {/* Categories */}
      <div className="mb-8">
        <h3 className="mb-3 font-semibold">الفئة</h3>

        <div className="space-y-2">
          <label className="flex cursor-pointer items-center gap-2">
            <input
              type="radio"
              name="category"
              value=""
              checked={selectedCategory === ""}
              onChange={() => setSelectedCategory("")}
            />
            <span>الكل</span>
          </label>

          {categories.map((category) => (
            <label
              key={category.id}
              className="flex cursor-pointer items-center gap-2"
            >
              <input
                type="radio"
                name="category"
                value={category.id}
                checked={selectedCategory === category.id}
                onChange={() =>
                  setSelectedCategory(category.id)
                }
              />

              <span>{category.name}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Price */}
      <div>
        <h3 className="mb-3 font-semibold">السعر الأقصى</h3>

        <input
          type="range"
          min={100}
          max={5000}
          step={100}
          value={priceRange}
          onChange={(e) =>
            setPriceRange(Number(e.target.value))
          }
          className="w-full"
        />

        <p className="mt-2 text-sm text-gray-600">
          حتى {priceRange} جنيه
        </p>
      </div>
    </aside>
  );
}

export default FilterSidebar;