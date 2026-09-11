import { createFileRoute, Link } from "@tanstack/react-router";
import mindmapImg from "@/assets/mode-mindmap.jpg";
import vrImg from "@/assets/mode-vr.jpg";
import simImg from "@/assets/mode-sim.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "خدماتنا | منصة زانا التعليمية" },
      {
        name: "description",
        content:
          "خدمات منصة زانا: خرائط ذهنية لكل درس، جولات افتراضية VR، وبيئات محاكاة للتجارب العلمية لطلاب الابتدائي والإعدادي.",
      },
      { property: "og:title", content: "خدماتنا | منصة زانا التعليمية" },
      {
        property: "og:description",
        content: "خرائط ذهنية، جولات افتراضية، وبيئات محاكاة للتجارب العلمية.",
      },
    ],
  }),
  component: ServicesPage,
});

const services = [
  {
    img: mindmapImg,
    title: "الخرائط الذهنية",
    text: "نلخّص كل درس بخريطة ملوّنة تربط المفاهيم ببعضها، فيصبح الحفظ فهماً والمراجعة دقائق بدل ساعات.",
    points: ["تلخيص بصري لكل درس", "ألوان ورموز تسهّل التذكر", "مناسبة للمراجعة قبل الامتحان"],
  },
  {
    img: vrImg,
    title: "الجولات الافتراضية VR",
    text: "ننقل الطالب إلى داخل الدرس: المجموعة الشمسية، جسم الإنسان، المواقع التاريخية والجغرافية بجولة ثلاثية الأبعاد.",
    points: ["تجربة غامرة 360 درجة", "تعمل بالنظارة أو من المتصفح", "مرتبطة بمنهاج الصف"],
  },
  {
    img: simImg,
    title: "بيئات المحاكاة",
    text: "مختبر رقمي يجري فيه الطالب تجارب الفيزياء والكيمياء والعلوم بنفسه، ويكرّرها بلا خطر ولا تكلفة.",
    points: ["تجارب تفاعلية آمنة", "نتائج فورية قابلة للتكرار", "تدعم الرياضيات والمعلوماتية أيضاً"],
  },
];

function ServicesPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-14">
      <h1 className="text-center text-4xl text-primary">خدماتنا</h1>
      <p className="mx-auto mt-3 max-w-2xl text-center text-muted-foreground">
        ثلاث طرق تعليمية حديثة تجعل الدرس تجربة يعيشها الطالب لا صفحة يقرأها.
      </p>

      <div className="mt-12 space-y-12">
        {services.map((s, i) => (
          <div
            key={s.title}
            className={`rise-in grid items-center gap-8 md:grid-cols-2 ${
              i % 2 ? "md:[direction:ltr]" : ""
            }`}
          >
            <img
              src={s.img}
              alt={s.title}
              loading="lazy"
              width={1024}
              height={768}
              className="w-full rounded-4xl shadow-soft transition-transform duration-500 hover:-translate-y-2"
            />
            <div className="[direction:rtl]">
              <h2 className="text-3xl text-primary">{s.title}</h2>
              <p className="mt-3 text-foreground/80">{s.text}</p>
              <ul className="mt-4 space-y-2">
                {s.points.map((p) => (
                  <li key={p} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="size-2 rounded-full bg-sunny" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <Link
          to="/stages"
          className="rounded-full bg-primary px-8 py-3 font-bold text-primary-foreground shadow-soft transition-transform hover:-translate-y-1"
        >
          جرّب الآن حسب مرحلتك
        </Link>
      </div>
    </section>
  );
}
