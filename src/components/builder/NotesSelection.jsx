const notes = [
  { id: 1, name: "عود" },
  { id: 2, name: "فانيليا" },
  { id: 3, name: "مسك" },
  { id: 4, name: "ورد" },
  { id: 5, name: "ياسمين" },
  { id: 6, name: "حمضيات" },
  { id: 7, name: "عنبر" },
  { id: 8, name: "لافندر" },
];

function NotesSelection({ selectedNotes, setSelectedNotes }) {
  const toggleNote = (note) => {
    const exists = selectedNotes.some((item) => item.id === note.id);

    if (exists) {
      setSelectedNotes(
        selectedNotes.filter((item) => item.id !== note.id)
      );
    } else {
      setSelectedNotes([...selectedNotes, note]);
    }
  };

  return (
    <section className="py-16">
      <div className="mb-10 text-center">
        <span className="rounded-full bg-purple-100 px-4 py-2 text-sm font-semibold text-purple-700">
          الخطوة الثانية
        </span>

        <h2 className="mt-4 text-4xl font-bold text-gray-900">
          اختر النوتات
        </h2>

        <p className="mt-3 text-gray-600">
          يمكنك اختيار أكثر من نوتة لتكوين عطرك.
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {notes.map((note) => {
          const selected = selectedNotes.some(
            (item) => item.id === note.id
          );

          return (
            <button
              key={note.id}
              onClick={() => toggleNote(note)}
              className={`rounded-2xl border p-6 text-center font-semibold transition-all duration-300 ${
                selected
                  ? "border-purple-700 bg-purple-700 text-white shadow-lg"
                  : "border-gray-200 bg-white hover:border-purple-700 hover:text-purple-700"
              }`}
            >
              {note.name}
            </button>
          );
        })}
      </div>
    </section>
  );
}

export default NotesSelection;