import { Gift } from "lucide-react";

function GiftWrap({ enabled, onToggle }) {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-md">
      <div className="flex items-center justify-between">
        {/* Checkbox */}
        <input
          type="checkbox"
          checked={enabled}
          onChange={onToggle}
          className="h-5 w-5 accent-purple-700"
        />

        {/* Content */}
        <div className="flex items-center gap-3 text-right">
          <div>
            <h3 className="font-semibold text-gray-900">
              تغليف هدايا فاخر
            </h3>

            <p className="mt-1 text-sm text-gray-500">
              أضف تغليفًا فاخرًا لعطرك ليصل جاهزًا للإهداء.
            </p>

            <p className="mt-2 text-sm font-semibold text-purple-700">
              + $15.00
            </p>
          </div>

          <Gift
            className="text-purple-700"
            size={24}
          />
        </div>
      </div>
    </div>
  );
}

export default GiftWrap;