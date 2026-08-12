const PREFIX = [
  "THE PIXEL",
  "GOA CODE",
  "MIDNIGHT",
  "BEACH MODE",
  "SHIP-IT",
  "FULL STACK",
  "CHAOS",
  "SUNSET",
  "COCONUT",
  "TIDEPOOL",
  "NEON MONSOON",
  "SANDY TERMINAL",
];

const SUFFIX = [
  "PIRATE",
  "NOMAD",
  "BUILDER",
  "ENGINEER",
  "SURFER",
  "SUNSEEKER",
  "HACKER",
  "SHIPPER",
  "DREAMER",
  "TINKERER",
  "PROTOTYPER",
  "WAVERIDER",
];

const CURATED = [
  "THE PIXEL PIRATE",
  "GOA CODE NOMAD",
  "MIDNIGHT BUILDER",
  "BEACH MODE ENGINEER",
  "SHIP-IT SURFER",
  "FULL STACK SUNSEEKER",
  "CHAOS ENGINEER",
  "SUSEGAD SHIPPER",
  "FENI-FUELED FOUNDER",
  "MONSOON MERGE MASTER",
];

const pick = <T,>(arr: T[]): T => arr[Math.floor(Math.random() * arr.length)] as T;

export function generateBuilderTitle(seedRole?: string): string {
  if (Math.random() < 0.45) return pick(CURATED);
  const role = (seedRole || "").toLowerCase();
  const roleWord = role.includes("design")
    ? "DESIGNER"
    : role.includes("found")
      ? "FOUNDER"
      : role.includes("ai")
        ? "PROMPT PILOT"
        : null;
  return roleWord && Math.random() < 0.5
    ? `${pick(PREFIX)} ${roleWord}`
    : `${pick(PREFIX)} ${pick(SUFFIX)}`;
}

export const ROLE_SUGGESTIONS = [
  "Frontend Engineer",
  "AI Builder",
  "Designer",
  "Founder",
  "Creative Developer",
];
