import {
  Eye,
  Clock3,
  PackageCheck,
  Truck,
  XCircle,
} from "lucide-react";

function OrdersTable({ orders = [] }) {
  const getStatus = (status) => {
    switch (status) {
      case "Delivered":
        return {
          label: "تم التسليم",
          color: "bg-green-100 text-green-700",
          icon: <PackageCheck size={16} />,
        };

      case "Processing":
        return {
          label: "قيد التجهيز",
          color: "bg-blue-100 text-blue-700",
          icon: <Truck size={16} />,
        };

      case "Pending":
        return {
          label: "قيد الانتظار",
          color: "bg-yellow-100 text-yellow-700",
          icon: <Clock3 size={16} />,
        };

      case "Cancelled":
        return {
          label: "ملغي",
          color: "bg-red-100 text-red-700",
          icon: <XCircle size={16} />,
        };

      default:
        return {
          label: status,
          color: "bg-gray-100 text-gray-700",
          icon: null,
        };
    }
  };

  return (
    <div className="overflow-hidden rounded-2xl bg-white shadow-sm">
      <div className="flex items-center justify-between border-b px-6 py-5">
        <h2 className="text-xl font-bold text-gray-800">
          أحدث الطلبات
        </h2>

        <button className="rounded-lg bg-violet-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-violet-700">
          عرض الكل
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-right">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-4">#</th>
              <th className="px-6 py-4">العميل</th>
              <th className="px-6 py-4">المنتج</th>
              <th className="px-6 py-4">التاريخ</th>
              <th className="px-6 py-4">الإجمالي</th>
              <th className="px-6 py-4">الحالة</th>
              <th className="px-6 py-4 text-center">الإجراء</th>
            </tr>
          </thead>

          <tbody>
            {orders.length > 0 ? (
              orders.map((order) => {
                const status = getStatus(order.status);

                return (
                  <tr
                    key={order.id}
                    className="border-b transition hover:bg-gray-50"
                  >
                    <td className="px-6 py-4 font-semibold">
                      #{order.id}
                    </td>

                    <td className="px-6 py-4">
                      {order.customer}
                    </td>

                    <td className="px-6 py-4">
                      {order.product}
                    </td>

                    <td className="px-6 py-4">
                      {order.date}
                    </td>

                    <td className="px-6 py-4 font-medium">
                      {order.total} EGP
                    </td>

                    <td className="px-6 py-4">
                      <span
                        className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-sm font-medium ${status.color}`}
                      >
                        {status.icon}
                        {status.label}
                      </span>
                    </td>

                    <td className="px-6 py-4 text-center">
                      <button className="inline-flex items-center gap-2 rounded-lg bg-violet-600 px-4 py-2 text-white transition hover:bg-violet-700">
                        <Eye size={18} />
                        عرض
                      </button>
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td
                  colSpan="7"
                  className="py-10 text-center text-gray-500"
                >
                  لا توجد طلبات لعرضها.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default OrdersTable;