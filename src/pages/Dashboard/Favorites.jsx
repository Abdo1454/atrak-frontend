function Favorites() {
  return (
    <section className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-800">
          ❤️ المفضلة
        </h1>

        <p className="mt-2 text-gray-500">
          جميع المنتجات التي أضفتها إلى المفضلة ستظهر هنا.
        </p>
      </div>

      <div className="rounded-2xl bg-white p-10 text-center shadow-sm">
        <p className="text-lg text-gray-500">
          لا توجد منتجات مفضلة حتى الآن.
        </p>
      </div>
    </section>
  );
}

export default Favorites;