import PerfumePreview from "./PerfumePreview";

const bottleSizes = [
  { id: 1, size: "30ml", height: "h-40" },
  { id: 2, size: "50ml", height: "h-52" },
  { id: 3, size: "100ml", height: "h-64" },
];

const bottleColors = [
  {
    id: 1,
    name: "شفاف",
    color: "bg-white",
    border: "border-2 border-gray-300",
  },
  {
    id: 2,
    name: "أسود",
    color: "bg-black",
    border: "",
  },
  {
    id: 3,
    name: "ذهبي",
    color: "bg-yellow-400",
    border: "",
  },
  {
    id: 4,
    name: "بنفسجي",
    color: "bg-purple-700",
    border: "",
  },
];

const capColors = [
  { id: 1, name: "ذهبي", color: "bg-yellow-500" },
  { id: 2, name: "فضي", color: "bg-gray-300" },
  { id: 3, name: "أسود", color: "bg-black" },
];

export default function BottleCustomization({
  selectedScent,
  selectedNotes,

  selectedSize,
  setSelectedSize,

  selectedBottleColor,
  setSelectedBottleColor,

  selectedCapColor,
  setSelectedCapColor,
}) {
  return (
    <section className="py-16">
      <div className="mx-auto flex w-full max-w-7xl flex-col-reverse gap-10 rounded-3xl bg-white p-10 shadow-lg lg:flex-row-reverse lg:items-center">
        {/* Options */}
        <div className="flex flex-1 justify-end">
          <div className="w-full max-w-xl space-y-8">
            {/* Bottle Size */}
            <div className="rounded-2xl border border-gray-200 p-6 shadow-sm">
              <h3 className="mb-5 text-xl font-bold text-gray-900">
                حجم الزجاجة
              </h3>

              <div className="flex flex-wrap justify-center gap-4">
                {bottleSizes.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setSelectedSize(item)}
                    className={`rounded-xl border px-6 py-3 font-medium transition-all duration-300 ${
                      selectedSize.id === item.id
                        ? "border-purple-700 bg-purple-700 text-white shadow-lg"
                        : "border-gray-300 bg-white hover:border-purple-700 hover:text-purple-700"
                    }`}
                  >
                    {item.size}
                  </button>
                ))}
              </div>
            </div>

            {/* Bottle Color */}
            <div className="rounded-2xl border border-gray-200 p-6 shadow-sm">
              <h3 className="mb-5 text-xl font-bold text-gray-900">
                لون الزجاجة
              </h3>

              <div className="flex flex-wrap justify-center gap-5">
                {bottleColors.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setSelectedBottleColor(item)}
                    className="flex flex-col items-center gap-2"
                  >
                    <div
                      className={`h-14 w-14 rounded-full transition-all duration-300
                        ${item.color}
                        ${item.border}
                        ${
                          selectedBottleColor.id === item.id
                            ? "ring-4 ring-purple-500 ring-offset-2"
                            : ""
                        }`}
                    />

                    <span className="text-sm font-medium text-gray-700">
                      {item.name}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Cap Color */}
            <div className="rounded-2xl border border-gray-200 p-6 shadow-sm">
              <h3 className="mb-5 text-xl font-bold text-gray-900">
                لون الغطاء
              </h3>

              <div className="flex flex-wrap justify-center gap-5">
                {capColors.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setSelectedCapColor(item)}
                    className="flex flex-col items-center gap-2"
                  >
                    <div
                      className={`h-12 w-12 rounded-full transition-all duration-300 ${
                        item.color
                      } ${
                        selectedCapColor.id === item.id
                          ? "ring-4 ring-purple-500 ring-offset-2"
                          : ""
                      }`}
                    />

                    <span className="text-sm font-medium text-gray-700">
                      {item.name}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Live Preview */}
        <div className="flex flex-1 justify-center">
          <PerfumePreview
            perfumeType={selectedScent}
            notes={selectedNotes}
            size={selectedSize}
            bottleColor={selectedBottleColor}
            capColor={selectedCapColor}
          />
        </div>
      </div>
    </section>
  );
}