import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";

const links = [
  { label: "X / TWITTER", href: "https://x.com/Mohit_4_you" },
  { label: "INSTAGRAM", href: "https://www.instagram.com/mohit____tiwari______/?hl=en" },
  { label: "MAIL US", href: "mailto:mohit200409tiwari@gmail.com" },
];

export function Footer() {
  return (
    <footer className="grain relative overflow-hidden bg-goa-ink">
      {/* marquee */}
      <div className="relative border-y-[3px] border-goa-yellow/40 py-4">
        <motion.div
          className="flex w-max gap-10 whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
        >
          {Array.from({ length: 2 }).map((_, block) => (
            <div key={block} className="flex gap-10">
              {Array.from({ length: 6 }).map((_, i) => (
                <span
                  key={i}
                  className="flex items-center gap-10 font-display text-3xl text-goa-yellow sm:text-5xl"
                >
                  HACKER HOUSE GOA 2026
                  <span className="font-mono text-base text-goa-pink">✦</span>
                  <span className="font-deva text-2xl text-goa-cream sm:text-4xl">गोवा</span>
                  <span className="font-mono text-base text-goa-pink">✦</span>
                </span>
              ))}
            </div>
          ))}
        </motion.div>
      </div>

      <div className="px-5 py-14 sm:px-10 sm:py-20">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-end lg:justify-between">
          <div className="min-w-0">
            <motion.p
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-[15vw] leading-[0.82] text-goa-yellow sm:text-[8vw]"
            >
              SEE YOU
              <br />
              <span className="relative inline-block">
                IN GOA
                <motion.span
                  aria-hidden
                  className="absolute -bottom-[0.06em] left-0 h-[6px] w-full origin-left bg-goa-pink"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
                />
              </span>
            </motion.p>

            <Link
              to="/create"
              className="group mt-8 inline-flex items-center gap-5 border-4 border-goa-yellow bg-transparent px-6 py-4 font-mono text-xs font-bold tracking-[0.24em] text-goa-yellow transition-colors hover:bg-goa-yellow hover:text-goa-ink sm:text-sm"
            >
              CREATE YOUR FRAME
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-10 font-mono text-[0.65rem] tracking-[0.2em] text-goa-cream/80 sm:text-xs">
            <div className="space-y-3">
              <p className="text-goa-pink">WHERE / WHEN</p>
              <p>GOA, INDIA</p>
              <p>28 — 31 OCT 2026</p>
              <p>2:47 PM STUDIO</p>
            </div>
            <div className="space-y-3">
              <p className="text-goa-pink">ELSEWHERE</p>
              {links.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  target="_blank"
                  rel="noreferrer"
                  className="story-link block transition-colors hover:text-goa-yellow"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t-2 border-goa-yellow/30 pt-6 font-mono text-[0.6rem] tracking-[0.24em] text-goa-cream/60 sm:flex-row sm:items-center sm:justify-between">
          <p>#FRAMEINGOA · #HHGOA2026</p>
          <p>© 2026 2:47 PM STUDIO — NO SIGNUP, ONE FLOW.</p>
        </div>
      </div>

      <div
        aria-hidden
        className="h-3 w-full"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, var(--goa-pink) 0 8px, var(--goa-yellow) 8px 16px)",
        }}
      />
    </footer>
  );
}
