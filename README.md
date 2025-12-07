# CareAware — Cancer Awareness & Support Platform

A modern, professionally-designed web platform dedicated to providing vital resources, emotional support, and clear information to everyone touched by cancer. Built with cutting-edge web technologies and a focus on clean, accessible UI/UX.

**Live Demo:** [Deployed on Netlify](https://careaware.netlify.app)

---

## 🎯 Project Overview

CareAware is a cancer awareness and community support platform that combines three core pillars:

1. **Compassionate Care** — Prioritizing emotional well-being and human connection
2. **Raising Awareness** — Education and early detection campaigns
3. **Community Strength** — Connecting survivors, caregivers, and supporters

The platform features a premium biotech aesthetic inspired by leading health-tech companies (Universal DX, Infinitopes) with smooth animations, responsive design, and a seamless user experience across all devices.

### Key Features

- ✅ **Responsive Design** — Works flawlessly on desktop, tablet, and mobile
- ✅ **Dark/Light Mode** — User preference-based theme switching
- ✅ **Floating Animations** — Biotech-inspired 3D molecular elements and particles
- ✅ **Image Integration** — High-quality healthcare and community imagery
- ✅ **Contact Form** — localStorage-backed form submission with success feedback
- ✅ **Daily Inspiration** — Real API integration for motivational quotes
- ✅ **Professional Typography** — Carefully curated font hierarchy and spacing
- ✅ **Accessibility** — Semantic HTML, ARIA labels, keyboard navigation support

---

## 🛠️ Tech Stack

### Frontend Framework & Build Tools

| Technology | Version | Purpose |
|-----------|---------|---------|
| **React** | 18+ | UI library and component framework |
| **Vite** | 5.0+ | Lightning-fast build tool and dev server |
| **JavaScript (ES6+)** | — | Core language with modern features |

### Styling & Design

| Technology | Purpose |
|-----------|---------|
| **CSS 3** | Modern layout (Flexbox, Grid, animations) |
| **CSS Variables** | Dynamic theming and color management |
| **Google Fonts** (Inter, Playfair Display) | Professional typography |

### State & Data

| Technology | Purpose |
|-----------|---------|
| **React Hooks** (useState, useEffect) | State management |
| **localStorage** | Persistent form submissions & theme preference |
| **Fetch API** | Real API calls for inspirational quotes |

### Deployment & Hosting

| Technology | Purpose |
|-----------|---------|
| **Git & GitHub** | Version control and code repository |
| **Netlify** | Continuous deployment with auto-builds |
| **Node.js & npm** | Package management and development |

### Design Inspiration

- **Universal DX** — Clean biotech aesthetic, minimal color palette, generous whitespace
- **Infinitopes** — Floating 3D molecular elements, dark blue gradients, premium feel

---

## 📁 Project Structure

```
cancer-awareness/
├── public/                          # Static assets served directly
│   ├── hero-careaware.png          # Hero section image
│   ├── card-compassion.png         # Compassionate care card image
│   ├── card-awareness.png          # Awareness card image
│   ├── card-community.png          # Community strength card image
│   ├── impact-team.jpg             # Impact section image
│   └── vite.svg                    # Vite logo (can delete)
│
├── src/                             # Source code
│   ├── App.jsx                     # Main React component (all sections)
│   ├── index.css                   # Global styles + design system
│   ├── index.js                    # React DOM render
│   └── assets/                     # (Optional) Component-specific assets
│
├── node_modules/                    # Dependencies (auto-generated)
├── dist/                            # Production build output (auto-generated)
│
├── .gitignore                       # Git ignore rules
├── package.json                     # Project metadata & dependencies
├── package-lock.json                # Locked dependency versions
├── vite.config.js                   # Vite configuration
├── eslint.config.js                 # Linting rules (optional)
├── index.html                       # HTML entry point
└── README.md                        # This file

```

### Key Files Explained

#### `src/App.jsx`
- **Main component** housing all page sections
- **Sections included:**
  - Navbar with theme toggle
  - Hero section with floating elements & imagery
  - Mission statement
  - Feature cards (3-column grid)
  - Impact/Why It Matters section
  - Daily Inspiration with quote API
  - Contact form
  - Footer
- **State management:** Form data, theme, quotes, mobile menu

#### `src/index.css`
- **Design system** with CSS variables for colors, spacing, typography
- **Global styles** and component-specific classes
- **Animations:** Float, pulse, fade-in, scroll-bounce effects
- **Dark mode support** via `[data-theme="dark"]` attribute
- **Responsive media queries** for tablet and mobile

#### `public/`
- Images served at root level (e.g., `/hero-careaware.png`)
- Used by `<img src="/...">` tags in JSX

#### `index.html`
- React app entry point
- Contains `<div id="root"></div>` for React mounting
- Meta tags for viewport, charset, SEO

---

## 🚀 How to Run the Project

### Prerequisites

Ensure you have installed:
- **Node.js** (v16 or higher) — [Download](https://nodejs.org/)
- **npm** (comes with Node.js)
- **Git** — [Download](https://git-scm.com/)

### Local Development

1. **Clone the repository:**
   ```bash
   git clone https://github.com/YOUR_USERNAME/cancer-awareness.git
   cd cancer-awareness
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open in browser:**
   - Navigate to `http://localhost:5174/` (or the URL shown in terminal)
   - You should see the CareAware homepage with all sections

5. **Make changes:**
   - Edit `src/App.jsx` or `src/index.css`
   - Vite will hot-reload automatically

### Build for Production

```bash
npm run build
```

This creates an optimized `dist/` folder ready for deployment.

### Preview Production Build Locally

```bash
npm run preview
```

---

## 🎨 Design System

### Color Palette

**Light Mode:**
```css
--color-white: #FFFFFF
--color-off-white: #F8F9FA
--color-primary: #2563EB (Blue)
--color-primary-dark: #1E40AF
--color-accent-teal: #0D9488
--color-text-dark: #111827
--color-gray-600: #4B5563
```

**Dark Mode:**
Automatically inverts backgrounds and text colors using CSS custom properties.

### Typography Scale

| Element | Size | Weight | Usage |
|---------|------|--------|-------|
| H1 (Hero Title) | 48–72px | 700–800 | Main headings |
| H2 (Section Title) | 32–48px | 700 | Section headings |
| H3 (Card Title) | 24px | 600 | Card/subsection titles |
| Body Text | 16–18px | 300–400 | Paragraphs and descriptions |
| Small Text | 12–14px | 500 | Labels and captions |

### Spacing Scale

```
--space-xs: 8px
--space-sm: 12px
--space-md: 16px
--space-lg: 24px
--space-xl: 32px
--space-2xl: 48px
--space-3xl: 64px
--space-4xl: 80px
```

---

## 🔄 Component Architecture

### React Components (Single-File Approach)

The project uses a **single-component architecture** for simplicity:

- **App.jsx** contains all sections as HTML with React state hooks
- No separate component files (suitable for this project's scope)
- Easy for junior developers and interviews to understand the entire flow

### State Management

```javascript
// Theme toggle
const [theme, setTheme] = useState('light');

// Form submission
const [formData, setFormData] = useState({ name: '', email: '', message: '' });
const [submitted, setSubmitted] = useState(false);

// Daily inspiration
const [currentQuote, setCurrentQuote] = useState(null);
const [loadingQuote, setLoadingQuote] = useState(false);

// Mobile menu
const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
```

### External API Integration

**Advice Slip API** (Free advice/quotes):
```javascript
const response = await fetch('https://api.adviceslip.com/advice');
const data = await response.json();
setCurrentQuote({ content: data.slip.advice, author: 'Wisdom' });
```

---

## 📱 Responsive Design Strategy

### Breakpoints

```css
Desktop:  1440px and above
Tablet:   768px - 1023px
Mobile:   Below 768px (further optimized at 480px)
```

### Layout Changes by Device

| Section | Desktop | Tablet | Mobile |
|---------|---------|--------|--------|
| Hero | 2-column (text + image) | 1 column, stacked | 1 column, stacked |
| Cards Grid | 3 columns | 2 columns | 1 column |
| Impact Split | 2 columns (text + image) | 1 column, stacked | 1 column, stacked |
| Navbar Links | Visible | Hamburger menu | Hamburger menu |

---

## 🔐 Features & Implementation Details

### 1. Dark/Light Mode

- Uses `localStorage` to persist user preference
- CSS variables automatically update via `[data-theme="dark"]`
- Toggle button in navbar updates both state and DOM attribute

```javascript
const toggleTheme = () => {
  const newTheme = theme === 'light' ? 'dark' : 'light';
  setTheme(newTheme);
  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
};
```

### 2. Contact Form

- Collects: Full Name, Email, Message
- Stores in `localStorage` as JSON
- Shows success message for 4 seconds after submission
- No backend required (for demo purposes)

To add a backend:
- Replace `localStorage` with API call to your server
- Example: EmailJS, Formspree, or custom Node.js backend

### 3. Floating Animations

- CSS `@keyframes` for smooth, continuous animations
- Floating orbs and particles create biotech ambiance
- Animations loop indefinitely with staggered delays

```css
@keyframes float {
  0%, 100% { transform: translateY(0px) translateX(0px); }
  50% { transform: translateY(-40px) translateX(0px); }
}
```

### 4. Image Optimization

- Images stored in `public/` folder (no bundling overhead)
- PNG format for crisp healthcare/community imagery
- Responsive sizing via CSS (width scales, height auto)

---

## 🚢 Deployment (Netlify)

### Continuous Deployment Setup

1. Push code to GitHub
2. Netlify automatically:
   - Detects new commits
   - Runs `npm run build`
   - Deploys `dist/` folder
   - Updates live site

### Environment Variables (if needed later)

Create a `.env` file in project root:
```env
VITE_API_URL=https://api.example.com
```

Access in React:
```javascript
const apiUrl = import.meta.env.VITE_API_URL;
```

### Performance Optimizations

- Vite's code splitting (automatic)
- Image lazy loading (can be added)
- CSS minification (automatic in build)
- Gzip compression (handled by Netlify)

---

## 📚 Learning Path for Developers

If you're inheriting or building on this project:

1. **Week 1:** Understand React hooks (useState, useEffect)
2. **Week 1:** Study CSS variables and responsive design patterns
3. **Week 2:** Explore the `index.css` design system
4. **Week 2:** Modify `App.jsx` sections to practice React
5. **Week 3:** Add new sections (testimonials, blog, etc.)
6. **Week 3:** Integrate a real backend API

---


## 🔧 Future Enhancements

- [ ] Add a blog/resources section with filtering
- [ ] Testimonials carousel from real cancer survivors
- [ ] Newsletter signup integration (Mailchimp)
- [ ] Backend API for form submissions (Node.js/Express)
- [ ] Database for storing submissions (MongoDB/PostgreSQL)
- [ ] User authentication for personalized content
- [ ] SEO optimization (meta tags, Open Graph)
- [ ] Analytics integration (Google Analytics, Plausible)
- [ ] Accessibility audit (WCAG 2.1 AA compliance)

---

## 📖 Resources

- **React Docs:** https://react.dev
- **Vite Guide:** https://vitejs.dev
- **MDN CSS Reference:** https://developer.mozilla.org/en-US/docs/Web/CSS
- **Netlify Docs:** https://docs.netlify.com
- **Color Accessibility:** https://webaim.org/articles/contrast/

---

## 📧 Contact & Support

For questions or feedback about CareAware:

- **GitHub Issues:** [Report a bug](https://github.com/Yashuppal-15/cancer-awareness/issues)
- **Email:** 2k22.cse.2213230@gmail.com
- **Website:** [careaware.netlify.app](https://careaware.netlify.app)

---

## 📄 License

This project is open-source and available under the MIT License. Feel free to use, modify, and distribute it for educational and commercial purposes.

---

## 👨‍💻 Built With ❤️

A project dedicated to cancer awareness and community support.

**Last Updated:** December 2025  
**Status:** Active & Maintained