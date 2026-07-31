import { User } from "lucide-react";

function RecentCustomers({ customers = [] }) {
  return (
    <div className="overflow-hidden rounded-2xl bg-white shadow-sm">
      <div className="border-b px-6 py-5">
        <h2 className="text-xl font-bold text-gray-800">
          أحدث العملاء
        </h2>
      </div>

      <div className="divide-y">
        {customers.length > 0 ? (
          customers.map((customer) => (
            <div
              key={customer.id}
              className="flex items-center justify-between px-6 py-4 transition hover:bg-gray-50"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-violet-100 text-violet-700">
                  <User size={22} />
                </div>

                <div>
                  <h3 className="font-semibold text-gray-800">
                    {customer.name}
                  </h3>

                  <p className="text-sm text-gray-500">
                    {customer.email}
                  </p>
                </div>
              </div>

              <div>
                <span className="text-sm font-medium text-gray-600">
                  {customer.orders} طلبات
                </span>
              </div>
            </div>
          ))
        ) : (
          <p className="py-10 text-center text-gray-500">
            لا يوجد عملاء لعرضهم.
          </p>
        )}
      </div>
    </div>
  );
}

export default RecentCustomers;