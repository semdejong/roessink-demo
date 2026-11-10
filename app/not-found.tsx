import Link from "next/link";

export default function NotFound() {
  return (
    <div className="wrap py-20">
      <h1 className="text-[38px] leading-tight md:text-[52px]">Pagina niet gevonden</h1>
      <p className="mt-4 max-w-xl text-ink">Deze pagina bestaat niet op deze site.</p>
      <p className="mt-6">
        <Link href="/" className="inline-flex min-h-11 items-center font-semibold text-link underline underline-offset-4">
          Naar de homepage
        </Link>
      </p>
    </div>
  );
}
