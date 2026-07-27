const OrderDetails = () => {
  const order = {
    id: "#ATK-10245",
    date: "27 July 2026",
    payment: "Vodafone Cash",
    status: "تم الدفع",
    total: 2250,
  };

  return (
    <section className="mt-8 rounded-2xl bg-white p-6 shadow-sm">

      <h2 className="mb-6 text-2xl font-semibold text-gray-900">
        تفاصيل الطلب
      </h2>


      <div className="space-y-4 text-gray-700">

        <div className="flex justify-between">
          <span>رقم الطلب</span>
          <span className="font-medium">
            {order.id}
          </span>
        </div>


        <div className="flex justify-between">
          <span>تاريخ الطلب</span>
          <span className="font-medium">
            {order.date}
          </span>
        </div>


        <div className="flex justify-between">
          <span>طريقة الدفع</span>
          <span className="font-medium">
            {order.payment}
          </span>
        </div>


        <div className="flex justify-between">
          <span>حالة الطلب</span>
          <span className="font-medium text-green-600">
            {order.status}
          </span>
        </div>


        <div className="flex justify-between border-t pt-4 text-lg font-bold">

          <span>
            الإجمالي
          </span>

          <span className="text-purple-700">
            {order.total} جنيه
          </span>

        </div>

      </div>

    </section>
  );
};

export default OrderDetails;