import type { Metadata } from "next";
import ServiceView, { serviceByHref } from "@/components/ServiceView";

const panes = [
  { title: "Verftechnisch advies", text: "Wat en hoe er geschilderd moet worden." },
  { title: "Kleuradvies", text: "Zodat kleuren bij elkaar passen en de verf klopt." },
  { title: "Met de verfleverancier", text: "Verftechnisch advies in overleg met de verfleverancier." },
];

export const metadata: Metadata = {
  title: "Advies",
  description: "Verftechnisch advies en kleuradvies, in overleg met de verfleverancier.",
};

export default function Page() {
  return (
    <ServiceView service={serviceByHref("/advies")}>
      <section data-section="aanpak" className="wrap pb-14">
        <h2 className="text-[32px] leading-tight">Waarover wij adviseren</h2>
        <div className="mt-6 grid gap-1.5 bg-lood md:grid-cols-3">
          {panes.map((pane) => (
            <div key={pane.title} data-tone="geel" className="pane p-5">
              <span aria-hidden="true" className="mb-4 block size-5 bg-geel shadow-[inset_0_0_0_1px_#1D1D1B]" />
              <h3 className="font-slab text-2xl">{pane.title}</h3>
              <p className="mt-2 text-[17px]">{pane.text}</p>
            </div>
          ))}
        </div>
      </section>
    </ServiceView>
  );
}
