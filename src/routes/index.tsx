import { createFileRoute, Link } from "@tanstack/react-router";
import { Brain, Compass, FlaskConical, Sparkles } from "lucide-react";
import hero from "@/assets/hero.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "منصة زانا التعليمية | تعلّم بطريقة مختلفة" },
      {
        name: "description",
        content:
          "منصة زانا تقدّم تعليماً تفاعلياً لطلاب الابتدائي والإعدادي عبر الخرائط الذهنية والجولات الافتراضية VR وبيئات محاكاة التجارب العلمية.",
      },
      { property: "og:title", content: "منصة زانا التعليمية | تعلّم بطريقة مختلفة" },
      {
        property: "og:description",
        content: "تعليم تفاعلي بالخرائط الذهنية والجولات الافتراضية وبيئات المحاكاة.",
      },
    ],
  }),
  component: Home,
});

const pillars = [
  {
    icon: Brain,
    title: "خرائط ذهنية",
    text: "نحوّل الدرس إلى صورة ذهنية واحدة تسهّل الحفظ والاسترجاع.",
  },
  {
    icon: Compass,
    title: "جولات افتراضية",
    text: "رحلات VR تأخذ الطالب إلى داخل الدرس بدل قراءته فقط.",
  },
  {
    icon: FlaskConical,
    title: "بيئات محاكاة",
    text: "تجارب علمية تفاعلية يجريها الطالب بنفسه بأمان تام.",
  },
];

function Home() {
  return (
    <div>
      <section className="gradient-hero relative overflow-hidden">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 md:grid-cols-2 md:py-24">
          <div className="rise-in">
            <span className="inline-flex items-center gap-2 rounded-full bg-background/70 px-4 py-1.5 text-sm font-semibold text-primary">
              <Sparkles className="size-4" />
              تعليم يخرج عن المألوف
            </span>
            <h1 className="mt-5 text-4xl leading-tight text-primary md:text-6xl">
              أهلاً بك في منصة زانا
            </h1>
            <p className="mt-4 max-w-lg text-lg text-foreground/80">
              مكان يتعلّم فيه أطفال الابتدائي والإعدادي بالمتعة والاكتشاف: خرائط ذهنية
              ملوّنة، جولات افتراضية بنظارة VR، ومختبرات محاكاة للتجارب العلمية.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/stages"
                className="rounded-full bg-primary px-7 py-3 font-bold text-primary-foreground shadow-soft transition-transform hover:-translate-y-1"
              >
                ابدأ رحلتك التعليمية
              </Link>
              <Link
                to="/services"
                className="rounded-full border border-primary/30 bg-background/70 px-7 py-3 font-bold text-primary transition-transform hover:-translate-y-1"
              >
                تعرّف على خدماتنا
              </Link>
            </div>
          </div>

          <img
            src={hero}
            alt="طفل رائد فضاء يقرأ كتاباً محاطاً بالكواكب وأدوات العلوم"
            width={1536}
            height={960}
            className="float-slow w-full rounded-4xl shadow-lift"
          />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-center text-3xl text-primary">لماذا زانا؟</h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-muted-foreground">
          لأننا غيّرنا التعليم التقليدي: الطالب هنا يرى ويجرّب ويكتشف بدل أن يحفظ فقط.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {pillars.map((p, i) => (
            <div
              key={p.title}
              className="card-soft rise-in p-7 text-center"
              style={{ animationDelay: `${i * 120}ms` }}
            >
              <div className="gradient-sunny mx-auto flex size-14 items-center justify-center rounded-2xl text-accent-foreground">
                <p.icon className="size-7" />
              </div>
              <h3 className="mt-4 text-xl text-primary">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.text}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
