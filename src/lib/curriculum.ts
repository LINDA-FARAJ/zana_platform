export type ModeKey = "mindmap" | "vr" | "sim";

export const DEMO_LINK =
  "https://skybox.blockadelabs.com/e/c4b554d69bbb8ec08ce64ec6a73bc8fa";

export const MODES: Record<
  ModeKey,
  { title: string; description: string; emoji: string }
> = {
  mindmap: {
    title: "الخرائط الذهنية",
    description: "خريطة بصرية تربط أفكار الدرس ببعضها لترسيخ الفهم بسرعة.",
    emoji: "🧠",
  },
  vr: {
    title: "جولة افتراضية",
    description: "جولة ثلاثية الأبعاد تنقل الطالب داخل الدرس بنظارة VR.",
    emoji: "🕶️",
  },
  sim: {
    title: "بيئة محاكاة",
    description: "مختبر تفاعلي لإجراء التجارب العلمية بأمان كامل.",
    emoji: "⚗️",
  },
};

export type Subject = {
  slug: string;
  name: string;
  emoji: string;
  modes: ModeKey[];
};

export type Stage = {
  slug: "primary" | "prep";
  name: string;
  tagline: string;
  grades: { slug: string; name: string }[];
  subjects: Subject[];
};

const ALL: ModeKey[] = ["mindmap", "vr", "sim"];

export const STAGES: Stage[] = [
  {
    slug: "primary",
    name: "المرحلة الابتدائية",
    tagline: "التعليم الأساسي – الحلقة الأولى: من الصف الأول حتى السادس",
    grades: [
      { slug: "g1", name: "الصف الأول" },
      { slug: "g2", name: "الصف الثاني" },
      { slug: "g3", name: "الصف الثالث" },
      { slug: "g4", name: "الصف الرابع" },
      { slug: "g5", name: "الصف الخامس" },
      { slug: "g6", name: "الصف السادس" },
    ],
    subjects: [
      { slug: "arabic", name: "العربية لغتي", emoji: "📖", modes: ["mindmap"] },
      { slug: "math", name: "الرياضيات", emoji: "➗", modes: ["sim", "mindmap"] },
      { slug: "science", name: "العلوم العامة", emoji: "🔬", modes: ALL },
      {
        slug: "religion",
        name: "التربية الإسلامية / المسيحية",
        emoji: "🕌",
        modes: ["mindmap"],
      },
      {
        slug: "national",
        name: "التربية الوطنية",
        emoji: "🏛️",
        modes: ["mindmap"],
      },
      { slug: "english", name: "اللغة الإنكليزية", emoji: "🔤", modes: ["mindmap"] },
    ],
  },
  {
    slug: "prep",
    name: "المرحلة الإعدادية",
    tagline: "التعليم الأساسي – الحلقة الثانية: من الصف السابع حتى التاسع",
    grades: [
      { slug: "g7", name: "الصف السابع" },
      { slug: "g8", name: "الصف الثامن" },
      { slug: "g9", name: "الصف التاسع" },
    ],
    subjects: [
      { slug: "arabic", name: "اللغة العربية", emoji: "📖", modes: ["mindmap"] },
      { slug: "math", name: "الرياضيات", emoji: "➗", modes: ["sim", "mindmap"] },
      { slug: "physics", name: "الفيزياء", emoji: "🧲", modes: ALL },
      { slug: "chemistry", name: "الكيمياء", emoji: "⚗️", modes: ALL },
      { slug: "biology", name: "علم الأحياء", emoji: "🌱", modes: ALL },
      { slug: "history", name: "التاريخ", emoji: "🏺", modes: ["mindmap"] },
      {
        slug: "geography",
        name: "الجغرافيا",
        emoji: "🗺️",
        modes: ["mindmap", "sim"],
      },
      { slug: "national", name: "التربية الوطنية", emoji: "🏛️", modes: ["mindmap"] },
      { slug: "english", name: "اللغة الإنكليزية", emoji: "🔤", modes: ["mindmap"] },
      { slug: "french", name: "اللغة الفرنسية", emoji: "🇫🇷", modes: ["mindmap"] },
      {
        slug: "religion",
        name: "التربية الإسلامية / المسيحية",
        emoji: "🕌",
        modes: ["mindmap"],
      },
      {
        slug: "informatics",
        name: "المعلوماتية",
        emoji: "💻",
        modes: ["sim", "mindmap"],
      },
    ],
  },
];

export const getStage = (slug: string) => STAGES.find((s) => s.slug === slug);
export const getSubject = (stage: Stage | undefined, slug: string) =>
  stage?.subjects.find((s) => s.slug === slug);

export const PHONE = "+963 982 995 773";
export const PHONE_HREF = "tel:+963982995773";
