import type { Metadata } from "next";
import { content } from "@/content";
import DienstenRaam from "@/components/DienstenRaam";
import CtaBand from "@/components/CtaBand";
import BrandRow from "@/components/BrandRow";
import { VoorWie } from "@/components/StoryPanes";

export const metadata: Metadata = {
  title: "Wat we doen",
  description:
    "Binnen- en buitenschilderwerk, beglazing, wandafwerking, vloercoatings en advies. Totaalpakket voor renovatie, uit Enter.",
};

export default function Page() {
  return (
    <article>
      <header data-section="intro" className="wrap py-12 md:py-16">
        <p className="label text-ink">Schildersbedrijf, behangersbedrijf en glaszettersbedrijf</p>
        <h1 className="mt-4 max-w-[12em] text-[38px] leading-[1.08] sm:text-[44px] md:text-[60px]">Wat we doen</h1>
        <p className="mt-5 max-w-2xl">{content.services.intro}</p>
        <p className="mt-4 max-w-2xl text-ink">{content.services.extra}</p>
      </header>
      <DienstenRaam showHeading={false} />
      <VoorWie />
      <section data-section="werkzaamheden" className="wrap py-14">
        <h2 className="text-[32px] leading-tight md:text-[40px]">Het totaalpakket</h2>
        <p className="mt-4 max-w-2xl text-ink">
          Een renovatie is zelden één handeling. Buiten, glas, binnen, wand, vloer en advies kunt u apart vragen, of samen laten uitvoeren.
        </p>
        <div className="mt-6 grid gap-1.5 bg-lood sm:grid-cols-2">
          {content.werkzaamheden.map((item) => (
            <div key={item} className="bg-papier p-5">
              <span aria-hidden="true" className="mb-3 block size-3 bg-lood shadow-[inset_0_0_0_1px_#F6F4EF]" />
              <p className="font-slab text-xl leading-snug">{item}</p>
            </div>
          ))}
        </div>
      </section>
      <BrandRow />
      <CtaBand />
    </article>
  );
}
