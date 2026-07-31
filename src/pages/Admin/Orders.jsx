import { useState } from "react";
import {
  Eye,
  PackageCheck,
  Truck,
  Clock3,
  XCircle,
} from "lucide-react";

function Orders() {
  const [orders, setOrders] = useState([
    {
      id: 1001,
      customer: "Ahmed Ali",
      total: 850,
      status: "Pending",
      payment: "مدفوع",
      date: "31 Jul 2026",
    },
    {
      id: 1002,
      customer: "Sara Mohamed",
      total: 1250,
      status: "Processing",
      payment: "مدفوع",
      date: "30 Jul 2026",
    },
    {
      id: 1003,
      customer: "Omar Hassan",
      total: 670,
      status: "Delivered",
      payment: "مدفوع",
      date: "29 Jul 2026",
    },
    {
      id: 1004,
      customer: "Nour Ahmed",
      total: 540,
      status: "Cancelled",
      payment: "ملغي",
      date: "28 Jul 2026",
    },
  ]);

  const handleStatusChange = (id, status) => {
    setOrders((prev) =>
      prev.map((order) =>
        order.id === id ? { ...order, status } : order
      )
    );

    // لاحقًا:
    // await adminService.updateOrder(id, { status });
  };

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

      default:
        return {
          label: "ملغي",
          color: "bg-red-100 text-red-700",
          icon: <XCircle size={16} />,
        };
    }
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-800">
          إدارة الطلبات
        </h1>

        <p className="mt-2 text-gray-500">
          متابعة الطلبات وتحديث حالتها.
        </p>
      </div>

      <div className="overflow-hidden rounded-2xl bg-white shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-right">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-4">رقم الطلب</th>
                <th className="px-6 py-4">العميل</th>
                <th className="px-6 py-4">الإجمالي</th>
                <th className="px-6 py-4">الدفع</th>
                <th className="px-6 py-4">التاريخ</th>
                <th className="px-6 py-4">الحالة</th>
                <th className="px-6 py-4">تغيير الحالة</th>
                <th className="px-6 py-4 text-center">
                  الإجراءات
                </th>
              </tr>
            </thead>

            <tbody>
              {orders.map((order) => {
                const status = getStatus(order.status);

                return (
                  <tr
                    key={order.id}
                    className="border-b hover:bg-gray-50"
                  >
                    <td className="px-6 py-4 font-semibold">
                      #{order.id}
                    </td>

                    <td className="px-6 py-4">
                      {order.customer}
                    </td>

                    <td className="px-6 py-4 font-medium">
                      {order.total} EGP
                    </td>

                    <td className="px-6 py-4">
                      {order.payment}
                    </td>

                    <td className="px-6 py-4">
                      {order.date}
                    </td>

                    <td className="px-6 py-4">
                      <span
                        className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-sm font-medium ${status.color}`}
                      >
                        {status.icon}
                        {status.label}
                      </span>
                    </td>

                    <td className="px-6 py-4">
                      <select
                        value={order.status}
                        onChange={(e) =>
                          handleStatusChange(
                            order.id,
                            e.target.value
                          )
                        }
                        className="rounded-lg border px-3 py-2 outline-none focus:border-violet-500"
                      >
                        <option value="Pending">
                          قيد الانتظار
                        </option>

                        <option value="Processing">
                          قيد التجهيز
                        </option>

                        <option value="Delivered">
                          تم التسليم
                        </option>

                        <option value="Cancelled">
                          ملغي
                        </option>
                      </select>
                    </td>

                    <td className="px-6 py-4 text-center">
                      <button
                        className="rounded-lg bg-violet-600 p-2 text-white transition hover:bg-violet-700"
                        title="عرض الطلب"
                      >
                        <Eye size={18} />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>

          {orders.length === 0 && (
            <div className="py-10 text-center text-gray-500">
              لا توجد طلبات.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Orders;