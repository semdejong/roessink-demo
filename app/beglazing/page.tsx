import type { Metadata } from "next";
import ServiceView, { serviceByHref } from "@/components/ServiceView";
import GlassSoorten from "@/components/GlassSoorten";

export const metadata: Metadata = {
  title: "Beglazing",
  description:
    "Beglazing door Roessink Schilderwerken: enkel en dubbel glas, isolatieglas, glas-in-lood, monumentenglas en meer.",
};

export default function Page() {
  return (
    <ServiceView service={serviceByHref("/beglazing")}>
      <section data-section="glassoorten" className="wrap pb-14">
        <h2 className="text-[32px] leading-tight md:text-[40px]">Glassoorten</h2>
        <p className="mt-4 max-w-2xl text-ink">
          Isolatieglas, floatglas (enkelglas), sier- en figuurglas, glas-in-lood, monumentenglas, inbraakwerend glas en brandvertragend glas.
        </p>
        <div className="mt-6">
          <GlassSoorten />
        </div>
        <div className="mt-10 grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="font-slab text-[28px] leading-tight">Enkel en dubbel glas</h2>
            <p className="mt-3 text-ink">Wij verzorgen het plaatsen van enkel en dubbel glas, ook als dat onderdeel is van een schilderklus.</p>
          </div>
          <div>
            <h2 className="font-slab text-[28px] leading-tight">Restauratie en nieuw ontwerp</h2>
            <p className="mt-3 text-ink">
              Bij restauratie komen veel glastaken in één project samen. Sier- en figuurglas herstellen wij weer als nieuw. Een geheel nieuw ontwerp kan ook.
            </p>
          </div>
        </div>
      </section>
    </ServiceView>
  );
}
