import type { Metadata } from "next";
import Link from "next/link";
import ServiceView, { serviceByHref } from "@/components/ServiceView";

const panes = [
  { title: "Chemisch bestendig", text: "Chemisch bestendig." },
  { title: "Eenvoudig te reinigen", text: "Eenvoudig te reinigen." },
  { title: "Woningen", text: "Een coating voor de vloer in huis." },
  { title: "Bedrijven", text: "Een coating voor de vloer in een bedrijfspand." },
  { title: "Onderdeel van een opdracht", text: "Meenemen in schilderwerk of een renovatie." },
  { title: "Zelfstandige dienst", text: "Ook los af te nemen, zonder andere werkzaamheden." },
];

export const metadata: Metadata = {
  title: "Vloercoatings",
  description: "Vloercoatings voor woningen en bedrijven, chemisch bestendig en eenvoudig te reinigen.",
};

export default function Page() {
  return (
    <ServiceView service={serviceByHref("/vloercoatings")}>
      <section data-section="aanpak" className="wrap pb-14">
        <h2 className="text-[32px] leading-tight md:text-[40px]">Welke vloer, welke coating</h2>
        <div className="mt-6 grid gap-1.5 bg-lood sm:grid-cols-2 lg:grid-cols-3">
          {panes.map((pane) => (
            <div key={pane.title} data-tone="rood" className="pane p-5">
              <span aria-hidden="true" className="mb-4 block size-5 bg-rood shadow-[inset_0_0_0_1px_#1D1D1B]" />
              <h3 className="font-slab text-2xl">{pane.title}</h3>
              <p className="mt-2 text-[17px]">{pane.text}</p>
            </div>
          ))}
        </div>
        <p className="mt-6">
          <Link href="/offerte" data-cta="offerte" className="font-semibold text-link underline underline-offset-4">
            Offerte aanvragen
          </Link>
        </p>
      </section>
    </ServiceView>
  );
}
