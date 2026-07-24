import { products } from "../../data/products";
import ProductCard from "../products/ProductCard";

function RelatedProducts({ currentProductId, category }) {
  const relatedProducts = products
    .filter(
      (product) =>
        product.id !== currentProductId &&
        product.category === category
    )
    .slice(0, 4);

  if (relatedProducts.length === 0) {
    return (
      <section className="mt-12">
        <h2 className="mb-6 text-3xl font-bold">
          منتجات مشابهة
        </h2>

        <p className="text-gray-500">
          لا توجد منتجات مشابهة حاليًا.
        </p>
      </section>
    );
  }

  return (
    <section className="mt-12">
      <h2 className="mb-8 text-3xl font-bold">
        منتجات مشابهة
      </h2>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {relatedProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </section>
  );
}

export default RelatedProducts;