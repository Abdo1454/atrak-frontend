import { useEffect, useState } from "react";

import { getProducts } from "../../api/productService";
import ProductCard from "../products/ProductCard";

function RelatedProducts({ currentProductId, categoryId }) {
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchRelatedProducts();
  }, [currentProductId, categoryId]);

  const fetchRelatedProducts = async () => {
    try {
      setLoading(true);

      const response = await getProducts({
        category: categoryId,
        per_page: 4,
      });

      const filtered = response.data.filter(
        (product) => product.id !== currentProductId
      );

      setRelatedProducts(filtered.slice(0, 4));
    } catch (error) {
      console.error("Error fetching related products:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <section className="mt-12">
        <h2 className="mb-8 text-3xl font-bold">
          منتجات مشابهة
        </h2>

        <p className="text-gray-500">
          Loading...
        </p>
      </section>
    );
  }

  if (relatedProducts.length === 0) {
    return (
      <section className="mt-12">
        <h2 className="mb-8 text-3xl font-bold">
          منتجات مشابهة
        </h2>

        <p className="text-gray-500">
          لا توجد منتجات مشابهة.
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