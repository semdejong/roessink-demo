"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Logo, Soldeerknoop } from "@/components/ui";

type Child = { label: string; href: string };
type NavItem = { label: string; href: string; children?: Child[] };

export default function Header({
  nav,
  phone,
  phoneHref,
}: {
  nav: NavItem[];
  phone: string;
  phoneHref: string;
}) {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previous;
    };
  }, [open]);

  return (
    <header data-section="header" className="sticky top-0 z-50 bg-lood text-wit">
      <a href="#inhoud" className="skip">
        Naar inhoud
      </a>
      <div className="wrap flex items-center justify-between gap-3 py-3">
        <Link href="/" aria-label="Roessink Schilderwerken, homepage" onClick={() => setOpen(false)}>
          <Logo priority className="w-[148px] sm:w-[170px] md:w-[208px]" />
        </Link>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Hoofdmenu">
          {nav.map((item) =>
            item.children ? (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
                onFocus={() => setServicesOpen(true)}
                onKeyDown={(event) => {
                  if (event.key === "Escape") setServicesOpen(false);
                }}
                onBlur={(event) => {
                  if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
                    setServicesOpen(false);
                  }
                }}
              >
                <div className="flex items-center gap-1">
                  <Link href={item.href} className="inline-flex min-h-11 items-center font-medium">
                    {item.label}
                  </Link>
                  <button
                    type="button"
                    className="inline-flex size-11 items-center justify-center"
                    aria-expanded={servicesOpen}
                    aria-controls="diensten-menu"
                    onClick={() => setServicesOpen(true)}
                  >
                    <span aria-hidden="true">▾</span>
                    <span className="sr-only">Dienstenmenu</span>
                  </button>
                </div>
                <ul
                  id="diensten-menu"
                  className={`absolute top-full left-0 z-20 min-w-64 bg-lood py-2 ${servicesOpen ? "block" : "hidden"}`}
                >
                  {item.children.map((child) => (
                    <li key={child.href}>
                      <Link href={child.href} className="block px-4 py-2.5 hover:bg-wit/10" onClick={() => setServicesOpen(false)}>
                        {child.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <Link key={item.href} href={item.href} className="inline-flex min-h-11 items-center font-medium">
                {item.label}
              </Link>
            ),
          )}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a href={phoneHref} data-cta="bellen" className="inline-flex min-h-11 items-center font-semibold">
            {phone}
          </a>
          <Link href="/offerte" data-cta="offerte" className="inline-flex min-h-11 items-center bg-geel px-4 font-semibold text-lood">
            Offerte
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex size-11 items-center justify-center lg:hidden"
          aria-expanded={open}
          aria-controls="mobiel-menu"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">{open ? "Menu sluiten" : "Menu openen"}</span>
          <span aria-hidden="true" className="flex w-6 flex-col gap-1.5">
            <span className="h-0.5 bg-wit" />
            <span className="h-0.5 bg-wit" />
            <span className="h-0.5 bg-wit" />
          </span>
        </button>
      </div>

      <div className="relative h-1.5 bg-lood">
        <Soldeerknoop className="absolute top-1/2 left-5 -translate-x-1/2 -translate-y-1/2" />
        <Soldeerknoop className="absolute top-1/2 right-5 translate-x-1/2 -translate-y-1/2" />
      </div>

      {open && (
        <nav id="mobiel-menu" aria-label="Mobiel menu" className="fixed inset-x-0 top-[4.6rem] bottom-0 z-[60] overflow-y-auto bg-lood pb-8 lg:hidden">
          <ul className="px-2 py-3">
            {nav.map((item) => (
              <li key={item.href} className="border-t border-wit/15 first:border-t-0">
                <Link href={item.href} className="block px-3 py-3.5 text-lg" onClick={() => setOpen(false)}>
                  {item.label}
                </Link>
                {item.children && (
                  <ul className="pb-2">
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <Link href={child.href} className="block px-6 py-2.5 text-base text-papier" onClick={() => setOpen(false)}>
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
            <li className="border-t border-wit/15">
              <a href={phoneHref} data-cta="bellen" className="block px-3 py-3.5 text-lg font-semibold">
                Bel {phone}
              </a>
            </li>
            <li className="px-3 py-3">
              <Link href="/offerte" data-cta="offerte" className="inline-flex min-h-11 items-center bg-geel px-4 font-semibold text-lood" onClick={() => setOpen(false)}>
                Offerte
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
