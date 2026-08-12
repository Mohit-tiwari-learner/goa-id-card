import { Link } from "@tanstack/react-router";

export function Nav() {
  return (
    <header className="pointer-events-none absolute inset-x-0 top-0 z-30 flex items-start justify-between px-5 pt-6 sm:px-10 sm:pt-8">
      <Link to="/" className="pointer-events-auto block leading-[0.8]">
        <span className="block font-display text-3xl text-goa-yellow sm:text-4xl">2:47</span>
        <span className="block font-mono text-[0.6rem] font-bold tracking-[0.42em] text-goa-yellow sm:text-xs">
          PM STUDIO
        </span>
      </Link>

      <nav className="pointer-events-auto">
        <Link to="/create" className="group relative block p-[5px]">
          <span
            aria-hidden
            className="absolute inset-0"
            style={{
              backgroundImage:
                "repeating-linear-gradient(45deg, var(--goa-pink) 0 6px, var(--goa-yellow) 6px 12px)",
            }}
          />
          <span className="relative flex items-center gap-3 border-2 border-goa-ink bg-goa-yellow px-5 py-2 font-mono text-[0.65rem] font-bold tracking-[0.22em] text-goa-ink transition-transform group-hover:-translate-y-[2px] sm:px-7 sm:text-sm">
            CREATE YOUR FRAME
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </span>
        </Link>
      </nav>
    </header>
  );
}
