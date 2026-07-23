function FilterSidebar({
  selectedCategory,
  setSelectedCategory,
  priceRange,
  setPriceRange,
}) {
  const categories = [
    "الكل",
    "رجالي",
    "نسائي",
    "شرقي",
    "فرنسي",
  ];

  return (
    <aside className="rounded-2xl bg-white p-6 shadow-md">
      <h2 className="mb-6 text-xl font-bold text-gray-900">
        الفلاتر
      </h2>

      {/* Categories */}
      <div className="mb-8">
        <h3 className="mb-3 font-semibold">الفئة</h3>

        <div className="space-y-2">
          {categories.map((category) => (
            <label
              key={category}
              className="flex items-center gap-2 cursor-pointer"
            >
              <input
                type="radio"
                name="category"
                value={category}
                checked={selectedCategory === category}
                onChange={(e) =>
                  setSelectedCategory(e.target.value)
                }
              />

              <span>{category}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Price */}
      <div>
        <h3 className="mb-3 font-semibold">السعر الأقصى</h3>

        <input
          type="range"
          min="100"
          max="5000"
          step="100"
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