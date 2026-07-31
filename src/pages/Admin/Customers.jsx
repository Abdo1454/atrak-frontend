import { useMemo, useState } from "react";
import {
  Search,
  Eye,
  Trash2,
  Users,
  Mail,
  Phone,
} from "lucide-react";

function Customers() {
  const [search, setSearch] = useState("");

  const [customers] = useState([
    {
      id: 1,
      name: "Ahmed Ali",
      email: "ahmed@example.com",
      phone: "+20 100 123 4567",
      orders: 8,
      totalSpent: 6850,
      joinedAt: "20 Jul 2026",
    },
    {
      id: 2,
      name: "Sara Mohamed",
      email: "sara@example.com",
      phone: "+20 101 456 7890",
      orders: 5,
      totalSpent: 4320,
      joinedAt: "18 Jul 2026",
    },
    {
      id: 3,
      name: "Omar Hassan",
      email: "omar@example.com",
      phone: "+20 102 987 6543",
      orders: 3,
      totalSpent: 2890,
      joinedAt: "15 Jul 2026",
    },
    {
      id: 4,
      name: "Nour Ahmed",
      email: "nour@example.com",
      phone: "+20 103 654 9870",
      orders: 2,
      totalSpent: 1750,
      joinedAt: "10 Jul 2026",
    },
  ]);

  const filteredCustomers = useMemo(() => {
    const keyword = search.toLowerCase();

    return customers.filter(
      (customer) =>
        customer.name.toLowerCase().includes(keyword) ||
        customer.email.toLowerCase().includes(keyword)
    );
  }, [customers, search]);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">
            إدارة العملاء
          </h1>

          <p className="mt-2 text-gray-500">
            عرض جميع العملاء المسجلين في المتجر.
          </p>
        </div>

        <div className="flex items-center gap-2 rounded-xl bg-violet-100 px-5 py-3 text-violet-700">
          <Users size={22} />
          <span className="font-semibold">
            {customers.length} عميل
          </span>
        </div>
      </div>

      {/* Search */}
      <div className="rounded-2xl bg-white p-6 shadow-sm">
        <div className="relative">
          <Search
            size={20}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
          />

          <input
            type="text"
            placeholder="ابحث بالاسم أو البريد الإلكتروني..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-xl border py-3 pl-12 pr-4 outline-none focus:border-violet-500"
          />
        </div>
      </div>

      {/* Table */}
      <div className="overflow-hidden rounded-2xl bg-white shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-right">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-4">#</th>
                <th className="px-6 py-4">العميل</th>
                <th className="px-6 py-4">البريد</th>
                <th className="px-6 py-4">الهاتف</th>
                <th className="px-6 py-4">الطلبات</th>
                <th className="px-6 py-4">إجمالي الإنفاق</th>
                <th className="px-6 py-4">تاريخ التسجيل</th>
                <th className="px-6 py-4 text-center">
                 الإجراءات
                </th>
              </tr>
            </thead>

            <tbody>
              {filteredCustomers.length > 0 ? (
                filteredCustomers.map((customer) => (
                  <tr
                    key={customer.id}
                    className="border-b transition hover:bg-gray-50"
                  >
                    <td className="px-6 py-4 font-semibold">
                      {customer.id}
                    </td>

                    <td className="px-6 py-4">
                      <div className="font-semibold text-gray-800">
                        {customer.name}
                      </div>
                    </td>

                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <Mail size={16} />
                        {customer.email}
                      </div>
                    </td>

                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <Phone size={16} />
                        {customer.phone}
                      </div>
                    </td>

                    <td className="px-6 py-4">
                      {customer.orders}
                    </td>

                    <td className="px-6 py-4 font-semibold">
                      {customer.totalSpent} EGP
                    </td>

                    <td className="px-6 py-4">
                      {customer.joinedAt}
                    </td>

                    <td className="px-6 py-4">
                      <div className="flex justify-center gap-2">
                        <button
                          className="rounded-lg bg-blue-100 p-2 text-blue-700 transition hover:bg-blue-200"
                          title="عرض"
                        >
                          <Eye size={18} />
                        </button>

                        <button
                          className="rounded-lg bg-red-100 p-2 text-red-700 transition hover:bg-red-200"
                          title="حذف"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="8"
                    className="py-10 text-center text-gray-500"
                  >
                    لا يوجد عملاء مطابقون للبحث.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Customers;