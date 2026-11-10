import type { Metadata } from "next";
import Link from "next/link";
import { content } from "@/content";
import ServiceView, { serviceByHref } from "@/components/ServiceView";
import { StoryPanes } from "@/components/StoryPanes";

export const metadata: Metadata = {
  title: "Buitenschilderwerk",
  description:
    "Buitenschilderwerk uit Enter: uw visitekaartje naar de buitenwereld. Van A tot Z, bestand tegen zon, regen en vrieskou.",
};

export default function Page() {
  return (
    <ServiceView service={serviceByHref("/buitenschilderwerk")}>
      <StoryPanes tone="blauw" heading="Felle zon, heftige regen, vrieskou" panes={content.weer} />
      <section data-section="samen" className="wrap pb-14">
        <h2 className="text-[32px] leading-tight">Zelden op zichzelf</h2>
        <div className="mt-6 grid gap-1.5 bg-lood md:grid-cols-2">
          <Link href="/beglazing" className="bg-papier p-6 text-lood no-underline md:p-8">
            <span className="label">Beglazing</span>
            <span className="mt-3 block font-slab text-[28px] leading-tight">Glas in dezelfde opdracht</span>
            <span className="mt-3 block">Plaatsen van enkel en dubbel glas, naast het schilderwerk.</span>
          </Link>
          <Link href="/advies" className="bg-geel p-6 text-lood no-underline md:p-8">
            <span className="label">Advies</span>
            <span className="mt-3 block font-slab text-[28px] leading-tight">Kleurplan of advies</span>
            <span className="mt-3 block">U neemt een eigen kleurplan mee, of u vraagt ons wat en hoe er geschilderd moet worden.</span>
          </Link>
        </div>
      </section>
    </ServiceView>
  );
}
