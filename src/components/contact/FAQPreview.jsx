const faqs = [
  {
    id: 1,
    question: "كيف يمكنني طلب عطر؟",
    answer:
      "يمكنك تصفح العطور واختيار المنتج المناسب ثم إتمام الطلب من خلال صفحة الشراء.",
  },
  {
    id: 2,
    question: "هل يمكنني تصميم عطري الخاص؟",
    answer:
      "نعم، يمكنك استخدام خدمة اصنع عطرك لاختيار المكونات المناسبة وإنشاء تركيبة خاصة بك.",
  },
  {
    id: 3,
    question: "كم تستغرق مدة التوصيل؟",
    answer:
      "تختلف مدة التوصيل حسب الموقع، وسيتم إعلامك بتفاصيل الشحن بعد تأكيد الطلب.",
  },
];

function FAQPreview() {
  return (
    <section className="py-16">
      <div className="mb-12 text-center">
        <span className="rounded-full bg-purple-100 px-4 py-2 text-sm font-semibold text-purple-700">
          الأسئلة الشائعة
        </span>

        <h2 className="mt-5 text-4xl font-bold text-gray-900">
          هل لديك استفسار؟
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-gray-600">
          إليك بعض الإجابات على الأسئلة الأكثر شيوعًا.
        </p>
      </div>

      <div className="mx-auto max-w-4xl space-y-5">
        {faqs.map((item) => (
          <div
            key={item.id}
            className="rounded-2xl bg-white p-6 shadow-lg transition hover:shadow-xl"
          >
            <h3 className="text-xl font-bold text-gray-900">
              {item.question}
            </h3>

            <p className="mt-3 leading-7 text-gray-600">
              {item.answer}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FAQPreview;