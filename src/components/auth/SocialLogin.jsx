import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaApple } from "react-icons/fa";

function SocialLogin() {
  const socialButtons = [
    {
      id: "google",
      name: "Google",
      icon: <FcGoogle size={22} />,
    },
    {
      id: "facebook",
      name: "Facebook",
      icon: <FaFacebook size={22} className="text-blue-600" />,
    },
    {
      id: "apple",
      name: "Apple",
      icon: <FaApple size={22} />,
    },
  ];

  const handleSocialLogin = (provider) => {
    // سيتم ربط OAuth مع Laravel لاحقًا
    console.log(`Login with ${provider}`);
  };

  return (
    <div className="mt-8">
      {/* Divider */}
      <div className="mb-6 flex items-center gap-4">
        <div className="h-px flex-1 bg-gray-200"></div>

        <span className="text-sm text-gray-500">
          أو تسجيل الدخول بواسطة
        </span>

        <div className="h-px flex-1 bg-gray-200"></div>
      </div>

      {/* Social Buttons */}
      <div className="grid grid-cols-3 gap-3">
        {socialButtons.map((button) => (
          <button
            key={button.id}
            type="button"
            onClick={() =>
              handleSocialLogin(button.name)
            }
            className="flex items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white py-3 transition hover:bg-gray-50"
          >
            {button.icon}

            <span className="hidden text-sm font-medium text-gray-700 sm:block">
              {button.name}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}

export default SocialLogin;