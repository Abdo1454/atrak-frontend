import { useState } from "react";
import { Eye, EyeOff, Mail, Lock } from "lucide-react";
import { useNavigate } from "react-router-dom";

import { login } from "../../api/authService";

function LoginForm() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [apiError, setApiError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);


  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };


  const validate = () => {
    const newErrors = {};

    if (!form.email) {
      newErrors.email = "البريد الإلكتروني مطلوب";
    }

    if (!form.password) {
      newErrors.password = "كلمة المرور مطلوبة";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    setApiError("");

    if (!validate()) return;


    try {
      setLoading(true);

      const response = await login({
        email: form.email,
        password: form.password,
      });


      /*
        Laravel Sanctum يرجع:
        {
          user: {},
          token: ""
        }
      */

      localStorage.setItem(
        "token",
        response.token
      );


      localStorage.setItem(
        "user",
        JSON.stringify(response.user)
      );


      navigate("/");


    } catch (error) {

      if (error.response?.status === 422) {
        setApiError(
          "بيانات الدخول غير صحيحة"
        );
      } else {
        setApiError(
          "حدث خطأ أثناء تسجيل الدخول"
        );
      }

    } finally {
      setLoading(false);
    }
  };


  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6"
    >

      {apiError && (
        <div className="rounded-xl bg-red-50 p-3 text-center text-sm text-red-600">
          {apiError}
        </div>
      )}


      {/* Email */}
      <div>
        <label className="mb-2 block font-medium">
          البريد الإلكتروني
        </label>

        <div className="relative">

          <Mail
            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
            size={20}
          />

          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="w-full rounded-xl border px-12 py-3 outline-none focus:border-violet-600"
            placeholder="example@email.com"
          />

        </div>

        {errors.email && (
          <p className="mt-2 text-sm text-red-500">
            {errors.email}
          </p>
        )}

      </div>



      {/* Password */}
      <div>

        <label className="mb-2 block font-medium">
          كلمة المرور
        </label>


        <div className="relative">

          <Lock
            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
            size={20}
          />


          <input
            type={
              showPassword
              ? "text"
              : "password"
            }
            name="password"
            value={form.password}
            onChange={handleChange}
            className="w-full rounded-xl border px-12 py-3 outline-none focus:border-violet-600"
            placeholder="********"
          />


          <button
            type="button"
            onClick={() =>
              setShowPassword(!showPassword)
            }
            className="absolute left-4 top-1/2 -translate-y-1/2"
          >

            {
              showPassword
              ? <EyeOff size={20}/>
              : <Eye size={20}/>
            }

          </button>

        </div>


        {errors.password && (
          <p className="mt-2 text-sm text-red-500">
            {errors.password}
          </p>
        )}

      </div>



      <button
        disabled={loading}
        className="w-full rounded-xl bg-violet-600 py-3 font-semibold text-white transition hover:bg-violet-700 disabled:bg-gray-400"
      >

        {
          loading
          ? "جاري تسجيل الدخول..."
          : "تسجيل الدخول"
        }

      </button>


    </form>
  );
}


export default LoginForm;