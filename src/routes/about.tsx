import { createFileRoute } from "@tanstack/react-router";
import { Phone } from "lucide-react";
import logo from "@/assets/zana-logo.jpg";
import { PHONE, PHONE_HREF } from "@/lib/curriculum";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "من نحن | منصة زانا التعليمية" },
      {
        name: "description",
        content:
          "فكرة منصة زانا: تعليم تفاعلي يستبدل الحفظ التقليدي بالخرائط الذهنية والجولات الافتراضية وبيئات المحاكاة. تواصل معنا.",
      },
      { property: "og:title", content: "من نحن | منصة زانا التعليمية" },
      {
        property: "og:description",
        content: "تعرّف على فكرة زانا وطريقة التواصل معنا.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-14">
      <div className="rise-in text-center">
        <img
          src={logo}
          alt="شعار منصة زانا"
          width={140}
          height={140}
          className="float-slow mx-auto size-32 rounded-4xl object-cover shadow-lift"
        />
        <h1 className="mt-6 text-4xl text-primary">من نحن</h1>
      </div>

      <div className="card-soft mt-10 p-8 text-lg leading-loose text-foreground/85">
        <p>
          وُلدت فكرة <strong className="text-primary">منصة زانا</strong> من سؤال بسيط: لماذا
          يحفظ الطالب درساً لم يره ولم يجرّبه؟ لذلك بنينا منصة تعليمية لطلاب المرحلتين
          الابتدائية والإعدادية تستبدل التلقين بالتجربة.
        </p>
        <p className="mt-4">
          في زانا يتحوّل كل درس إلى خريطة ذهنية واضحة، وإلى جولة افتراضية يعيشها الطالب
          بنظارة VR، وإلى مختبر محاكاة يجري فيه تجاربه العلمية بنفسه. النتيجة: فهم أعمق،
          وقت أقل، ومتعة حقيقية في التعلّم.
        </p>
        <p className="mt-4">
          نغطي مواد المنهاج كاملة لكل صف من الأول حتى التاسع، ونطوّر محتوانا باستمرار مع
          المعلمين وأولياء الأمور.
        </p>
      </div>

      <div className="mt-10 rounded-4xl gradient-hero p-8 text-center shadow-soft">
        <h2 className="text-2xl text-primary">تواصل معنا</h2>
        <p className="mt-2 text-muted-foreground">
          للاستفسار أو الاشتراك، اتصل بنا على الرقم:
        </p>
        <a
          href={PHONE_HREF}
          dir="ltr"
          className="mt-5 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 text-lg font-bold text-primary-foreground shadow-soft transition-transform hover:scale-105"
        >
          <Phone className="size-5" />
          {PHONE}
        </a>
      </div>
    </section>
  );
}
