# Developer Portfolio – Carson Phillips

This is my personal developer portfolio, built using **Next.js 15** and **Tailwind CSS v4**.  
The site highlights my work, skills, resume, and blog posts with a clean, responsive, and animated layout.

🌐 **Live Site:** [https://c-phillips.dev](https://c-phillips.dev)

---

## 🚀 Tech Stack

- [Next.js 15 (App Router)](https://nextjs.org/docs)
- [Tailwind CSS v4](https://tailwindcss.com/blog/tailwindcss-v4)
- [Framer Motion](https://www.framer.com/motion/) for animations
- [TypeScript](https://www.typescriptlang.org/)
- Design tokens via Tailwind v4 `@theme` and `@custom-variant`

---

## 📁 Project Structure

```
src/
├── app/                  # Pages using the App Router
│   ├── home/             # Landing page
│   ├── blog/             # Blog list
│   ├── projects/         # Filterable project cards
│   ├── resume/           # Resume sections and download link
│   └── layout.tsx        # Shared layout (navbar, footer, theming)
├── components/           # Reusable components (cards, toggles, etc.)
├── styles/               # Tailwind + theme variables (globals.css)
```

---

## 🎨 Design System

Tailwind CSS v4 allows design tokens and variants directly in CSS:

```css
@custom-variant dark (&:where(.dark, .dark *));

@layer theme {
  @theme {
    --color-lighter: #f9fafb;
    --color-hlighter: #d1d5db;
    --color-darker: #1f2937;
    --color-hdarker: #111827;
    --color-primary: #2563eb;
    --color-secondary: #10b981;
    --color-accent: #b91c1c;
  }
}
```

---

## ✨ Features

- 🌙 Dark mode toggle
- 🎯 Fully responsive layout
- 📁 Filterable Projects by tech/category
- 🧠 Blog with dev logs and updates
- 📄 Resume with PDF download
- 🎞️ Framer Motion page and section animations
- 🛠 Clean layout using CSS variables and custom variants

---

## 📦 Scripts

```bash
npm install        # Install dependencies
npm run dev        # Start local dev server
npm run build      # Build for production
```

---

## 📄 License

MIT License — feel free to fork and adapt for your own use.

---

## 👤 Author

**Carson Phillips**  
📧 [cbpcbphillips@gmail.com](mailto:cbpcbphillips@gmail.com)  
🔗 [LinkedIn](https://www.linkedin.com/in/cbpcbphillips/)  
🐙 [GitHub](https://github.com/cbpcbphillips)

---

> Built with love, dark mode, and a desire to make clean, fast, useful websites.
