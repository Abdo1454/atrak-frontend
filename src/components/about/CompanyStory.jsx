function CompanyStory() {
  return (
    <section className="grid items-center gap-12 lg:grid-cols-2">
      {/* Image */}
      <div className="overflow-hidden rounded-3xl shadow-xl">
        <img
          src="/images/about/company-story.jpg"
          alt="Atrak Story"
          className="h-full w-full object-cover transition duration-500 hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="space-y-6 text-right">
        <span className="inline-block rounded-full bg-purple-100 px-4 py-2 text-sm font-semibold text-purple-700">
          قصتنا
        </span>

        <h2 className="text-4xl font-bold text-gray-900">
          رحلة بدأت بشغف نحو صناعة العطور الفاخرة
        </h2>

        <p className="leading-8 text-gray-600">
          تأسست <span className="font-semibold text-purple-700">عطرك</span> بهدف
          تقديم تجربة استثنائية لعشاق العطور، تجمع بين الجودة والفخامة
          والابتكار. نؤمن أن لكل شخص هوية فريدة، لذلك نتيح لعملائنا تصميم
          عطورهم الخاصة واختيار المكونات التي تعكس شخصيتهم.
        </p>

        <p className="leading-8 text-gray-600">
          نستخدم أفضل الخامات العالمية، ونعمل مع خبراء في صناعة العطور لضمان
          تجربة تدوم طويلًا وتمنح عملاءنا إحساسًا بالتميز والثقة في كل مناسبة.
        </p>

        {/* Timeline */}
        <div className="space-y-5 border-r-2 border-purple-300 pr-6">
          <div className="relative">
            <span className="absolute -right-[34px] h-4 w-4 rounded-full bg-purple-700"></span>
            <h3 className="font-semibold text-gray-900">2025 — انطلاق عطرك</h3>
            <p className="mt-1 text-sm text-gray-600">
              بداية رحلة بناء علامة تجارية عربية متخصصة في العطور الفاخرة.
            </p>
          </div>

          <div className="relative">
            <span className="absolute -right-[34px] h-4 w-4 rounded-full bg-yellow-500"></span>
            <h3 className="font-semibold text-gray-900">
              إطلاق خدمة تصميم العطر
            </h3>
            <p className="mt-1 text-sm text-gray-600">
              تمكين العملاء من ابتكار عطورهم الخاصة بخطوات سهلة وتجربة تفاعلية.
            </p>
          </div>

          <div className="relative">
            <span className="absolute -right-[34px] h-4 w-4 rounded-full bg-green-500"></span>
            <h3 className="font-semibold text-gray-900">رؤيتنا للمستقبل</h3>
            <p className="mt-1 text-sm text-gray-600">
              أن نصبح الوجهة الأولى في الشرق الأوسط لتخصيص وصناعة العطور
              الفاخرة.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CompanyStory;