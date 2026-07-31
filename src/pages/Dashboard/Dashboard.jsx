import {
  ShoppingBag,
  Clock3,
  CheckCircle2,
  Heart,
} from "lucide-react";

import StatCard from "../../components/dashboard/StatCard";
import OrderTable from "../../components/dashboard/OrderTable";
import ProfileCard from "../../components/dashboard/ProfileCard";

function Dashboard() {
  const user =
    JSON.parse(localStorage.getItem("user")) || {};

  return (
    <div className="space-y-8">
      {/* Welcome */}
      <div className="rounded-2xl bg-gradient-to-r from-violet-700 to-purple-600 p-8 text-white shadow-lg">
        <h1 className="text-3xl font-bold">
          مرحبًا {user.name || "بك"} 👋
        </h1>

        <p className="mt-2 text-violet-100">
          استمتع بإدارة حسابك ومتابعة طلباتك بكل سهولة.
        </p>
      </div>

      {/* Statistics */}
      <section>
        <h2 className="mb-5 text-xl font-bold text-gray-800">
          إحصائيات الحساب
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          <StatCard
            title="إجمالي الطلبات"
            value={12}
            icon={ShoppingBag}
            color="bg-violet-100"
            iconColor="text-violet-700"
          />

          <StatCard
            title="طلبات قيد التنفيذ"
            value={3}
            icon={Clock3}
            color="bg-yellow-100"
            iconColor="text-yellow-600"
          />

          <StatCard
            title="طلبات مكتملة"
            value={9}
            icon={CheckCircle2}
            color="bg-green-100"
            iconColor="text-green-600"
          />

          <StatCard
            title="المفضلة"
            value={6}
            icon={Heart}
            color="bg-pink-100"
            iconColor="text-pink-600"
          />
        </div>
      </section>

      {/* Orders + Profile */}
      <div className="grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <OrderTable />
        </div>

        <div>
          <ProfileCard />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;