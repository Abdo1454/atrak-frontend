import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { register } from "../../api/authService";


function RegisterForm() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  });


  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);



  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };



  const validate = () => {
    const newErrors = {};


    if (!form.name.trim()) {
      newErrors.name = "الاسم مطلوب";
    }


    if (!form.email.trim()) {
      newErrors.email = "البريد الإلكتروني مطلوب";
    }


    if (!form.password) {
      newErrors.password = "كلمة المرور مطلوبة";
    } else if (form.password.length < 6) {
      newErrors.password =
        "كلمة المرور يجب أن تكون 6 أحرف على الأقل";
    }


    if (
      form.password !==
      form.password_confirmation
    ) {
      newErrors.password_confirmation =
        "تأكيد كلمة المرور غير مطابق";
    }


    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };



  const handleSubmit = async (e) => {
    e.preventDefault();


    if (!validate()) return;


    try {

      setLoading(true);


      const response = await register(form);



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

        setErrors(
          error.response.data.errors || {}
        );

      } else {

        setErrors({
          general:
            "حدث خطأ أثناء إنشاء الحساب"
        });

      }

    } finally {

      setLoading(false);

    }
  };



  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5"
    >

      {errors.general && (
        <p className="rounded-xl bg-red-50 p-3 text-center text-red-600">
          {errors.general}
        </p>
      )}



      {/* Name */}
      <div>
        <input
          name="name"
          type="text"
          value={form.name}
          onChange={handleChange}
          placeholder="الاسم الكامل"
          className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-violet-600 focus:outline-none"
        />

        {errors.name && (
          <p className="mt-1 text-sm text-red-500">
            {errors.name}
          </p>
        )}
      </div>



      {/* Email */}
      <div>
        <input
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          placeholder="البريد الإلكتروني"
          className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-violet-600 focus:outline-none"
        />

        {errors.email && (
          <p className="mt-1 text-sm text-red-500">
            {errors.email}
          </p>
        )}
      </div>



      {/* Password */}
      <div>
        <input
          name="password"
          type="password"
          value={form.password}
          onChange={handleChange}
          placeholder="كلمة المرور"
          className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-violet-600 focus:outline-none"
        />

        {errors.password && (
          <p className="mt-1 text-sm text-red-500">
            {errors.password}
          </p>
        )}
      </div>



      {/* Confirm Password */}
      <div>
        <input
          name="password_confirmation"
          type="password"
          value={form.password_confirmation}
          onChange={handleChange}
          placeholder="تأكيد كلمة المرور"
          className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-violet-600 focus:outline-none"
        />

        {errors.password_confirmation && (
          <p className="mt-1 text-sm text-red-500">
            {errors.password_confirmation}
          </p>
        )}
      </div>



      <button
        type="submit"
        disabled={loading}
        className={`w-full rounded-xl py-3 font-semibold text-white transition ${
          loading
            ? "cursor-not-allowed bg-gray-400"
            : "bg-violet-600 hover:bg-violet-700"
        }`}
      >
        {loading
          ? "جاري إنشاء الحساب..."
          : "إنشاء حساب"}
      </button>


    </form>
  );
}


export default RegisterForm;