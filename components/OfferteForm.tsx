"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";

export default function OfferteForm({
  email,
  phone,
  phoneHref,
  subject,
  werk,
}: {
  email: string;
  phone: string;
  phoneHref: string;
  subject: string;
  werk: readonly string[];
}) {
  const [mailto, setMailto] = useState("");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const soorten = data.getAll("werk").map(String);
    const toelichting = String(data.get("toelichting") || "").trim();
    const body = [
      "Offerteaanvraag",
      "",
      `Naam: ${String(data.get("naam") || "")}`,
      `Telefoon: ${String(data.get("telefoon") || "")}`,
      `E-mail: ${String(data.get("email") || "")}`,
      `Adres/plaats: ${String(data.get("adres") || "").trim() || "niet ingevuld"}`,
      `Soort werk: ${soorten.length ? soorten.join(", ") : "niet ingevuld"}`,
      `Particulier of zakelijk: ${String(data.get("relatie") || "niet ingevuld")}`,
      "",
      "Toelichting:",
      toelichting || "geen",
    ].join("\n");
    const href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setMailto(href);
    window.location.href = href;
  }

  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <p className="border border-lood bg-kalk px-4 py-3 text-[16px] leading-relaxed">
        Dit is een concept: uw eigen mailprogramma opent met het bericht. Er wordt niets automatisch verstuurd.
      </p>

      <div className="grid gap-5 md:grid-cols-2">
        <label className="block">
          <span className="label">Naam</span>
          <input name="naam" required autoComplete="name" className="mt-2 min-h-11 w-full border border-lood px-3" />
        </label>
        <label className="block">
          <span className="label">Telefoon</span>
          <input name="telefoon" type="tel" required autoComplete="tel" className="mt-2 min-h-11 w-full border border-lood px-3" />
        </label>
        <label className="block">
          <span className="label">E-mail</span>
          <input name="email" type="email" required autoComplete="email" className="mt-2 min-h-11 w-full border border-lood px-3" />
        </label>
        <label className="block">
          <span className="label">Adres/plaats</span>
          <input name="adres" autoComplete="street-address" className="mt-2 min-h-11 w-full border border-lood px-3" />
        </label>
      </div>

      <fieldset>
        <legend className="label">Soort werk</legend>
        <div className="mt-3 grid gap-2 sm:grid-cols-2">
          {werk.map((item) => (
            <label key={item} className="flex min-h-11 items-center gap-3 border border-lood bg-wit px-3">
              <input type="checkbox" name="werk" value={item} className="size-4 accent-lood" />
              <span>{item}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <fieldset>
        <legend className="label">Particulier of zakelijk</legend>
        <div className="mt-3 flex flex-wrap gap-3">
          {["Particulier", "Zakelijk"].map((item) => (
            <label key={item} className="flex min-h-11 items-center gap-3 border border-lood bg-wit px-3">
              <input type="radio" name="relatie" value={item} className="size-4 accent-lood" />
              <span>{item}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <label className="block">
        <span className="label">Toelichting</span>
        <textarea name="toelichting" rows={5} className="mt-2 w-full border border-lood px-3 py-2" />
      </label>

      <label className="flex min-h-11 items-start gap-3">
        <input type="checkbox" name="privacy" required className="mt-1 size-4 accent-lood" />
        <span>
          Ik begrijp dat mijn mailprogramma opent en dat dit formulier niets automatisch verstuurt.{" "}
          <Link href="/privacy" className="text-link underline underline-offset-2">
            Privacy
          </Link>
        </span>
      </label>

      <div className="flex flex-wrap gap-3">
        <button type="submit" data-cta="mail" className="inline-flex min-h-11 items-center bg-lood px-5 font-semibold text-wit">
          Open mailprogramma
        </button>
        <a href={phoneHref} data-cta="bellen" className="inline-flex min-h-11 items-center bg-geel px-5 font-semibold text-lood">
          Bel {phone}
        </a>
      </div>

      {mailto && (
        <p role="status" className="border border-lood bg-wit px-4 py-3 text-[16px] leading-relaxed">
          Dit is een concept: uw eigen mailprogramma opent met het bericht. Er wordt niets automatisch verstuurd. Opent het bericht niet vanzelf, gebruik dan deze link:{" "}
          <a href={mailto} data-cta="mail" className="text-link underline underline-offset-2">
            e-mail naar {email}
          </a>
          . U kunt ook bellen met{" "}
          <a href={phoneHref} data-cta="bellen" className="text-link underline underline-offset-2">
            {phone}
          </a>
          .
        </p>
      )}
    </form>
  );
}
