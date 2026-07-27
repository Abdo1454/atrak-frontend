import {
  Award,
  Sparkles,
  Gem,
  Leaf,
} from "lucide-react";

const values = [
  {
    id: 1,
    icon: <Award size={34} />,
    title: "الجودة",
    description:
      "نستخدم أجود المكونات العالمية لضمان تجربة عطرية تدوم طويلًا.",
  },
  {
    id: 2,
    icon: <Sparkles size={34} />,
    title: "الابتكار",
    description:
      "نمنح عملاءنا حرية تصميم عطرهم الخاص بطريقة سهلة وحديثة.",
  },
  {
    id: 3,
    icon: <Gem size={34} />,
    title: "الفخامة",
    description:
      "تصميمات راقية وتجربة شراء تعكس هوية العلامات التجارية الفاخرة.",
  },
  {
    id: 4,
    icon: <Leaf size={34} />,
    title: "الاستدامة",
    description:
      "نسعى لاستخدام حلول صديقة للبيئة في التغليف والإنتاج.",
  },
];

function BrandValues() {
  return (
    <section className="py-16">
      <div className="mb-12 text-center">
        <span className="rounded-full bg-purple-100 px-4 py-2 text-sm font-semibold text-purple-700">
          قيمنا
        </span>

        <h2 className="mt-4 text-4xl font-bold text-gray-900">
          المبادئ التي تقود عطرك
        </h2>

        <p className="mx-auto mt-4 max-w-3xl text-lg text-gray-600">
          نؤمن بأن الجودة والابتكار والثقة هي أساس تقديم تجربة استثنائية لكل
          عميل.
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {values.map((value) => (
          <div
            key={value.id}
            className="rounded-3xl bg-white p-8 text-center shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
          >
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-purple-100 text-purple-700">
              {value.icon}
            </div>

            <h3 className="mb-3 text-2xl font-bold text-gray-900">
              {value.title}
            </h3>

            <p className="leading-7 text-gray-600">
              {value.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default BrandValues;