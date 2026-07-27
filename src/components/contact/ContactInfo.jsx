import {
  MapPin,
  Phone,
  Mail,
  Clock,
} from "lucide-react";

const contactInfo = [
  {
    id: 1,
    icon: <MapPin size={28} />,
    title: "العنوان",
    value: "القاهرة، مصر",
    description: "يمكنك زيارتنا خلال ساعات العمل الرسمية.",
  },
  {
    id: 2,
    icon: <Phone size={28} />,
    title: "الهاتف",
    value: "+20 123 456 7890",
    description: "متاح يوميًا للرد على جميع استفساراتك.",
  },
  {
    id: 3,
    icon: <Mail size={28} />,
    title: "البريد الإلكتروني",
    value: "support@atrak.com",
    description: "راسلنا وسنرد عليك في أقرب وقت.",
  },
  {
    id: 4,
    icon: <Clock size={28} />,
    title: "ساعات العمل",
    value: "السبت - الخميس",
    description: "09:00 صباحًا - 09:00 مساءً",
  },
];

function ContactInfo() {
  return (
    <section className="py-16">
      <div className="mb-12 text-center">
        <span className="rounded-full bg-purple-100 px-4 py-2 text-sm font-semibold text-purple-700">
          معلومات التواصل
        </span>

        <h2 className="mt-4 text-4xl font-bold text-gray-900">
          يسعدنا التواصل معك
        </h2>

        <p className="mx-auto mt-4 max-w-3xl text-lg text-gray-600">
          يمكنك التواصل معنا عبر أي من الوسائل التالية، وسيسعد فريقنا بمساعدتك.
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {contactInfo.map((item) => (
          <div
            key={item.id}
            className="rounded-3xl bg-white p-8 text-center shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
          >
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-purple-100 text-purple-700">
              {item.icon}
            </div>

            <h3 className="mb-3 text-2xl font-bold text-gray-900">
              {item.title}
            </h3>

            <p className="font-semibold text-purple-700">
              {item.value}
            </p>

            <p className="mt-3 leading-7 text-gray-600">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ContactInfo;