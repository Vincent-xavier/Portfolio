# Vincent Xavier A — Portfolio

A production-grade personal portfolio built with **React 18 + TypeScript + Vite**, featuring cinematic micro-interactions and a dark terminal aesthetic.

## ✨ Features

- **Custom cursor** — glowing dot + lagging ring with hover expansion
- **Interactive particle canvas** — 90 particles that react to mouse movement
- **Magnetic buttons** — CTAs physically follow the cursor
- **3D tilt project cards** — perspective rotation on hover
- **Typewriter animation** — cycles through role descriptions
- **Animated stat counters** — count up on scroll into view
- **Scroll progress bar** — glowing gradient bar tracks reading position
- **Staggered reveals** — sections animate in as you scroll
- **Loading screen** — cinematic 000%→100% intro

## 🛠 Tech Stack

- React 18 + TypeScript
- Vite
- Framer Motion
- react-type-animation
- react-countup
- react-intersection-observer
- lucide-react

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
src/
├── components/
│   ├── Cursor.tsx          # Custom cursor (dot + ring)
│   ├── Navbar.tsx          # Fixed nav with scroll progress
│   ├── Hero.tsx            # Landing section with particles
│   ├── Skills.tsx          # Animated skill grid
│   ├── Experience.tsx      # Timeline experience card
│   ├── Projects.tsx        # 3D tilt project cards
│   ├── EducationContact.tsx # Education + contact sections
│   └── Footer.tsx
├── hooks/
│   ├── useCursor.ts        # Cursor position & hover logic
│   ├── useMagnet.ts        # Magnetic button effect
│   └── useScrollProgress.ts
├── data/
│   └── index.ts            # All portfolio content
├── types/
│   └── index.ts
├── App.tsx                 # Root + loading screen
├── main.tsx
└── index.css               # Global styles, cursor, scrollbar
```

## 🌐 Deploy to GitHub Pages

```bash
npm run build
# Push the dist/ folder to the gh-pages branch
```

Or deploy instantly with [Netlify](https://netlify.com) or [Vercel](https://vercel.com) by connecting your GitHub repo.

## 📬 Contact

- Email: vincentxavier2602@gmail.com
- LinkedIn: [vincent-xavier26](https://linkedin.com/in/vincent-xavier26)
- Phone: +91 85260 73314
