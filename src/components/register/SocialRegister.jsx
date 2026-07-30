import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";

function SocialRegister() {
  return (
    <div className="mt-8">

      {/* Divider */}
      <div className="mb-6 flex items-center gap-3">

        <div className="h-px flex-1 bg-gray-200" />

        <span className="text-sm text-gray-500">
          أو التسجيل باستخدام
        </span>

        <div className="h-px flex-1 bg-gray-200" />

      </div>



      {/* Social Buttons */}
      <div className="grid grid-cols-2 gap-4">

        <button
          type="button"
          className="flex items-center justify-center gap-3 rounded-xl border border-gray-300 py-3 font-medium transition hover:bg-gray-50"
        >
          <FcGoogle size={22} />

          Google
        </button>



        <button
          type="button"
          className="flex items-center justify-center gap-3 rounded-xl border border-gray-300 py-3 font-medium transition hover:bg-gray-50"
        >
          <FaFacebookF
            size={20}
            className="text-blue-600"
          />

          Facebook
        </button>

      </div>

    </div>
  );
}

export default SocialRegister;