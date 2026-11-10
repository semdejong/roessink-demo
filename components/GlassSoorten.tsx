import Link from "next/link";
import { content } from "@/content";

const areas = ["g-iso", "g-float", "g-sier", "g-lood", "g-monument", "g-inbraak", "g-brand"];

export default function GlassSoorten({ variant = "full" }: { variant?: "full" | "compact" }) {
  return (
    <div className={variant === "compact" ? "glass-mini" : "glass-window"} id={variant === "full" ? "glassoorten" : undefined}>
      {content.glassTypes.map((type, index) => {
        const className = `flex min-w-0 flex-col bg-papier text-lood no-underline ${variant === "full" ? areas[index] : ""}`;
        const inner = (
          <>
            <span aria-hidden="true" className={`block ${type.texture} ${variant === "full" ? "h-20" : "h-10"}`} />
            <span className={variant === "full" ? "block p-4" : "block px-3 py-3"}>
              <span className="block font-slab text-xl leading-tight">{type.title}</span>
              {variant === "full" && <span className="mt-2 block text-[16px] leading-snug text-ink">{type.text}</span>}
            </span>
          </>
        );
        if (variant === "compact") {
          return (
            <Link key={type.id} href={`/beglazing#${type.id}`} className={className}>
              {inner}
            </Link>
          );
        }
        return (
          <article key={type.id} id={type.id} className={`${className} scroll-mt-28`}>
            {inner}
          </article>
        );
      })}
    </div>
  );
}
