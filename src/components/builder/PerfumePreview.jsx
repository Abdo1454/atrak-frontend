function PerfumePreview() {
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
          هذه معاينة أولية لشكل عطرك قبل إضافته إلى السلة.
        </p>
      </div>

      <div className="grid items-center gap-12 rounded-3xl bg-white p-10 shadow-lg lg:grid-cols-2">
        {/* Bottle Preview */}
        <div className="flex justify-center">
          <div className="relative">
            <div className="mx-auto h-24 w-16 rounded-t-xl bg-yellow-500" />

            <div className="mx-auto h-64 w-44 rounded-b-[40px] rounded-t-[30px] border border-gray-200 bg-purple-100 shadow-xl" />

            <p className="absolute bottom-8 left-1/2 -translate-x-1/2 text-lg font-bold text-purple-800">
              Atrak
            </p>
          </div>
        </div>

        {/* Preview Details */}
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
                شرقي
              </span>
            </div>

            <div className="flex justify-between rounded-xl bg-gray-50 p-4">
              <span className="font-medium text-gray-600">
                النوتات
              </span>

              <span className="font-bold text-purple-700">
                عود - فانيليا
              </span>
            </div>

            <div className="flex justify-between rounded-xl bg-gray-50 p-4">
              <span className="font-medium text-gray-600">
                الحجم
              </span>

              <span className="font-bold text-purple-700">
                100ml
              </span>
            </div>

            <div className="flex justify-between rounded-xl bg-gray-50 p-4">
              <span className="font-medium text-gray-600">
                السعر المتوقع
              </span>

              <span className="font-bold text-purple-700">
                799 EGP
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