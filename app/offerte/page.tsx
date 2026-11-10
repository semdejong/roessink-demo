import type { Metadata } from "next";
import { content } from "@/content";
import OfferteForm from "@/components/OfferteForm";

export const metadata: Metadata = {
  title: "Offerte aanvragen",
  description: "Vraag een offerte aan. Uw mailprogramma opent met het bericht; er wordt niets automatisch verstuurd.",
};

export default function Page() {
  const { contact, offerte } = content;
  return (
    <article>
      <header data-section="intro" className="wrap py-12 md:py-16">
        <h1 className="max-w-[16ch] text-[38px] leading-[1.08] sm:text-[44px] md:text-[60px]">Offerte aanvragen</h1>
        <p className="mt-5 max-w-2xl">
          Bel{" "}
          <a href={contact.phoneHref} data-cta="bellen" className="font-semibold text-link underline underline-offset-2">
            {contact.phoneDisplay}
          </a>{" "}
          of vul het formulier in. Uw mailprogramma opent een bericht aan {contact.email}. Er wordt niets automatisch verstuurd.
        </p>
      </header>
      <section data-section="offerte" className="wrap pb-16">
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
