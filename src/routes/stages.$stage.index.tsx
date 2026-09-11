import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { getStage, MODES } from "@/lib/curriculum";

export const Route = createFileRoute("/stages/$stage/")({
  head: ({ params }) => {
    const stage = getStage(params.stage);
    const title = `${stage?.name ?? "المرحلة"} | منصة زانا`;
    const description =
      stage?.tagline ?? "مواد المرحلة التعليمية على منصة زانا التعليمية.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
      ],
    };
  },
  component: StagePage,
});

function StagePage() {
  const { stage: stageSlug } = Route.useParams();
  const stage = getStage(stageSlug);
  const [grade, setGrade] = useState(stage?.grades[0]?.slug ?? "");

  if (!stage) throw notFound();


  return (
    <section className="mx-auto max-w-6xl px-4 py-14">
      <Link to="/stages" className="text-sm font-semibold text-muted-foreground hover:text-primary">
        ← كل المراحل
      </Link>
      <h1 className="mt-4 text-4xl text-primary">{stage.name}</h1>
      <p className="mt-2 text-muted-foreground">{stage.tagline}</p>

      <div className="mt-8 flex flex-wrap gap-2">
        {stage.grades.map((g) => (
          <button
            key={g.slug}
            onClick={() => setGrade(g.slug)}
            className={`rounded-full px-5 py-2 text-sm font-bold transition-all hover:-translate-y-0.5 ${
              grade === g.slug
                ? "gradient-sunny text-accent-foreground shadow-soft"
                : "bg-secondary text-secondary-foreground"
            }`}
          >
            {g.name}
          </button>
        ))}
      </div>

      <div key={grade} className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {stage.subjects.map((subject, i) => (
          <Link
            key={subject.slug}
            to="/stages/$stage/$grade/$subject"
            params={{ stage: stage.slug, grade, subject: subject.slug }}
            className="card-soft rise-in group flex items-center gap-4 p-5"
            style={{ animationDelay: `${i * 70}ms` }}
          >
            <span className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-secondary text-3xl transition-transform group-hover:rotate-6 group-hover:scale-110">
              {subject.emoji}
            </span>
            <span>
              <span className="block font-display text-lg text-primary">{subject.name}</span>
              <span className="mt-1 block text-xs text-muted-foreground">
                {subject.modes.map((m) => MODES[m].title).join(" • ")}
              </span>
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
