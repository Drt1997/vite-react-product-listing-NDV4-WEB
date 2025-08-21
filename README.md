https://github.com/Drt1997/vite-react-product-listing-NDV4-WEB/releases

# Vite React Product Listing — Dynamic Grid with Search

[![Releases](https://img.shields.io/badge/Releases-v1.0.0-blue?style=for-the-badge&logo=github)](https://github.com/Drt1997/vite-react-product-listing-NDV4-WEB/releases)

![Product Grid Hero](https://source.unsplash.com/1200x400/?products,shop)

Product listing app built with Vite + React. It reads a local product dataset, renders items in a responsive grid, and lets users search, filter, and sort the list. The app uses component-based UI, React hooks, and CSS-in-JS for inline styles.

Badges
- Topics: css · html5 · javascript · jsx · npm · react-hooks · reactjs · useeffect · usestate · vite
- Stack: React, Vite, ES2020, NPM

Features ✨
- Dynamic product rendering from a local data source.
- Live search as you type (name, SKU, tags).
- Multi-criteria filtering (category, price range, rating, availability).
- Flexible sorting (price, newest, popularity).
- Responsive grid for mobile, tablet, and desktop.
- Component-driven layout for reuse and testing.
- Minimal CSS-in-JS for scoped styles and predictable layout.

Demo & Releases
- Download the compiled release archive from the Releases page and run it locally. Example release file: vite-react-product-listing-NDV4-WEB-v1.0.0.zip. After you download the archive from https://github.com/Drt1997/vite-react-product-listing-NDV4-WEB/releases, extract it and run the included start script or follow the included README in the archive to serve the build.
- Quick access: https://github.com/Drt1997/vite-react-product-listing-NDV4-WEB/releases

Why this repo
- Clean architecture that separates data, UI, and utility logic.
- Minimal dependencies. Vite speeds up dev feedback.
- Small code surface. You can trace data flow from the data file to the UI.
- Designed for learning and for quick extension to real APIs.

Screenshots 🖼️
- Grid:  
  ![Grid Sample](https://source.unsplash.com/800x600/?store,products)
- Product card:  
  ![Card Sample](https://source.unsplash.com/600x400/?product,packaging)
- Filters UI:  
  ![Filters Sample](https://source.unsplash.com/600x300/?shopping,filter)

Getting started — local dev (recommended)
1. Clone the repo
   - git clone https://github.com/Drt1997/vite-react-product-listing-NDV4-WEB.git
2. Change directory
   - cd vite-react-product-listing-NDV4-WEB
3. Install dependencies
   - npm install
4. Start the dev server
   - npm run dev
5. Open your browser at the URL shown by Vite (typically http://localhost:5173)

Install from release (pre-built)
1. Download the release archive from the Releases page:
   - https://github.com/Drt1997/vite-react-product-listing-NDV4-WEB/releases
2. Extract the archive. Inside you will find a static build or a start script.
3. If the release includes a static build, serve it with a static server:
   - npx serve build
4. If the release includes a start script, run:
   - ./start.sh
   - or follow the included instructions inside the archive.

Project layout
- public/ — static assets (icons, favicon)
- src/
  - data/products.json — local product dataset
  - components/
    - ProductCard.jsx — visual card for each product
    - ProductGrid.jsx — grid layout and virtualization hooks
    - FiltersPanel.jsx — UI for filter controls
    - SearchBar.jsx — debounced live search
    - SortSelect.jsx — sorting control
    - Pagination.jsx — optional page controls
  - hooks/
    - useSearch.js — search logic with debounce
    - useFilters.js — filter combinators and state
  - styles/
    - theme.js — shared sizes and colors (used inline)
  - App.jsx — main wiring and state lift
  - main.jsx — Vite entry
- package.json — scripts and dependencies

Data model (example)
- id: string
- title: string
- sku: string
- description: string
- price: number
- category: string
- tags: string[]
- rating: number (0-5)
- inStock: boolean
- image: string (URL or local path)
This shape leads to predictable filters and quick rendering in ProductCard.

Filtering behavior
- Category: single or multi-select list. Filters use exact match.
- Price: min/max range. Filter uses numeric comparison.
- Rating: minimum rating. Filter includes equal or greater.
- Availability: toggle for in-stock items.
- Tag search: matches any product tag.
Combine filters using logical AND. The filters pipeline applies search first, then filters, then sorting, then pagination.

Search design
- Live search runs on the client against the local dataset.
- The app debounces input (200–300 ms) to avoid excessive re-render.
- The search performs case-insensitive match on title, sku, and tags.
- The search returns exact and partial matches. Results show matched terms highlighted.

Sorting options
- Price: low → high, high → low.
- Newest: uses createdAt timestamp on dataset.
- Popularity: uses a popularity score on dataset or fallback to rating.
- Default sort: relevance to search, then configured fallback.

Performance notes
- Vite provides fast HMR. React re-renders only changed components.
- ProductGrid supports basic virtualization if dataset grows beyond a few hundred items.
- Inline CSS-in-JS keeps style local to components and avoids global conflicts.

Styling approach
- Use lightweight CSS-in-JS for predictable style scoping.
- Keep rules small. Use flexbox and CSS grid for layout.
- Use tokens from theme.js for colors and spacing.

Accessibility
- All interactive controls expose proper aria-label attributes.
- ProductCard images include alt text.
- Keyboard navigation works for filters and product controls.

Testing
- Unit test components with Jest + React Testing Library.
- Test search and filter logic in hooks.
- Example scripts:
  - npm run test
  - npm run test:watch

Scripts (package.json)
- dev: vite
- build: vite build
- preview: vite preview
- test: jest
- lint: eslint . --ext .js,.jsx

Extending the app
- Replace local data with a real REST or GraphQL API. Abstract data access into src/services/api.js.
- Add authentication and cart features.
- Add server-side rendering for SEO.
- Swap CSS-in-JS for Tailwind or CSS Modules if you prefer.

Common tasks
- Add a new product: append to src/data/products.json with the model fields.
- Add a filter: create a small control and hook it into useFilters.js.
- Add analytics: place tracking inside ProductCard click handler.

Contributing
- Open an issue for a bug or feature.
- Fork, create a feature branch, and submit a pull request.
- Keep changes small and focused. Provide tests when appropriate.
- Follow existing code style. Use eslint and prettier.

Changelog highlights
- v1.0.0 — initial public release. Implements core grid, search, filters, and sorting with responsive layout.

License
- MIT License. See LICENSE file for details.

Credits and resources
- Built with Vite and React.
- Product images in screenshots come from Unsplash (dynamic sources).
- Icons from public icon sets.

Contact
- Use GitHub issues for bug reports and feature requests.
- Release downloads and binaries available at the Releases page:
  - https://github.com/Drt1997/vite-react-product-listing-NDV4-WEB/releases