# Atelier Lume — Interior Design Studio Website

An elegant portfolio site for an interior design studio.

Built with **React 18, Vite, Tailwind CSS 3, React Router 6** and **lucide-react** icons.

## Features
- Home: hero, stats, services, featured projects, testimonial slider, consultation CTA
- Project gallery with category filters; project detail pages with info, scope of work, image gallery + lightbox, previous/next navigation
- Services: detailed services with pricing, 5-step process, FAQs
- About: brand story, values, team, client testimonials with photos
- Contact: project enquiry form and consultation booking (virtual / site visit, date & time slot), map

## How to run
1. Install [Node.js](https://nodejs.org) 18 or newer.
2. Open a terminal in this folder and run:
   ```bash
   npm install
   npm run dev
   ```
3. Open the link shown (usually http://localhost:5173).

Build for production: `npm run build` (output in `dist/`), preview it with `npm run preview`.

## Project structure
```
src/
  data.js          # all sample content (edit text, prices, images here)
  components/      # reusable UI pieces
  pages/           # one file per page
  App.jsx          # routes
  index.css        # Tailwind + shared styles
tailwind.config.js # brand colours & fonts
```

## Notes
- Photos load from Unsplash, so an internet connection is needed. If an image fails, a placeholder is shown automatically.
- Forms and checkout are front-end only (demo). Data is kept in the browser's localStorage — connect a backend/API to go live.
- Deploy-ready: `vercel.json` (Vercel) and `public/_redirects` (Netlify) make page refreshes work on any route. On Vercel or Netlify just import the repo — no settings needed.

## Author
**Thota Sathwika** — [GitHub](https://github.com/ThotaSathwika) · [LinkedIn](https://linkedin.com/in/thota-sathwika-9046b2297)
