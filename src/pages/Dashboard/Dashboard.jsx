import { useEffect, useState } from "react";
import {
  ShoppingBag,
  Clock3,
  CheckCircle2,
  Heart,
} from "lucide-react";

import dashboardService from "../../api/dashboardService";

import StatCard from "../../components/dashboard/StatCard";
import OrderTable from "../../components/dashboard/OrderTable";
import ProfileCard from "../../components/dashboard/ProfileCard";

function Dashboard() {
  const [loading, setLoading] = useState(true);

  const [stats, setStats] = useState({
    total_orders: 0,
    pending_orders: 0,
    completed_orders: 0,
    favorites: 0,
  });

  const [orders, setOrders] = useState([]);

  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || {}
  );

  useEffect(() => {
    const fetchDashboard = async () => {
      try {
        const response = await dashboardService.getDashboard();

        const data = response.data;

        setStats(data.stats);

        setOrders(data.orders);

        if (data.user) {
          setUser(data.user);
          localStorage.setItem(
            "user",
            JSON.stringify(data.user)
          );
        }
      } catch (error) {
        console.error("Dashboard Error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDashboard();
  }, []);

  if (loading) {
    return (
      <div className="flex h-96 items-center justify-center">
        <p className="text-lg text-gray-500">
          جاري تحميل البيانات...
        </p>
      </div>
    );
  }

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
            value={stats.total_orders}
            icon={ShoppingBag}
            color="bg-violet-100"
            iconColor="text-violet-700"
          />

          <StatCard
            title="طلبات قيد التنفيذ"
            value={stats.pending_orders}
            icon={Clock3}
            color="bg-yellow-100"
            iconColor="text-yellow-600"
          />

          <StatCard
            title="طلبات مكتملة"
            value={stats.completed_orders}
            icon={CheckCircle2}
            color="bg-green-100"
            iconColor="text-green-600"
          />

          <StatCard
            title="المفضلة"
            value={stats.favorites}
            icon={Heart}
            color="bg-pink-100"
            iconColor="text-pink-600"
          />
        </div>
      </section>

      {/* Orders + Profile */}
      <div className="grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <OrderTable orders={orders} />
        </div>

        <div>
          <ProfileCard user={user} />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;