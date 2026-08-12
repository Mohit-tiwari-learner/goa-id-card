import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { GoaIllustration } from "@/components/GoaIllustration";
import { WaveDivider } from "@/components/WaveDivider";
import { Footer } from "@/components/Footer";


const title = "HH Goa 2026 — Hacker House Frame & Builder ID Generator";
const description =
  "Mint your official HH Goa 2026 PFP frame or Builder ID card. Upload a photo, pick a format, download a real PNG. No signup. 28—31 Oct 2026, Goa, India.";

export const Route = createFileRoute("/")({
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
  component: Index,
});

function Index() {
  return (
    <main className="bg-goa-green">
      <Nav />
      <Hero />
      <WaveDivider from="var(--goa-green)" to="var(--goa-dark)" />
      <GoaIllustration />
      <WaveDivider from="var(--goa-dark)" to="var(--goa-ink)" flip />
      <Footer />
    </main>
  );
}

