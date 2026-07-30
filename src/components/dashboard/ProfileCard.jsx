import {
  Mail,
  Phone,
  MapPin,
  Calendar,
  UserRound,
  Pencil,
} from "lucide-react";

function ProfileCard({ user }) {
  return (
    <div className="rounded-2xl bg-white p-8 shadow-sm">
      {/* Header */}
      <div className="flex flex-col items-center border-b pb-6 md:flex-row md:justify-between">
        <div className="flex flex-col items-center gap-5 md:flex-row">
          <div className="flex h-24 w-24 items-center justify-center rounded-full bg-violet-100">
            <UserRound size={48} className="text-violet-700" />
          </div>

          <div className="text-center md:text-right">
            <h2 className="text-2xl font-bold text-gray-800">
              {user?.name}
            </h2>

            <p className="mt-1 text-gray-500">
              {user?.email}
            </p>
          </div>
        </div>

        <button className="mt-5 flex items-center gap-2 rounded-xl bg-violet-600 px-5 py-3 text-white transition hover:bg-violet-700 md:mt-0">
          <Pencil size={18} />
          تعديل الملف الشخصي
        </button>
      </div>

      {/* Details */}
      <div className="mt-8 grid gap-6 md:grid-cols-2">

        <div className="flex items-center gap-4 rounded-xl border p-4">
          <Mail className="text-violet-600" />
          <div>
            <p className="text-sm text-gray-500">البريد الإلكتروني</p>
            <p className="font-semibold">{user?.email}</p>
          </div>
        </div>

        <div className="flex items-center gap-4 rounded-xl border p-4">
          <Phone className="text-violet-600" />
          <div>
            <p className="text-sm text-gray-500">رقم الهاتف</p>
            <p className="font-semibold">
              {user?.phone || "غير مضاف"}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4 rounded-xl border p-4">
          <MapPin className="text-violet-600" />
          <div>
            <p className="text-sm text-gray-500">العنوان</p>
            <p className="font-semibold">
              {user?.address || "غير مضاف"}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4 rounded-xl border p-4">
          <Calendar className="text-violet-600" />
          <div>
            <p className="text-sm text-gray-500">تاريخ الانضمام</p>
            <p className="font-semibold">
              {user?.created_at
                ? new Date(user.created_at).toLocaleDateString("ar-EG")
                : "-"}
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default ProfileCard;