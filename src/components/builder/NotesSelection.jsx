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
  const MAX_NOTES = 3;

  const toggleNote = (note) => {
    const exists = selectedNotes.some((item) => item.id === note.id);

    if (exists) {
      setSelectedNotes(
        selectedNotes.filter((item) => item.id !== note.id)
      );
      return;
    }

    if (selectedNotes.length >= MAX_NOTES) {
      alert(`يمكنك اختيار ${MAX_NOTES} نوتات فقط`);
      return;
    }

    setSelectedNotes([...selectedNotes, note]);
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
          اختر حتى 3 نوتات لتكوين عطرك.
        </p>

        <p className="mt-2 text-sm font-semibold text-purple-700">
          {selectedNotes.length} / {MAX_NOTES} مختارة
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
                  ? "border-purple-700 bg-purple-700 text-white shadow-lg scale-105"
                  : "border-gray-200 bg-white hover:-translate-y-1 hover:border-purple-700 hover:text-purple-700 hover:shadow-md"
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