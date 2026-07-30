import { useEffect, useState } from "react";
import { getProducts } from "../../api/productService";

import ProductsHeader from "../../components/products/ProductsHeader";
import SearchBar from "../../components/products/SearchBar";
import FilterSidebar from "../../components/products/FilterSidebar";
import SortDropdown from "../../components/products/SortDropdown";
import ProductGrid from "../../components/products/ProductGrid";
import Pagination from "../../components/products/Pagination";

function Products() {
  const [products, setProducts] = useState([]);

  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("default");

  const [selectedCategory, setSelectedCategory] = useState("");
  const [priceRange, setPriceRange] = useState(5000);

  const [currentPage, setCurrentPage] = useState(1);
  const [meta, setMeta] = useState({});

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, sortBy, selectedCategory]);

  useEffect(() => {
    fetchProducts();
  }, [searchTerm, sortBy, selectedCategory, currentPage]);

  const fetchProducts = async () => {
    try {
      setLoading(true);

      const params = {
        page: currentPage,
        per_page: 12,
      };

      if (searchTerm.trim()) {
        params.search = searchTerm;
      }

      if (selectedCategory) {
        params.category = selectedCategory;
      }

      // فعّل هذا بعد إضافة فلترة السعر في Laravel
      // params.max_price = priceRange;

      switch (sortBy) {
        case "price-low":
          params.sort = "price_asc";
          break;

        case "price-high":
          params.sort = "price_desc";
          break;

        case "newest":
          params.sort = "newest";
          break;

        case "oldest":
          params.sort = "oldest";
          break;

        default:
          break;
      }

      const response = await getProducts(params);

      setProducts(response.data);
      setMeta(response.meta);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

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
        <FilterSidebar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          priceRange={priceRange}
          setPriceRange={setPriceRange}
        />

        <div className="lg:col-span-3">
          {loading ? (
            <div className="flex h-64 items-center justify-center">
              <p className="text-lg font-medium text-gray-500">
                Loading products...
              </p>
            </div>
          ) : (
            <>
              <ProductGrid products={products} />

              <div className="mt-8">
                <Pagination
                  currentPage={meta.current_page || 1}
                  totalPages={meta.last_page || 1}
                  onPageChange={setCurrentPage}
                />
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

export default Products;