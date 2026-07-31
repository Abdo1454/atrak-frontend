import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";


function SalesChart() {

  const salesData = [
    {
      name: "السبت",
      sales: 4500,
      orders: 12,
    },
    {
      name: "الأحد",
      sales: 6200,
      orders: 18,
    },
    {
      name: "الإثنين",
      sales: 5200,
      orders: 15,
    },
    {
      name: "الثلاثاء",
      sales: 7800,
      orders: 25,
    },
    {
      name: "الأربعاء",
      sales: 6900,
      orders: 20,
    },
    {
      name: "الخميس",
      sales: 8500,
      orders: 30,
    },
    {
      name: "الجمعة",
      sales: 9200,
      orders: 35,
    },
  ];


  return (
    <div className="space-y-6">

      {/* Sales Chart */}
      <div className="rounded-2xl bg-white p-6 shadow-sm">

        <div className="mb-6">
          <h2 className="text-xl font-bold text-gray-800">
            المبيعات آخر 7 أيام
          </h2>

          <p className="text-sm text-gray-500">
            متابعة الإيرادات اليومية
          </p>
        </div>


        <ResponsiveContainer width="100%" height={350}>

          <AreaChart data={salesData}>

            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="name" />

            <YAxis />

            <Tooltip />


            <Area
              type="monotone"
              dataKey="sales"
              stroke="#7C3AED"
              fill="#DDD6FE"
            />

          </AreaChart>

        </ResponsiveContainer>

      </div>



      {/* Orders Chart */}
      <div className="rounded-2xl bg-white p-6 shadow-sm">

        <div className="mb-6">

          <h2 className="text-xl font-bold text-gray-800">
            الطلبات خلال الأسبوع
          </h2>

          <p className="text-sm text-gray-500">
            عدد الطلبات اليومية
          </p>

        </div>


        <ResponsiveContainer width="100%" height={300}>

          <BarChart data={salesData}>

            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="name" />

            <YAxis />

            <Tooltip />


            <Bar
              dataKey="orders"
              fill="#F59E0B"
              radius={[8,8,0,0]}
            />

          </BarChart>

        </ResponsiveContainer>


      </div>


    </div>
  );
}


export default SalesChart;