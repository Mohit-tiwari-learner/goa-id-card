import { useCallback, useMemo, useRef, useState } from "react";
import { motion } from "motion/react";
import { toast } from "sonner";
import { Download, Share2, Copy, Sparkles } from "lucide-react";
import { UploadZone } from "./UploadZone";
import { ImageCropper } from "./ImageCropper";
import { FormatSelector } from "./FormatSelector";
import { LivePreview } from "./LivePreview";
import { loadUserImage } from "@/lib/loadImage";
import { generateBuilderTitle, ROLE_SUGGESTIONS } from "@/lib/builderTitles";
import type { Format, Transform } from "@/lib/artwork";

const SHARE_TEXT =
  "Just got my HH Goa 2026 frame 🌴💻\n\nSee you in Goa.\n\n#FrameInGoa #HHGoa2026";

function Step({
  n,
  title,
  children,
}: {
  n: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="border-t-2 border-goa-yellow/40 pt-6"
    >
      <div className="mb-4 flex items-baseline gap-4">
        <span className="font-display text-3xl leading-none text-goa-pink">{n}</span>
        <h2 className="font-mono text-xs font-bold tracking-[0.28em] text-goa-yellow sm:text-sm">
          {title}
        </h2>
      </div>
      {children}
    </motion.section>
  );
}

export function Generator() {
  const [format, setFormat] = useState<Format>("pfp");
  const [image, setImage] = useState<HTMLImageElement | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [transform, setTransform] = useState<Transform>({ zoom: 1, x: 0, y: 0 });
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [title, setTitle] = useState("GOA CODE NOMAD");
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const input = useMemo(
    () => ({ image, transform, name, role, title }),
    [image, transform, name, role, title],
  );

  const handleFile = useCallback(async (file: File) => {
    setError(null);
    try {
      const img = await loadUserImage(file);
      setImage(img);
      setTransform({ zoom: 1, x: 0, y: 0 });
    } catch (e) {
      setError(e instanceof Error ? e.message : "That photo could not be read.");
    }
  }, []);

  const fileName = `hh-goa-2026-${(name || "builder").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") || "builder"}.png`;

  const toBlob = () =>
    new Promise<Blob | null>((resolve) =>
      canvasRef.current
        ? canvasRef.current.toBlob((b) => resolve(b), "image/png")
        : resolve(null),
    );

  const download = async () => {
    const blob = await toBlob();
    if (!blob) return;
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = fileName;
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 10000);
    toast.success("PNG saved — see you in Goa.");
  };

  const share = async () => {
    const blob = await toBlob();
    const file = blob ? new File([blob], fileName, { type: "image/png" }) : null;
    if (
      file &&
      typeof navigator !== "undefined" &&
      navigator.canShare?.({ files: [file] })
    ) {
      try {
        await navigator.share({ text: SHARE_TEXT, files: [file] });
        return;
      } catch {
        /* user dismissed — fall through to the X intent */
      }
    }
    await download();
    await navigator.clipboard?.writeText(SHARE_TEXT).catch(() => {});
    window.open(
      `https://twitter.com/intent/tweet?text=${encodeURIComponent(SHARE_TEXT)}`,
      "_blank",
      "noopener,noreferrer",
    );
    toast.success("PNG downloaded — attach it in the X composer.");
  };

  const copyText = async () => {
    await navigator.clipboard?.writeText(SHARE_TEXT);
    toast.success("Share text copied.");
  };

  return (
    <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-16">
      <div className="flex flex-col gap-8">
        <Step n="01" title="CHOOSE FORMAT">
          <FormatSelector value={format} onChange={setFormat} />
        </Step>

        <Step n="02" title="YOUR PHOTO">
          <UploadZone onFile={handleFile} hasImage={!!image} error={error} />
        </Step>

        <Step n="03" title="CROP / REPOSITION">
          <ImageCropper transform={transform} onChange={setTransform} disabled={!image} />
        </Step>

        {format === "card" ? (
          <Step n="04" title="BUILDER DETAILS">
            <div className="flex flex-col gap-5">
              <label className="block">
                <span className="label-mono text-goa-yellow">NAME</span>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="AARAV MENEZES"
                  maxLength={22}
                  className="mt-2 block w-full border-4 border-goa-yellow/60 bg-goa-dark px-4 py-3 font-mono text-sm tracking-[0.12em] text-goa-cream outline-none placeholder:text-goa-cream/40 focus:border-goa-yellow"
                />
              </label>
              <label className="block">
                <span className="label-mono text-goa-yellow">STACK / ROLE</span>
                <input
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  placeholder="AI BUILDER"
                  maxLength={28}
                  className="mt-2 block w-full border-4 border-goa-yellow/60 bg-goa-dark px-4 py-3 font-mono text-sm tracking-[0.12em] text-goa-cream outline-none placeholder:text-goa-cream/40 focus:border-goa-yellow"
                />
              </label>
              <div className="flex flex-wrap gap-2">
                {ROLE_SUGGESTIONS.map((r) => (
                  <button
                    key={r}
                    type="button"
                    onClick={() => setRole(r)}
                    className="border-2 border-goa-yellow/50 px-3 py-1 font-mono text-[0.6rem] tracking-[0.16em] text-goa-cream transition-colors hover:bg-goa-yellow hover:text-goa-ink"
                  >
                    {r.toUpperCase()}
                  </button>
                ))}
              </div>
              <div className="flex flex-wrap items-center gap-3 border-t-2 border-goa-yellow/30 pt-5">
                <span className="font-display text-2xl leading-none text-goa-cream">
                  {title}
                </span>
                <button
                  type="button"
                  onClick={() => setTitle(generateBuilderTitle(role))}
                  className="ml-auto inline-flex items-center gap-2 border-4 border-goa-ink bg-goa-pink px-4 py-2 font-mono text-[0.65rem] font-bold tracking-[0.2em] text-goa-cream transition-transform hover:-translate-y-[2px]"
                >
                  <Sparkles size={14} /> GENERATE TITLE
                </button>
              </div>
            </div>
          </Step>
        ) : null}
      </div>

      <div className="flex flex-col gap-5 lg:sticky lg:top-28 lg:self-start">
        <LivePreview format={format} input={input} onPan={setTransform} canvasRef={canvasRef} />
        <div className="flex flex-col gap-3 sm:flex-row">
          <button
            type="button"
            onClick={download}
            className="inline-flex flex-1 items-center justify-center gap-3 border-4 border-goa-ink bg-goa-yellow px-6 py-4 font-mono text-xs font-bold tracking-[0.2em] text-goa-ink transition-transform hover:-translate-y-1"
          >
            <Download size={16} /> DOWNLOAD PNG
          </button>
          <button
            type="button"
            onClick={share}
            className="inline-flex flex-1 items-center justify-center gap-3 border-4 border-goa-yellow bg-goa-dark px-6 py-4 font-mono text-xs font-bold tracking-[0.2em] text-goa-yellow transition-transform hover:-translate-y-1"
          >
            <Share2 size={16} /> SHARE TO X
          </button>
        </div>
        <button
          type="button"
          onClick={copyText}
          className="inline-flex items-center justify-center gap-3 border-2 border-goa-cream/40 px-6 py-3 font-mono text-[0.65rem] font-bold tracking-[0.2em] text-goa-cream transition-colors hover:border-goa-pink hover:text-goa-pink"
        >
          <Copy size={14} /> COPY SHARE TEXT
        </button>
        <p className="font-mono text-[0.6rem] leading-relaxed tracking-[0.16em] text-goa-cream/70">
          EXPORTED AS A REAL {format === "pfp" ? "1080 × 1080" : "1080 × 1350"} PNG ·
          #FRAMEINGOA
        </p>
      </div>
    </div>
  );
}
