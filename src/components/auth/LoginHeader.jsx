import { Sparkles } from "lucide-react";

function LoginHeader() {
  return (
    <div className="mb-8 text-center">
      {/* Logo */}
      <div className="mb-5 flex justify-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-violet-600 text-white shadow-lg">
          <Sparkles size={30} />
        </div>
      </div>

      {/* Brand */}
      <h1 className="mb-2 text-3xl font-extrabold text-violet-700">
        عطرك
      </h1>

      {/* Title */}
      <h2 className="mb-3 text-2xl font-bold text-gray-900">
        تسجيل الدخول
      </h2>

      {/* Description */}
      <p className="mx-auto max-w-sm leading-7 text-gray-500">
        سجّل الدخول إلى حسابك للاستمرار في التسوق، متابعة طلباتك،
        وإدارة قائمة المفضلة الخاصة بك.
      </p>
    </div>
  );
}

export default LoginHeader;