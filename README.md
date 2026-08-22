# Insightful Canvas

Build a personal portfolio website for a Business Analyst (fresher), 

NOT a software developer portfolio. Focus on business impact, 

data-driven decision-making, and analytical thinking — but the DESIGN 

should feel rich, modern, and premium, not flat or templated.

TECH STACK:

- React + Vite + Tailwind CSS

- Framer Motion for scroll animations, hover states, and page transitions

- TanStack Query/Table where relevant (e.g. sortable/filterable project 

  data table)

- Custom cursor (see CURSOR section below)

DESIGN DIRECTION (priority — avoid a flat, generic look):

- Add depth: soft shadows, subtle gradients, layered cards with 

  different elevations

- Scroll-triggered animations: sections fade/slide in as user scrolls 

  (Framer Motion whileInView)

- Hover micro-interactions: cards lift slightly, buttons have smooth 

  color/scale transitions, links underline-animate

- Vary section layouts — don't repeat the same 4-box grid everywhere. 

  Mix full-width text, 2-column splits, staggered card grids, and 

  timeline layouts

- Add a subtle animated gradient or mesh background in the hero section

- Typography: strong hierarchy with a distinctive heading font (not 

  default sans), generous line-height on body text

COLOR PALETTE (unique, not the typical navy/teal SaaS look):

- Base: deep charcoal / near-black (#12121A or similar) for dark 

  sections, warm off-white (#FAF9F6) for light sections

- Primary accent: burnt amber / terracotta (#D97748 or similar) — 

  warm, distinctive, not overused in tech portfolios

- Secondary accent: deep plum or muted burgundy (#6B2D5C or similar) 

  for gradient pairing and depth

- Use the amber-to-plum gradient sparingly for glows, buttons, and the 

  hero background mesh — not applied flatly across large blocks

- Neutral grays for body text and card backgrounds, so the accent 

  colors stand out rather than compete

- Icons: refined icon set (Lucide with custom styling, or subtle 

  duotone icons) tinted with the accent palette instead of plain 

  outline icons

CURSOR:

- Custom cursor must feel instant and snappy, NOT laggy or delayed

- Minimal easing on position — cursor should track mouse movement with 

  near-zero delay, no spring physics with heavy damping

- Default state: small dot

- Hover state (over buttons, links, project cards): expands into a ring 

  or changes color — this scale/color transition can have a quick 

  150-200ms transition, but position tracking itself stays 1:1 with 

  actual mouse movement, never trailing behind it

SMOOTH SCROLL FIX:

- The page must scroll smoothly across all sections, including when 

  navigating via navbar links (About, Skills, Projects, Experience, 

  Contact)

- Use native CSS `scroll-behavior: smooth` on the html element, or a 

  lightweight solution like Lenis for smooth scrolling — avoid heavy 

  scroll-jacking libraries that cause stutter or lag

- Navbar links must scroll to the correct section using anchor/id-based 

  navigation with smooth easing, not instant jump

- Ensure scroll-triggered Framer Motion animations (whileInView) do NOT 

  cause jank or layout shift while scrolling — use `viewport={{ once: 

  true }}` so animations don't re-trigger repeatedly and slow down 

  scroll performance

- Avoid heavy blur/backdrop-filter effects on large sections during 

  scroll, as these can cause frame drops — keep them small and 

  localized (e.g. navbar only)

- Test that scrolling feels equally smooth on both trackpad and mouse 

  wheel input

SECTIONS:

1. Hero

- Animated gradient/mesh background using the amber-to-plum accent 

  colors

- Professional photo: circular or rounded-square framing, subtle 

  border/shadow, soft gradient/glow ring behind it in the accent color, 

  positioned alongside the headline text (not full-width background)

- Name, title: "Business Analyst | Data-Driven Problem Solver"

- Staggered fade-in animation for photo, headline, subtext, CTA buttons

- CTA buttons: "View Projects" and "Download Resume" with hover scale

2. About

- 2-column layout: text on one side, animated stat/highlight cards on 

  the other (staggered sizes, not a flat 4-box grid)

- Bio: B.Com graduate stepping into Business Analysis, hands-on 

  experience in customer support and content coordination, now building 

  analytics toolkit with SQL, Power BI, and Excel to turn operational 

  questions into actionable insights

- Cards animate in on scroll with slight delay between each

3. Skills

- Different layout from About — horizontal scrolling row or grouped 

  pill/tag cloud with hover animations

- Group into: Business Analysis (requirements gathering, stakeholder 

  communication, process mapping), Data Analytics Tools (Power BI, SQL, 

  Excel), Soft Skills (communication, problem-solving)

4. Projects (main section — case study style, NOT code-repo style)

- Use TanStack Table if showing project metrics/comparisons, otherwise 

  rich animated cards

- Each project structured as: Business Problem, Approach, Key Insight/

  Outcome, Tools used (tags), link to dashboard/report/GitHub

- Cards lift and show a subtle glow/shadow on hover

- Include 3 projects: Zomato Order & Restaurant Analysis (Power BI), 

  Amazon Fresh Database & SQL Analysis, Flipkart Customer Segmentation 

  (RFM Analysis, Power BI)

5. Experience

- Vertical animated timeline (not a plain list)

- Wipro (content coordination, iHeartMedia client) and Sutherland 

  Global Services (customer support)

- Focus on transferable BA skills gained (communication, process, 

  client handling)

- Each entry slides/fades in on scroll

6. Contact

- Clean form with animated input focus states

- Email, LinkedIn, mailto or formspree-style placeholder

Overall feel: premium, polished, portfolio-of-someone-who-pays-attention-

to-detail — not a generic template. Motion and depth should feel 

purposeful, not excessive.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/b738f8cf-71c7-40ca-91dd-0385cc890a13).

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
