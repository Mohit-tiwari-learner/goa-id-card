import type { Transform } from "@/lib/artwork";

export function ImageCropper({
  transform,
  onChange,
  disabled,
}: {
  transform: Transform;
  onChange: (t: Transform) => void;
  disabled?: boolean;
}) {
  return (
    <div className={disabled ? "pointer-events-none opacity-40" : ""}>
      <div className="flex items-center justify-between">
        <span className="label-mono text-goa-yellow">ZOOM</span>
        <button
          type="button"
          onClick={() => onChange({ zoom: 1, x: 0, y: 0 })}
          className="font-mono text-[0.6rem] font-bold tracking-[0.2em] text-goa-cream underline decoration-goa-pink decoration-2 underline-offset-4"
        >
          RESET
        </button>
      </div>
      <input
        type="range"
        min={1}
        max={3}
        step={0.01}
        value={transform.zoom}
        onChange={(e) => onChange({ ...transform, zoom: Number(e.target.value) })}
        aria-label="Zoom photo"
        className="mt-3 h-3 w-full cursor-pointer appearance-none bg-goa-dark accent-goa-pink outline-none [&::-webkit-slider-thumb]:h-7 [&::-webkit-slider-thumb]:w-7 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:border-4 [&::-webkit-slider-thumb]:border-goa-ink [&::-webkit-slider-thumb]:bg-goa-yellow"
      />
      <p className="mt-3 font-mono text-[0.6rem] leading-relaxed tracking-[0.16em] text-goa-cream/80">
        DRAG THE PREVIEW TO REPOSITION YOUR PHOTO.
      </p>
    </div>
  );
}
