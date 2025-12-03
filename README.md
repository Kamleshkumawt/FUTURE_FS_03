# FreshSip - Premium Organic Juice E-Commerce Platform

A modern, fully animated e-commerce website for FreshSip, Bangalore's leading organic juice brand. Built with Next.js 16, TailwindCSS, and Framer Motion for a premium user experience.

## 🚀 Features

- **Premium Design**: Clean, minimal aesthetic with glassmorphism effects
- **Smooth Animations**: Framer Motion animations on every interaction
- **Dark/Light Mode**: System preference detection with manual toggle
- **Fully Responsive**: Mobile-first design for all screen sizes
- **Product Management**: Full product catalog with filtering and sorting
- **Shopping Cart**: Real-time cart with item management
- **Product Details**: Rich product pages with image gallery and nutrition info
- **Performance**: Optimized images, lazy loading, smooth page transitions
- **SEO Ready**: Metadata and open graph tags for all pages

## 📦 Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Styling**: TailwindCSS v4
- **Animations**: Framer Motion
- **Images**: Next.js Image Optimization
- **Fonts**: Playfair Display (headings), Inter (body)
- **Dark Mode**: Native Tailwind dark mode with system preference

## 📁 Project Structure

\`\`\`
freshsip/
├── app/
│   ├── layout.tsx              # Root layout with theme provider
│   ├── globals.css             # Global styles and design tokens
│   ├── page.tsx                # Home page
│   ├── products/
│   │   └── page.tsx            # Products listing page
│   ├── product/
│   │   └── [slug]/
│   │       └── page.tsx        # Product detail page
│   ├── about/
│   │   └── page.tsx            # About page
│   └── contact/
│       └── page.tsx            # Contact page
├── components/
│   ├── navbar.tsx              # Navigation bar
│   ├── footer.tsx              # Footer component
│   ├── hero-section.tsx        # Hero section component
│   ├── feature-strip.tsx       # Features showcase
│   ├── product-card.tsx        # Individual product card
│   ├── product-grid.tsx        # Product grid layout
│   ├── testimonials-slider.tsx # Testimonials carousel
│   ├── newsletter-section.tsx  # Newsletter signup
│   ├── category-tile.tsx       # Category showcase tiles
│   ├── floating-cart-drawer.tsx # Slide-in cart drawer
│   ├── page-transition.tsx     # Page transition wrapper
│   └── theme-provider.tsx      # Dark/light mode provider
├── lib/
│   ├── motion-variants.ts      # Framer Motion animation variants
│   └── cart-context.tsx        # Cart state management
├── public/
│   └── (placeholder images)
└── package.json
\`\`\`

## 🎨 Design System

### Color Palette

- **Primary**: `#2FB46A` (Fresh Green)
- **Primary Light**: `#4CC68C`
- **Primary Dark**: `#1A9852`
- **Accent**: `#22C55E` (Accent Green)
- **Secondary**: `#0EA9E9` (Sky Blue)
- **Background Light**: `#FFFFFF`
- **Background Dark**: `#0B1220`
- **Foreground Light**: `#111827`
- **Foreground Dark**: `#F3F4F6`

### Typography

- **Headings**: Playfair Display (serif, premium editorial look)
- **Body**: Inter (clean, modern, highly readable)

### Components

- Soft rounded cards (12-14px radius)
- Glassmorphism overlays with backdrop blur
- Smooth shadows and airy whitespace
- High-contrast elements with proper accessibility

## 🎬 Animation System

### Core Animations

- **fadeIn**: Simple opacity transition
- **fadeInUp**: Opacity + upward movement
- **slideUp**: Larger upward slide motion
- **scaleIn**: Scale-based entrance animation
- **staggerContainer**: Parent for staggered children
- **staggerItem**: Individual child animation
- **scaleOnHover**: Hover scale effect (1.02)
- **floatAnimation**: Continuous floating motion
- **parallax**: Scroll-based parallax effect
- **pageTransition**: Smooth page fade-in transitions

All animations use `transform` and `opacity` for optimal performance.

## 🛒 Cart System

The cart uses React Context for state management:

\`\`\`tsx
import { useCart } from '@/lib/cart-context'

const { items, addItem, removeItem, updateQuantity, total, itemCount } = useCart()
\`\`\`

## 🌓 Dark Mode

Dark mode is automatically managed via the `ThemeProvider`:

\`\`\`tsx
const { theme, toggleTheme } = useTheme()
\`\`\`

System preference is detected and stored in localStorage.

## 📱 Responsive Design

- **Mobile**: Full-width, single column layout
- **Tablet (md)**: 2-3 column grids
- **Desktop (lg+)**: 3-4 column grids with enhanced spacing

All components use Tailwind's responsive prefixes: `md:`, `lg:`, `xl:`

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
\`\`\`bash
git clone <repository-url>
cd freshsip
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
\`\`\`

3. Run the development server:
\`\`\`bash
npm run dev
\`\`\`

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

\`\`\`bash
npm run build
npm run start
\`\`\`

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import project in [Vercel Dashboard](https://vercel.com)
3. Vercel automatically detects Next.js and configures build settings
4. Click "Deploy"

\`\`\`bash
# Or deploy via CLI
npm install -g vercel
vercel
\`\`\`

### Environment Variables

No environment variables required for this version. To add:

1. Create `.env.local` in project root
2. Add variables (e.g., `NEXT_PUBLIC_API_URL=...`)
3. Redeploy

## 📊 Performance Optimizations

- Next.js Image component with lazy loading
- Dynamic imports for heavy components
- CSS-in-JS optimization with Tailwind
- Smooth animations using only transform/opacity
- Efficient event listeners with cleanup
- Next.js automatic code splitting

## ♿ Accessibility

- Semantic HTML elements
- ARIA labels on interactive elements
- Proper color contrast ratios
- Keyboard navigation support
- Screen reader friendly

## 📈 SEO

- Page-level metadata
- Open Graph tags
- Semantic HTML structure
- Mobile-first responsive design
- Fast Core Web Vitals

## 🎯 Customization

### Update Colors

Edit color tokens in `app/globals.css`:

\`\`\`css
:root {
  --primary: 47 180 106; /* Modify these HSL values */
  --accent: 34 197 94;
}
\`\`\`

### Add Products

Update product data in `app/products/page.tsx` and `app/product/[slug]/page.tsx`

### Modify Typography

Change fonts in `app/layout.tsx`:

\`\`\`tsx
const playfair = Playfair_Display({ ... })
const inter = Inter({ ... })
\`\`\`

## 📄 License

This project is proprietary to FreshSip.

## 👥 Support

For issues or questions, contact: hello@freshsip.in

---

**Built with ❤️ using Next.js, TailwindCSS, and Framer Motion**
