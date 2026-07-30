import { Link } from "react-router-dom";

import LoginHeader from "../../components/auth/LoginHeader";
import LoginForm from "../../components/auth/LoginForm";
import SocialLogin from "../../components/auth/SocialLogin";
function Login() {
  return (
    <main className="min-h-screen bg-gray-50 px-4 py-10">
      <div className="mx-auto grid min-h-[700px] max-w-6xl overflow-hidden rounded-3xl bg-white shadow-xl md:grid-cols-2">

        {/* Left Side Image */}
        <div className="relative hidden md:block">
          <img
            src="/images/login-perfume.jpg"
            alt="Luxury Perfume"
            className="h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-violet-900/80 to-transparent" />

          <div className="absolute bottom-10 left-10 right-10 text-white">
            <h2 className="mb-3 text-4xl font-bold">
              اكتشف عالم العطور الفاخرة
            </h2>

            <p className="leading-8 text-gray-200">
              استمتع بتجربة تسوق مميزة واكتشف عطرك الخاص مع عطرك.
            </p>
          </div>
        </div>


        {/* Right Side Form */}
        <div className="flex items-center justify-center p-6 sm:p-10">
          <div className="w-full max-w-md">

            <LoginHeader />

            <LoginForm />

            <SocialLogin />


            {/* Register Link */}
            <p className="mt-8 text-center text-sm text-gray-600">
              ليس لديك حساب؟

             <Link
  to="/register"
  className="mr-2 font-semibold text-violet-600 hover:underline"
>
  إنشاء حساب
</Link>

            </p>

          </div>
        </div>

      </div>
    </main>
  );
}

export default Login;