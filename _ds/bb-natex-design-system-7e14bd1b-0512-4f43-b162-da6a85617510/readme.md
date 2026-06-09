# BBL × Natex Design System

## Overview

**Natex Pharma** is an Egyptian FMCG company and co-founder of the **BBL (Beyond the Basics)** brand ecosystem — a multi-channel consumer platform covering home care, personal care, and an IoT-powered refill station network. The design system covers all digital and physical brand touchpoints.

### Sources
- **Logo assets**: `uploads/NATEX LOGO.pdf` (14-page logo variant sheet, extracted Sept 2024). Fonts, colors, and logo shapes were reverse-engineered from this file. Copy at `assets/logos/NATEX LOGO.pdf`.
- **Brand brief**: Provided by client (see notes throughout this file).
- No Figma link or codebase was provided. This system is built from the logo PDF and brand brief alone. Attach a Figma link or codebase to refine further.

---

## Products & Surfaces

| Product | Description | Key Touchpoints |
|---|---|---|
| **NATEX Corporate** | Parent pharma / FMCG company | B2B decks, packaging, letterhead |
| **BBL (Beyond the Basics)** | Consumer brand umbrella | App, website, packaging |
| **Ninja Super Gel** | Home care detergent (concentrated gel) | Packaging, POS, shelf material |
| **Oxi-Active** | Oxy-action laundry booster | Packaging, POS |
| **BBL Breeze** | Personal care / freshness line | Packaging, social media |
| **BBL Refill Station (DVM)** | IoT touchscreen refill kiosk (20+ locations) | DVM UI, machine signage |
| **BBL Mobile App** | Consumer app — refill tracking, product info | iOS/Android |
| **BBL WooCommerce** | Online storefront | Web (desktop + mobile) |

---

## File Map

```
styles.css                  ← root entry point — @import only
tokens/
  fonts.css                 ← @font-face / Google Fonts imports ⚠ see substitutions
  colors.css                ← full color scale + semantic tokens
  typography.css            ← type scale, roles, families
  spacing.css               ← spacing scale + layout + DVM targets
  effects.css               ← shadows, radii, borders, blur
  motion.css                ← duration, easing, transition shorthands
  base.css                  ← reset + element defaults

assets/
  logos/
    NATEX LOGO.pdf          ← original 14-page logo sheet (source of truth for marks)

guidelines/                 ← Foundation specimen cards (Design System tab: "Colors", "Type", "Spacing", "Brand")
  brand-logo.card.html      ← BB mark variants + NATEX corporate lockup
  brand-voice.card.html     ← Tone, copy rules, casing, emoji policy
  colors-primary.card.html  ← Navy + Yellow brand palette
  colors-neutral.card.html  ← Neutral grey scale (50–900)
  colors-semantic.card.html ← Semantic token roles (surface, text, border, interactive)
  colors-subbrands.card.html← Sub-brand palettes: Ninja, Oxi-Active, BBL Breeze
  type-families.card.html   ← Font family specimens (Orbitron, Montserrat, PT Sans, Arabic)
  type-scale.card.html      ← Size scale (xs → 6xl) with line-height
  type-roles.card.html      ← Semantic type role tokens (display, heading, body, label, mono)
  spacing-scale.card.html   ← Raw spacing tokens (0 → 128)
  spacing-layout.card.html  ← Layout, padding, and DVM touch targets
  effects-shadow.card.html  ← Shadow scale (xs → xl + brand shadows)
  effects-radius.card.html  ← Border radius tokens
  motion.card.html          ← Duration, easing, and transition shorthands

components/
  core/
    Button.jsx / .d.ts / .prompt.md   ← 6 variants, 3 sizes, icon, disabled, loading
    Badge.jsx  / .d.ts / .prompt.md   ← 10 variants (semantic + brand + sub-brand)
    Tag.jsx    / .d.ts / .prompt.md   ← Dismissible filter chips
    Input.jsx  / .d.ts / .prompt.md   ← Text field with label, hint, error, icon
    Card.jsx   / .d.ts / .prompt.md   ← 7 surface variants
    buttons.card.html                 ← Component card: Buttons
    badges.card.html                  ← Component card: Badges & Tags
    forms.card.html                   ← Component card: Inputs
    surfaces.card.html                ← Component card: Cards

ui_kits/
  bb_app/
    index.html              ← BBL Consumer App (390×780): Home, Stations, Shop — interactive
  dvm_ui/
    index.html              ← DVM Refill Station (1280×800): Idle → Select → Qty → Dispense → Done
  storefront/
    index.html              ← BBL WooCommerce Storefront (1440px): Home, Shop, Product detail

readme.md                   ← this file (canonical reference)
SKILL.md                    ← Agent Skill manifest (use in Claude Code)
```

### Components Quick Reference

| Component | Variants | Starting Point |
|---|---|---|
| `Button` | primary, secondary, ghost, accent, bb, danger | ✓ Actions |
| `Badge` | neutral, success, warning, error, info, brand, bb, ninja, oxi, breeze | ✓ Feedback |
| `Tag` | neutral, brand, bb, green, yellow, purple | — |
| `Input` | text, email, password, search, number, tel | ✓ Forms |
| `Card` | default, outlined, elevated, interactive, dark, accent, bb | ✓ Surfaces |

### UI Kits Quick Reference

| Kit | Surface | Viewport | Screens |
|---|---|---|---|
| BBL Consumer App | Mobile (iOS-style) | 390×780 | Home, Stations map, Shop |
| DVM Refill Station | Touchscreen kiosk | 1280×800 | Idle, Product select, Qty, Dispense, Complete |
| BBL WooCommerce Storefront | Desktop web | 1440px | Homepage, Shop, Product detail modal |

---

## Content Fundamentals

### Tone & Voice

BBL × Natex speaks with **authority, not aggression**. The brand is technically competent and doesn't need to shout. Think: the confidence of a well-engineered product, not a discount-aisle shout.

| Axis | Direction |
|---|---|
| Formal ↔ Casual | Slightly formal — professional but not stiff |
| We ↔ You | "You" first — product outcomes, not company boasting |
| Passive ↔ Active | Always active voice |
| Long ↔ Short | Short. One idea per sentence. |
| Arabic ↔ English | Bilingual — Arabic leads on retail/DVM; English leads on digital/B2B |

### Casing
- **Headings**: Title Case in English. In Arabic, standard sentence rules.
- **CTAs / Labels**: ALL CAPS with wide letter-spacing (`--tracking-widest`).
- **Product names**: Always exact — "Ninja Super Gel", "Oxi-Active", "BBL Breeze" — no abbreviation.
- **Brand name**: "BBL" (never "Bb" or "bubble"); "NATEX" (always caps).

### Copy Patterns

```
✓ "Cleaner. Faster. Smarter."          — Short parallel fragments
✓ "Refill in under 60 seconds."        — Concrete, measurable
✓ "Built for Egyptian homes."          — Specific, grounded
✓ "Modern cleaning infrastructure."    — Confident B2B framing

✗ "Our innovative eco-friendly solution..." — No buzzwords
✗ "We are proud to offer..."            — Don't lead with "we"
✗ "🫧🌿✨ Super clean vibes!"          — No emoji in brand copy
✗ "Amazing value for your money!"      — No superlative fluff
```

### Emoji
**Never used** in brand copy. Emoji are not part of the BBL × Natex visual language. Exception: social media community content (user-facing, not brand-authored).

---

## Visual Foundations

### Color

**Primary corporate palette (NATEX):** Navy + Yellow.
- Deep navy `#2D326A` is the anchor — used for backgrounds, headlines, brand marks.
- Yellow `#FCE400` is the high-energy accent — used for CTAs, highlights, logo fill.
- These two colors define the NATEX corporate identity.

**Consumer brand palette (BBL):** Teal + Yellow + White.
- Teal `#FCE400` is the BBL consumer hue — app headers, DVM primary color.
- White space is generous — at least 40% of any layout should be white or near-white.

**Sub-brand colors:**
- Ninja Super Gel → Steel blue `#4676BA`
- Oxi-Active → Purple `#592D80`
- BBL Breeze → Botanical green `#2E7D5A`

**General rules:**
- Never use more than 2 brand colors on a single surface.
- Yellow on white requires a navy or charcoal element for legibility (never yellow text on white).
- Dark mode: navy `#1B1F44` background, white text, yellow accent — not supported in all surfaces.

### Typography

Three font stacks:
1. **Orbitron** (display) — Tech headlines, brand marks, DVM headers. ALL CAPS. Wide tracking.
2. **Montserrat** (UI sans) — All body, UI labels, packaging copy. Workhorse.
3. **PT Sans** (editorial) — Captions, long-form text, ingredient/legal copy.
4. **Noto Kufi Arabic** — All Arabic language content.

⚠ **Substitutions**: Montserrat replaces **Gotham**; Orbitron replaces **Neuropolitical**. Supply original font files (OTF/TTF) to replace.

Hierarchy rule: **maximum 2 typefaces per surface**. Usually Montserrat + Orbitron (or Montserrat + Arabic).

### Shape Language & Geometry

- **Geometric and structured.** Rectangles, not blobs.
- Border radius: `--radius-sm` (4px) for buttons/inputs. `--radius-md` (6px) for cards. Never more than `--radius-xl` (16px) for standard components.
- Full circles only for avatars.
- No organic shapes, no wavy backgrounds, no rounded "pill" hero sections.

### Backgrounds

- **Primary surface**: White `#FFFFFF` or near-white `#F8F8F8`.
- **Dark surface**: Navy `#2D326A` or `#1B1F44` — used for hero sections, footer, DVM idle screen.
- **No gradients** on hero backgrounds or card fills. Flat color only.
- **Texture / pattern**: None in digital surfaces. Packaging may use geometric grid patterns — never on screens.
- **Full-bleed imagery**: Used sparingly in marketing. Product-on-white or lifestyle photography in controlled studio settings. Color temperature: clean, neutral-to-cool. No grain filter.

### Cards

```
background:   var(--surface-card)        /* white */
border:       var(--card-border)         /* 1px solid #EFEEF0 */
border-radius:var(--card-radius)         /* 6px */
box-shadow:   var(--card-shadow)         /* 0 1px 4px rgba(35,31,32,0.08) */
padding:      var(--pad-card)            /* 24px */
```

No left-border accent. No colored card backgrounds (except on dark surface).

### Shadows

Shadows are subtle and desaturated. They communicate elevation, not drama.
- `--shadow-xs` — floating labels, tooltips
- `--shadow-sm` — cards (default)
- `--shadow-md` — dropdowns, popovers
- `--shadow-lg` — modals, side drawers
- `--shadow-xl` — bottom sheets, full-screen overlays

Brand-tinted shadows (`--shadow-brand-sm/md/lg`) used on primary action buttons only.

### Animation & Motion

- **Minimal.** Functional transitions only.
- Button hover: `background-color` + `box-shadow`, 150ms ease-out.
- Page transitions: opacity fade, 220ms.
- DVM animations: slightly slower (300ms) — touchscreen legibility.
- **No bounce, spring, or elastic easing** in any surface.
- Respect `prefers-reduced-motion`.

### Hover / Press States

- **Button primary hover**: Background darkens 1 shade. Shadow adds navy tint.
- **Button press**: Scale `0.97` + `--duration-fast` (80ms). Immediate feedback.
- **Ghost / text hover**: Background fill `var(--interactive-ghost-hover)` (#F8F8F8).
- **Links**: Color shifts to `--text-link-hover`. No underline change.
- **Cards (interactive)**: `box-shadow` lifts to `--shadow-md`. `border-color` darkens.

### Borders

- Default: `1px solid var(--border-subtle)` — `#EFEEF0`.
- Strong: `1px solid var(--border-default)` — `#CACBCC`.
- Brand stroke: `2px solid var(--color-navy-800)`.
- Focus ring: `0 0 0 3px rgba(70, 118, 186, 0.35)` — blue outline.
- On dark surfaces: focus ring uses yellow `rgba(252, 228, 0, 0.55)`.

### Transparency & Blur

- Used only for **overlays and modals**: `rgba(35, 31, 32, 0.56)` scrim.
- Frosted glass (`backdrop-filter: blur`) reserved for DVM overlay states and premium app modals.
- Never used decoratively on landing pages.

### Imagery

- **Color temperature**: Neutral-to-cool. No warm vintage filters.
- **Style**: Clean product photography on white/grey seamless. No lifestyle clutter.
- **No grain** or film texture.
- **No illustrated characters** or cartoon mascots.
- Aspect ratios: 4:3 for cards, 16:9 for hero, 1:1 for product tiles.

### Corner Radius Summary

| Element | Token | Value |
|---|---|---|
| Button | `--radius-sm` | 4px |
| Input | `--radius-sm` | 4px |
| Badge / Tag | `--radius-pill` | 9999px |
| Card | `--radius-md` | 6px |
| Modal | `--radius-lg` | 10px |
| Feature card | `--radius-xl` | 16px |
| Avatar | `--radius-circle` | 50% |

---

## Iconography

No proprietary icon set is included with the provided assets.

**Recommended system:** [Lucide Icons](https://lucide.dev) — clean, 1.5px stroke weight, geometric, available via CDN and React. Matches the brand's structured, minimal aesthetic.

```html
<!-- CDN load -->
<script src="https://unpkg.com/lucide@latest"></script>
<script>lucide.createIcons();</script>
<i data-lucide="droplet"></i>
```

**Rules:**
- Stroke weight: 1.5px (default Lucide).
- Size: 16px (inline), 20px (button), 24px (nav), 32px+ (DVM large touch).
- Color: inherit from text (never decorative color on icons).
- No filled icons except for status indicators (success ✓, error ✕).
- No emoji as icons.
- No hand-drawn or illustrated icons.

**DVM / Kiosk:** Larger icon sizes (32–48px) with wider touch targets (min 44px).

---

*This readme is the canonical reference. Components, cards, and kits in this project reflect these rules.*
