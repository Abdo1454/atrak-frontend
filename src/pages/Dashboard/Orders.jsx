import Sidebar from "../../components/dashboard/Sidebar";
import Topbar from "../../components/dashboard/Topbar";
import OrderTable from "../../components/dashboard/OrderTable";

function Orders() {
  const orders = [];

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />

      <main className="flex-1">
        <Topbar />

        <div className="p-6">
          <OrderTable orders={orders} />
        </div>
      </main>
    </div>
  );
}

export default Orders;