function StatCard({
  title,
  value,
  icon: Icon,
  color = "bg-violet-100",
  iconColor = "text-violet-700",
}) {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-500">
            {title}
          </p>

          <h3 className="mt-2 text-3xl font-bold text-gray-800">
            {value}
          </h3>
        </div>

        <div
          className={`flex h-14 w-14 items-center justify-center rounded-2xl ${color}`}
        >
          {Icon && (
            <Icon
              size={28}
              className={iconColor}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default StatCard;