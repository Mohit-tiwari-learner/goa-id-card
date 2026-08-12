import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";

const rise = {
  hidden: { y: 40, opacity: 0 },
  show: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: { duration: 0.9, delay: 0.1 + i * 0.09, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

export function Hero() {
  return (
    <section className="grain relative flex min-h-[100svh] flex-col justify-between overflow-hidden bg-goa-green pb-10 pt-32 sm:pt-40">
      {/* thin hand-drawn line artwork */}
      <svg
        aria-hidden
        className="pointer-events-none absolute inset-0 h-full w-full"
        viewBox="0 0 1200 800"
        preserveAspectRatio="xMidYMid slice"
      >
        <motion.g
          stroke="var(--goa-yellow)"
          strokeWidth="1.4"
          fill="none"
          opacity="0.55"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2.4, ease: "easeInOut" }}
        >
          <motion.path d="M0 690 C 180 640 300 740 480 690 C 640 645 760 730 940 686 C 1060 656 1140 700 1200 676" />
          <motion.path d="M0 730 C 200 690 320 780 520 726 C 700 678 820 762 1000 716 C 1100 690 1150 726 1200 712" />
          <motion.path d="M600 800 L600 560" />
          <motion.path d="M600 610 C 560 590 545 552 552 512" />
          <motion.path d="M600 610 C 646 592 664 552 656 512" />
        </motion.g>
        <g stroke="var(--goa-pink)" strokeWidth="2" opacity="0.8">
          <path d="M110 300 L134 300 M122 288 L122 312" />
          <path d="M1080 250 L1104 250 M1092 238 L1092 262" />
        </g>
      </svg>

      <div className="relative px-5 sm:px-10">
        <motion.h1
          className="font-display leading-[0.82] text-goa-yellow"
          initial="hidden"
          animate="show"
        >
          <motion.span
            variants={rise}
            custom={0}
            className="block text-[19vw] tracking-[-0.02em] sm:text-[15vw]"
          >
            HACKER
          </motion.span>
          <motion.span
            variants={rise}
            custom={1}
            className="relative block text-[19vw] tracking-[-0.02em] sm:text-[15vw]"
          >
            HOUSE
            <motion.span
              initial={{ scale: 0.5, rotate: -18, opacity: 0 }}
              animate={{ scale: 1, rotate: -8, opacity: 1 }}
              transition={{ delay: 0.75, type: "spring", stiffness: 180, damping: 12 }}
              className="absolute -top-[6vw] right-[2vw] inline-block bg-goa-pink px-[3vw] py-[0.6vw] font-deva text-[7vw] leading-none text-goa-yellow ring-[6px] ring-goa-yellow sm:right-[18vw] sm:text-[5.5vw]"
              style={{ borderRadius: "999px" }}
            >
              गोवा
            </motion.span>
          </motion.span>
        </motion.h1>

        <motion.div
          variants={rise}
          custom={3}
          initial="hidden"
          animate="show"
          className="mt-5 flex flex-col gap-2 border-t-2 border-goa-yellow/60 pt-4 sm:flex-row sm:items-center sm:justify-between"
        >
          <p className="font-mono text-xs font-bold tracking-[0.3em] text-goa-yellow sm:text-sm">
            GOA, INDIA · 28 — 31 OCT 2026
          </p>
          <p className="font-mono text-xs font-bold tracking-[0.3em] text-goa-yellow sm:text-sm">
            2:47 PM STUDIO
          </p>
        </motion.div>
      </div>

      <motion.div
        variants={rise}
        custom={5}
        initial="hidden"
        animate="show"
        className="relative mt-14 flex flex-col gap-6 px-5 sm:mt-20 sm:flex-row sm:items-end sm:justify-between sm:px-10"
      >
        <p className="max-w-sm font-mono text-[0.7rem] leading-relaxed tracking-[0.14em] text-goa-cream sm:text-xs">
          FOUR DAYS. ONE HOUSE. SALT AIR, LONG NIGHTS, SHIPPED CODE. MINT YOUR
          OFFICIAL HH GOA 2026 FRAME OR BUILDER ID — NO SIGNUP, ONE FLOW.
        </p>
        <Link
          to="/create"
          className="group inline-flex w-full items-center justify-between gap-6 border-4 border-goa-ink bg-goa-yellow px-6 py-4 font-mono text-sm font-bold tracking-[0.22em] text-goa-ink transition-transform hover:-translate-y-1 sm:w-auto sm:px-9 sm:text-base"
        >
          CREATE YOUR FRAME
          <span className="transition-transform group-hover:translate-x-1">→</span>
        </Link>
      </motion.div>

      {/* custom scroll indicator */}
      <div className="pointer-events-none absolute right-3 top-1/2 hidden -translate-y-1/2 flex-col items-center gap-3 sm:flex">
        <span className="h-24 w-[3px] bg-goa-yellow/30">
          <motion.span
            className="block h-8 w-[3px] bg-goa-yellow"
            animate={{ y: [0, 64, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
        </span>
        <span className="font-mono text-[0.55rem] tracking-[0.4em] text-goa-yellow [writing-mode:vertical-rl]">
          SCROLL
        </span>
      </div>
    </section>
  );
}
