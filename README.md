# Professional Developer Portfolio

A sleek, modern, single-page application portfolio built for a Frontend Engineer. Designed for maximum configurability, stunning aesthetics, and buttery smooth animations.

## 🚀 Tech Stack
- **Framework**: React 19 + TypeScript
- **Bundler**: Vite
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Icons**: Lucide React & React Icons

---

## 🛠️ The "Single Source of Truth" Configuration
The entire portfolio was architected to be highly extensible without ever needing to touch the frontend React component code. 

**All personal data, links, projects, and global color themes are controlled entirely by one file:**
> 📂 `src/config/site.ts`

To update the website in the future:
1. Open `src/config/site.ts`.
2. Edit your **hero text**, **skills**, **resume url**, or add/remove **projects** directly in the JSON elements.
3. Edit the **themes** object to completely change the Light/Dark mode colors. The entire website's CSS will intelligently scale the gradients and shadows accordingly!

---

## 🧱 Component Architecture

The codebase is highly modularized, keeping individual logic cleanly separated.

### Sections (`src/components/sections/`)
- `Hero.tsx`: The primary landing module with the profile photo gradient and call-to-action buttons.
- `About.tsx`: Maps out your categorized Technical Skills and Educational background.
- `Experience.tsx`: A vertical, animated timeline mapping your career timeline.
- `Projects.tsx`: Iterates through the `projects` object in `site.ts` to render glassmorphism styled project cards with their respective tool tags and Github/Walkthrough buttons.
- `Contact.tsx`: Simple, clean footer area with clickable social links.

### Core Architecture (`src/components/` & `src/layouts/`)
- `Navbar.tsx`: A responsive, floating "pill-style" top navigation which transforms to a frosted-glass blur when scrolling. Includes the mobile sliding menu and the `Light / Dark` mode toggle button.
- `SectionWrapper.tsx`: A utility wrapper leveraging Framer Motion to automatically give every standard section incredibly smooth fade-up animations as they enter the browser viewport.
- `Layout.tsx`: The primary wrapper defining the layout constraints and enforcing the theme switching CSS variables.
- `ThemeProvider.tsx` / `ThemeContext.ts`: Built-in native detection of Operating System light/dark modes with `localStorage` memory.

---

## 🎨 Asset Management

All static images and graphics live inside the `src/assets/` directory. They are natively imported into `src/config/site.ts` to ensure Vite bundles them perfectly for production.

**Currently tracked assets:**
- `my_photo.jpeg`: Your circular profile picture used in the Hero portion. (You can simply replace this file with the same name to update your picture locally!)
- `ai-text-rewriter.png`: High fidelity mockup of the Chrome Extension extension. 
- `gemini-chat.png`: Application mockup preview for the AI chat application.

---

## 🏃 Running Locally

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run Dev Server:**
   ```bash
   npm run dev
   ```

3. **Build for Production:**
   ```bash
   npm run build
   ```
