const scents = [
  {
    id: 1,
    name: "خشبي",
    description: "رائحة دافئة وفاخرة تناسب الشخصيات القوية.",
  },
  {
    id: 2,
    name: "زهري",
    description: "لمسة ناعمة ورومانسية بروائح الأزهار.",
  },
  {
    id: 3,
    name: "منعش",
    description: "إحساس بالحيوية والانتعاش اليومي.",
  },
  {
    id: 4,
    name: "شرقي",
    description: "مزيج فاخر من التوابل والعنبر.",
  },
];

function ScentSelection({ selectedScent, setSelectedScent }) {
  return (
    <section className="py-16">
      <div className="mb-10 text-center">
        <span className="rounded-full bg-purple-100 px-4 py-2 text-sm font-semibold text-purple-700">
          الخطوة الأولى
        </span>

        <h2 className="mt-4 text-4xl font-bold text-gray-900">
          اختر نوع العطر
        </h2>

        <p className="mt-3 text-gray-600">
          اختر الطابع الأساسي الذي يعبر عن شخصيتك.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {scents.map((scent) => (
          <button
            key={scent.id}
            onClick={() => setSelectedScent(scent)}
            className={`rounded-3xl p-6 text-center shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-xl ${
              selectedScent?.id === scent.id
                ? "border-2 border-purple-700 bg-purple-700 text-white"
                : "bg-white text-gray-900"
            }`}
          >
            <h3 className="text-2xl font-bold">{scent.name}</h3>

            <p
              className={`mt-3 leading-7 ${
                selectedScent?.id === scent.id
                  ? "text-purple-100"
                  : "text-gray-600"
              }`}
            >
              {scent.description}
            </p>
          </button>
        ))}
      </div>
    </section>
  );
}

export default ScentSelection;