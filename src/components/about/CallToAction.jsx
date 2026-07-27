import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

function CallToAction() {
  return (
    <section className="overflow-hidden rounded-3xl bg-gradient-to-r from-purple-900 via-purple-800 to-black px-6 py-16 text-white shadow-2xl">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-8 lg:flex-row">
        <div className="text-center lg:text-right">
          <span className="rounded-full bg-yellow-400/20 px-4 py-2 text-sm font-semibold text-yellow-300">
            ابدأ رحلتك الآن
          </span>

          <h2 className="mt-6 text-4xl font-bold leading-tight">
            اصنع عطرك الذي يعبر عن شخصيتك
          </h2>

          <p className="mt-4 max-w-2xl text-lg leading-8 text-gray-300">
            اكتشف مجموعتنا المميزة أو أنشئ عطرك الخاص باستخدام أفضل المكونات
            العالمية واستمتع بتجربة تسوق فاخرة.
          </p>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row">
          <Link
            to="/builder"
            className="flex items-center justify-center gap-2 rounded-xl bg-yellow-400 px-8 py-4 font-semibold text-black transition hover:bg-yellow-300"
          >
            اصنع عطرك
            <ArrowLeft size={18} />
          </Link>

          <Link
            to="/products"
            className="rounded-xl border border-white/30 px-8 py-4 text-center font-semibold transition hover:bg-white/10"
          >
            استكشف العطور
          </Link>
        </div>
      </div>
    </section>
  );
}

export default CallToAction;