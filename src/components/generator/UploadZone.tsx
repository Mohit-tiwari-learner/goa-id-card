import { useRef, useState } from "react";
import { motion } from "motion/react";

export function UploadZone({
  onFile,
  hasImage,
  error,
}: {
  onFile: (file: File) => void;
  hasImage: boolean;
  error?: string | null;
}) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [dragging, setDragging] = useState(false);

  return (
    <div>
      <motion.button
        type="button"
        onClick={() => inputRef.current?.click()}
        onDragOver={(e) => {
          e.preventDefault();
          setDragging(true);
        }}
        onDragLeave={() => setDragging(false)}
        onDrop={(e) => {
          e.preventDefault();
          setDragging(false);
          const f = e.dataTransfer.files?.[0];
          if (f) onFile(f);
        }}
        animate={{ scale: dragging ? 1.02 : 1 }}
        className={`block w-full border-4 border-dashed px-5 py-10 text-center transition-colors sm:py-12 ${
          dragging
            ? "border-goa-pink bg-goa-pink/15"
            : "border-goa-yellow/70 bg-goa-dark hover:border-goa-yellow"
        }`}
      >
        <span className="block font-display text-2xl text-goa-yellow sm:text-3xl">
          {hasImage ? "REPLACE PHOTO" : "DROP PHOTO HERE"}
        </span>
        <span className="mt-2 block font-mono text-[0.6rem] tracking-[0.24em] text-goa-cream">
          TAP TO PICK · CAMERA OK · JPG / PNG / HEIC
        </span>
      </motion.button>
      <input
        ref={inputRef}
        type="file"
        accept="image/*,.heic,.heif"
        className="hidden"
        onChange={(e) => {
          const f = e.target.files?.[0];
          if (f) onFile(f);
          e.target.value = "";
        }}
      />
      {error ? (
        <p className="mt-3 font-mono text-[0.65rem] leading-relaxed tracking-[0.14em] text-goa-pink">
          {error}
        </p>
      ) : null}
    </div>
  );
}
