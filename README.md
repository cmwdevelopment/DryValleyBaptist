# Dry Valley Baptist Church Website

The official website for Dry Valley Baptist Church — a Christ-centered congregation in Dry Valley, TN.

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | [Next.js 15](https://nextjs.org/) (App Router) |
| Language | TypeScript |
| Styling | [Tailwind CSS v3](https://tailwindcss.com/) |
| Runtime | React 19 |

## Getting Started

### Prerequisites

- Node.js 18+
- npm 9+

### Development

```bash
# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build & Start

```bash
npm run build
npm start
```

### Lint

```bash
npm run lint
```

## Project Structure

```
├── app/
│   ├── actions/           # Server Actions (e.g. contact form)
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── events/            # Events page
│   ├── ministries/        # Ministries page
│   ├── sermons/           # Sermons page
│   ├── visit/             # Plan Your Visit page
│   ├── globals.css        # Global styles (Tailwind directives)
│   ├── layout.tsx         # Root layout — Navbar + Footer
│   ├── not-found.tsx      # Custom 404 page
│   └── page.tsx           # Home page
├── components/            # Reusable UI components
├── data/                  # Static mock data (staff, sermons, events, ministries)
├── lib/api/               # Async data-fetching layer
├── types/                 # TypeScript interfaces
├── tailwind.config.ts     # Tailwind theme (brand colors)
└── next.config.mjs        # Next.js configuration
```

## Pages

| Route | Title | Description |
|---|---|---|
| `/` | Home | Hero, service times, beliefs, upcoming events, CTA |
| `/about` | About | Mission, story, beliefs, leadership & staff |
| `/ministries` | Ministries | Ministry program cards |
| `/sermons` | Sermons | Sermon archive with series, speaker, audio/video links |
| `/events` | Events | Upcoming events list |
| `/visit` | Plan Your Visit | Service times, location, embedded map |
| `/contact` | Contact | Contact info and working message form |

## Brand Colors

Defined in `tailwind.config.ts` and usable anywhere as Tailwind classes:

| Token | Hex | Usage |
|---|---|---|
| `dvb-navy` | `#1a3055` | Primary brand color (headers, nav, buttons) |
| `dvb-gold` | `#c9943a` | Accent color (highlights, active states) |
| `dvb-sand` | `#f5f0e8` | Warm section backgrounds |
| `dvb-cream` | `#fdfaf4` | Page background |
