import { Phone } from "lucide-react";
import { PHONE, PHONE_HREF } from "@/lib/curriculum";

export function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-border/60 bg-secondary/40">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 text-center sm:flex-row sm:text-right">
        <p className="text-sm text-muted-foreground">
          منصة زانا التعليمية — تعلّم بالخرائط الذهنية والجولات الافتراضية وبيئات المحاكاة.
        </p>
        <a
          href={PHONE_HREF}
          dir="ltr"
          className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2 text-sm font-bold text-primary-foreground shadow-soft transition-transform hover:scale-105"
        >
          <Phone className="size-4" />
          {PHONE}
        </a>
      </div>
    </footer>
  );
}
