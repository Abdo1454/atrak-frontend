import { Link } from "react-router-dom";
import { PhoneCall } from "lucide-react";

function HeroSection() {
  return (
    <section className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-purple-950 via-purple-900 to-black px-6 py-20 text-white shadow-2xl md:px-16">
      {/* Background Effects */}
      <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-yellow-400/20 blur-3xl"></div>
      <div className="absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-purple-500/20 blur-3xl"></div>

      <div className="relative z-10 grid items-center gap-12 lg:grid-cols-2">
        {/* Content */}
        <div className="text-center lg:text-right">
          <span className="rounded-full border border-yellow-400/30 bg-yellow-400/10 px-4 py-2 text-sm font-semibold text-yellow-300">
            نحن هنا لمساعدتك
          </span>

          <h1 className="mt-6 text-4xl font-extrabold leading-tight md:text-6xl">
            تواصل مع <span className="text-yellow-400">عطرك</span>
          </h1>

          <p className="mt-6 text-lg leading-8 text-gray-300">
            إذا كان لديك أي استفسار حول منتجاتنا، أو تحتاج إلى مساعدة في اختيار
            العطر المناسب، أو ترغب في متابعة طلبك، يسعد فريقنا بخدمتك في أي وقت.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
            <Link
              to="/products"
              className="rounded-xl bg-yellow-400 px-8 py-3 font-semibold text-black transition hover:bg-yellow-300"
            >
              استكشف العطور
            </Link>

            <a
              href="tel:+201234567890"
              className="flex items-center justify-center gap-2 rounded-xl border border-white/30 px-8 py-3 font-semibold transition hover:bg-white/10"
            >
              <PhoneCall size={20} />
              اتصل بنا
            </a>
          </div>
        </div>

        {/* Image */}
        <div className="flex justify-center">
          <img
            src="/images/contact/contact-hero.jpg"
            alt="Contact Atrak"
            className="w-full max-w-md drop-shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;