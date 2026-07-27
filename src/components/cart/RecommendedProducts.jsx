import { products } from "../../data/products";
import ProductCard from "../products/ProductCard";

function RecommendedProducts() {
  const recommended = products.slice(0, 4);

  return (
    <section dir="rtl" className="mt-16">
      <div className="mb-8 flex items-center justify-between">
        <h2 className="text-3xl font-bold text-gray-900">
          قد يعجبك أيضًا
        </h2>

        <span className="text-sm text-purple-700">
          اكتشف المزيد من عطورنا
        </span>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {recommended.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </section>
  );
}

export default RecommendedProducts;