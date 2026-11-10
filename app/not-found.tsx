import Link from "next/link";
import { content } from "@/content";
import { CtaPair } from "@/components/ui";

export default function NotFound() {
  return (
    <div className="wrap py-16 md:py-24">
      <p className="label text-ink">Roessink Schilderwerken</p>
      <h1 className="mt-4 max-w-[12em] text-[38px] leading-tight md:text-[52px]">Deze ruit zit er niet in</h1>
      <p className="mt-4 max-w-xl text-ink">De pagina bestaat niet. Het schilderwerk en het glas wel, vanuit Enter.</p>
      <div className="mt-8">
        <CtaPair />
      </div>
      <p className="mt-6">
        <Link href="/" className="inline-flex min-h-11 items-center font-semibold text-link underline underline-offset-4">
          Naar de homepage
        </Link>
      </p>
      <p className="mt-2 text-sm text-ink">{content.contact.address}</p>
    </div>
  );
}
