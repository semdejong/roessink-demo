import type { Metadata } from "next";
import Image from "next/image";
import { content } from "@/content";
import { LeadList } from "@/components/ui";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Over ons",
  description:
    "Roessink Schilderwerken in Enter, opgericht in september 1989 door Gé Roessink. Sinds 2006 is Jeroen eigenaar.",
};

export default function Page() {
  const { company, about, memberships } = content;
  return (
    <article>
      <header data-section="intro" className="wrap py-12 md:py-16">
        <h1 className="text-[38px] leading-[1.08] sm:text-[44px] md:text-[60px]">Over ons</h1>
        <p className="mt-5 max-w-3xl">{company.history}</p>
      </header>

      <section data-section="werkzaamheden" className="wrap pb-12">
        <h2 className="text-[32px] leading-tight">Werkzaamheden</h2>
        <div className="mt-5 max-w-2xl">
          <LeadList items={content.werkzaamheden} />
        </div>
      </section>

      <section data-section="bussen" className="wrap grid gap-1.5 bg-lood pb-14 md:grid-cols-[minmax(0,655px)_minmax(0,280px)]">
        <figure className="bg-papier" style={{ maxWidth: about.imageWidth }}>
          <Image
            src={about.image}
            alt={about.imageAlt}
            width={about.imageWidth}
            height={about.imageHeight}
            unoptimized
            className="block h-auto w-full"
            style={{ maxWidth: about.imageWidth }}
          />
        </figure>
        <figure className="relative w-full max-w-[280px] overflow-hidden bg-papier" style={{ aspectRatio: "3 / 4" }}>
          <Image
            src={about.sideImage}
            alt={about.sideAlt}
            fill
            unoptimized
            sizes="280px"
            className="object-cover object-[18%_42%]"
          />
        </figure>
      </section>

      <section id={memberships.onderhoud.id} data-section="onderhoud-nl" className="scroll-mt-28 bg-kalk">
        <div className="h-1.5 bg-lood" aria-hidden="true" />
        <div className="wrap grid items-center gap-6 py-12 md:grid-cols-[180px_1fr]">
          <Image
            src={memberships.onderhoud.logo}
            alt={memberships.onderhoud.logoAlt}
            width={memberships.onderhoud.width}
            height={memberships.onderhoud.height}
            unoptimized
            className="h-auto w-[160px] bg-wit"
          />
          <div>
            <h2 className="text-[32px] leading-tight">{memberships.onderhoud.title}</h2>
            <p className="mt-3 max-w-2xl">{memberships.onderhoud.text}</p>
          </div>
        </div>
      </section>

      <section id={memberships.schilderscool.id} data-section="schilderscool" className="scroll-mt-28 bg-papier">
        <div className="h-1.5 bg-lood" aria-hidden="true" />
        <div className="wrap grid items-center gap-6 py-12 md:grid-cols-[180px_1fr]">
          <Image
            src={memberships.schilderscool.logo}
            alt={memberships.schilderscool.logoAlt}
            width={memberships.schilderscool.width}
            height={memberships.schilderscool.height}
            unoptimized
            className="h-auto w-[160px]"
          />
          <div>
            <h2 className="text-[32px] leading-tight">{memberships.schilderscool.title}</h2>
            <p className="mt-3 max-w-2xl">{memberships.schilderscool.text}</p>
          </div>
        </div>
      </section>

      <CtaBand />
    </article>
  );
}
