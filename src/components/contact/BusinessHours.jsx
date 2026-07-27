import { Clock3 } from "lucide-react";

const hours = [
  {
    day: "السبت - الخميس",
    time: "09:00 صباحًا - 09:00 مساءً",
  },
  {
    day: "الجمعة",
    time: "02:00 مساءً - 10:00 مساءً",
  },
];

function BusinessHours() {
  return (
    <section className="py-16">
      <div className="rounded-3xl bg-gradient-to-r from-purple-700 to-purple-900 p-10 text-white shadow-xl">
        <div className="mb-8 flex flex-col items-center text-center">
          <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/20">
            <Clock3 size={32} />
          </div>

          <h2 className="text-3xl font-bold">
            ساعات العمل
          </h2>

          <p className="mt-3 max-w-xl text-purple-100">
            نحن متواجدون لخدمتك ومساعدتك في اختيار عطرك المثالي.
          </p>
        </div>

        <div className="mx-auto grid max-w-3xl gap-5 sm:grid-cols-2">
          {hours.map((item, index) => (
            <div
              key={index}
              className="rounded-2xl bg-white/10 p-6 text-center backdrop-blur-sm"
            >
              <h3 className="text-xl font-bold">
                {item.day}
              </h3>

              <p className="mt-3 text-purple-100">
                {item.time}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BusinessHours;