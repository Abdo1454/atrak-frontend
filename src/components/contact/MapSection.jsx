import { MapPinned } from "lucide-react";

function MapSection() {
  return (
    <section className="py-16">
      <div className="overflow-hidden rounded-3xl bg-white shadow-lg">

        <div className="p-8 text-center">
          <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-purple-100 text-purple-700">
            <MapPinned size={32} />
          </div>

          <h2 className="text-3xl font-bold text-gray-900">
            موقعنا
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-gray-600">
            زورونا في مقرنا أو تواصل معنا للحصول على تجربة عطرية مميزة.
          </p>
        </div>


        <div className="h-80">
          <iframe
            title="Atrak Location"
            src="https://www.google.com/maps?q=Cairo,Egypt&output=embed"
            className="h-full w-full border-0"
            loading="lazy"
          ></iframe>
        </div>


        <div className="p-8 text-center">
          <a
            href="https://maps.google.com/?q=Cairo,Egypt"
            target="_blank"
            rel="noreferrer"
            className="inline-block rounded-xl bg-purple-700 px-8 py-3 font-semibold text-white transition hover:bg-purple-800"
          >
            فتح الموقع على الخريطة
          </a>
        </div>

      </div>
    </section>
  );
}

export default MapSection;