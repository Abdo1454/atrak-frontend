import { Link } from "react-router-dom";
function CollectionCard({ collection }) {
  return (
    <div className="group overflow-hidden rounded-3xl bg-white shadow-lg transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl">

      <div className="overflow-hidden">
        <img
          src={collection.image}
          alt={collection.title}
          className="h-96 w-full object-cover transition duration-700 group-hover:scale-110"
        />
      </div>

      <div className="space-y-5 p-7 text-center">

        <h3 className="text-2xl font-bold text-[#4E19AB]">
          {collection.title}
        </h3>

        <p className="leading-7 text-gray-600">
          {collection.description}
        </p>

        <Link
          to="/products"
          className="inline-block rounded-xl bg-[#4E19AB] px-6 py-3 font-semibold text-white transition hover:bg-[#3b1282]"
        >
          اكتشف الآن
        </Link>

      </div>

    </div>
  );
}

export default CollectionCard;