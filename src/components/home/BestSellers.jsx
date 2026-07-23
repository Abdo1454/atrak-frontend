import ProductCard from "./ProductCard";
import { products } from "../../data/products";

function BestSellers() {
  return (
    <section className="bg-[#faf8f5] py-20">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-14 text-center">
          <h2 className="text-4xl font-bold text-[#4E19AB]">
            الأكثر مبيعًا
          </h2>

          <p className="mt-4 text-gray-600">
            اكتشف العطور الأكثر طلبًا بين عملائنا.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default BestSellers;