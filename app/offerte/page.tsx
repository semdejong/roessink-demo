import type { Metadata } from "next";
import { content } from "@/content";
import OfferteForm from "@/components/OfferteForm";

export const metadata: Metadata = {
  title: "Offerte aanvragen",
  description: "Vraag een offerte aan. Uw mailprogramma opent met het bericht; er wordt niets automatisch verstuurd.",
};

export default function Page() {
  const { contact, offerte, company } = content;
  return (
    <article>
      <header data-section="intro" className="wrap py-12 md:py-16">
        <p className="label text-ink">Bellen of schrijven</p>
        <h1 className="mt-4 max-w-[14em] text-[38px] leading-[1.08] sm:text-[44px] md:text-[60px]">Offerte aanvragen</h1>
        <p className="mt-5 max-w-2xl">
          Bel{" "}
          <a href={contact.phoneHref} data-cta="bellen" className="font-semibold text-link underline underline-offset-2">
            {contact.phoneDisplay}
          </a>{" "}
          of vul het formulier in. Uw mailprogramma opent een bericht aan {contact.email}. Er wordt niets automatisch verstuurd.
        </p>
      </header>
      <section data-section="offerte" className="wrap grid gap-10 pb-16 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
        <aside className="space-y-1.5 bg-lood self-start">
          <div className="bg-papier p-6">
            <h2 className="font-slab text-2xl">Wat u kunt invullen</h2>
            <p className="mt-3 text-[17px]">
              Naam, telefoon en e-mail zijn nodig. Adres of plaats mag erbij. Kies het soort werk: buiten, binnen, glas, wand, behang, vloer, restauratie, advies of iets anders.
            </p>
          </div>
          <div className="bg-kalk p-6">
            <h2 className="font-slab text-2xl">Particulier of zakelijk</h2>
            <p className="mt-3 text-[17px]">Wij werken voor beide. Zet het erbij als u wilt, het veld is niet verplicht.</p>
          </div>
          <a href={contact.phoneHref} data-cta="bellen" className="block bg-geel p-6 text-lood no-underline">
            <span className="label">Liever bellen</span>
            <span className="mt-2 block font-slab text-3xl">{contact.phoneDisplay}</span>
            <span className="mt-2 block text-[16px]">{company.name}, {contact.place}</span>
          </a>
        </aside>
        <OfferteForm
          email={contact.email}
          phone={contact.phoneDisplay}
          phoneHref={contact.phoneHref}
          subject={offerte.subject}
          werk={offerte.werk}
        />
      </section>
    </article>
  );
}
