const bottleSizes = [
  { id: 1, size: "30ml" },
  { id: 2, size: "50ml" },
  { id: 3, size: "100ml" },
];

const bottleColors = [
  { id: 1, name: "شفاف", color: "bg-white border" },
  { id: 2, name: "أسود", color: "bg-black" },
  { id: 3, name: "ذهبي", color: "bg-yellow-400" },
  { id: 4, name: "بنفسجي", color: "bg-purple-700" },
];

const capColors = [
  { id: 1, name: "ذهبي", color: "bg-yellow-500" },
  { id: 2, name: "فضي", color: "bg-gray-300" },
  { id: 3, name: "أسود", color: "bg-black" },
];

function BottleCustomization() {
  return (
    <section className="py-16">
      <div className="mb-10 text-center">
        <span className="rounded-full bg-purple-100 px-4 py-2 text-sm font-semibold text-purple-700">
          الخطوة الثالثة
        </span>

        <h2 className="mt-4 text-4xl font-bold text-gray-900">
          خصّص زجاجة عطرك
        </h2>

        <p className="mt-3 text-gray-600">
          اختر الحجم والألوان التي تناسب ذوقك.
        </p>
      </div>

      <div className="space-y-12 rounded-3xl bg-white p-8 shadow-lg">
        {/* Bottle Size */}
        <div>
          <h3 className="mb-5 text-2xl font-bold text-gray-900">
            حجم الزجاجة
          </h3>

          <div className="flex flex-wrap gap-4">
            {bottleSizes.map((item) => (
              <button
                key={item.id}
                className="rounded-xl border border-gray-300 px-6 py-3 font-medium transition hover:border-purple-700 hover:bg-purple-700 hover:text-white"
              >
                {item.size}
              </button>
            ))}
          </div>
        </div>

        {/* Bottle Color */}
        <div>
          <h3 className="mb-5 text-2xl font-bold text-gray-900">
            لون الزجاجة
          </h3>

          <div className="flex flex-wrap gap-5">
            {bottleColors.map((item) => (
              <div
                key={item.id}
                className="flex cursor-pointer flex-col items-center gap-3"
              >
                <div
                  className={`h-14 w-14 rounded-full ${item.color}`}
                />

                <span className="text-sm font-medium">
                  {item.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Cap Color */}
        <div>
          <h3 className="mb-5 text-2xl font-bold text-gray-900">
            لون الغطاء
          </h3>

          <div className="flex flex-wrap gap-5">
            {capColors.map((item) => (
              <div
                key={item.id}
                className="flex cursor-pointer flex-col items-center gap-3"
              >
                <div
                  className={`h-12 w-12 rounded-full ${item.color}`}
                />

                <span className="text-sm font-medium">
                  {item.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default BottleCustomization;