import CollectionCard from "./CollectionCard";
import collections from "../../data/collections";

function LuxuryCollections() {
  return (
    <section className="bg-[#FAF8F5] py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-16 text-center">

          <span className="rounded-full bg-[#F3ECFF] px-5 py-2 text-sm font-semibold text-[#4E19AB]">
            Luxury Collection
          </span>

          <h2 className="mt-5 text-5xl font-bold text-[#4E19AB]">
            مجموعاتنا الفاخرة
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-gray-600">
            اكتشف تشكيلات مختارة بعناية تجمع بين الفخامة والأصالة لتناسب جميع الأذواق.
          </p>

        </div>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3">
          {collections.map((collection) => (
            <CollectionCard
              key={collection.id}
              collection={collection}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default LuxuryCollections;