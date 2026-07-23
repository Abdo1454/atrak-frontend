import ProductCard from "./ProductCard";
import { products } from "../../data/products";

function NewArrivals() {
  return (
    <section className="bg-[#faf8f5] py-20">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-14 text-center">
          <h2 className="text-4xl font-bold text-[#4E19AB]">
            وصل حديثًا
          </h2>

          <p className="mt-4 text-gray-600">
            اكتشف أحدث العطور الفاخرة
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.slice(0, 4).map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <button className="rounded-xl bg-[#4E19AB] px-8 py-3 text-lg font-semibold text-white transition duration-300 hover:bg-[#3b1282]">
            عرض جميع المنتجات
          </button>
        </div>

      </div>
    </section>
  );
}

export default NewArrivals;