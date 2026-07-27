const notes = [
  {
    id: 1,
    name: "الفانيليا",
    description: "رائحة دافئة وحلوة تمنح العطر لمسة ناعمة.",
  },
  {
    id: 2,
    name: "العود",
    description: "رائحة شرقية فاخرة وعميقة.",
  },
  {
    id: 3,
    name: "الورد",
    description: "لمسة زهرية أنيقة ومنعشة.",
  },
  {
    id: 4,
    name: "المسك",
    description: "ثبات عالي ورائحة ناعمة وجذابة.",
  },
  {
    id: 5,
    name: "الحمضيات",
    description: "انتعاش وحيوية تدوم طوال اليوم.",
  },
  {
    id: 6,
    name: "العنبر",
    description: "دفء وغموض يضيفان عمقًا للعطر.",
  },
];

function NotesSelection() {
  return (
    <section className="py-16">
      <div className="mb-10 text-center">
        <span className="rounded-full bg-purple-100 px-4 py-2 text-sm font-semibold text-purple-700">
          الخطوة الثانية
        </span>

        <h2 className="mt-4 text-4xl font-bold text-gray-900">
          اختر النوتات العطرية
        </h2>

        <p className="mt-3 text-gray-600">
          يمكنك اختيار النوتات التي ترغب في إضافتها إلى عطرك.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {notes.map((note) => (
          <div
            key={note.id}
            className="cursor-pointer rounded-3xl border border-gray-200 bg-white p-6 shadow-md transition hover:-translate-y-2 hover:border-purple-600 hover:shadow-xl"
          >
            <h3 className="text-2xl font-bold text-gray-900">
              {note.name}
            </h3>

            <p className="mt-3 leading-7 text-gray-600">
              {note.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default NotesSelection;