function PerfumePreview({
  perfumeType = "شرقي",
  notes = [],
  size = { size: "100ml" },
  bottleColor = { name: "بنفسجي" },
  capColor = { name: "ذهبي" },
  price = 799,
}) {
  return (
    <section className="py-16">
      <div className="mb-10 text-center">
        <span className="rounded-full bg-purple-100 px-4 py-2 text-sm font-semibold text-purple-700">
          الخطوة الرابعة
        </span>

        <h2 className="mt-4 text-4xl font-bold text-gray-900">
          معاينة عطرك
        </h2>

        <p className="mt-3 text-gray-600">
          راجع جميع اختياراتك قبل إضافة العطر إلى السلة.
        </p>
      </div>

      <div className="grid items-center gap-12 rounded-3xl bg-white p-10 shadow-lg lg:grid-cols-2">
        {/* Bottle Preview */}
        <div className="flex justify-center">
          <div className="relative flex flex-col items-center">
            {/* Cap */}
            <div
              className={`h-16 w-12 rounded-t-xl ${capColor?.color || "bg-yellow-500"}`}
            />

            {/* Bottle */}
            <div
              className={`${
                size?.height || "h-64"
              } w-44 rounded-b-[40px] rounded-t-[30px] border border-gray-200 ${
                bottleColor?.color || "bg-purple-200"
              } shadow-xl transition-all duration-300`}
            />

            <p className="absolute bottom-8 text-lg font-bold text-purple-900">
              Atrak
            </p>
          </div>
        </div>

        {/* Details */}
        <div>
          <h3 className="text-3xl font-bold text-gray-900">
            تفاصيل العطر
          </h3>

          <div className="mt-8 space-y-4">
            <div className="flex justify-between rounded-xl bg-gray-50 p-4">
              <span className="font-medium text-gray-600">
                نوع العطر
              </span>

   <span className="font-bold text-purple-700">
  {perfumeType?.name || "لم يتم الاختيار"}
</span>
            </div>

            <div className="flex justify-between rounded-xl bg-gray-50 p-4">
              <span className="font-medium text-gray-600">
                النوتات
              </span>

          <span className="font-bold text-purple-700">
  {notes.length > 0
    ? notes.map((note) => note.name).join(" - ")
    : "لم يتم اختيار نوتات"}
</span>
            </div>

            <div className="flex justify-between rounded-xl bg-gray-50 p-4">
              <span className="font-medium text-gray-600">
                الحجم
              </span>

              <span className="font-bold text-purple-700">
                {size?.size}
              </span>
            </div>

            <div className="flex justify-between rounded-xl bg-gray-50 p-4">
              <span className="font-medium text-gray-600">
                لون الزجاجة
              </span>

              <span className="font-bold text-purple-700">
                {bottleColor?.name}
              </span>
            </div>

            <div className="flex justify-between rounded-xl bg-gray-50 p-4">
              <span className="font-medium text-gray-600">
                لون الغطاء
              </span>

              <span className="font-bold text-purple-700">
                {capColor?.name}
              </span>
            </div>

            <div className="flex justify-between rounded-xl bg-purple-50 p-4">
              <span className="text-lg font-bold text-gray-900">
                السعر المتوقع
              </span>

              <span className="text-xl font-bold text-purple-700">
                {price} EGP
              </span>
            </div>
          </div>

          <button className="mt-8 w-full rounded-xl bg-purple-700 py-4 font-semibold text-white transition hover:bg-purple-800">
            أضف إلى السلة
          </button>
        </div>
      </div>
    </section>
  );
}

export default PerfumePreview;