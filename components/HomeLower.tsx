import Image from "next/image";
import Link from "next/link";
import { content } from "@/content";
import { CtaPair, LeadList, Photo, Soldeerknoop } from "@/components/ui";
import GlassSoorten from "@/components/GlassSoorten";
import ProjectGallery from "@/components/ProjectGallery";

export function BeglazingBand() {
  const beglazing = content.services.items.find((item) => item.href === "/beglazing");
  return (
    <section data-section="beglazing" className="rise bg-papier">
      <div className="h-1.5 bg-lood" aria-hidden="true" />
      <div className="mx-auto grid max-w-[1180px] lg:grid-cols-[minmax(0,1fr)_6px_minmax(0,1.05fr)]">
        <div className="px-5 py-12 lg:py-16">
          <h2 className="text-[32px] leading-tight md:text-[40px]">Schilder én glaszetter</h2>
          <p className="mt-4 max-w-xl text-ink">
            Beglazing is bepalend voor de sfeer van uw woning of pand. Bij restauratie komen veel glastaken in één project samen.
          </p>
          <p className="mt-4 max-w-xl">Wij plaatsen enkel en dubbel glas. Isolatieglas bespaart energie, sierglas herstellen wij weer als nieuw, en inbraakwerend glas maakt een huis veiliger.</p>
          <p className="mt-6">
            <Link href="/beglazing" className="inline-flex min-h-11 items-center font-semibold text-link underline underline-offset-4">
              Alles over beglazing
            </Link>
          </p>
        </div>
        <div className="relative hidden bg-lood lg:block" aria-hidden="true">
          <Soldeerknoop className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2" />
          <Soldeerknoop className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2" />
        </div>
        <div className="h-1.5 bg-lood lg:hidden" aria-hidden="true" />
        <div className="m-1.5 space-y-1.5 self-start bg-lood p-1.5 lg:mr-5">
          {beglazing?.image && (
            <Photo src={beglazing.image.src} alt={beglazing.image.alt} width={beglazing.image.width} height={beglazing.image.height} />
          )}
          <GlassSoorten variant="compact" />
        </div>
      </div>
    </section>
  );
}

export function ProjectenBand() {
  return (
    <section data-section="projecten" className="rise bg-papier py-12 md:py-16">
      <div className="h-1.5 bg-lood" aria-hidden="true" />
      <div className="wrap pt-12">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-2xl">
            <h2 className="text-[32px] leading-tight md:text-[40px]">Projecten</h2>
            <p className="mt-3 text-ink">Buitenschilderwerk aan Villa Enschede, Villa Leersum en Villa Enter.</p>
          </div>
          <Link href="/projecten" className="inline-flex min-h-11 items-center font-semibold text-link underline underline-offset-4">
            Alle projecten
          </Link>
        </div>
        <div className="mt-8 space-y-10">
          {content.projects.map((project) => (
            <article key={project.slug}>
              <ProjectGallery images={project.small ? project.images : project.images.slice(0, 2)} label={project.caption} />
              <h3 className="mt-3 font-slab text-2xl">{project.caption}</h3>
              <p className="text-ink">{project.visible}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function AboutBand() {
  const { about, memberships, company } = content;
  return (
    <section data-section="over-ons" className="rise bg-kalk">
      <div className="h-1.5 bg-lood" aria-hidden="true" />
      <div className="mx-auto grid max-w-[1180px] lg:grid-cols-[minmax(0,1.15fr)_6px_minmax(0,0.85fr)]">
        <div className="px-5 py-12 lg:py-16">
          <h2 className="text-[32px] leading-tight md:text-[40px]">Over ons</h2>
          <p className="mt-5 max-w-2xl">{company.history}</p>
          <p className="mt-4 font-medium">Uw wensen staan bij ons centraal.</p>
          <h3 className="mt-8 font-slab text-2xl">Werkzaamheden</h3>
          <div className="mt-4">
            <LeadList items={content.werkzaamheden} />
          </div>
          <p className="mt-6">
            <Link href="/over-ons" className="inline-flex min-h-11 items-center font-semibold text-link underline underline-offset-4">
              Meer over ons
            </Link>
          </p>
        </div>
        <div className="relative hidden bg-lood lg:block" aria-hidden="true">
          <Soldeerknoop className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2" />
          <Soldeerknoop className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2" />
        </div>
        <div className="h-1.5 bg-lood lg:hidden" aria-hidden="true" />
        <div className="px-5 py-8 lg:py-16 lg:pr-6">
          <Photo src={about.image} alt={about.imageAlt} width={about.imageWidth} height={about.imageHeight} />
          <ul className="mt-6 flex flex-wrap items-center gap-4 bg-papier p-3">
            <li>
              <Link href={`/over-ons#${memberships.onderhoud.id}`}>
                <Image src={memberships.onderhoud.logo} alt={memberships.onderhoud.logoAlt} width={183} height={97} unoptimized className="h-12 w-auto" />
              </Link>
            </li>
            <li>
              <Link href={`/over-ons#${memberships.schilderscool.id}`}>
                <Image src={memberships.schilderscool.logo} alt={memberships.schilderscool.logoAlt} width={183} height={97} unoptimized className="h-12 w-auto" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export function AdviceBand() {
  return (
    <section data-section="advies" className="rise bg-papier">
      <div className="h-1.5 bg-lood" aria-hidden="true" />
      <div className="mx-auto grid max-w-[1180px] md:grid-cols-[minmax(0,220px)_6px_minmax(0,1fr)]">
        <div className="bg-geel px-5 py-10 text-lood">
          <span aria-hidden="true" className="mb-6 block size-[22px] bg-lood" />
          <h2 className="text-[32px] leading-tight">Wij adviseren u graag</h2>
        </div>
        <div className="hidden bg-lood md:block" aria-hidden="true" />
        <div className="h-1.5 bg-lood md:hidden" aria-hidden="true" />
        <div className="bg-kalk px-5 py-10">
          <p className="max-w-2xl">We luisteren naar uw wensen en adviseren op basis van onze ervaring.</p>
          <p className="mt-3 max-w-2xl text-ink">Verftechnisch advies geven wij in overleg met de verfleverancier. Ook kleuradvies hoort daarbij.</p>
          <p className="mt-6">
            <Link href="/advies" className="inline-flex min-h-11 items-center font-semibold text-link underline underline-offset-4">
              Naar advies
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}

export function ContactBand() {
  const { contact, footer } = content;
  return (
    <section data-section="contact" className="rise bg-papier py-12 md:py-16">
      <div className="h-1.5 bg-lood" aria-hidden="true" />
      <div className="wrap pt-12">
        <h2 className="text-[32px] leading-tight md:text-[40px]">Contact</h2>
        <p className="mt-4 max-w-2xl text-ink">{contact.text}</p>
        <p className="mt-3 max-w-2xl font-medium">Onze werkzaamheden zijn pas klaar als u tevreden bent.</p>
        <address className="mt-6 space-y-2 not-italic">
          <p>
            {contact.street}
            <br />
            {contact.postcode} {contact.place}
          </p>
          <p>
            <a href={contact.phoneHref} data-cta="bellen" className="font-semibold text-link underline underline-offset-2">
              {contact.phoneDisplay}
            </a>
          </p>
          <p>
            <a href={`mailto:${contact.email}`} data-cta="mail" className="text-link underline underline-offset-2">
              {contact.email}
            </a>
          </p>
          <p>
            <a href={footer.socials[0].href} className="text-link underline underline-offset-2" target="_blank" rel="noopener">
              Facebook
            </a>
          </p>
          <p>
            <a href={contact.mapsUrl} className="text-link underline underline-offset-2" target="_blank" rel="noopener">
              Route via Google Maps
            </a>
          </p>
        </address>
        <div className="mt-8">
          <CtaPair />
        </div>
      </div>
    </section>
  );
}
