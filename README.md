# Goa Frame Studio

Build a production-quality, mobile-first web app for:

HH GOA 2026 — FRAME / ID CARD GENERATOR

IMPORTANT:

The two uploaded reference images are the STRICT visual design reference.

Recreate the visual language, typography, colors, illustrations, spacing, borders, textures, and playful Goa aesthetic as closely as possible.

DO NOT make this look like a generic modern SaaS dashboard.

DO NOT use gradients, glassmorphism, cards with rounded corners, excessive shadows, purple/blue AI colors, or generic Tailwind UI.

The website should feel like an experimental creative studio / hacker-house website from the reference.

==================================================

1. VISUAL DIRECTION

==================================================

Overall aesthetic:

- Goa / tropical / Indian coastal

- Experimental editorial design

- Retro print-poster aesthetic

- Hand-drawn illustration

- Bold typography

- Green + yellow + pink color palette

- Slightly imperfect / handmade feeling

- High contrast

- Playful but premium

- Hacker culture mixed with Goa vacation culture

Primary colors:

Deep Goa Green:

#006B3C

Dark Green:

#004B2A

Bright Yellow:

#FFD600

Pink:

#FF1493

Off White:

#F5F3E8

Black:

#101510

Use these consistently.

The reference uses:

- Huge yellow serif typography

- Bright green backgrounds

- Hand-drawn tropical illustrations

- Thin yellow line artwork

- Pink accents

- Editorial layouts

- Slightly rough print-like texture

- Very large typography

- Strong horizontal composition

==================================================

2. TYPOGRAPHY

==================================================

Use a bold condensed/editorial serif for major headings.

The main title should visually resemble:

HACKER HOUSE

with extremely large typography.

Use a suitable web font such as:

- DM Serif Display

- Cormorant Garamond

- Bodoni Moda

- or another high-contrast editorial serif

For secondary text use a condensed grotesk / monospace style.

The typography must feel like a printed festival poster.

Avoid rounded SaaS fonts.

==================================================

3. LANDING PAGE / HERO

==================================================

Create a full-screen hero inspired directly by the first reference image.

Background:

Deep green.

Top-left:

2:47 PM

STUDIO

Use a handmade / bold yellow treatment.

Top-right navigation:

CHECK HYPE

and a bright yellow APPLY button with a colorful patterned border.

Hero center:

HACKER HOUSE

Huge yellow serif typography.

Between the words, place the Hindi word:

गोवा

in bright pink with a yellow/green visual treatment.

Below:

GOA, INDIA  ·  28 — 31 OCT 2026

Bottom-right:

2:47 PM STUDIO

Add subtle hand-drawn decorative elements around the page.

Add a custom yellow vertical scroll indicator on the far right.

Do not make the hero symmetrical like a normal SaaS website.

It should feel like an art-directed event poster.

==================================================

4. SECOND VISUAL SECTION

==================================================

Create a large illustrated Goa landscape section inspired by the second reference image.

Include:

- Large tropical sun

- Ocean

- Waves

- Palm trees

- Beach umbrellas

- Beach chairs

- Small Goa beach shack

- Surfboards

- Small houses

- People walking

- Tropical vegetation

- Hand-drawn outlines

- Yellow sun rays

Everything should use the same limited palette.

Illustration style:

flat vector illustration + hand-drawn outlines.

No photorealistic 3D.

The illustration should feel like a screen-printed Goa festival poster.

==================================================

5. ACTUAL PRODUCT EXPERIENCE

==================================================

The main purpose of the website is:

HH Goa 2026 Frame / ID Card Generator.

The user should be able to create their graphic in ONE FLOW.

Do not force signup.

Do not require login.

Do not create a dashboard.

Primary CTA:

CREATE YOUR FRAME

When clicked, smoothly transition into the generator.

==================================================

6. GENERATOR UI

==================================================

Create a dedicated generator section/page.

Keep the same HH Goa visual language.

Layout on desktop:

LEFT:

Upload + customization controls

RIGHT:

Large live preview

On mobile:

Stack controls above preview.

The interface should NOT look like a standard form.

Use editorial sections with bold labels.

Example:

01

YOUR PHOTO

[ DROP PHOTO HERE ]

Support:

JPG

PNG

HEIC

Allow:

- drag and drop

- file picker

- mobile camera/gallery selection

Immediately display the uploaded image.

==================================================

7. PHOTO HANDLING

==================================================

This is extremely important.

Users can upload:

- portrait photos

- landscape photos

- square photos

- off-center photos

- different aspect ratios

- iPhone HEIC photos

Never stretch the image.

Use object-fit: cover.

Provide an intuitive crop/reposition interaction.

The user should be able to:

- zoom

- move image

- reposition

- reset crop

But keep the interaction extremely simple.

No complicated editor.

==================================================

8. FORMAT A — PFP FRAME

==================================================

Create a profile-picture frame generator.

The uploaded photo stays at the center.

The HH Goa frame wraps around it.

Frame design must use:

- deep green

- yellow

- pink

- tropical hand-drawn elements

- HH GOA branding

- subtle decorative lines

- Goa visual motifs

The actual user's face/photo must remain the visual focus.

Preview should be square.

Export:

1080 × 1080 PNG.

Add:

DOWNLOAD IMAGE

SHARE TO X

buttons.

==================================================

9. FORMAT B — BUILDER ID CARD

==================================================

Also support a Builder ID Card.

Fields:

NAME

STACK / ROLE

Examples:

Frontend Engineer

AI Builder

Designer

Founder

Creative Developer

Add a generated fun builder title.

Examples:

THE PIXEL PIRATE

GOA CODE NOMAD

MIDNIGHT BUILDER

BEACH MODE ENGINEER

SHIP-IT SURFER

FULL STACK SUNSEEKER

CHAOS ENGINEER

The generated title should feel playful and related to hacker culture + Goa.

ID card should contain:

- uploaded photo

- name

- stack / role

- builder title

- HH GOA 2026 branding

- event dates

- Goa visual elements

The card should feel like a collectible event badge designed for social media.

Not an actual printable ID.

==================================================

10. LIVE PREVIEW

==================================================

The preview must update instantly.

No page refresh.

No fake loading animation.

As soon as the user uploads the photo:

photo → processing → finished graphic

should feel almost instant.

Use Canvas API / html-to-image / Satori / another reliable client-side rendering approach.

The final output MUST be an actual downloadable PNG.

Do not simply screenshot the DOM.

==================================================

11. DOWNLOAD

==================================================

Button:

DOWNLOAD PNG

When clicked:

Generate the final artwork as a real PNG.

Use high resolution.

Recommended:

1080 × 1080 for PFP.

For ID card:

1080 × 1350.

Filename:

hh-goa-2026-[name].png

==================================================

12. SHARE TO X

==================================================

Create a working:

SHARE TO X

button.

It should open X's intent composer with a pre-filled caption.

Example:

Just got my HH Goa 2026 frame 🌴💻

See you in Goa.

#FrameInGoa #HHGoa2026

The hashtag:

#FrameInGoa

MUST be included.

Do not require X login before generating the image.

If direct image attachment is technically impossible through the browser share flow, implement the best possible share fallback.

Also include:

COPY SHARE TEXT

and native Web Share API on supported mobile devices.

==================================================

13. MOBILE EXPERIENCE

==================================================

Mobile is extremely important.

Most users will access this from phones.

The mobile experience should feel intentionally designed, NOT like a desktop page squeezed into mobile.

On mobile:

- hero typography scales intelligently

- upload area becomes full width

- preview remains large

- controls are thumb-friendly

- buttons are large

- no horizontal overflow

- crop interaction works with touch

- download works on iPhone and Android

- native share should be supported

Keep the visual identity exactly the same.

==================================================

14. MICRO INTERACTIONS

==================================================

Use subtle GSAP / Framer Motion animations.

Examples:

Hero:

- typography enters with slight vertical movement

- decorative lines draw themselves

- tropical illustration elements slowly appear

Generator:

- upload area reacts when file is dragged

- image preview smoothly appears

- controls animate subtly

- generated frame transitions smoothly

Buttons:

- slight scale

- slight movement

- no generic glowing effects

The animation should feel editorial and handcrafted.

==================================================

15. BACKGROUND DETAILS

==================================================

Add subtle visual texture.

The reference has a slightly printed / textured feeling.

Implement a very subtle noise texture overlay.

Also add:

- thin yellow lines

- small hand-drawn stars

- tropical doodles

- tiny dots

- imperfect borders

- decorative patterns

Keep these subtle.

Do NOT clutter the generator.

==================================================

16. NAVIGATION

==================================================

Minimal navigation.

Logo:

2:47 PM

STUDIO

Links:

CHECK HYPE

APPLY

CREATE FRAME

Keep navigation floating over the artwork.

No conventional navbar card.

==================================================

17. TECH STACK

==================================================

Use:

React

TypeScript

Tailwind CSS

Framer Motion or GSAP

Canvas API

Use Lucide icons only where necessary.

Avoid unnecessary dependencies.

The app should be lightweight and fast.

==================================================

18. COMPONENT STRUCTURE

==================================================

Create clean reusable components:

App

Hero

GoaIllustration

Generator

UploadZone

ImageCropper

FormatSelector

PfpFrame

BuilderIdCard

BuilderTitleGenerator

LivePreview

DownloadButton

ShareToX

Footer

==================================================

19. UX FLOW

==================================================

The complete user journey must be:

LANDING PAGE

↓

CREATE YOUR FRAME

↓

CHOOSE FORMAT

PFP FRAME

or

BUILDER ID CARD

↓

UPLOAD PHOTO

↓

PHOTO APPEARS IN PREVIEW

↓

OPTIONAL CROP / REPOSITION

↓

IF ID CARD:

ENTER NAME

ENTER STACK / ROLE

↓

GENERATE BUILDER TITLE

↓

LIVE FINAL GRAPHIC

↓

DOWNLOAD PNG

or

SHARE TO X

Everything should happen without signup/login.

==================================================

20. IMPORTANT DESIGN RULE

==================================================

The final website must NOT look like:

- Canva

- Figma

- Notion

- generic AI SaaS

- generic upload dashboard

- generic hackathon landing page

It should look like:

A CULTURAL EVENT WEBSITE

+

A GOA TRAVEL POSTER

+

A HACKER HOUSE

+

A MODERN EDITORIAL DESIGN STUDIO.

The uploaded reference images are the visual source of truth.

Prioritize:

1. Exact visual identity

2. Typography

3. Color system

4. Illustration style

5. Editorial composition

6. Generator usability

7. Mobile responsiveness

8. Fast image generation

The result should feel like an official HH Goa 2026 creative tool rather than a developer-made form.

==================================================

21. FINAL POLISH

==================================================

Before finishing:

- remove all placeholder UI

- remove default Tailwind styling

- remove unnecessary rounded cards

- remove generic shadows

- remove excessive gradients

- ensure typography is highly intentional

- ensure spacing matches the reference aesthetic

- ensure mobile layout is excellent

- ensure PNG export actually works

- ensure HEIC upload is handled gracefully

- ensure X share flow works

- ensure generated graphic looks like an official HH Goa asset

Make the final result feel Awwwards-level, experimental, playful, Indian, tropical, and unmistakably HH Goa.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/f96ebc32-aa6e-451b-8a64-682870fdda1e).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
