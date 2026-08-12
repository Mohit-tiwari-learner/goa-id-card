import { motion } from "motion/react";

/** Screen-printed Goa beach landscape: flat vector + hand-drawn outlines. */
export function GoaIllustration() {
  return (
    <section
      id="hype"
      className="grain relative overflow-hidden bg-goa-dark py-16 sm:py-24"
    >
      <div className="mb-10 flex flex-col gap-3 px-5 sm:mb-14 sm:flex-row sm:items-end sm:justify-between sm:px-10">
        <h2 className="font-display text-[13vw] leading-[0.85] text-goa-yellow sm:text-[7vw]">
          SUN, SALT
          <br />& SHIPPING
        </h2>
        <p className="max-w-xs font-mono text-[0.7rem] leading-relaxed tracking-[0.16em] text-goa-cream">
          A HOUSE ON THE SAND. SHACK CHAI AT 3AM. DEPLOYS BETWEEN SWIMS.
        </p>
      </div>

      <motion.svg
        viewBox="0 0 1200 620"
        className="block w-full"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        aria-label="Illustration of a Goa beach with sun, ocean, palm trees, umbrellas and a beach shack"
      >
        <rect width="1200" height="620" fill="var(--goa-green)" />

        {/* sun + rays */}
        <g>
          <motion.g
            stroke="var(--goa-yellow)"
            strokeWidth="4"
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ duration: 160, repeat: Infinity, ease: "linear" }}
            style={{ transformOrigin: "600px 200px" }}
          >
            {Array.from({ length: 32 }).map((_, i) => {
              const a = (Math.PI * 2 * i) / 32;
              const r1 = 148;
              const r2 = 148 + (i % 3 === 0 ? 58 : 32);
              return (
                <line
                  key={i}
                  x1={600 + Math.cos(a) * r1}
                  y1={200 + Math.sin(a) * r1}
                  x2={600 + Math.cos(a) * r2}
                  y2={200 + Math.sin(a) * r2}
                />
              );
            })}
          </motion.g>
          <circle cx="600" cy="200" r="132" fill="var(--goa-yellow)" />
          <circle cx="600" cy="200" r="132" fill="none" stroke="var(--goa-ink)" strokeWidth="4" />
          <path
            d="M498 236 q102 -48 204 0"
            fill="none"
            stroke="var(--goa-green)"
            strokeWidth="7"
            strokeLinecap="round"
          />
        </g>

        {/* ocean */}
        <rect y="300" width="1200" height="150" fill="var(--goa-dark)" />
        <g stroke="var(--goa-yellow)" strokeWidth="3" fill="none" opacity="0.9">
          {[320, 356, 392, 428].map((y, i) => (
            <motion.path
              key={y}
              d={`M-40 ${y} q 40 -14 80 0 t 80 0 t 80 0 t 80 0 t 80 0 t 80 0 t 80 0 t 80 0 t 80 0 t 80 0 t 80 0 t 80 0 t 80 0 t 80 0 t 80 0 t 80 0`}
              animate={{ x: [0, 160, 0] }}
              transition={{ duration: 9 + i * 2, repeat: Infinity, ease: "easeInOut" }}
            />
          ))}
        </g>

        {/* sand */}
        <path d="M0 450 q 300 -22 600 0 t 600 0 V620 H0Z" fill="var(--goa-cream)" />
        <path
          d="M0 450 q 300 -22 600 0 t 600 0"
          fill="none"
          stroke="var(--goa-ink)"
          strokeWidth="4"
        />

        {/* beach shack */}
        <g stroke="var(--goa-ink)" strokeWidth="4" strokeLinejoin="round">
          <rect x="120" y="418" width="180" height="86" fill="var(--goa-yellow)" />
          <path d="M100 418 L210 366 L320 418Z" fill="var(--goa-pink)" />
          <rect x="176" y="452" width="46" height="52" fill="var(--goa-dark)" />
          <text
            x="210"
            y="404"
            textAnchor="middle"
            fontFamily='"Space Mono", monospace'
            fontSize="17"
            fill="var(--goa-ink)"
            stroke="none"
          >
            SHACK
          </text>
        </g>

        {/* small houses */}
        <g stroke="var(--goa-ink)" strokeWidth="4">
          <rect x="900" y="404" width="90" height="60" fill="var(--goa-cream)" />
          <path d="M888 404 L945 368 L1002 404Z" fill="var(--goa-pink)" />
          <rect x="1010" y="420" width="70" height="44" fill="var(--goa-yellow)" />
          <path d="M1000 420 L1045 392 L1090 420Z" fill="var(--goa-dark)" />
        </g>

        {/* palms */}
        {[
          { x: 400, s: 1 },
          { x: 760, s: 0.82 },
          { x: 1130, s: 0.92 },
          { x: 60, s: 0.7 },
        ].map((p, idx) => (
          <g key={idx} transform={`translate(${p.x} 500) scale(${p.s})`}>
            <path
              d="M0 0 q -14 -78 8 -152"
              fill="none"
              stroke="var(--goa-ink)"
              strokeWidth="9"
              strokeLinecap="round"
            />
            {Array.from({ length: 6 }).map((_, i) => {
              const a = (-Math.PI * (i + 1)) / 7;
              return (
                <path
                  key={i}
                  d={`M8 -152 q ${Math.cos(a) * 56} ${Math.sin(a) * 64} ${Math.cos(a) * 104} ${Math.sin(a) * 40 + 12}`}
                  fill="none"
                  stroke="var(--goa-yellow)"
                  strokeWidth="10"
                  strokeLinecap="round"
                />
              );
            })}
            <circle cx="14" cy="-142" r="9" fill="var(--goa-pink)" />
          </g>
        ))}

        {/* umbrella + chairs */}
        <g stroke="var(--goa-ink)" strokeWidth="4">
          <line x1="620" y1="502" x2="620" y2="430" />
          <path d="M552 430 q 68 -56 136 0Z" fill="var(--goa-pink)" />
          <path d="M574 430 q 46 -40 92 0" fill="var(--goa-yellow)" />
          <g>
            <path d="M660 502 l 46 -30 l 34 8 l -40 26Z" fill="var(--goa-yellow)" />
            <path d="M706 472 l 22 -40 l 26 6 l -20 42" fill="var(--goa-yellow)" />
            <line x1="666" y1="500" x2="668" y2="514" />
            <line x1="734" y1="482" x2="738" y2="500" />
          </g>
          <g>
            <path d="M500 504 l 44 -28 l 34 8 l -38 24Z" fill="var(--goa-cream)" />
            <path d="M544 476 l 20 -40 l 26 6 l -18 42" fill="var(--goa-cream)" />
            <line x1="506" y1="502" x2="508" y2="516" />
            <line x1="572" y1="486" x2="576" y2="502" />
          </g>
        </g>

        {/* surfboards */}
        <g stroke="var(--goa-ink)" strokeWidth="4">
          <ellipse cx="840" cy="450" rx="16" ry="68" fill="var(--goa-yellow)" transform="rotate(12 840 450)" />
          <ellipse cx="878" cy="456" rx="14" ry="60" fill="var(--goa-pink)" transform="rotate(-9 878 456)" />
        </g>

        {/* people walking — animated stick figures (SMIL for rock-solid SVG transforms) */}
        <g stroke="var(--goa-ink)" strokeWidth="5" strokeLinecap="round" fill="none">
          {[
            { y: 560, dur: 26, from: -80, to: 1280, begin: "0s", face: 1 },
            { y: 568, dur: 34, from: -260, to: 1280, begin: "-6s", face: 1 },
            { y: 550, dur: 30, from: 1280, to: -80, begin: "-12s", face: -1 },
          ].map((p, i) => (
            <g key={i}>
              {/* walk across the sand */}
              <animateTransform
                attributeName="transform"
                type="translate"
                values={`${p.from} 0; ${p.to} 0`}
                dur={`${p.dur}s`}
                begin={p.begin}
                repeatCount="indefinite"
              />
              <g transform={`translate(0 ${p.y}) scale(${p.face} 1)`}>
                {/* body bob */}
                <g>
                  <animateTransform
                    attributeName="transform"
                    type="translate"
                    values="0 0; 0 -4; 0 0"
                    dur="0.52s"
                    repeatCount="indefinite"
                  />
                  <circle cx="0" cy="-40" r="9" fill="var(--goa-dark)" />
                  <path d="M0 -30 L0 -10" />
                  {/* legs */}
                  <g>
                    <animateTransform
                      attributeName="transform"
                      type="rotate"
                      values="-18 0 -10; 18 0 -10; -18 0 -10"
                      dur="0.52s"
                      repeatCount="indefinite"
                    />
                    <path d="M0 -10 L-8 10" />
                  </g>
                  <g>
                    <animateTransform
                      attributeName="transform"
                      type="rotate"
                      values="18 0 -10; -18 0 -10; 18 0 -10"
                      dur="0.52s"
                      repeatCount="indefinite"
                    />
                    <path d="M0 -10 L8 10" />
                  </g>
                  {/* arms */}
                  <g>
                    <animateTransform
                      attributeName="transform"
                      type="rotate"
                      values="20 0 -24; -20 0 -24; 20 0 -24"
                      dur="0.52s"
                      repeatCount="indefinite"
                    />
                    <path d="M0 -24 L-12 -14" />
                  </g>
                  <g>
                    <animateTransform
                      attributeName="transform"
                      type="rotate"
                      values="-20 0 -24; 20 0 -24; -20 0 -24"
                      dur="0.52s"
                      repeatCount="indefinite"
                    />
                    <path d="M0 -24 L12 -14" />
                  </g>
                </g>
              </g>
            </g>
          ))}
        </g>



        {/* vegetation + dots */}
        <g stroke="var(--goa-yellow)" strokeWidth="4" strokeLinecap="round">
          {Array.from({ length: 26 }).map((_, i) => (
            <line key={i} x1={20 + i * 46} y1={598} x2={30 + i * 46} y2={582} />
          ))}
        </g>
      </motion.svg>
    </section>
  );
}
