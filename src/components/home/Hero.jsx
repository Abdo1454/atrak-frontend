import { Link } from "react-router-dom";
import Hero1 from "../../assets/Hero.png";
function Hero() {
  return (
    <section className="bg-[#F8F7FC]">
      <div className="container mx-auto flex flex-col-reverse items-center justify-between gap-10 px-6 py-16 lg:flex-row">

        {/* النص */}
        <div className="max-w-xl text-center lg:text-right">

          <span className="rounded-full bg-[#EDE7FF] px-4 py-2 text-sm font-semibold text-[#4E19AB]">
            ✨ عطرك... بصمتك الخاصة
          </span>

          <h1 className="mt-6 text-4xl font-extrabold leading-tight text-gray-900 md:text-6xl">
            عطرك يجسد
            <span className="text-[#4E19AB]"> جوهرك</span>
          </h1>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            اصنع عطرك بنفسك من خلال اختيار الروائح والمكونات التي تعبر
            عن شخصيتك، أو اكتشف مجموعتنا من أفخم العطور العالمية.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">

            <Link
              to="/builder"
              className="rounded-xl bg-[#4E19AB] px-8 py-4 text-center font-semibold text-white transition hover:opacity-90"
            >
              ابدأ تصميم عطرك
            </Link>

            <Link
              to="/products"
              className="rounded-xl border-2 border-[#4E19AB] px-8 py-4 text-center font-semibold text-[#4E19AB] transition hover:bg-[#4E19AB] hover:text-white"
            >
              استكشف العطور
            </Link>

          </div>
        </div>

        {/* الصورة */}
        <div className="flex justify-center">
          <img
            src={Hero1}
            alt="Luxury Perfume"
            className="w-72 md:w-96"
          />
        </div>

      </div>
    </section>
  );
}

export default Hero;