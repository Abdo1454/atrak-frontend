import { Link } from "react-router-dom";

import RegisterHeader from "../../components/register/RegisterHeader";
import RegisterForm from "../../components/register/RegisterForm";
import SocialRegister from "../../components/register/SocialRegister";


function Register() {
  return (
    <main className="min-h-screen bg-gray-50 px-4 py-12">

      <div className="mx-auto w-full max-w-md rounded-2xl bg-white p-8 shadow-lg">

        <RegisterHeader />

        <RegisterForm />

        <SocialRegister />

        <p className="mt-6 text-center text-sm text-gray-500">

          لديك حساب بالفعل؟{" "}

          <a
            href="/login"
            className="font-semibold text-violet-600 hover:text-violet-700"
          >
            تسجيل الدخول
          </a>

        </p>

      </div>

    </main>
  );
}


export default Register;