import ProductGallery from "../../components/productDetails/ProductGallery";
import ProductInfo from "../../components/productDetails/ProductInfo";
import ProductTabs from "../../components/productDetails/ProductTabs";
import RelatedProducts from "../../components/productDetails/RelatedProducts";
import { useParams } from "react-router-dom";
import { products } from "../../data/products";
function ProductDetails() {
    const { id } = useParams();

const product = products.find(
  (item) => item.id === Number(id)
);
  return (
    <section className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        {/* Product Section */}
     <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
  <ProductGallery product={product} />
  <ProductInfo product={product} />
</div>

        {/* Tabs */}
        <div className="mt-16">
         <ProductTabs product={product} />
        </div>

        {/* Related Products */}
        <div className="mt-20">
         <RelatedProducts
  currentProductId={product.id}
  category={product.category}
/>
        </div>
      </div>
    </section>
  );
}

export default ProductDetails;