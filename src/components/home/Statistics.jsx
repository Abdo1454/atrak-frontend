import {
  FaUsers,
  FaSprayCan,
  FaStar,
  FaGlobe,
} from "react-icons/fa";

function Statistics() {
  const stats = [
    {
      id: 1,
      icon: <FaUsers />,
      number: "10K+",
      title: "عميل سعيد",
    },
    {
      id: 2,
      icon: <FaSprayCan />,
      number: "250+",
      title: "عطر فاخر",
    },
    {
      id: 3,
      icon: <FaStar />,
      number: "4.9",
      title: "متوسط التقييم",
    },
    {
      id: 4,
      icon: <FaGlobe />,
      number: "15+",
      title: "دولة نخدمها",
    },
  ];

  return (
    <section className="bg-[#4E19AB] py-20">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-14 text-center">
          <h2 className="text-4xl font-bold text-white">
            أرقام نفخر بها
          </h2>

          <p className="mt-4 text-purple-100">
            ثقة عملائنا هي مصدر نجاحنا.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((item) => (
            <div
              key={item.id}
              className="rounded-3xl bg-white/10 p-8 text-center backdrop-blur-md"
            >
              <div className="mb-4 flex justify-center text-5xl text-yellow-400">
                {item.icon}
              </div>

              <h3 className="text-4xl font-bold text-white">
                {item.number}
              </h3>

              <p className="mt-2 text-gray-200">
                {item.title}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Statistics;