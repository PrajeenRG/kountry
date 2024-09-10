# Kountry - The navigator of the world

A UI wrapper for API provided by [restcountries.com](https://restcountries.com). Using the UI and NextJS, the website has been built to have the following features:

- Top Level view of each country detil
- A search based filtering system
- Modal to reveal more information about a country
- Adaptive light and dark mode as per user device
- Responsive UI which flows fluidly across different screens

**Demo Link:** [kountry.7725336.xyz](https://kountry.7725336.xyz)

## Tools & Frameworks

- NextJS 14
- TailwindCSS
- Vercel

## Get Started

Install the dependencies:
```bash
cd kountry
pnpm install # preferred, but can use others like npm and yarn
```

To run in developer mode:
```bash
pnpm run dev
```

To start a production like local server:
```bash
pnpm run build && pnpm run start
```

In both the cases, navigate to `http://localhost:3000` to view the site locally.

## Enhancements

- Make it more a11y compatible right from fonts to coloring to sizing
- Add smoother transition on UI updates
- Refactor to render more components on server
- Add pagination to card view

## License

Currently the project is licensed under [MPL-2.0](/LICENSE).