# NextTech Limited — Website Development Services

A modern, fully responsive landing page for **NextTech Limited**, a web
development agency. Built as part of the NextTech Limited Web Development
Internship Assignment.

![NextTech Landing Page](https://images.pexels.com/photos/6804068/pexels-photo-6804068.jpeg?auto=compress&cs=tinysrgb&h=400&w=800)

---

## Live Preview

Run the project locally (see [Instructions to Run](#instructions-to-run)) and
open the URL printed in the terminal (default: `http://localhost:5173`).

---

## Features

- **Hero Section** — Bold headline, short description, and a prominent
  "Get a Free Consultation" call-to-action button with animated stats.
- **Our Services** — Four service cards (Business, E-commerce, Corporate, and
  Custom Web Application Development) with icons and key highlights.
- **Why Choose NextTech** — Six key differentiators with icons, plus a stats
  panel.
- **Client Testimonials** — Three sample testimonials with avatars and ratings.
- **Contact Section** — A validated contact form (Name, Email, Phone, Message,
  Service of Interest) that saves submissions to a Supabase database, plus
  full company contact information.
- **Footer** — Social media links, quick navigation, contact details, and a
  copyright notice.
- **Extra** — A 404 "Page not found" page and a final call-to-action banner.

### Interactions

- Responsive **mobile menu** (hamburger toggle).
- **Form validation** with inline error messages and a success state.
- **Smooth scrolling** to in-page sections via anchor links.
- **Scroll-reveal animations** powered by an IntersectionObserver hook.
- Sticky navbar that becomes opaque on scroll.

---

## Technologies Used

| Category        | Technology                                      |
| --------------- | ----------------------------------------------- |
| Frontend library| React 18 (with React DOM)                       |
| Routing         | React Router DOM v6                             |
| Language        | JavaScript (via Vite + TypeScript tooling)      |
| Styling         | Tailwind CSS 3                                  |
| Icons           | lucide-react                                    |
| Build tool      | Vite 5                                          |
| Backend / DB    | Supabase (PostgreSQL) for contact form storage  |

---

## Instructions to Run

### Prerequisites

- [Node.js](https://nodejs.org/) **v18 or higher**
- npm (comes with Node.js)

### Steps

```bash
# 1. Install dependencies
npm install

# 2. Start the development server
npm run dev
```

Then open the URL shown in the terminal (typically `http://localhost:5173`).

### Build for production

```bash
# Type-check + production build
npm run build

# Preview the production build locally
npm run preview
```

### Environment

The project connects to a pre-provisioned Supabase project for storing contact
form submissions. The required environment variables (`VITE_SUPABASE_URL` and
`VITE_SUPABASE_ANON_KEY`) are already configured in the `.env` file — no manual
setup is needed.

---

## Design Decisions

### Visual Style

- **Dark, premium theme** with a deep navy background, electric-blue primary
  accent, and a teal/green success accent. This conveys a modern, trustworthy,
  tech-forward brand without relying on overused purple gradients.
- **Glassmorphism cards** (subtle borders + backdrop blur) give depth while
  keeping the layout clean and content-first.
- **Gradient glows and a faint grid pattern** in the hero create atmosphere
  without distracting from the message.

### Typography & Spacing

- **Plus Jakarta Sans** for display headings and **Inter** for body text — a
  pairing that feels contemporary and highly readable.
- A consistent **8px spacing system** and a 6-step color ramp keep the layout
  balanced across breakpoints.

### UX & Accessibility

- **Mobile-first responsive design** with breakpoints for tablet and desktop.
- Every interactive element has a visible **focus / hover state**, and the
  contact form uses semantic `<label>` associations for screen readers.
- **Progressive disclosure**: the mobile menu is hidden by default and revealed
  on demand; the form shows inline validation only after a field is touched.
- **Scroll-reveal animations** are subtle and respect the IntersectionObserver
  pattern so they never block content from being seen.

### Architecture

- **React Router** splits the experience into a Home page (all marketing
  sections) and a dedicated Contact page, plus a 404 route.
- **Component-based structure** (`Hero`, `Services`, `WhyChooseUs`,
  `Testimonials`, `Contact`, `CTA`, `Navbar`, `Footer`) keeps each file focused
  and reusable.
- A small **`useReveal` hook** centralizes the scroll-animation logic instead of
  repeating it per component.
- The contact form persists submissions to a **Supabase `consultations` table**
  with Row Level Security enabled (public insert, no public read) so visitor
  inquiries are stored reliably and privately.

---

## Project Structure

```
src/
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── Services.tsx
│   ├── WhyChooseUs.tsx
│   ├── Testimonials.tsx
│   ├── CTA.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
├── pages/
│   ├── Home.tsx
│   ├── ContactPage.tsx
│   └── NotFound.tsx
├── hooks/
│   └── useReveal.ts
├── lib/
│   └── supabase.ts
├── App.tsx
├── main.tsx
└── index.css
```

---

## Author

Prepared for the **NextTech Limited Web Development Internship Assignment**.

&copy; 2026 NextTech Limited. All rights reserved.
