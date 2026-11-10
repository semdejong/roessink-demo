import type { Metadata } from "next";
import { content } from "@/content";

export const metadata: Metadata = {
  title: "Privacy",
  description: "Privacytoelichting bij dit concept van Roessink Schilderwerken in Enter.",
};

export default function Page() {
  const { company, contact } = content;
  return (
    <article>
      <header data-section="privacy" className="wrap py-12 md:py-16">
        <h1 className="text-[38px] leading-[1.08] sm:text-[44px] md:text-[60px]">Privacy</h1>
        <p className="mt-5 max-w-2xl">
          {company.name}, {contact.street}, {contact.postcode} {contact.place}.{" "}
          <a href={`mailto:${contact.email}`} data-cta="mail" className="text-link underline underline-offset-2">
            {contact.email}
          </a>
        </p>
        <div className="mt-8 grid gap-1.5 bg-lood md:grid-cols-3">
          <section className="bg-papier p-6">
            <h2 className="font-slab text-2xl">Concept</h2>
            <p className="mt-3 text-[17px]">Deze website is een concept. Het is geen officiële publicatie van het bedrijf.</p>
          </section>
          <section className="bg-kalk p-6">
            <h2 className="font-slab text-2xl">Formulier</h2>
            <p className="mt-3 text-[17px]">
              Het offerteformulier verstuurt niets naar een server. Uw eigen mailprogramma opent een bericht aan {contact.email}. Er wordt niets automatisch verstuurd of op deze site opgeslagen.
            </p>
          </section>
          <section className="bg-papier p-6">
            <h2 className="font-slab text-2xl">Meting</h2>
            <p className="mt-3 text-[17px]">Voor anonieme demostatistieken laadt de site een cookieloos script van Sleads. Daarbij worden geen cookies geplaatst.</p>
          </section>
        </div>
        <p className="mt-8">
          Voor schilderwerk belt u{" "}
          <a href={contact.phoneHref} data-cta="bellen" className="font-semibold text-link underline underline-offset-2">
            {contact.phoneDisplay}
          </a>
          .
        </p>
      </header>
    </article>
  );
}
