# Pakistan Budget Reality

A live budget transparency tracker showing Pakistani citizens where their tax money goes — every second.

## Project Overview

**Core Concept:** Pakistan pays Rs 260,241 in debt interest every second. In that same second, it spends Rs 3,583 on education and Rs 697 on health. This site makes those numbers visceral through live ticking counters.

**Goal:** Make Pakistan's official budget data accessible and emotionally understandable to ordinary citizens.

**What this is NOT:** This is not a live government data feed. Counters are derived from annual budget totals divided into per-second rates — standard methodology used by similar trackers worldwide (US Debt Clock, Pakistan Debt Clock).

---

## Inspiration Sites

These sites were studied before building. Key design decisions were derived from them:

| Site | URL | Key Takeaways |
|------|-----|---------------|
| Iran War Cost Tracker | iran-cost-ticker.com | **Best design.** Dark background (#0c0a09), single dominant red counter with glow effect, monospace font (JetBrains Mono), "time on page" elapsed clock, minimalist layout, rate cards (per-second/hour/day) |
| Pakistan Debt Clock | pakistandebtclock.com | Dark theme, per-capita framing ("PKR 320,000 debt per child at birth"), context panels with infographics |
| US Debt Clock | usdebtclock.org | Multi-counter grid layout, color-coded categories — **but too overwhelming (600+ data points)** |
| World Debt Clocks | worlddebtclocks.com/pakistan | Simple per-second ticker format |
| Costs of War (Brown) | watson.brown.edu/costsofwar | Academic-style sourcing, human cost framing |

### Design Decisions from Inspiration

1. **Iran tracker style:** Dark background, dominant red counter with glow, clean minimalism
2. **Max 4 counters** — US Debt Clock has too many and becomes overwhelming
3. **Per-capita framing** — makes numbers personal (from Pakistan Debt Clock)
4. **Elapsed clock** — "While you were reading" section tracks time on page
5. **Separate /methodology page** — non-negotiable for credibility

---

## Current Project Status

### Completed
- [x] Project setup with Astro + Tailwind CSS + Chart.js
- [x] Downloaded official data sources (PDFs from Ministry of Finance)
- [x] Cloned pre-scraped budget data from GitHub
- [x] Created `public/data/budget.json` with all FY 2025-26 figures
- [x] Created `data/SOURCES.md` documenting all sources
- [x] Built all 11 components
- [x] i18n setup (English + Urdu JSON files)
- [x] Main page (`index.astro`) with all sections
- [x] Methodology page (`methodology.astro`)
- [x] Counter logic with 100ms update interval
- [x] Currency toggle (PKR/USD) with live exchange rate fetch
- [x] Language toggle (EN/Urdu) with RTL support

### TODO (Potential Improvements)
- [ ] Review design against Iran tracker inspiration (dark theme option?)
- [ ] Add OG image for social sharing
- [ ] Test on 3G / mobile devices
- [ ] Deploy to Cloudflare Pages
- [ ] Verify all budget figures against downloaded PDFs

---

## Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | Astro |
| Styling | Tailwind CSS |
| Charts | Chart.js |
| Data | Static JSON (`public/data/budget.json`) |
| Hosting | Cloudflare Pages |
| i18n | Custom JSON-based (EN/Urdu) |

---

## Project Structure

```
pakistan-budget-reality/
├── src/
│   ├── pages/
│   │   ├── index.astro              # Main page with live tickers
│   │   └── methodology.astro        # Sources & methodology
│   ├── components/
│   │   ├── Navbar.astro             # Sticky nav with lang/currency toggles
│   │   ├── Hero.astro               # Hero banner with headline
│   │   ├── LiveCounter.astro        # Single ticking counter component
│   │   ├── TickerGrid.astro         # Grid of 4 counters (Debt, Defence, Education, Health)
│   │   ├── TimeOnPage.astro         # "While you were reading" section
│   │   ├── BudgetChart.astro        # Horizontal bar chart
│   │   ├── ImpactCallout.astro      # 25M children section
│   │   ├── HistoricalChart.astro    # Line chart: Debt vs Education over years
│   │   ├── ShareButtons.astro       # WhatsApp, Twitter/X, Copy link
│   │   ├── Sources.astro            # Quick source links
│   │   └── Footer.astro             # Non-partisan disclaimer
│   ├── layouts/
│   │   └── Layout.astro             # Base HTML layout
│   ├── i18n/
│   │   ├── en.json                  # English translations
│   │   └── ur.json                  # Urdu translations
│   ├── scripts/
│   │   └── counter.ts               # Counter calculation logic
│   └── styles/
│       └── global.css               # Global styles + Tailwind
├── public/
│   └── data/
│       └── budget.json              # All budget figures (THE source of truth)
├── data/
│   ├── SOURCES.md                   # Documentation of all data sources
│   └── sources/
│       ├── ministry-of-finance/     # Downloaded PDFs (10 files)
│       │   ├── FY2025-26_Budget_in_Brief_EN.pdf
│       │   ├── FY2025-26_Budget_in_Brief_UR.pdf
│       │   ├── FY2025-26_Annual_Budget_Statement.pdf
│       │   ├── FY2024-25_Budget_in_Brief.pdf
│       │   ├── FY2023-24_Budget_in_Brief.pdf
│       │   ├── FY2022-23_Budget_in_Brief.pdf
│       │   ├── Fiscal_Ops_FY2025-26_H1.pdf
│       │   ├── Fiscal_Ops_FY2024-25_Full_Year.pdf
│       │   ├── Fiscal_Ops_FY2023-24_Full_Year.pdf
│       │   └── Fiscal_Ops_FY2022-23_Full_Year.pdf
│       └── github-budgets/          # Cloned from asjadnaqvi/Pakistan-national-budgets
│           ├── 2024_2025/budget_2024_25.xlsx
│           └── 2023_2024/budget_2023_24.xlsx
├── astro.config.mjs
├── tailwind.config.mjs
├── package.json
└── CLAUDE.md                        # This file
```

---

## Key Data (FY 2025-26)

All figures from official Ministry of Finance budget documents.

| Category | Annual (PKR billion) | Per Second (PKR) | % of Budget |
|----------|---------------------|------------------|-------------|
| Total Budget | 17,573 | 557,236 | 100% |
| Debt Interest | 8,207 | 260,241 | 46.7% |
| Defence | 2,558 | 81,113 | 14.6% |
| NFC Transfers | ~3,200 | 101,471 | 18.2% |
| Military Pensions | 1,055 | 33,449 | 6.0% |
| PSDP (Development) | 1,000 | 31,710 | 5.7% |
| Education (Federal) | 113 | 3,583 | 0.64% |
| Health (Federal) | 22 | 697 | 0.13% |

**Fiscal Year:** July 1, 2025 – June 30, 2026
**Timezone:** PKT (UTC+5)

### Per-Second Calculation

```javascript
const SECONDS_IN_YEAR = 365 * 24 * 60 * 60; // 31,536,000
const perSecond = annualBudgetPKR / SECONDS_IN_YEAR;

// Counter value at any moment:
const elapsed = (Date.now() - fiscalYearStart.getTime()) / 1000;
const counterValue = perSecond * elapsed;
```

---

## Page Sections (index.astro)

1. **Navbar** — Logo, nav links, language toggle (EN/اردو), currency toggle (PKR/USD), sticky
2. **Hero Banner** — Light red background, headline, fiscal year info
3. **Live Tickers (Main Feature)** — Debt (large, red), Defence & Education side-by-side, Health (tiny)
4. **While You Were Reading** — Time on page tracker, debt paid while reading, equivalents
5. **Budget Breakdown Chart** — Horizontal bar chart, education/health bars barely visible
6. **25 Million Children** — Impact callout with stark statistics
7. **Historical Trend** — Line chart: Debt vs Defence vs Education over years
8. **Share Strip** — WhatsApp (primary), Twitter/X, copy link
9. **Sources** — Quick links to official documents
10. **Footer** — Non-partisan disclaimer, GitHub link

---

## Design Guidelines

### Colors

```css
--debt-red: #A32D2D;
--debt-bg: #FCEBEB;
--defence-gray: #888780;
--education-green: #3B6D11;
--health-teal: #1D9E75;
--psdp-green: #97C459;
--nfc-blue: #378ADD;
--pension-gray: #B4B2A9;
--other-gray: #D3D1C7;
```

### Typography

- System fonts for fast loading
- Urdu: `dir="rtl"` on html element when selected
- Counter numbers: large, bold, monospace for ticking effect

### Responsive

- Mobile-first design
- Test at 375px width (iPhone SE)
- Page must load on 3G (<500KB total)

---

## Important Caveats (disclosed on methodology page)

1. **Per-second rates are averages** — Real spending is lumpy, not continuous
2. **Federal education (Rs 113B) is federal only** — Total with provinces is ~Rs 1,770B
3. **Budget vs actual** — These are allocations, actual spending may differ
4. **Defence may be understated** — Doesn't include military pensions, PSDP defence projects, or military commercial activities
5. **Non-partisan** — Both major parties presided over rising debt; this is structural

---

## Data Sources

All source documentation in `data/SOURCES.md`.

- **Primary:** Ministry of Finance (finance.gov.pk)
- **Budget PDFs:** `data/sources/ministry-of-finance/` (10 PDFs downloaded)
- **Pre-scraped data:** `data/sources/github-budgets/` (cloned from GitHub)
- **Exchange Rate:** Frankfurter API (free, no key)

---

## Development Commands

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## Updating Data Annually

Each June when the new budget is released:

1. Download new "Budget in Brief" PDF from finance.gov.pk
2. Update `public/data/budget.json` with new figures
3. Update `fiscalYearStart` date to new July 1
4. Verify historical data array
5. Update `data/SOURCES.md` with new source URLs
6. Rebuild and deploy

---

## External APIs

- **Exchange Rate:** Frankfurter API (free, no key)
  - Endpoint: `https://api.frankfurter.app/latest?from=USD&to=PKR`
  - Fallback: Hardcoded rate (282) with "last updated" note

---

## Performance Targets

- Total page size: <500KB
- First Contentful Paint: <2s on 3G
- No layout shift from counter updates
- Counter update interval: 100ms (smooth but readable)

---

## Sharing

WhatsApp is the primary sharing channel in Pakistan.

```javascript
const msg = `Pakistan ne aaj tak is saal Rs ${debtValue.toLocaleString()} qarz ka sood diya. Jabke education par sirf Rs 3,583 per second kharch hoti hai. Full data: https://pakbudgetreality.com`;
window.open('https://wa.me/?text=' + encodeURIComponent(msg));
```

---

## Future Enhancements (TODO)

### High Priority

- [ ] **Dynamic OG Image Generation** — Generate social share images with current counter values using Vercel OG or similar. When shared on WhatsApp/Twitter, the image should show real-time debt counter value.

- [ ] **Embed Widget** — JavaScript snippet for journalists to embed live counters on their sites. Available at `/embed.astro`.

### Medium Priority

- [ ] **Tax Calculator** — "Enter your income → see how much went to debt vs education"
- [ ] **Province Comparison Page** — Show Punjab/Sindh/KPK/Balochistan budget breakdown (data in `budget.json`)
- [ ] **India Comparison Page** — Pakistan vs India budget allocation comparison (data in `budget.json`)
- [ ] **Inflation-Adjusted View** — Toggle to show real growth vs nominal (inflation data in `budget.json`)

### Low Priority

- [ ] **Mobile Menu** — Hamburger menu for nav links on mobile (currently hidden)
- [ ] **Newsletter Signup** — Email notification when new budget releases
- [ ] **Download/Export** — CSV/PDF export of data
- [ ] **PWA Support** — Offline access with service worker
