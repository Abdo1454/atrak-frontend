const OrderSummary = () => {
  const subtotal = 2100;
  const shipping = 50;
  const tax = 100;
  const discount = 0;

  const total = subtotal + shipping + tax - discount;

  return (
    <section className="rounded-2xl bg-white p-6 shadow-sm">

      <h2 className="mb-6 text-2xl font-semibold text-gray-900">
        ملخص الطلب
      </h2>


      <div className="space-y-4 text-gray-700">

        <div className="flex justify-between">
          <span>المجموع الفرعي</span>

          <span className="font-medium">
            {subtotal} جنيه
          </span>
        </div>


        <div className="flex justify-between">
          <span>الشحن</span>

          <span className="font-medium">
            {shipping} جنيه
          </span>
        </div>


        <div className="flex justify-between">
          <span>الضريبة</span>

          <span className="font-medium">
            {tax} جنيه
          </span>
        </div>


        <div className="flex justify-between">
          <span>الخصم</span>

          <span className="font-medium text-green-600">
            - {discount} جنيه
          </span>
        </div>


        <hr />


        <div className="flex justify-between text-lg font-bold text-gray-900">

          <span>
            الإجمالي
          </span>

          <span className="text-purple-700">
            {total} جنيه
          </span>

        </div>

      </div>

    </section>
  );
};

export default OrderSummary;