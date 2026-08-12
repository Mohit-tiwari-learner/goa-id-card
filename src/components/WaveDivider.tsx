import { motion } from "motion/react";

type Props = {
  /** Color of the section above the divider. */
  from: string;
  /** Color of the section below the divider. */
  to: string;
  flip?: boolean;
};

/**
 * Hand-drawn beach-water divider. The wave is filled with the *next* section's
 * colour so two sections melt into each other with no hard seam.
 */
export function WaveDivider({ from, to, flip = false }: Props) {
  return (
    <div
      aria-hidden
      className="relative -mt-px block w-full leading-none"
      style={{ background: from, transform: flip ? "scaleX(-1)" : undefined }}
    >
      <svg
        viewBox="0 0 1200 130"
        preserveAspectRatio="none"
        className="block h-[70px] w-full sm:h-[120px]"
      >
        <path
          d="M0 62 C 150 14 300 96 470 62 C 640 26 760 104 930 66 C 1060 36 1140 74 1200 56 V130 H0Z"
          fill={to}
        />
        <path
          d="M0 62 C 150 14 300 96 470 62 C 640 26 760 104 930 66 C 1060 36 1140 74 1200 56"
          fill="none"
          stroke="var(--goa-yellow)"
          strokeWidth="3"
        />
        {/* foam dashes riding the shoreline */}
        <motion.g
          stroke="var(--goa-yellow)"
          strokeWidth="2.2"
          fill="none"
          opacity="0.7"
          animate={{ x: [0, 40, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        >
          <path
            strokeDasharray="10 16"
            d="M-40 80 C 130 34 290 114 460 80 C 630 46 760 122 930 84 C 1060 54 1150 92 1240 74"
          />
          <path
            strokeDasharray="4 22"
            d="M-40 98 C 140 54 300 130 470 98 C 640 66 770 138 940 102 C 1070 74 1150 108 1240 92"
          />
        </motion.g>
      </svg>
    </div>
  );
}
