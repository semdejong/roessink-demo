import Image from "next/image";
import Link from "next/link";
import { content } from "@/content";

export function Soldeerknoop({ className = "" }: { className?: string }) {
  return <span aria-hidden="true" className={`knoop ${className}`} />;
}

export function Logo({
  className = "w-[150px] sm:w-[170px] md:w-[208px]",
  priority = false,
}: {
  className?: string;
  priority?: boolean;
}) {
  const { company } = content;
  return (
    <Image
      src={company.logo}
      alt={company.name}
      width={company.logoWidth}
      height={company.logoHeight}
      priority={priority}
      unoptimized
      className={`h-auto max-w-[208px] ${className}`}
    />
  );
}

export function Photo({
  src,
  alt,
  width,
  height,
  className = "",
  priority = false,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
}) {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      priority={priority}
      unoptimized
      className={`h-auto w-full ${className}`}
      style={{ maxWidth: width }}
    />
  );
}

export function CtaPair({ tone = "light" }: { tone?: "light" | "dark" }) {
  const { contact } = content;
  const phoneClass =
    tone === "dark"
      ? "inline-flex min-h-11 items-center bg-wit px-5 font-semibold text-lood"
      : "inline-flex min-h-11 items-center bg-lood px-5 font-semibold text-wit";
  return (
    <div className="flex flex-wrap gap-3">
      <a href={contact.phoneHref} data-cta="bellen" className={phoneClass}>
        Bel {contact.phoneDisplay}
      </a>
      <Link
        href="/offerte"
        data-cta="offerte"
        className="inline-flex min-h-11 items-center bg-geel px-5 font-semibold text-lood"
      >
        Offerte aanvragen
      </Link>
    </div>
  );
}

export function LeadList({ items }: { items: readonly string[] }) {
  return (
    <ul className="space-y-2.5">
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <span aria-hidden="true" className="mt-2.5 size-2 shrink-0 bg-lood" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function LeadedPhoto({
  src,
  alt,
  width,
  height,
  priority = false,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  priority?: boolean;
}) {
  return (
    <figure className="bg-lood p-1.5" style={{ maxWidth: width }}>
      <div className="relative">
        <Photo src={src} alt={alt} width={width} height={height} priority={priority} />
        <span aria-hidden="true" className="pointer-events-none absolute inset-y-0 left-1/2 w-1.5 -translate-x-1/2 bg-lood" />
        <span aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-1/2 h-1.5 -translate-y-1/2 bg-lood" />
        <Soldeerknoop className="pointer-events-none absolute left-1/2 top-0 z-10 -translate-x-1/2 -translate-y-1/2" />
        <Soldeerknoop className="pointer-events-none absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2" />
        <Soldeerknoop className="pointer-events-none absolute left-1/2 bottom-0 z-10 -translate-x-1/2 translate-y-1/2" />
        <Soldeerknoop className="pointer-events-none absolute top-1/2 left-0 z-10 -translate-x-1/2 -translate-y-1/2" />
        <Soldeerknoop className="pointer-events-none absolute top-1/2 right-0 z-10 translate-x-1/2 -translate-y-1/2" />
      </div>
    </figure>
  );
}
