function Newsletter() {
  return (
    <section className="bg-[#4E19AB] py-20">
      <div className="mx-auto max-w-4xl px-6 text-center">

        <h2 className="text-4xl font-bold text-white">
          اشترك في نشرتنا البريدية
        </h2>

        <p className="mt-4 text-lg text-purple-100">
          احصل على أحدث العروض والإصدارات الجديدة مباشرة إلى بريدك الإلكتروني.
        </p>

        <form className="mt-10 flex flex-col gap-4 md:flex-row">
          <input
            type="email"
            placeholder="أدخل بريدك الإلكتروني"
            className="flex-1 rounded-xl border-none bg-white px-5 py-4 outline-none"
          />

          <button
            type="submit"
            className="rounded-xl bg-amber-500 px-8 py-4 font-semibold text-white transition hover:bg-amber-600"
          >
            اشترك الآن
          </button>
        </form>

      </div>
    </section>
  );
}

export default Newsletter;