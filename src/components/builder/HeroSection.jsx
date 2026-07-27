function HeroSection() {
  return (
    <section className="relative overflow-hidden rounded-3xl bg-purple-900 px-6 py-20 text-white">
      <div className="mx-auto max-w-4xl text-center">

        <span className="rounded-full bg-white/20 px-5 py-2 text-sm font-semibold">
          اصنع عطرك الخاص
        </span>

        <h1 className="mt-6 text-5xl font-bold leading-tight">
          صمّم عطرك بطريقة تعكس شخصيتك
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-purple-100">
          اختر المكونات، النوتات العطرية، وتصميم الزجاجة لإنشاء عطر فريد
          يناسب ذوقك الخاص.
        </p>

        <button className="mt-8 rounded-xl bg-yellow-500 px-8 py-4 font-semibold text-gray-900 transition hover:bg-yellow-400">
          ابدأ صناعة عطرك
        </button>

      </div>
    </section>
  );
}

export default HeroSection;