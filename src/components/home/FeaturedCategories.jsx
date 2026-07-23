import CategoryCard from "./CategoryCard";
import { categories } from "../../data/categories";

function FeaturedCategories() {
  return (
    <section className="bg-[#faf8f5] py-20">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-14 text-center">
          <h2 className="text-4xl font-bold text-[#4E19AB]">
            اكتشف مجموعاتنا
          </h2>

          <p className="mt-4 text-gray-600">
            اختر الفئة التي تناسب ذوقك واستمتع بتجربة عطرية مميزة.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
          {categories.map((category) => (
            <CategoryCard
              key={category.id}
              category={category}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default FeaturedCategories;