# Construction Company Home Page

A responsive home page for a construction company, built with React, Vite and Bootstrap.

| | |
|---|---|
| **Live site** | [https://your-app.vercel.app](https://buildora-construction-ui.vercel.app/) |
| **Author** | Arthi |

## Screenshot

![Home page preview](public/images/screenshot.png)

*(Optional: take a screenshot, save it as `public/images/screenshot.png`, and it will show here. Delete this section if you skip it.)*

## Project overview

A complete single-page construction company home page. It works on desktop, tablet and mobile, with no horizontal scrolling.

**Sections**
1. Top bar with phone number and social links
2. Sticky header with navigation, hover dropdown, search overlay and mobile menu
3. Hero slider with auto-play, arrows and dots
4. Feature cards overlapping the hero
5. About section with image, experience badge and checklist
6. Services cards and a call-to-action band
7. "How it works" three-step process
8. Projects grid with hover effects
9. Quote form with validation and a success message
10. Testimonials slider and scrolling client-logo strip
11. Footer with social links
12. Cookie notice and back-to-top button

**Interactions and animations**
- Hero and testimonial carousels auto-advance and support arrows, dots and touch swipe. Auto-play pauses on hover.
- Sections fade in as they scroll into view.
- Images zoom on hover, and project cards show a colour overlay.
- The header gains a shadow on scroll.
- The logo strip scrolls continuously and pauses on hover.
- Animations are reduced for visitors who enable "reduce motion" in their system.

## Technology used

| Area | Tools |
|------|-------|
| Framework | React 18 |
| Build tool | Vite 5 |
| UI library | Bootstrap 5.3 and React-Bootstrap 2 |
| Styling | Custom CSS (`src/styles.css`) |
| Fonts | Barlow, Barlow Condensed (Google Fonts) |
| Icons | Inline SVG |
| Hosting | Vercel |

## Setup instructions

Requirements: **Node.js 18+** and npm.

```bash
git clone https://github.com/your-username/construction-ui.git
cd construction-ui
npm install
```

## Development command

```bash
npm run dev
```

Open http://localhost:5173. The page reloads when you save a file.

## Build command

```bash
npm run build      # production build in dist/
npm run preview    # serve the production build locally
```

## Deployment instructions

**Vercel**
1. Push the project to GitHub.
2. Go to https://vercel.com/new and import the repository.
3. Settings: Framework preset **Vite**, build command `npm run build`, output directory `dist`.
4. Click **Deploy**. Each push to `main` redeploys automatically.

**Netlify**
1. Go to https://app.netlify.com and choose **Add new site > Import an existing project**.
2. Select the repository.
3. Settings: build command `npm run build`, publish directory `dist`.
4. Click **Deploy site**.

## Dependencies

| Package | Type | Purpose |
|---------|------|---------|
| `react`, `react-dom` | runtime | UI library |
| `bootstrap` | runtime | CSS framework |
| `react-bootstrap` | runtime | Bootstrap components for React |
| `vite` | dev | Dev server and build tool |
| `@vitejs/plugin-react` | dev | React support for Vite |

## Environment configuration

None. The project has no environment variables, no `.env` file and no secrets.

## API documentation

The app does not call any API. The quote form runs in the browser only:

| Field | Rule |
|-------|------|
| Name | Required |
| Email | Required, valid email format |
| Subject, Department, Message | Optional |

A valid submit clears the form and shows a success message. No data is sent or stored. To connect a backend, send the form values as JSON with `fetch` from the `submit` function of the `Quote` component in `src/App.jsx`.

## Project structure

```
construction-ui/
├── public/images/      photos used by the page
├── src/
│   ├── App.jsx         section components
│   ├── data.js         text, navigation and image paths
│   ├── hooks.jsx       Reveal (scroll animation) and Img components
│   ├── Icon.jsx        inline SVG icons
│   ├── styles.css      theme variables and custom styles
│   └── main.jsx        entry point
├── index.html
├── package.json
└── vite.config.js
```

## Customising content

| To change | Where |
|-----------|-------|
| Text, navigation, services, projects, testimonials | `src/data.js` |
| Images | Add files to `public/images`, set the path in `src/data.js` (for example `/images/service1.png`) |
| Brand colours | Variables at the top of `src/styles.css` |
| Carousel speed | `interval` prop (milliseconds) on each `Carousel` in `src/App.jsx` |

## Assumptions

- The company name, text and client names are placeholder content.
- Layout, section order, colours and interactions follow the reference home page.
- Only the home page is in scope.
- Target browsers: current Chrome, Edge, Firefox and Safari.

## Known limitations

- FAQ, Blog and the Pages submenu links do not open pages, because only the home page is built.
- The quote form does not send data to a server.
- The "Why choose us?" button links to a generic video site.
- Images are not converted to WebP or served in multiple sizes.
- There are no automated tests.
