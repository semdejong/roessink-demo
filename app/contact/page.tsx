import type { Metadata } from "next";
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
        <p className="label text-ink">Dorpsstraat, Enter</p>
        <h1 className="mt-4 text-[38px] leading-[1.08] sm:text-[44px] md:text-[60px]">Contact</h1>
        <p className="mt-5 max-w-2xl">{contact.text}</p>
        <p className="mt-3 max-w-2xl text-ink">
          {company.name} is een schildersbedrijf in de regio Twente, gevestigd aan de Dorpsstraat in Enter. Eigenaar is {company.owner}.
        </p>
      </header>
      <section data-section="gegevens" className="wrap pb-16">
        <div className="grid gap-1.5 bg-lood md:grid-cols-2">
          <address className="bg-papier p-6 not-italic md:p-8">
            <p className="label">Adres</p>
            <p className="mt-3 font-slab text-3xl leading-tight md:text-4xl">
              {contact.street}
              <br />
              {contact.postcode} {contact.place}
            </p>
            <p className="mt-4 text-ink">{company.name}</p>
          </address>
          <div className="grid gap-1.5 bg-lood">
            <a href={contact.phoneHref} data-cta="bellen" className="flex min-h-24 flex-col justify-center bg-lood px-6 py-5 text-wit no-underline">
              <span className="label text-papier/70">Bellen</span>
              <span className="mt-1 font-slab text-3xl">{contact.phoneDisplay}</span>
            </a>
            <a href={`mailto:${contact.email}`} data-cta="mail" className="flex min-h-24 flex-col justify-center bg-kalk px-6 py-5 text-lood no-underline">
              <span className="label">E-mail</span>
              <span className="mt-1 break-all font-slab text-2xl">{contact.email}</span>
            </a>
          </div>
          <a href={contact.mapsUrl} target="_blank" rel="noopener" className="bg-geel p-6 text-lood no-underline md:p-8">
            <span className="label">Kaart</span>
            <span className="mt-2 block font-slab text-2xl">Route via Google Maps</span>
            <span className="mt-2 block text-[17px]">Dorpsstraat 23A, 7468 CC Enter</span>
          </a>
          <div className="bg-papier p-6 md:p-8">
            <p className="label">Ook te vinden</p>
            <ul className="mt-3 space-y-1">
              {footer.socials.map((social) => (
                <li key={social.href}>
                  <a href={social.href} target="_blank" rel="noopener" className="inline-flex min-h-11 items-center font-semibold text-link underline underline-offset-4">
                    {social.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-8">
          <CtaPair />
        </div>
      </section>
    </article>
  );
}
