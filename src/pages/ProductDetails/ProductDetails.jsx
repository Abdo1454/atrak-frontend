import ProductGallery from "../../components/productDetails/ProductGallery";
import ProductInfo from "../../components/productDetails/ProductInfo";
// import ProductTabs from "../../components/productDetails/ProductTabs";
// import RelatedProducts from "../../components/productDetails/RelatedProducts";

function ProductDetails() {
  return (
    <section className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        {/* Product Section */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          <ProductGallery />
          <ProductInfo />
        </div>

        {/* Tabs */}
        <div className="mt-16">
          {/* <ProductTabs /> */}
        </div>

        {/* Related Products */}
        <div className="mt-20">
          {/* <RelatedProducts /> */}
        </div>
      </div>
    </section>
  );
}

export default ProductDetails;