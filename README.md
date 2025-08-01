# Tailwind 4 + Vite Starter

A minimal starter template for fast and modern web development using Vite, Tailwind CSS 4, and efficient image optimization.

## Features

- ⚡ **Vite** – Lightning-fast development server and build tool
- 🎨 **Tailwind CSS 4** – Utility-first modern styling
- 🖼️ **Automatic Image Optimization** – PNG-to-WebP conversion via Sharp
- 🏗️ **HTML Minification** – Using vite-plugin-html-minify for optimized outputs
- 🔄 **Prettier** – Code formatting for consistency

---

## Quick Start

### 1. Clone & Install
git clone <your-repo-url> cd tailwind-4-vite npm install

### 2. Develop
npm run dev

- Visit `http://localhost:5173` (or as indicated).

### 3. Build
Build production assets (includes image conversion):
npm run build

### 4. Preview
Preview your production build locally:
npm run preview

---

## Project Structure

- **src/** – Source files & scripts
    - `convert-to-webp.js`: Automatically converts all PNGs in `src/public/images` to WebP format before running Vite
- **public/** – Public, static assets (such as images)
- **index.html** – Basic HTML entry, example Tailwind usage

---

## Image Optimization

On each build or dev start, all `.png` images in `src/public/images` will be converted to `.webp`.  
Both the original `.png` and the generated `.webp` are available for `<picture>` elements and optimized loading.

---

## Scripts

| Script        | What it does                    |
| ------------- | ------------------------------ |
| `dev`         | Image conversion + Vite dev server |
| `build`       | Image conversion + Vite build      |
| `preview`     | Preview prod build locally         |
| `format`      | Format source files with Prettier  |

---

## Customization

- **TailwindCSS**: Modify Tailwind classes in your HTML for instant style changes.
- **Add images**: Place PNG images in `/src/public/images/` for automatic optimization.
- **HTML/CSS/Javascript**: Edit in `src/` and `index.html` as usual!

---

## Requirements

- Node.js 18+
- npm

---

## License

[ISC](LICENSE)  
You’re free to use, learn, and adapt!

---

**Happy building!**
