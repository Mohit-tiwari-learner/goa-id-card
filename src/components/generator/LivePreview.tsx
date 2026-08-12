import { useEffect, useRef } from "react";
import { motion } from "motion/react";
import {
  drawArtwork,
  ensureFonts,
  type ArtworkInput,
  type Format,
  type Transform,
} from "@/lib/artwork";

export function LivePreview({
  format,
  input,
  onPan,
  canvasRef,
}: {
  format: Format;
  input: ArtworkInput;
  onPan: (next: Transform) => void;
  canvasRef: React.RefObject<HTMLCanvasElement | null>;
}) {
  const dragging = useRef<{ x: number; y: number } | null>(null);
  const fontsReady = useRef(false);

  useEffect(() => {
    let cancelled = false;
    const render = () => {
      if (cancelled || !canvasRef.current) return;
      drawArtwork(canvasRef.current, format, input);
    };
    if (fontsReady.current) render();
    else
      ensureFonts().then(() => {
        fontsReady.current = true;
        render();
      });
    return () => {
      cancelled = true;
    };
  }, [format, input, canvasRef]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="relative"
    >
      <canvas
        ref={canvasRef}
        className="block w-full touch-none select-none border-4 border-goa-ink"
        style={{ cursor: input.image ? "grab" : "default" }}
        onPointerDown={(e) => {
          if (!input.image) return;
          (e.target as HTMLElement).setPointerCapture(e.pointerId);
          dragging.current = { x: e.clientX, y: e.clientY };
        }}
        onPointerMove={(e) => {
          if (!dragging.current || !input.image) return;
          const rect = e.currentTarget.getBoundingClientRect();
          const dx = (e.clientX - dragging.current.x) / rect.width;
          const dy = (e.clientY - dragging.current.y) / rect.height;
          dragging.current = { x: e.clientX, y: e.clientY };
          onPan({
            ...input.transform,
            x: clamp(input.transform.x + dx, -0.6, 0.6),
            y: clamp(input.transform.y + dy, -0.6, 0.6),
          });
        }}
        onPointerUp={() => {
          dragging.current = null;
        }}
        onPointerCancel={() => {
          dragging.current = null;
        }}
      />
      <span className="absolute -top-3 left-4 bg-goa-pink px-3 py-1 font-mono text-[0.55rem] font-bold tracking-[0.24em] text-goa-cream">
        LIVE PREVIEW
      </span>
    </motion.div>
  );
}

const clamp = (v: number, a: number, b: number) => Math.min(b, Math.max(a, v));
