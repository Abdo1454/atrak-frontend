import { Link } from "react-router-dom";
import CollectionCard from "./CollectionCard";
function SpecialOffers() {
  return (
    <section className="bg-[#4E19AB] py-20">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-10 px-6 lg:flex-row">

        <div className="text-center text-white lg:text-right">
          <span className="rounded-full bg-white/20 px-4 py-2 text-sm">
            🎁 عرض لفترة محدودة
          </span>

          <h2 className="mt-6 text-5xl font-bold">
            خصم حتى 30%
          </h2>

          <p className="mt-4 max-w-xl text-lg text-gray-200">
            استمتع بخصومات حصرية على أفضل العطور الفاخرة وابدأ رحلتك مع عطرك.
          </p>

          <Link
            to="/products"
            className="mt-8 inline-block rounded-xl bg-white px-8 py-4 font-bold text-[#4E19AB] transition hover:scale-105"
          >
            تسوق الآن
          </Link>
        </div>

        <div>
          <img
            src="/images/offers/offer.png"
            alt="عرض خاص"
            className="mx-auto w-72 lg:w-96"
          />
        </div>

      </div>
    </section>
  );
}

export default SpecialOffers;