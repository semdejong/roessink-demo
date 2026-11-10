import type { Metadata } from "next";
import { content } from "@/content";
import DienstenRaam from "@/components/DienstenRaam";
import CtaBand from "@/components/CtaBand";
import { LeadList } from "@/components/ui";

export const metadata: Metadata = {
  title: "Wat we doen",
  description:
    "Binnen- en buitenschilderwerk, beglazing, wandafwerking, vloercoatings en advies. Totaalpakket voor renovatie, uit Enter.",
};

export default function Page() {
  return (
    <article>
      <header data-section="intro" className="wrap py-12 md:py-16">
        <h1 className="max-w-[14ch] text-[38px] leading-[1.08] sm:text-[44px] md:text-[60px]">Wat we doen</h1>
        <p className="mt-5 max-w-2xl">{content.services.intro}</p>
        <p className="mt-4 max-w-2xl text-ink">{content.services.extra}</p>
      </header>
      <DienstenRaam showHeading={false} />
      <section data-section="werkzaamheden" className="wrap pb-14">
        <h2 className="text-[32px] leading-tight">Werkzaamheden</h2>
        <div className="mt-5 max-w-2xl">
          <LeadList items={content.werkzaamheden} />
        </div>
      </section>
      <CtaBand />
    </article>
  );
}
