/** Subtiele badge: markeert de site als concept van Sleads. Niet verwijderen in demo's. */
export default function SleadsBadge() {
  return (
    <a
      href="https://sleads.nl"
      target="_blank"
      rel="noopener"
      aria-label="Concept door Sleads – bekijk sleads.nl"
      className="fixed z-30 border border-lood bg-papier px-2.5 py-1.5 text-[11px] font-medium text-lood print:hidden max-xl:right-3 max-xl:bottom-24 xl:top-1/2 xl:left-2.5 xl:-translate-y-1/2 xl:px-1.5 xl:py-3 xl:[writing-mode:vertical-rl] xl:rotate-180"
    >
      <span className="mr-1.5 inline-block size-1.5 bg-groen align-middle xl:mr-0 xl:mb-1.5" aria-hidden />
      Concept door <span className="font-semibold">Sleads</span>
    </a>
  );
}
