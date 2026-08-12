/**
 * Canvas artwork renderers for HH GOA 2026.
 * Everything is drawn with the Canvas 2D API so exports are real pixel PNGs,
 * not DOM screenshots.
 */

export const PALETTE = {
  green: "#006B3C",
  dark: "#004B2A",
  yellow: "#FFD600",
  pink: "#FF1493",
  cream: "#F5F3E8",
  ink: "#101510",
};

export type Transform = { zoom: number; x: number; y: number };

export type ArtworkInput = {
  image: HTMLImageElement | null;
  transform: Transform;
  name?: string;
  role?: string;
  title?: string;
};

export const PFP_SIZE = { w: 1080, h: 1080 };
export const CARD_SIZE = { w: 1080, h: 1350 };

export async function ensureFonts() {
  if (typeof document === "undefined") return;
  try {
    await Promise.all([
      document.fonts.load('400 100px "DM Serif Display"'),
      document.fonts.load('700 100px "Space Mono"'),
      document.fonts.load('400 100px "Space Mono"'),
      document.fonts.load('700 100px "Baloo 2"'),
    ]);
    await document.fonts.ready;
  } catch {
    /* fonts are decorative; drawing continues with fallbacks */
  }
}

function serif(size: number) {
  return `400 ${size}px "DM Serif Display", serif`;
}
function mono(size: number, bold = false) {
  return `${bold ? 700 : 400} ${size}px "Space Mono", monospace`;
}
function deva(size: number) {
  return `700 ${size}px "Baloo 2", "DM Serif Display", serif`;
}

function fitFont(
  ctx: CanvasRenderingContext2D,
  text: string,
  maxWidth: number,
  start: number,
  builder: (n: number) => string,
) {
  let size = start;
  ctx.font = builder(size);
  while (ctx.measureText(text).width > maxWidth && size > 12) {
    size -= 2;
    ctx.font = builder(size);
  }
  return size;
}

function tracked(
  ctx: CanvasRenderingContext2D,
  text: string,
  x: number,
  y: number,
  spacing: number,
  align: "left" | "center" | "right" = "left",
) {
  const chars = [...text];
  const total =
    chars.reduce((w, c) => w + ctx.measureText(c).width, 0) + spacing * (chars.length - 1);
  let cursor = align === "left" ? x : align === "center" ? x - total / 2 : x - total;
  for (const c of chars) {
    ctx.fillText(c, cursor, y);
    cursor += ctx.measureText(c).width + spacing;
  }
  return total;
}

function noise(ctx: CanvasRenderingContext2D, w: number, h: number, amount = 2600) {
  ctx.save();
  for (let i = 0; i < amount; i++) {
    const a = Math.random() * 0.06;
    ctx.fillStyle = i % 3 === 0 ? `rgba(0,0,0,${a})` : `rgba(255,255,255,${a})`;
    ctx.fillRect(Math.random() * w, Math.random() * h, 2, 2);
  }
  ctx.restore();
}

/** Cover-fit draw with zoom/offset, never stretched. */
function drawPhoto(
  ctx: CanvasRenderingContext2D,
  img: HTMLImageElement,
  x: number,
  y: number,
  w: number,
  h: number,
  t: Transform,
) {
  const scale = Math.max(w / img.width, h / img.height) * t.zoom;
  const dw = img.width * scale;
  const dh = img.height * scale;
  const dx = x + (w - dw) / 2 + t.x * w;
  const dy = y + (h - dh) / 2 + t.y * h;
  ctx.drawImage(img, dx, dy, dw, dh);
}

function placeholder(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  w: number,
  h: number,
) {
  ctx.fillStyle = PALETTE.dark;
  ctx.fillRect(x, y, w, h);
  ctx.strokeStyle = PALETTE.yellow;
  ctx.lineWidth = 4;
  ctx.setLineDash([18, 14]);
  ctx.strokeRect(x + 10, y + 10, w - 20, h - 20);
  ctx.setLineDash([]);
  ctx.fillStyle = PALETTE.yellow;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.font = mono(30, true);
  tracked(ctx, "YOUR PHOTO", x + w / 2, y + h / 2, 6, "center");
}

/* ---------- hand-drawn doodles ---------- */

function palm(ctx: CanvasRenderingContext2D, x: number, y: number, s: number, color: string) {
  ctx.save();
  ctx.translate(x, y);
  ctx.scale(s, s);
  ctx.strokeStyle = color;
  ctx.lineWidth = 4 / s;
  ctx.lineCap = "round";
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.quadraticCurveTo(-8, -50, 4, -100);
  ctx.stroke();
  for (let i = 0; i < 6; i++) {
    const a = (-Math.PI * (i + 1)) / 7;
    ctx.beginPath();
    ctx.moveTo(4, -100);
    ctx.quadraticCurveTo(4 + Math.cos(a) * 40, -100 + Math.sin(a) * 46, 4 + Math.cos(a) * 74, -92 + Math.sin(a) * 30);
    ctx.stroke();
  }
  ctx.restore();
}

function star(ctx: CanvasRenderingContext2D, x: number, y: number, r: number, color: string) {
  ctx.save();
  ctx.strokeStyle = color;
  ctx.lineWidth = Math.max(2, r / 4);
  ctx.lineCap = "round";
  for (let i = 0; i < 4; i++) {
    const a = (Math.PI / 4) * i;
    ctx.beginPath();
    ctx.moveTo(x - Math.cos(a) * r, y - Math.sin(a) * r);
    ctx.lineTo(x + Math.cos(a) * r, y + Math.sin(a) * r);
    ctx.stroke();
  }
  ctx.restore();
}

function sunRays(ctx: CanvasRenderingContext2D, cx: number, cy: number, r: number, color: string) {
  ctx.save();
  ctx.strokeStyle = color;
  ctx.lineWidth = 3;
  for (let i = 0; i < 28; i++) {
    const a = (Math.PI * 2 * i) / 28;
    ctx.beginPath();
    ctx.moveTo(cx + Math.cos(a) * r, cy + Math.sin(a) * r);
    ctx.lineTo(cx + Math.cos(a) * (r + 34 + (i % 3) * 14), cy + Math.sin(a) * (r + 34 + (i % 3) * 14));
    ctx.stroke();
  }
  ctx.restore();
}

function checkerBar(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  w: number,
  h: number,
  a = PALETTE.pink,
  b = PALETTE.yellow,
) {
  const step = h;
  for (let i = 0; i * step < w; i++) {
    ctx.fillStyle = i % 2 === 0 ? a : b;
    ctx.fillRect(x + i * step, y, Math.min(step, w - i * step), h);
  }
}

/* ---------- FORMAT A: PFP FRAME ---------- */

export function drawPfp(ctx: CanvasRenderingContext2D, input: ArtworkInput) {
  const { w, h } = PFP_SIZE;
  ctx.save();
  ctx.fillStyle = PALETTE.green;
  ctx.fillRect(0, 0, w, h);

  // frame borders
  ctx.strokeStyle = PALETTE.yellow;
  ctx.lineWidth = 10;
  ctx.strokeRect(26, 26, w - 52, h - 52);
  ctx.strokeStyle = PALETTE.pink;
  ctx.lineWidth = 4;
  ctx.setLineDash([16, 12]);
  ctx.strokeRect(48, 48, w - 96, h - 96);
  ctx.setLineDash([]);

  sunRays(ctx, w / 2, 470, 372, "rgba(255,214,0,0.55)");

  // photo circle
  const cx = w / 2;
  const cy = 470;
  const r = 300;
  ctx.save();
  ctx.beginPath();
  ctx.arc(cx, cy, r, 0, Math.PI * 2);
  ctx.closePath();
  ctx.clip();
  if (input.image) {
    drawPhoto(ctx, input.image, cx - r, cy - r, r * 2, r * 2, input.transform);
  } else {
    placeholder(ctx, cx - r, cy - r, r * 2, r * 2);
  }
  ctx.restore();
  ctx.strokeStyle = PALETTE.yellow;
  ctx.lineWidth = 14;
  ctx.beginPath();
  ctx.arc(cx, cy, r + 7, 0, Math.PI * 2);
  ctx.stroke();
  ctx.strokeStyle = PALETTE.ink;
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.arc(cx, cy, r + 18, 0, Math.PI * 2);
  ctx.stroke();

  // top label
  ctx.fillStyle = PALETTE.yellow;
  ctx.textBaseline = "alphabetic";
  ctx.textAlign = "left";
  ctx.font = mono(26, true);
  tracked(ctx, "2:47 PM STUDIO", 78, 118, 5, "left");
  ctx.textAlign = "right";
  tracked(ctx, "HACKER HOUSE", w - 78, 118, 5, "right");

  // headline
  ctx.textAlign = "center";
  const hSize = fitFont(ctx, "HACKER HOUSE", w - 190, 150, serif);
  ctx.fillStyle = PALETTE.yellow;
  ctx.font = serif(hSize);
  ctx.fillText("HACKER HOUSE", cx, 900);

  // pink devanagari badge
  ctx.save();
  ctx.translate(cx + 232, 726);
  ctx.rotate(-0.12);
  ctx.fillStyle = PALETTE.pink;
  ctx.strokeStyle = PALETTE.yellow;
  ctx.lineWidth = 8;
  const bw = 210;
  const bh = 108;
  ctx.beginPath();
  ctx.roundRect(-bw / 2, -bh / 2, bw, bh, 54);
  ctx.fill();
  ctx.stroke();
  ctx.fillStyle = PALETTE.yellow;
  ctx.font = deva(66);
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText("गोवा", 0, 4);
  ctx.restore();

  // bottom meta
  ctx.textBaseline = "alphabetic";
  ctx.textAlign = "center";
  ctx.fillStyle = PALETTE.cream;
  ctx.font = mono(28, true);
  tracked(ctx, "GOA, INDIA · 28 — 31 OCT 2026", cx, 968, 4, "center");

  palm(ctx, 118, 1000, 0.9, PALETTE.yellow);
  palm(ctx, w - 108, 1004, -0.75, PALETTE.yellow);
  star(ctx, 118, 226, 20, PALETTE.pink);
  star(ctx, w - 128, 250, 15, PALETTE.cream);
  star(ctx, 200, 806, 12, PALETTE.yellow);

  noise(ctx, w, h);
  ctx.restore();
}

/* ---------- FORMAT B: BUILDER ID CARD ---------- */

export function drawCard(ctx: CanvasRenderingContext2D, input: ArtworkInput) {
  const { w, h } = CARD_SIZE;
  const name = (input.name || "YOUR NAME").toUpperCase();
  const role = (input.role || "BUILDER").toUpperCase();
  const title = (input.title || "GOA CODE NOMAD").toUpperCase();

  ctx.save();
  ctx.fillStyle = PALETTE.green;
  ctx.fillRect(0, 0, w, h);
  ctx.strokeStyle = PALETTE.yellow;
  ctx.lineWidth = 10;
  ctx.strokeRect(24, 24, w - 48, h - 48);

  checkerBar(ctx, 24, 24, w - 48, 18);
  checkerBar(ctx, 24, h - 42, w - 48, 18);

  // header
  ctx.fillStyle = PALETTE.yellow;
  ctx.textBaseline = "alphabetic";
  ctx.textAlign = "left";
  ctx.font = mono(26, true);
  tracked(ctx, "2:47 PM STUDIO", 72, 116, 5, "left");
  ctx.textAlign = "right";
  tracked(ctx, "BUILDER ID / 2026", w - 72, 116, 5, "right");

  ctx.textAlign = "left";
  const bigSize = fitFont(ctx, "HACKER HOUSE", w - 150, 124, serif);
  ctx.font = serif(bigSize);
  ctx.fillText("HACKER HOUSE", 68, 240);

  // devanagari accent
  ctx.save();
  ctx.translate(w - 168, 300);
  ctx.rotate(-0.1);
  ctx.fillStyle = PALETTE.pink;
  ctx.beginPath();
  ctx.roundRect(-96, -46, 192, 92, 46);
  ctx.fill();
  ctx.strokeStyle = PALETTE.yellow;
  ctx.lineWidth = 7;
  ctx.stroke();
  ctx.fillStyle = PALETTE.yellow;
  ctx.font = deva(56);
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText("गोवा", 0, 4);
  ctx.restore();

  ctx.textBaseline = "alphabetic";
  ctx.textAlign = "left";
  ctx.fillStyle = PALETTE.cream;
  ctx.font = mono(24);
  tracked(ctx, "GOA, INDIA · 28 — 31 OCT 2026", 72, 296, 4, "left");

  // photo panel
  const px = 72;
  const py = 350;
  const pw = 420;
  const ph = 500;
  ctx.save();
  ctx.beginPath();
  ctx.rect(px, py, pw, ph);
  ctx.clip();
  if (input.image) {
    drawPhoto(ctx, input.image, px, py, pw, ph, input.transform);
  } else {
    placeholder(ctx, px, py, pw, ph);
  }
  ctx.restore();
  ctx.strokeStyle = PALETTE.yellow;
  ctx.lineWidth = 8;
  ctx.strokeRect(px, py, pw, ph);
  ctx.strokeStyle = PALETTE.ink;
  ctx.lineWidth = 4;
  ctx.strokeRect(px - 12, py - 12, pw + 24, ph + 24);

  // side details
  const sx = px + pw + 56;
  ctx.fillStyle = PALETTE.yellow;
  ctx.font = mono(22, true);
  tracked(ctx, "NAME", sx, py + 40, 6, "left");
  ctx.fillStyle = PALETTE.cream;
  const nSize = fitFont(ctx, name, w - sx - 72, 74, serif);
  ctx.font = serif(nSize);
  ctx.fillText(name, sx, py + 122);

  ctx.fillStyle = PALETTE.yellow;
  ctx.font = mono(22, true);
  tracked(ctx, "STACK / ROLE", sx, py + 214, 6, "left");
  ctx.fillStyle = PALETTE.cream;
  const rSize = fitFont(ctx, role, w - sx - 72, 34, (n) => mono(n, true));
  ctx.font = mono(rSize, true);
  ctx.fillText(role, sx, py + 262);

  ctx.fillStyle = PALETTE.yellow;
  ctx.font = mono(22, true);
  tracked(ctx, "ID", sx, py + 356, 6, "left");
  ctx.fillStyle = PALETTE.cream;
  ctx.font = mono(30, true);
  ctx.fillText(
    "HHG-" + String(Math.abs(hash(name + role)) % 9000 + 1000),
    sx,
    py + 404,
  );

  // builder title banner
  const by = py + ph + 96;
  ctx.fillStyle = PALETTE.pink;
  ctx.fillRect(56, by, w - 112, 210);
  ctx.strokeStyle = PALETTE.yellow;
  ctx.lineWidth = 6;
  ctx.strokeRect(56, by, w - 112, 210);
  ctx.fillStyle = PALETTE.yellow;
  ctx.textAlign = "center";
  ctx.font = mono(22, true);
  tracked(ctx, "BUILDER TITLE", w / 2, by + 58, 8, "center");
  ctx.fillStyle = PALETTE.cream;
  const tSize = fitFont(ctx, title, w - 200, 88, serif);
  ctx.font = serif(tSize);
  ctx.fillText(title, w / 2, by + 154);

  // footer
  ctx.fillStyle = PALETTE.yellow;
  ctx.font = mono(24, true);
  ctx.textAlign = "left";
  tracked(ctx, "#FRAMEINGOA", 72, h - 92, 5, "left");
  ctx.textAlign = "right";
  tracked(ctx, "HH GOA 2026", w - 72, h - 92, 5, "right");

  palm(ctx, 620, by - 26, 0.5, "rgba(255,214,0,0.85)");
  star(ctx, w - 96, 640, 16, PALETTE.pink);
  star(ctx, 620, 1150, 12, PALETTE.yellow);

  noise(ctx, w, h);
  ctx.restore();
}

function hash(s: string) {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (h << 5) - h + s.charCodeAt(i);
  return h;
}

export type Format = "pfp" | "card";

export function drawArtwork(
  canvas: HTMLCanvasElement,
  format: Format,
  input: ArtworkInput,
) {
  const size = format === "pfp" ? PFP_SIZE : CARD_SIZE;
  canvas.width = size.w;
  canvas.height = size.h;
  const ctx = canvas.getContext("2d");
  if (!ctx) return;
  ctx.clearRect(0, 0, size.w, size.h);
  if (format === "pfp") drawPfp(ctx, input);
  else drawCard(ctx, input);
}
