# FreshSip Customization Guide

## Quick Customizations

### 1. Update Brand Colors

Edit `app/globals.css`:

\`\`\`css
:root {
  /* Change primary from green to your color */
  --primary: 220 180 50; /* Example: Orange */
  --primary-light: 235 200 80;
  --primary-dark: 180 140 20;
  
  --accent: 100 200 100; /* Change accent */
  --secondary: 50 150 220; /* Change secondary */
}
\`\`\`

### 2. Change Typography

Edit `app/layout.tsx`:

\`\`\`tsx
// Use different fonts from Google Fonts
import { Playfair_Display, Merriweather, Roboto } from 'next/font/google'

const playfair = Playfair_Display({ subsets: ['latin'] })
const inter = Roboto({ subsets: ['latin'], weight: ['400', '500', '700'] })
\`\`\`

Then update `globals.css`:

\`\`\`css
@theme inline {
  --font-sans: 'Roboto', 'Roboto Fallback';
  --font-serif: 'Merriweather', 'Merriweather Fallback';
}
\`\`\`

### 3. Update Product Data

Edit `app/products/page.tsx` and `app/product/[slug]/page.tsx`:

\`\`\`tsx
const allProducts = [
  {
    id: '1',
    slug: 'product-slug',
    name: 'Product Name',
    price: 99,
    image: '/your-image.jpg',
    category: 'Category Name'
  },
  // Add more products
]
\`\`\`

### 4. Modify Home Page Sections

All home page content is in `app/page.tsx`. Customize:

- `featuredProducts` array
- `categories` array
- `features` array
- `testimonials` array

### 5. Update Navigation

Edit `components/navbar.tsx`:

\`\`\`tsx
{[
  { href: '/products', label: 'Products' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
  // Add new links here
].map(link => (...))}
\`\`\`

### 6. Customize Footer

Edit `components/footer.tsx` to add/remove sections and links.

## Advanced Customizations

### Add New Pages

1. Create new folder in `app/`: `app/new-page/`
2. Create `page.tsx` inside
3. Import components and build page
4. Add link in navbar

### Customize Animations

Edit `lib/motion-variants.ts` to modify animation speeds, delays, and effects:

\`\`\`tsx
export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' } // Adjust here
  }
}
\`\`\`

### Create New Components

Example: New hero variant

\`\`\`tsx
// components/alt-hero.tsx
'use client'

import React from 'react'
import { motion } from 'framer-motion'

interface AltHeroProps {
  title: string
  subtitle: string
}

export function AltHero({ title, subtitle }: AltHeroProps) {
  return (
    <section className="py-20 bg-gradient-to-r from-primary to-accent">
      <div className="max-w-7xl mx-auto px-4 text-center text-white">
        <motion.h1 className="heading-xl mb-4">{title}</motion.h1>
        <motion.p className="text-xl opacity-90">{subtitle}</motion.p>
      </div>
    </section>
  )
}
\`\`\`

### Modify Dark Mode

Update theme detection in `components/theme-provider.tsx`:

\`\`\`tsx
// Force dark mode
const initialTheme = 'dark'

// Or use system preference only
const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches
\`\`\`

### Add Forms & Validation

Example contact form with validation:

\`\`\`tsx
import { useState } from 'react'

const [errors, setErrors] = useState({})

const validateForm = (data) => {
  const newErrors = {}
  if (!data.email.includes('@')) newErrors.email = 'Invalid email'
  if (data.message.length < 10) newErrors.message = 'Too short'
  return newErrors
}

const handleSubmit = (e) => {
  const validation = validateForm(formData)
  if (Object.keys(validation).length > 0) {
    setErrors(validation)
    return
  }
  // Submit form
}
\`\`\`

## Integration Examples

### Add Analytics

\`\`\`tsx
// app/layout.tsx
import { Analytics } from '@vercel/analytics/react'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
\`\`\`

### Add Database (Supabase)

\`\`\`tsx
// lib/supabase.ts
import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
)
\`\`\`

### Add Newsletter (Mailchimp)

\`\`\`tsx
const handleSubscribe = async (email) => {
  const res = await fetch('/api/subscribe', {
    method: 'POST',
    body: JSON.stringify({ email })
  })
  return res.json()
}
\`\`\`

## Performance Tips

1. **Image Optimization**
   - Use WebP format
   - Optimize file size
   - Use Next.js Image component

2. **Code Splitting**
   - Use dynamic imports for heavy components
   - Lazy load below-the-fold content

3. **Caching**
   - Set Cache-Control headers
   - Use Vercel Edge Cache
   - Implement SWR for API calls

4. **Monitoring**
   - Track Core Web Vitals
   - Monitor error rates
   - Check performance metrics

## Troubleshooting Custom Changes

### Styles Not Applying

- Check class names are correct
- Verify Tailwind config
- Clear `.next` folder: `rm -rf .next`
- Rebuild: `npm run dev`

### Components Not Rendering

- Check imports are correct
- Verify component exports
- Check for typos in file names
- Review console for errors

### Animations Not Working

- Verify Framer Motion is installed
- Check variant names match
- Ensure components are wrapped with `motion.div`
- Review animation timing

---

Need help? Check the main README.md or visit the documentation.
