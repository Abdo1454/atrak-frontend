import {
  Package,
  ShoppingCart,
  Users,
  DollarSign,
  Bell,
  Mail,
} from "lucide-react";

import StatCard from "../../components/admin/StatCard";
import SalesChart from "../../components/admin/SalesChart";
import OrdersTable from "../../components/admin/OrdersTable";
import RecentCustomers from "../../components/admin/RecentCustomers";

function Dashboard() {
  const stats = [
    {
      title: "إجمالي المنتجات",
      value: 45,
      icon: Package,
      color: "bg-blue-500",
    },
    {
      title: "إجمالي الطلبات",
      value: 132,
      icon: ShoppingCart,
      color: "bg-green-500",
    },
    {
      title: "العملاء",
      value: 86,
      icon: Users,
      color: "bg-orange-500",
    },
    {
      title: "الإيرادات",
      value: "25,450 EGP",
      icon: DollarSign,
      color: "bg-violet-600",
    },
    {
      title: "الطلبات الجديدة",
      value: 12,
      icon: Bell,
      color: "bg-yellow-500",
    },
    {
      title: "الرسائل الجديدة",
      value: 5,
      icon: Mail,
      color: "bg-red-500",
    },
  ];

  const orders = [
    {
      id: 1001,
      customer: "Ahmed Ali",
      product: "Royal Oud",
      date: "31 Jul 2026",
      total: 850,
      status: "Delivered",
    },
    {
      id: 1002,
      customer: "Sara Mohamed",
      product: "Amber Gold",
      date: "31 Jul 2026",
      total: 650,
      status: "Pending",
    },
    {
      id: 1003,
      customer: "Omar Hassan",
      product: "Musk White",
      date: "30 Jul 2026",
      total: 990,
      status: "Processing",
    },
  ];

  const customers = [
    {
      id: 1,
      name: "Ahmed Ali",
      email: "ahmed@example.com",
      orders: 8,
    },
    {
      id: 2,
      name: "Sara Mohamed",
      email: "sara@example.com",
      orders: 5,
    },
    {
      id: 3,
      name: "Mohamed Adel",
      email: "adel@example.com",
      orders: 3,
    },
    {
      id: 4,
      name: "Nour Ahmed",
      email: "nour@example.com",
      orders: 2,
    },
  ];

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

      {/* Statistics */}
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

      {/* Charts */}
      <SalesChart />

      {/* Tables */}
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