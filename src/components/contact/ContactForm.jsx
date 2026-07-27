import { useState } from "react";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // سيتم ربط النموذج مع Laravel API لاحقًا
    console.log(formData);

    alert("تم إرسال رسالتك بنجاح.");
  };

  return (
    <section className="rounded-3xl bg-white p-8 shadow-lg">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900">
          أرسل لنا رسالة
        </h2>

        <p className="mt-2 text-gray-600">
          املأ النموذج التالي وسنتواصل معك في أقرب وقت.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label
            htmlFor="name"
            className="mb-2 block font-medium text-gray-700"
          >
            الاسم الكامل
          </label>

          <input
            id="name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="أدخل اسمك"
            required
            className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-purple-700"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="mb-2 block font-medium text-gray-700"
          >
            البريد الإلكتروني
          </label>

          <input
            id="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="example@email.com"
            required
            className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-purple-700"
          />
        </div>

        <div>
          <label
            htmlFor="subject"
            className="mb-2 block font-medium text-gray-700"
          >
            الموضوع
          </label>

          <input
            id="subject"
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="عنوان الرسالة"
            required
            className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-purple-700"
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="mb-2 block font-medium text-gray-700"
          >
            الرسالة
          </label>

          <textarea
            id="message"
            name="message"
            rows="6"
            value={formData.message}
            onChange={handleChange}
            placeholder="اكتب رسالتك هنا..."
            required
            className="w-full resize-none rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-purple-700"
          />
        </div>

        <button
          type="submit"
          className="w-full rounded-xl bg-purple-700 py-4 font-semibold text-white transition hover:bg-purple-800"
        >
          إرسال الرسالة
        </button>
      </form>
    </section>
  );
}

export default ContactForm;