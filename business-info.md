# TechMode USA — Design System & Website Reference

> Reference site: https://techmodeusa.com/  
> Prepared: 2026-10-31  
> Purpose: A practical design brief for recreating, extending, or maintaining the TechMode Repair website.

## 1. Brand and product context

**Business:** TechMode Repair (TechMode USA)  
**Positioning:** A local, professional electronics repair shop with approachable, straightforward service. The primary storefront is in Cedar Hill, Texas; nearby communities are served from that location.

**Core promise:** Diagnose the problem, explain the options clearly, and get the customer's device working again.

**Primary service categories**
- Game consoles: PlayStation, Xbox, Nintendo Switch, controllers, HDMI, power, overheating, cleaning, and board-level issues.
- Phones: iPhone, Samsung, Pixel; screens, batteries, charging ports, cameras, speakers, and hardware.
- Tablets: iPad and supported Android tablets; screens, batteries, ports, buttons, and power issues.
- Computers: PC, desktop, laptop, MacBook; hardware, software, storage upgrades, diagnostics, data, and supported board-level work.
- Advanced repairs: HDMI port replacement, microsoldering, motherboard/board-level troubleshooting, thermal maintenance.

**Primary conversion actions**
1. Request a repair quote.
2. Call the shop: **817-449-4211**.
3. Visit the Cedar Hill workshop.

**Business details shown on the site**
- 140 W FM 1382 Rd, Suite 177, Cedar Hill, TX 75104
- info@techmodeusa.com
- Monday–Saturday, 10:00 AM–6:00 PM (confirm current hours before publishing)
- Walk-ins are welcome; calling ahead can help confirm parts and timing.

## 2. Visual direction

### Overall aesthetic

Build a modern, confident local-service website: clean, high-contrast, technical without feeling cold, and friendly without looking childish.

The current homepage's strongest design direction is:
- Bold, concise headline-led sections.
- Clear section labels and strong hierarchy.
- Generous whitespace and simple content groupings.
- Service-category entry points that help visitors self-select quickly.
- Repeated quote and phone calls-to-action.
- Practical trust messages: clear communication, same-day availability where possible, quality parts, and warranty on qualifying repairs.

Avoid leaning too heavily into fantasy/storybook language. Some older service/about content uses “magic,” “kingdom,” and “happily ever after” metaphors; the newer homepage copy is more direct and credible. Prefer the newer, plainspoken voice.

### Color system

The text-only page inspection does not expose reliable computed CSS color values. Treat the following as **implementation tokens to confirm against the live visual site**, not verified pixel-extracted brand values:

| Token | Suggested value | Use |
|---|---:|---|
| `--color-ink` | `#111827` | Main text, dark headings |
| `--color-background` | `#FFFFFF` | Main page background |
| `--color-surface` | `#F5F7FA` | Alternate section backgrounds, cards |
| `--color-muted` | `#667085` | Supporting text, metadata |
| `--color-border` | `#E5E7EB` | Dividers, card outlines |
| `--color-primary` | `#2563EB` | Primary links and CTA accents |
| `--color-primary-hover` | `#1D4ED8` | Hover/active CTA |
| `--color-success` | `#15803D` | Availability or confirmation states only |

Keep the palette restrained. Use one primary accent consistently for the main CTA, links, focus states, and selected UI. If the existing logo/site CSS defines different brand colors, use those actual values instead of the suggested tokens above.

### Typography

Exact font-family values were not available from the text extraction. Recommended fallback direction:
- **Headings:** a modern sans-serif with sturdy weight and compact proportions (e.g. `Inter`, `Manrope`, or the existing site heading font).
- **Body:** highly legible sans-serif (e.g. `Inter` or system UI).
- Use sentence case for headings and labels.
- Use bold weights for H1/H2 and medium weights for card titles.
- Avoid decorative display fonts.

Suggested type scale:
| Element | Desktop | Mobile | Weight / line height |
|---|---:|---:|---|
| H1 | 56–64px | 38–44px | 700–800 / 1.05–1.12 |
| H2 | 36–44px | 30–34px | 700 / 1.12 |
| H3 | 22–26px | 20–22px | 650–700 / 1.2 |
| Body lead | 18–20px | 17–18px | 400–500 / 1.5 |
| Body | 16–17px | 16px | 400 / 1.6 |
| Eyebrow / label | 12–14px | 12px | 600–700 / 1.3 |

## 3. Layout and spacing

- Use a centered content container with a maximum width around **1160–1240px**.
- Keep page gutters around **24px desktop**, **20px tablet**, and **16px mobile**.
- Use a consistent spacing scale based on 4px or 8px increments.
- Give major sections 80–112px vertical padding on desktop and 52–72px on mobile.
- Keep paragraphs to a readable measure (roughly 55–75 characters per line).
- Use grid layouts for service cards and pricing cards; stack them cleanly on small screens.
- Maintain consistent card radius (suggested 12–16px) and subtle borders. Avoid excessive shadows.

Suggested spacing tokens:
```css
:root {
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 24px;
  --space-6: 32px;
  --space-7: 48px;
  --space-8: 64px;
  --space-9: 88px;

  --container-width: 1200px;
  --radius-card: 14px;
  --radius-button: 8px;
}
```

## 4. Global components

### Header / navigation

- Brand mark at the left.
- Primary navigation: Home, All Repair Services, Game Console Repair, Computer Repair, Tablet Repair, iPhone Repair, About, Contact / Repair Quote.
- Include a visible phone action and/or “Get a Repair Quote” CTA on desktop.
- On mobile, collapse navigation into an accessible menu; keep the call action easy to reach.
- Header should remain visually simple and not compete with the hero.

### Buttons and links

Primary CTA:
- Solid primary accent background.
- High-contrast text.
- Medium-to-bold label.
- Comfortable touch target (minimum 44px high).
- Clear hover, focus-visible, active, and disabled states.

Secondary CTA:
- Outline or quiet surface treatment.
- Use for lower-priority actions such as “View all services.”

Use action labels consistently:
- “Get a Repair Quote”
- “Call 817-449-4211”
- “View All Services”
- “Explore Advanced Repair”

### Cards

Service cards should contain:
- Simple device/category icon or authentic device/repair photo.
- Short category title.
- One-line summary of supported repairs.
- Clear “Explore” or “View service” link.

Pricing cards should contain:
- Repair name.
- Supported device/model context.
- Price or “Request a quote” state.
- CTA linked to the quote flow.

Do not display invented prices. The current site intentionally contains editable `$___` placeholders; replace them only with confirmed current pricing or use “Request a quote.”

### Trust elements

Use concise, factual trust points:
- Clear diagnosis and repair options.
- Same-day service on many common repairs when diagnosis, parts, and workload allow.
- Quality parts.
- Warranty on qualifying repairs; link to current terms.
- Local Cedar Hill workshop and walk-in availability.

Avoid absolute promises such as “always same-day” or universal warranty claims.

### Footer

Use a structured footer with:
- Service links.
- Quick links (About, Contact, FAQs, Privacy Policy).
- Address, phone, email, and business hours.
- Social links only when verified.
- Warranty/service terms and repair tracking only if those destinations are live.

## 5. Homepage structure

Recommended order based on the current homepage:

1. **Header**
   - Logo, navigation, quote CTA, phone number.

2. **Hero**
   - Eyebrow: “Cedar Hill • Electronics Repair”
   - Headline: “Technology breaks. We fix it.”
   - Supporting copy naming game console, phone, tablet, and computer repair.
   - Primary CTA: “Get a Repair Quote”
   - Secondary action: “Call 817-449-4211”
   - Trust note: same-day service on many common repairs, quality parts, warranty on qualifying repairs.
   - Supporting workshop/device image.

3. **Short value proposition**
   - “Repair expertise without the runaround.”
   - Explain diagnosis, options, and clear communication.

4. **Device category selector**
   - Game Consoles
   - Phones
   - Computers
   - iPad & Tablets
   - Each card links to its service landing page.

5. **Advanced repair feature**
   - “Real work. Real hardware.”
   - Highlight HDMI ports, board-level troubleshooting, microsoldering, and thermal maintenance.
   - CTA to advanced repair details.

6. **Popular repairs / pricing**
   - PS5 HDMI port repair
   - Xbox HDMI repair
   - Switch charging port
   - iPhone screen repair
   - Use confirmed prices only; otherwise show quote-based pricing.

7. **Complete service list**
   - Three grouped columns: Game Consoles; Phones & Tablets; Computers & Advanced.
   - Link to the complete services page.

8. **Local service area**
   - Cedar Hill as the physical shop location.
   - Nearby communities as service areas (not separate storefronts): Duncanville, DeSoto, Grand Prairie, Midlothian, Glenn Heights, Ovilla, Red Oak, Lancaster, Mansfield, Arlington, Dallas, Waxahachie, and others where currently served.

9. **Why TechMode**
   - Clear communication.
   - Fast when the repair allows it.
   - Warranty on qualifying repairs.

10. **Customer experience / reassurance**
    - Walk-ins welcome.
    - Encourage calling or scheduling ahead to confirm parts and timing.
    - Use only genuine, approved testimonials.

11. **Final CTA**
    - “Ready to get your device working again?”
    - Quote request and phone actions.

12. **Footer**

## 6. Inner page templates

### Service landing page

Use a reusable template for game console, phone, tablet, and computer repair:
1. Breadcrumbs.
2. H1 naming the service and location naturally.
3. One-sentence value proposition.
4. Quote and call CTAs.
5. Common symptoms / repairs supported.
6. Device and model coverage.
7. How the repair process works (tell us symptoms → diagnosis → options/approval → repair/testing).
8. Turnaround caveat.
9. Pricing/quote explanation.
10. FAQs.
11. Related services.
12. Local contact CTA.

Keep each page genuinely specific. Do not duplicate long blocks of generic copy across every service page.

### About page

- Local, family-owned story.
- Team/workshop photography.
- Practical explanation of the repair approach and standards.
- Service categories.
- Real testimonials, if permission and authenticity are confirmed.
- CTA to visit or request a quote.

### Contact / repair quote page

Prioritize conversion:
- Clear heading: “Get a repair quote.”
- Short explanation of what information to provide.
- Form fields: name, phone, device/model, issue description; email optional if operationally useful.
- Clear submit state and validation.
- Prominent click-to-call phone number.
- Address and map/directions link.
- Current business hours.
- Walk-in and call-ahead guidance.

### Pricing page

- Group prices by device family and repair type.
- State whether each amount is a starting price or fixed price.
- Explain that model, parts, and diagnostic findings can change the quote.
- Keep specials editable and dated.
- Do not publish placeholder prices.

## 7. Imagery and iconography

- Prefer authentic photos of the actual shop, technicians, workbench, devices, and repair process.
- Use close-up photos of real repair work for advanced services (HDMI ports, board-level work, microsoldering).
- Use clean product/device imagery for category cards.
- Avoid generic stock photos where real shop photography is available.
- Use a consistent outline icon family for device categories and feature lists.
- Provide meaningful alt text for informative images; use empty alt text for purely decorative imagery.
- Compress images, serve modern formats (WebP/AVIF), and define width/height to reduce layout shift.

## 8. Responsive behavior

**Desktop (≥1024px)**
- Full horizontal navigation.
- Two-column hero where image and text balance each other.
- 3–4 column service grid depending on card width.
- Three-column service list and footer.

**Tablet (768–1023px)**
- Simplified navigation or menu toggle.
- Two-column card grids.
- Reduce section padding and hero headline size.

**Mobile (<768px)**
- Single-column content.
- Compact header with menu and prominent call/quote access.
- Stack hero CTAs; keep primary CTA first.
- Service cards in one column or horizontal scroll only when keyboard/touch accessible.
- Avoid tiny text and dense footer columns.
- Make phone numbers tap-to-call and forms easy to complete.

## 9. Accessibility and interaction

- Semantic landmarks: `header`, `nav`, `main`, `section`, `footer`.
- One H1 per page; maintain logical heading order.
- Visible keyboard focus for all interactive elements.
- Sufficient text/background contrast (WCAG AA target).
- Labels must be programmatically associated with form controls.
- Do not rely on color alone to communicate status.
- Buttons and links must have descriptive accessible names.
- Ensure menus, accordions, and dialogs work by keyboard and screen reader.
- Respect reduced-motion preferences.
- Use real links for navigation and buttons for actions.

## 10. SEO and local trust

- Unique title and meta description for each service page.
- Consistent business name, address, and phone number.
- LocalBusiness / relevant repair-service structured data only with verified values.
- Use descriptive image alt text.
- Link service pages to related services, pricing, and contact.
- Distinguish the Cedar Hill shop from surrounding service areas.
- Keep NAP information consistent across header/footer/contact pages and external listings.
- Avoid keyword stuffing and repetitive “near me” copy.

## 11. Content voice

**Preferred tone:** Helpful, competent, direct, neighborly, calm.

Write like a knowledgeable local technician:
- Explain the issue and the next step.
- Be specific about supported devices and repair types.
- Use short paragraphs and useful headings.
- Qualify turnaround and warranty claims.
- Avoid exaggerated claims, overlong metaphors, and excessive exclamation marks.

Preferred examples:
- “Tell us the device, model, and what it’s doing.”
- “We’ll diagnose the issue and explain your repair options.”
- “Same-day service is available on many common repairs, depending on parts and workload.”

## 12. Implementation notes

- Treat the homepage as the primary reference for the current, more direct brand voice and page hierarchy.
- Some older inner pages use a much more whimsical “magic / kingdom / happily ever after” theme and have noticeably different copy patterns. When redesigning or extending the site, normalize these pages to the modern homepage direction.
- Confirm the actual logo, CSS color values, font files, image assets, breakpoints, and component styles from the live source/theme before claiming pixel-perfect fidelity. The values in the color and typography sections above are recommended defaults, not measured design tokens.
- Preserve existing working URLs or add redirects when consolidating legacy URLs.
- Verify all quote forms, phone links, map links, social links, and footer destinations before launch.
- Ensure all pricing placeholders are replaced or clearly presented as quote-only.

## 13. Reference pages inspected

- Homepage: https://techmodeusa.com/
- All Repair Services: https://techmodeusa.com/services/
- About: https://techmodeusa.com/about/
- Contact & Repair Quote: https://techmodeusa.com/contact/
- Game Console Repair: https://techmodeusa.com/game-console-repair-near-me/
- Computer Repair: https://techmodeusa.com/computer-repair-near-me/
- iPhone Repair: https://techmodeusa.com/iphone-repair-near-me/
- Tablet Repair: https://techmodeusa.com/tablet-repair-near-me/
- Pricing & Specials: https://techmodeusa.com/pricing/

---
**Design principle:** Make it immediately obvious what TechMode repairs, why a customer can trust the shop, and how to get a quote or call—on every page and at every screen size.
