function SortDropdown({ sortBy, setSortBy }) {
  return (
    <div className="w-full md:w-60">
      <select
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
        className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none transition focus:border-violet-600 focus:ring-2 focus:ring-violet-200"
      >
        <option value="default">ترتيب افتراضي</option>
        <option value="price-low">السعر: الأقل أولًا</option>
        <option value="price-high">السعر: الأعلى أولًا</option>
        <option value="rating">الأعلى تقييمًا</option>
        <option value="newest">الأحدث</option>
        <option value="best-selling">الأكثر مبيعًا</option>
      </select>
    </div>
  );
}

export default SortDropdown;