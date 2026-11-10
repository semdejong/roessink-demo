import Image from "next/image";
import Link from "next/link";
import { content } from "@/content";
import { Logo } from "@/components/ui";

export default function Footer() {
  const { contact, footer, nav, brands, memberships } = content;
  return (
    <footer data-section="footer" className="bg-lood text-papier">
      <div className="h-1.5 bg-lood" aria-hidden="true" />
      <div className="wrap grid gap-10 py-12 md:grid-cols-[1.1fr_1fr_1fr] md:pb-10">
        <div>
          <Logo className="w-[170px] md:w-[208px]" />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-papier">Schildersbedrijf in de regio Twente, sinds 1989.</p>
        </div>
        <nav aria-label="Footer">
          <p className="label text-papier/80">Menu</p>
          <ul className="mt-3 space-y-2">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="inline-flex min-h-11 items-center hover:underline">
                  {item.label}
                </Link>
                {item.children && (
                  <ul className="mb-2 space-y-1 pl-3">
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <Link href={child.href} className="inline-flex min-h-10 items-center text-sm text-papier/90 hover:underline">
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <p className="label text-papier/80">Contact</p>
          <address className="mt-3 space-y-2 text-base not-italic">
            <p>
              {contact.street}
              <br />
              {contact.postcode} {contact.place}
            </p>
            <p>
              <a href={contact.phoneHref} data-cta="bellen" className="inline-flex min-h-11 items-center font-semibold hover:underline">
                {contact.phoneDisplay}
              </a>
            </p>
            <p>
              <a href={`mailto:${contact.email}`} data-cta="mail" className="inline-flex min-h-11 items-center break-all hover:underline">
                {contact.email}
              </a>
            </p>
            <p>
              <a href={contact.mapsUrl} className="inline-flex min-h-11 items-center hover:underline" target="_blank" rel="noopener">
                Route via Google Maps
              </a>
            </p>
          </address>
        </div>
      </div>

      <div className="bg-papier text-lood">
        <div className="wrap py-8">
          <p className="label">Wij werken o.a. met</p>
          <ul className="mt-4 flex flex-wrap items-center gap-x-8 gap-y-4">
            {brands.map((brand) => (
              <li key={brand.name}>
                <Image
                  src={brand.src}
                  alt={brand.name}
                  width={brand.width}
                  height={brand.height}
                  unoptimized
                  className="brand-logo h-8 w-auto max-w-[108px] grayscale transition duration-200 hover:grayscale-0"
                />
              </li>
            ))}
          </ul>
          <ul className="mt-8 flex flex-wrap items-center gap-6">
            <li>
              <Link href={`/over-ons#${memberships.onderhoud.id}`}>
                <Image
                  src={memberships.onderhoud.logo}
                  alt={memberships.onderhoud.logoAlt}
                  width={memberships.onderhoud.width}
                  height={memberships.onderhoud.height}
                  unoptimized
                  className="h-12 w-auto"
                />
              </Link>
            </li>
            <li>
              <Link href={`/over-ons#${memberships.schilderscool.id}`}>
                <Image
                  src={memberships.schilderscool.logo}
                  alt={memberships.schilderscool.logoAlt}
                  width={memberships.schilderscool.width}
                  height={memberships.schilderscool.height}
                  unoptimized
                  className="h-12 w-auto"
                />
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="wrap flex flex-col gap-3 py-6 pb-36 text-sm md:flex-row md:items-center md:justify-between md:py-6 md:pr-0 md:pb-8 md:pl-36">
        <p>© {content.company.name}</p>
        <div className="flex flex-wrap gap-x-5 gap-y-2">
          {footer.socials.map((social) => (
            <a key={social.href} href={social.href} className="inline-flex min-h-11 items-center hover:underline" target="_blank" rel="noopener">
              {social.label}
            </a>
          ))}
          <Link href="/privacy" className="inline-flex min-h-11 items-center hover:underline">
            Privacy
          </Link>
          <a href="https://sleads.nl" className="inline-flex min-h-11 items-center hover:underline" target="_blank" rel="noopener">
            Concept door Sleads
          </a>
        </div>
      </div>
    </footer>
  );
}
