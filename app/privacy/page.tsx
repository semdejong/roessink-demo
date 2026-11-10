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
        <div className="mt-6 max-w-2xl space-y-4">
          <p>
            {company.name}
            <br />
            {contact.street}
            <br />
            {contact.postcode} {contact.place}
            <br />
            <a href={`mailto:${contact.email}`} data-cta="mail" className="text-link underline underline-offset-2">
              {contact.email}
            </a>
          </p>
          <p>Deze website is een concept. Het is geen officiële publicatie van het bedrijf.</p>
          <p>
            Het offerteformulier verstuurt niets naar een server. Na het versturen opent uw eigen mailprogramma een bericht aan {contact.email}. Er wordt niets automatisch verstuurd of op deze site opgeslagen.
          </p>
          <p>Voor anonieme demostatistieken laadt de site een cookieloos script van Sleads. Daarbij worden geen cookies geplaatst.</p>
          <p>
            Voor schilderwerk belt u{" "}
            <a href={contact.phoneHref} data-cta="bellen" className="font-semibold text-link underline underline-offset-2">
              {contact.phoneDisplay}
            </a>
            .
          </p>
        </div>
      </header>
    </article>
  );
}
