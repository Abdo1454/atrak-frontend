import {
  ShieldCheck,
  Truck,
  Sparkles,
  Headset,
} from "lucide-react";

const features = [
  {
    id: 1,
    icon: <Sparkles size={34} />,
    title: "عطور فاخرة",
    description:
      "مجموعة مختارة من العطور المصنوعة من أفضل المكونات العالمية.",
  },
  {
    id: 2,
    icon: <ShieldCheck size={34} />,
    title: "جودة مضمونة",
    description:
      "نلتزم بأعلى معايير الجودة لضمان تجربة استثنائية مع كل منتج.",
  },
  {
    id: 3,
    icon: <Truck size={34} />,
    title: "شحن سريع",
    description:
      "توصيل سريع وآمن لجميع أنحاء الجمهورية مع تغليف فاخر.",
  },
  {
    id: 4,
    icon: <Headset size={34} />,
    title: "دعم متواصل",
    description:
      "فريق خدمة العملاء جاهز لمساعدتك والإجابة عن جميع استفساراتك.",
  },
];

function WhyChooseUs() {
  return (
    <section className="py-16">
      <div className="mb-12 text-center">
        <span className="rounded-full bg-purple-100 px-4 py-2 text-sm font-semibold text-purple-700">
          لماذا نحن؟
        </span>

        <h2 className="mt-4 text-4xl font-bold text-gray-900">
          لماذا يختار العملاء عطرك؟
        </h2>

        <p className="mx-auto mt-4 max-w-3xl text-lg text-gray-600">
          نحرص على تقديم تجربة تسوق مميزة تجمع بين الجودة، الفخامة، والاهتمام
          بأدق التفاصيل.
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((feature) => (
          <div
            key={feature.id}
            className="rounded-3xl bg-white p-8 text-center shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
          >
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-purple-100 text-purple-700">
              {feature.icon}
            </div>

            <h3 className="mb-3 text-2xl font-bold text-gray-900">
              {feature.title}
            </h3>

            <p className="leading-7 text-gray-600">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WhyChooseUs;