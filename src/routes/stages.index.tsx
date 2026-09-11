import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import primaryImg from "@/assets/stage-primary.jpg";
import prepImg from "@/assets/stage-prep.jpg";
import { STAGES } from "@/lib/curriculum";

export const Route = createFileRoute("/stages/")({
  head: () => ({
    meta: [
      { title: "المراحل التعليمية | منصة زانا" },
      {
        name: "description",
        content:
          "اختر المرحلة الابتدائية أو الإعدادية واستكشف مواد كل صف مع الخرائط الذهنية والجولات الافتراضية وبيئات المحاكاة.",
      },
      { property: "og:title", content: "المراحل التعليمية | منصة زانا" },
      {
        property: "og:description",
        content: "اختر مرحلتك التعليمية وابدأ التعلّم التفاعلي مع زانا.",
      },
    ],
  }),
  component: StagesPage,
});

const images: Record<string, string> = { primary: primaryImg, prep: prepImg };

function StagesPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-14">
      <h1 className="text-center text-4xl text-primary">المراحل التعليمية</h1>
      <p className="mt-3 text-center text-muted-foreground">
        اختر مرحلتك لتظهر لك مواد كل صف بطريقة ممتعة وتفاعلية.
      </p>

      <div className="mt-12 grid gap-8 md:grid-cols-2">
        {STAGES.map((stage, i) => (
          <Link
            key={stage.slug}
            to="/stages/$stage"
            params={{ stage: stage.slug }}
            className="card-soft rise-in group block overflow-hidden"
            style={{ animationDelay: `${i * 140}ms` }}
          >
            <img
              src={images[stage.slug]}
              alt={stage.name}
              loading="lazy"
              width={1024}
              height={768}
              className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="p-6">
              <h2 className="text-2xl text-primary">{stage.name}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{stage.tagline}</p>
              <span className="mt-5 inline-flex items-center gap-2 font-bold text-accent-foreground">
                ادخل المرحلة
                <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-1" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
