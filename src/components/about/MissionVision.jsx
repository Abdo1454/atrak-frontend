import { Target, Eye } from "lucide-react";

function MissionVision() {
  return (
    <section className="py-10">
      <div className="mb-12 text-center">
        <span className="rounded-full bg-purple-100 px-4 py-2 text-sm font-semibold text-purple-700">
          رؤيتنا ورسالتنا
        </span>

        <h2 className="mt-4 text-4xl font-bold text-gray-900">
          نبني تجربة عطور استثنائية
        </h2>

        <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-gray-600">
          نسعى إلى تقديم تجربة متكاملة تجمع بين الجودة والابتكار، مع تمكين كل
          عميل من التعبير عن شخصيته من خلال عطر صُمم خصيصًا له.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        {/* Mission */}
        <div className="rounded-3xl border border-purple-100 bg-white p-8 shadow-lg transition hover:-translate-y-2 hover:shadow-2xl">
          <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-purple-100">
            <Target className="text-purple-700" size={32} />
          </div>

          <h3 className="mb-4 text-3xl font-bold text-gray-900">
            رسالتنا
          </h3>

          <p className="leading-8 text-gray-600">
            تقديم عطور فاخرة مصنوعة بعناية فائقة، مع منح عملائنا تجربة فريدة
            لتخصيص عطورهم باستخدام أجود المكونات العالمية، مع الحفاظ على أعلى
            معايير الجودة والتميز.
          </p>
        </div>

        {/* Vision */}
        <div className="rounded-3xl border border-yellow-100 bg-gradient-to-br from-purple-900 to-black p-8 text-white shadow-lg transition hover:-translate-y-2 hover:shadow-2xl">
          <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10">
            <Eye className="text-yellow-400" size={32} />
          </div>

          <h3 className="mb-4 text-3xl font-bold">
            رؤيتنا
          </h3>

          <p className="leading-8 text-gray-300">
            أن تصبح <span className="font-semibold text-yellow-400">عطرك</span>
            الوجهة الأولى في الشرق الأوسط للعطور الفاخرة المخصصة، من خلال الجمع
            بين التكنولوجيا والإبداع والحرفية لتقديم تجربة لا تُنسى لكل عميل.
          </p>
        </div>
      </div>
    </section>
  );
}

export default MissionVision;