import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/Nav";
import { Generator } from "@/components/generator/Generator";
import { Footer } from "@/components/Footer";

const title = "Create Your Frame — HH Goa 2026 Generator";
const description =
  "Upload a photo and generate your HH Goa 2026 PFP frame or Builder ID card as a high-resolution PNG. Crop, reposition, download, share with #FrameInGoa.";

export const Route = createFileRoute("/create")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CreatePage,
});

function CreatePage() {
  return (
    <main className="grain min-h-screen bg-goa-green">
      <Nav />
      <div className="px-5 pb-20 pt-32 sm:px-10 sm:pt-40">
        <header className="mb-12 flex flex-col gap-4 sm:mb-16 sm:flex-row sm:items-end sm:justify-between">
          <h1 className="font-display text-[16vw] leading-[0.82] tracking-[-0.02em] text-goa-yellow sm:text-[9vw]">
            FRAME
            <span className="ml-3 inline-block -rotate-6 bg-goa-pink px-4 py-1 font-deva text-[7vw] leading-none text-goa-yellow ring-[6px] ring-goa-yellow sm:text-[4vw]">
              गोवा
            </span>
          </h1>
          <p className="max-w-xs font-mono text-[0.65rem] leading-relaxed tracking-[0.16em] text-goa-cream">
            NO SIGNUP. ONE FLOW. UPLOAD → CROP → DOWNLOAD A REAL PNG.
          </p>
        </header>
        <Generator />
      </div>
      <Footer />
    </main>
  );
}
