const teamMembers = [
  {
    id: 1,
    name: "أحمد محمد",
    role: "Founder & CEO",
    image: "/images/about/team-1.jpg",
  },
  {
    id: 2,
    name: "سارة علي",
    role: "Perfume Expert",
    image: "/images/about/team-2.jpg",
  },
  {
    id: 3,
    name: "محمد خالد",
    role: "Creative Director",
    image: "/images/about/team-3.jpg",
  },
  {
    id: 4,
    name: "نور أحمد",
    role: "Customer Success",
    image: "/images/about/team-4.jpg",
  },
];

function TeamSection() {
  return (
    <section className="py-16">
      <div className="mb-12 text-center">
        <span className="rounded-full bg-purple-100 px-4 py-2 text-sm font-semibold text-purple-700">
          فريقنا
        </span>

        <h2 className="mt-4 text-4xl font-bold text-gray-900">
          تعرف على فريق عطرك
        </h2>

        <p className="mx-auto mt-4 max-w-3xl text-lg text-gray-600">
          فريق يجمع بين الخبرة والإبداع لتقديم تجربة استثنائية في عالم العطور.
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {teamMembers.map((member) => (
          <div
            key={member.id}
            className="overflow-hidden rounded-3xl bg-white shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
          >
            <img
              src={member.image}
              alt={member.name}
              className="h-80 w-full object-cover"
            />

            <div className="p-6 text-center">
              <h3 className="text-2xl font-bold text-gray-900">
                {member.name}
              </h3>

              <p className="mt-2 text-purple-700 font-medium">
                {member.role}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TeamSection;