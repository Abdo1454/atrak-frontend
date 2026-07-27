import { Users, ShoppingBag, Sparkles, Award } from "lucide-react";

const statistics = [
  {
    id: 1,
    icon: <Users size={34} />,
    value: "10K+",
    label: "عميل سعيد",
  },
  {
    id: 2,
    icon: <ShoppingBag size={34} />,
    value: "25K+",
    label: "طلب مكتمل",
  },
  {
    id: 3,
    icon: <Sparkles size={34} />,
    value: "150+",
    label: "عطر فاخر",
  },
  {
    id: 4,
    icon: <Award size={34} />,
    value: "5★",
    label: "متوسط تقييم العملاء",
  },
];

function Statistics() {
  return (
    <section className="rounded-3xl bg-gradient-to-r from-purple-900 via-purple-800 to-black px-6 py-16 text-white">
      <div className="mb-12 text-center">
        <span className="rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-yellow-300">
          إنجازاتنا
        </span>

        <h2 className="mt-4 text-4xl font-bold">
          أرقام نفتخر بها
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-300">
          ثقة عملائنا هي أكبر إنجاز لنا، ونعمل باستمرار على تقديم أفضل تجربة
          تسوق للعطور الفاخرة.
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {statistics.map((item) => (
          <div
            key={item.id}
            className="rounded-2xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-sm transition hover:bg-white/10"
          >
            <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-yellow-400 text-black">
              {item.icon}
            </div>

            <h3 className="text-4xl font-extrabold text-yellow-400">
              {item.value}
            </h3>

            <p className="mt-3 text-lg text-gray-200">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Statistics;