import OrderTable from "../../components/dashboard/OrderTable";

function Orders() {
  // سيتم استبدالها لاحقًا بالبيانات القادمة من الـ API
  const orders = [];

  return (
    <section className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-800">
          طلباتي
        </h1>

        <p className="mt-2 text-gray-500">
          يمكنك متابعة جميع طلباتك وحالة كل طلب من هنا.
        </p>
      </div>

      <OrderTable orders={orders} />
    </section>
  );
}

export default Orders;