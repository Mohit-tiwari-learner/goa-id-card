import type { Format } from "@/lib/artwork";

const OPTIONS: { id: Format; label: string; meta: string }[] = [
  { id: "pfp", label: "PFP FRAME", meta: "1080 × 1080" },
  { id: "card", label: "BUILDER ID CARD", meta: "1080 × 1350" },
];

export function FormatSelector({
  value,
  onChange,
}: {
  value: Format;
  onChange: (f: Format) => void;
}) {
  return (
    <div className="grid grid-cols-2 gap-3">
      {OPTIONS.map((o) => {
        const active = o.id === value;
        return (
          <button
            key={o.id}
            type="button"
            onClick={() => onChange(o.id)}
            className={`border-4 px-3 py-4 text-left transition-transform hover:-translate-y-[3px] ${
              active
                ? "border-goa-ink bg-goa-yellow text-goa-ink"
                : "border-goa-yellow/50 bg-goa-dark text-goa-cream"
            }`}
          >
            <span className="block font-mono text-[0.65rem] font-bold tracking-[0.2em] sm:text-xs">
              {o.label}
            </span>
            <span className="mt-1 block font-mono text-[0.6rem] tracking-[0.18em] opacity-70">
              {o.meta}
            </span>
          </button>
        );
      })}
    </div>
  );
}
