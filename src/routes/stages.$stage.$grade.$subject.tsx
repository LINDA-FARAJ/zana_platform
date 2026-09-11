import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { DEMO_LINK, getStage, getSubject, MODES, type ModeKey } from "@/lib/curriculum";
import mindmapImg from "@/assets/mode-mindmap.jpg";
import vrImg from "@/assets/mode-vr.jpg";
import simImg from "@/assets/mode-sim.jpg";

const modeImages: Record<ModeKey, string> = {
  mindmap: mindmapImg,
  vr: vrImg,
  sim: simImg,
};

export const Route = createFileRoute("/stages/$stage/$grade/$subject")({
  head: ({ params }) => {
    const stage = getStage(params.stage);
    const subject = getSubject(stage, params.subject);
    const title = `${subject?.name ?? "المادة"} | ${stage?.name ?? "منصة زانا"}`;
    const description = `اختر طريقة التعلّم لمادة ${subject?.name ?? ""}: خرائط ذهنية، جولات افتراضية، أو بيئات محاكاة على منصة زانا.`;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
      ],
    };
  },
  component: SubjectPage,
});

function SubjectPage() {
  const { stage: stageSlug, grade, subject: subjectSlug } = Route.useParams();
  const stage = getStage(stageSlug);
  const subject = getSubject(stage, subjectSlug);
  if (!stage || !subject) throw notFound();

  const gradeName = stage.grades.find((g) => g.slug === grade)?.name ?? "";

  return (
    <section className="mx-auto max-w-6xl px-4 py-14">
      <Link
        to="/stages/$stage"
        params={{ stage: stage.slug }}
        className="text-sm font-semibold text-muted-foreground hover:text-primary"
      >
        ← {stage.name}
      </Link>

      <div className="mt-4 flex items-center gap-4">
        <span className="flex size-16 items-center justify-center rounded-3xl bg-secondary text-4xl">
          {subject.emoji}
        </span>
        <div>
          <h1 className="text-4xl text-primary">{subject.name}</h1>
          <p className="text-muted-foreground">
            {gradeName} — {stage.name}
          </p>
        </div>
      </div>

      <p className="mt-8 text-lg font-semibold text-foreground/80">
        اختر طريقة التعلّم المناسبة لك:
      </p>

      <div className="mt-6 grid gap-6 md:grid-cols-3">
        {subject.modes.map((mode, i) => {
          const info = MODES[mode];
          return (
            <a
              key={mode}
              href={DEMO_LINK}
              target="_blank"
              rel="noreferrer"
              className="card-soft rise-in group block overflow-hidden"
              style={{ animationDelay: `${i * 120}ms` }}
            >
              <img
                src={modeImages[mode]}
                alt={info.title}
                loading="lazy"
                width={1024}
                height={768}
                className="h-44 w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="p-6">
                <h2 className="text-xl text-primary">
                  {info.emoji} {info.title}
                </h2>
                <p className="mt-2 text-sm text-muted-foreground">{info.description}</p>
                <span className="mt-4 inline-block rounded-full gradient-sunny px-5 py-2 text-sm font-bold text-accent-foreground">
                  ابدأ الآن
                </span>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
}
