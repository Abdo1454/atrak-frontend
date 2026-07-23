import { useState } from "react";
import { products } from "../../data/products";
import ProductsHeader from "../../components/products/ProductsHeader";
import SearchBar from "../../components/products/SearchBar";
import FilterSidebar from "../../components/products/FilterSidebar";
import SortDropdown from "../../components/products/SortDropdown";
import ProductGrid from "../../components/products/ProductGrid";
import Pagination from "../../components/products/Pagination";

function Products() {
    const [searchTerm, setSearchTerm] = useState("");
    const [sortBy, setSortBy] = useState("default");
    const filteredProducts = products.filter((product) =>
  product.name.toLowerCase().includes(searchTerm.toLowerCase())
);
const sortedProducts = [...filteredProducts].sort((a, b) => {
  switch (sortBy) {
    case "price-low":
      return a.price - b.price;

    case "price-high":
      return b.price - a.price;

    case "rating":
      return b.rating - a.rating;

    case "newest":
      return new Date(b.createdAt) - new Date(a.createdAt);

    case "best-selling":
      return b.sold - a.sold;

    default:
      return 0;
  }
});
  return (
    <section className="container mx-auto px-4 py-10">
      <ProductsHeader />

      <div className="my-6 flex flex-col gap-4 md:flex-row md:justify-between">
        <SearchBar
  searchTerm={searchTerm}
  setSearchTerm={setSearchTerm}
/>
       <SortDropdown
  sortBy={sortBy}
  setSortBy={setSortBy}
/>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
        <FilterSidebar />

        <div className="lg:col-span-3">
         <ProductGrid products={sortedProducts} />
          <Pagination />
        </div>
      </div>
    </section>
  );
}

export default Products;