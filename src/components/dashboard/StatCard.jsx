function StatCard({
  title,
  value,
  icon: Icon,
  color = "bg-violet-600",
  textColor = "text-violet-600",
}) {
  return (
    <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-500">
            {title}
          </p>

          <h2 className="mt-2 text-3xl font-bold text-gray-800">
            {value}
          </h2>
        </div>

        <div
          className={`flex h-14 w-14 items-center justify-center rounded-2xl ${color}`}
        >
          {Icon && <Icon size={28} className="text-white" />}
        </div>
      </div>

      <div className="mt-6 h-1 rounded-full bg-gray-100">
        <div
          className={`h-full w-2/3 rounded-full ${color}`}
        ></div>
      </div>

      <p className={`mt-3 text-sm font-medium ${textColor}`}>
        تحديث لحظي
      </p>
    </div>
  );
}

export default StatCard;