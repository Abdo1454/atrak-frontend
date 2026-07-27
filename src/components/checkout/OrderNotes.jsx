const OrderNotes = () => {
  return (
    <section className="rounded-2xl bg-white p-6 shadow-sm">

      <h2 className="mb-6 text-2xl font-semibold text-gray-900">
        ملاحظات الطلب
      </h2>

      <textarea
        rows="4"
        placeholder="اكتب أي ملاحظات إضافية على الطلب..."
        className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-purple-700 focus:outline-none"
      />

    </section>
  );
};

export default OrderNotes;