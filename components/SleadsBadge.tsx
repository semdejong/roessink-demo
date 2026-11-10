/** Subtiele badge: markeert de site als concept van Sleads. Niet verwijderen in demo's. */
export default function SleadsBadge() {
  return (
    <a
      href="https://sleads.nl"
      target="_blank"
      rel="noopener"
      aria-label="Concept door Sleads – bekijk sleads.nl"
      className="fixed bottom-24 left-3 z-50 inline-flex items-center gap-1.5 border border-lood/20 bg-papier px-3 py-1.5 text-[11px] font-medium text-lood md:bottom-4 md:left-4 md:text-xs print:hidden"
    >
      <span className="h-1.5 w-1.5 bg-groen" aria-hidden />
      Concept door <span className="font-semibold">Sleads</span>
    </a>
  );
}
