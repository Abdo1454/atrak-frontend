import Sidebar from "../../components/dashboard/Sidebar";
import Topbar from "../../components/dashboard/Topbar";
import StatCard from "../../components/dashboard/StatCard";
import OrderTable from "../../components/dashboard/OrderTable";

import {
  ShoppingBag,
  Clock3,
  CheckCircle2,
  Heart,
} from "lucide-react";

function Dashboard() {
  const orders = [
    {
      id: 1245,
      product: "Oud Royal",
      date: "30 Jul 2026",
      total: 850,
      status: "Delivered",
    },
    {
      id: 1248,
      product: "Amber Gold",
      date: "31 Jul 2026",
      total: 1200,
      status: "Pending",
    },
    {
      id: 1250,
      product: "Musk Luxury",
      date: "01 Aug 2026",
      total: 990,
      status: "Processing",
    },
  ];

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />

      <main className="flex-1">
        <Topbar />

        <div className="space-y-8 p-6">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            <StatCard
              title="إجمالي الطلبات"
              value="12"
              icon={ShoppingBag}
              color="bg-violet-600"
              textColor="text-violet-600"
            />

            <StatCard
              title="قيد التنفيذ"
              value="3"
              icon={Clock3}
              color="bg-amber-500"
              textColor="text-amber-600"
            />

            <StatCard
              title="طلبات مكتملة"
              value="8"
              icon={CheckCircle2}
              color="bg-emerald-600"
              textColor="text-emerald-600"
            />

            <StatCard
              title="المفضلة"
              value="15"
              icon={Heart}
              color="bg-rose-500"
              textColor="text-rose-500"
            />
          </div>

          <OrderTable orders={orders} />
        </div>
      </main>
    </div>
  );
}

export default Dashboard;