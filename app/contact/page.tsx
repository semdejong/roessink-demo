import type { Metadata } from "next";
import Link from "next/link";
import { content } from "@/content";
import { CtaPair } from "@/components/ui";

export const metadata: Metadata = {
  title: "Contact",
  description: "Dorpsstraat 23A, 7468 CC Enter. Bel 06-22934958 of mail info@roessinkschilderwerken.nl.",
};

export default function Page() {
  const { contact, footer, company } = content;
  return (
    <article>
      <header data-section="intro" className="wrap py-12 md:py-16">
        <h1 className="text-[38px] leading-[1.08] sm:text-[44px] md:text-[60px]">Contact</h1>
        <p className="mt-5 max-w-2xl">{contact.text}</p>
        <p className="mt-3 max-w-2xl text-ink">Schildersbedrijf in de regio Twente, gevestigd aan de Dorpsstraat in Enter. Eigenaar is {company.owner}.</p>
      </header>
      <section data-section="gegevens" className="wrap grid gap-10 pb-16 md:grid-cols-2">
        <address className="not-italic">
          <p className="font-slab text-3xl">{company.name}</p>
          <p className="mt-4">
            {contact.street}
            <br />
            {contact.postcode} {contact.place}
          </p>
          <p className="mt-4">
            <a href={contact.phoneHref} data-cta="bellen" className="inline-flex min-h-11 items-center text-lg font-semibold text-link underline underline-offset-2">
              {contact.phoneDisplay}
            </a>
          </p>
          <p>
            <a href={`mailto:${contact.email}`} data-cta="mail" className="inline-flex min-h-11 items-center break-all text-link underline underline-offset-2">
              {contact.email}
            </a>
          </p>
          <p className="mt-2">
            <a href={contact.mapsUrl} target="_blank" rel="noopener" className="inline-flex min-h-11 items-center text-link underline underline-offset-2">
              Route via Google Maps
            </a>
          </p>
        </address>
        <div>
          <p className="label">Ook te vinden</p>
          <ul className="mt-3 space-y-2">
            {footer.socials.map((social) => (
              <li key={social.href}>
                <a href={social.href} target="_blank" rel="noopener" className="inline-flex min-h-11 items-center text-link underline underline-offset-2">
                  {social.label}
                </a>
              </li>
            ))}
            <li>
              <Link href="/offerte" data-cta="offerte" className="inline-flex min-h-11 items-center text-link underline underline-offset-2">
                Offerte aanvragen
              </Link>
            </li>
          </ul>
          <div className="mt-6">
            <CtaPair />
          </div>
        </div>
      </section>
    </article>
  );
}
