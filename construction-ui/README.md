# Construction Home Page (React)

## Project overview
A responsive, single-page recreation of a construction company home page built with React and Vite.
Sections: top bar, sticky header with dropdown and search overlay, auto-playing hero slider, feature cards, about,
services with call-to-action band, process steps, project grid, quote form with validation, testimonial slider,
client logo marquee, footer, cookie notice and back-to-top button.

## Technology used
React 18, Vite 5, Bootstrap 5.3 with React-Bootstrap (grid, navbar, dropdown, modal, carousel, forms, cards, buttons), a small custom CSS theme (`src/styles.css`) for brand colours and extras, Google Fonts (Barlow, Barlow Condensed).

## Installation
Requires Node.js 18 or newer.

```bash
npm install
```

## Development command
```bash
npm run dev
```
Opens at http://localhost:5173.

## Build command
```bash
npm run build      # output in /dist
npm run preview    # serve the production build locally
```

## Deployment instructions
1. Push the project to a GitHub repository:
   ```bash
   git init && git add . && git commit -m "Initial commit"
   git branch -M main
   git remote add origin <your-repo-url>
   git push -u origin main
   ```
2. **Vercel:** import the repo at vercel.com/new. Framework preset: Vite. Build command `npm run build`, output directory `dist`.
3. **Netlify:** add a new site from Git. Build command `npm run build`, publish directory `dist`.

## Dependencies
- Runtime: `react`, `react-dom`, `bootstrap`, `react-bootstrap`
- Dev: `vite`, `@vitejs/plugin-react`

## Environment configuration
None required. There are no environment variables.

## API documentation
The app calls no APIs. The quote form validates on the client (name required, valid email) and shows a success message.
To connect a backend, replace the `submit` handler in `src/App.jsx` (`Quote` component) with a `fetch('/your-endpoint', { method: 'POST', body: JSON.stringify(values) })` call.

## Project structure
```
src/data.js      all page content (text, nav, projects, testimonials)
src/App.jsx      section components
src/hooks.jsx    Reveal (scroll animation), Img (image/placeholder), useCarousel
src/Icon.jsx     inline SVG icons
src/styles.css   Bootstrap theme overrides and custom components
public/images/   put your photos here
```

## Assumptions
- Company name, copy and client names are original placeholders.
- Layout, section order, palette (accent #f4c03b) and interactions follow the reference page structure.
- Photos are placeholders until replaced: put files in `public/images` and set the `img` fields in `src/data.js`.

## Known limitations
- Placeholder blocks are shown instead of photographs until you add images.
- Nav links for FAQ, Blog and the Pages submenu are non-functional because only the home page is built.
- The "Why choose us?" button opens a generic YouTube link; set your own video URL in `src/App.jsx`.
- The contact form does not send data anywhere.
