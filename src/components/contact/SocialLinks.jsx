import {
  FaInstagram,
  FaFacebook,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

const socialLinks = [
  {
    id: 1,
    name: "Instagram",
    icon: <FaInstagram size={28} />,
    link: "#",
  },
  {
    id: 2,
    name: "Facebook",
    icon: <FaFacebook size={28} />,
    link: "#",
  },
  {
    id: 3,
    name: "LinkedIn",
    icon: <FaLinkedin size={28} />,
    link: "#",
  },
  {
    id: 4,
    name: "Twitter",
    icon: <FaTwitter size={28} />,
    link: "#",
  },
];

function SocialLinks() {
  return (
    <section className="py-16">
      <div className="text-center">
        <span className="rounded-full bg-purple-100 px-4 py-2 text-sm font-semibold text-purple-700">
          تابعنا
        </span>

        <h2 className="mt-5 text-4xl font-bold text-gray-900">
          كن قريبًا منا
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-gray-600">
          تابع أخبارنا وأحدث العطور والعروض من خلال صفحاتنا على مواقع التواصل.
        </p>
      </div>


      <div className="mt-10 flex flex-wrap justify-center gap-6">
        {socialLinks.map((item) => (
          <a
            key={item.id}
            href={item.link}
            className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-purple-700 shadow-lg transition hover:-translate-y-2 hover:bg-purple-700 hover:text-white"
            aria-label={item.name}
          >
            {item.icon}
          </a>
        ))}
      </div>
    </section>
  );
}

export default SocialLinks;