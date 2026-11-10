import Link from "next/link";
import { content, tones } from "@/content";

export default function RelatedServices({ current }: { current: string }) {
  const items = content.services.items.filter((service) => service.href !== current);
  return (
    <section data-section="gerelateerd" className="bg-papier py-12">
      <div className="wrap">
        <h2 className="text-[28px] leading-tight">Andere werkzaamheden</h2>
        <div className="mt-6 grid gap-1.5 bg-lood sm:grid-cols-2 lg:grid-cols-3">
          {items.map((service) => (
            <Link key={service.href} href={service.href} data-tone={service.tone} className="pane flex items-center gap-3 p-4 no-underline">
              <span aria-hidden="true" className="size-5 shrink-0 shadow-[inset_0_0_0_1px_#1D1D1B]" style={{ background: tones[service.tone].full }} />
              <span className="font-slab text-xl">{service.title}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
