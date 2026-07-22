# Calibre Studio

React + Vite site for Calibre Studio: the agency homepage plus four client project pages (Brew & Co., Kirana King, Striker Sports, Verdant Living).

## Structure

```
src/
  pages/
    Home/       — agency homepage       (/)
    Brew/       — coffee shop project   (/brew)
    Kirana/     — grocery project       (/kirana)
    Striker/    — sports retail project (/striker)
    Verdant/    — home decor project    (/verdant)
  lib/
    submitContactForm.js  — shared Supabase + EmailJS submit logic for the Home contact form
```

Each page folder contains:
- `PageName.jsx` — the route component
- `PageName.css` — that page's styles, scoped under a `.page-name` wrapper class so pages never bleed into each other
- `markup.js` — the page's HTML content
- `behavior.js` — the page's interactive JS logic, wired up via a `useEffect` on mount

## Environment variables

Copy `.env.example` to `.env` and fill in your real Supabase and EmailJS credentials. `.env` is gitignored — only `.env.example` (with placeholders) is committed.

```
VITE_SUPABASE_URL=
VITE_SUPABASE_ANON_KEY=
VITE_EMAILJS_SERVICE_ID=
VITE_EMAILJS_TEMPLATE_ID=
VITE_EMAILJS_PUBLIC_KEY=
```

Note: the Supabase key here is the **anon** key and the EmailJS key is a **public** key — both are designed to be safe for client-side/public exposure (protected by Supabase Row Level Security and EmailJS origin restrictions, respectively), not secret credentials. They're still kept out of git as good practice.

## Development

```
npm install
npm run dev
npm run build
```
