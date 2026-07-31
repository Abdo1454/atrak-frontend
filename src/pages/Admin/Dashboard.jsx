import { useEffect, useState } from "react";
import {
  Package,
  ShoppingCart,
  Users,
  DollarSign,
  Bell,
  Mail,
} from "lucide-react";

import adminService from "../../api/adminService";

import StatCard from "../../components/admin/StatCard";
import SalesChart from "../../components/admin/SalesChart";
import OrdersTable from "../../components/admin/OrdersTable";
import RecentCustomers from "../../components/admin/RecentCustomers";

function Dashboard() {
  const [loading, setLoading] = useState(true);

  const [stats, setStats] = useState([]);

  const [orders, setOrders] = useState([]);

  const [customers, setCustomers] = useState([]);

  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    loadDashboard();
  }, []);

  const loadDashboard = async () => {
    try {
      const { data } = await adminService.getDashboard();

      setStats([
        {
          title: "إجمالي المنتجات",
          value: data.products,
          icon: Package,
          color: "bg-blue-500",
        },
        {
          title: "إجمالي الطلبات",
          value: data.orders,
          icon: ShoppingCart,
          color: "bg-green-500",
        },
        {
          title: "العملاء",
          value: data.customers,
          icon: Users,
          color: "bg-orange-500",
        },
        {
          title: "الإيرادات",
          value: `${Number(data.revenue).toLocaleString()} EGP`,
          icon: DollarSign,
          color: "bg-violet-600",
        },
        {
          title: "الطلبات الجديدة",
          value: data.new_orders,
          icon: Bell,
          color: "bg-yellow-500",
        },
        {
          title: "الرسائل الجديدة",
          value: data.new_messages,
          icon: Mail,
          color: "bg-red-500",
        },
      ]);

      setOrders(data.latest_orders || []);

      setCustomers(data.latest_customers || []);

      setChartData(data.sales_chart || []);
    } catch (error) {
      console.error("Dashboard Error:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex h-96 items-center justify-center">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-violet-600 border-t-transparent"></div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-800">
          لوحة التحكم
        </h1>

        <p className="mt-2 text-gray-500">
          مرحبًا بك في لوحة إدارة متجر عطرك.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {stats.map((item) => (
          <StatCard
            key={item.title}
            title={item.title}
            value={item.value}
            icon={item.icon}
            color={item.color}
          />
        ))}
      </div>

      <SalesChart data={chartData} />

      <div className="grid gap-6 xl:grid-cols-3">
        <div className="xl:col-span-2">
          <OrdersTable orders={orders} />
        </div>

        <RecentCustomers customers={customers} />
      </div>
    </div>
  );
}

export default Dashboard;