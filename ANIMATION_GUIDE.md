# FreshSip Animation System Guide

## Overview

Framer Motion is used throughout the site for smooth, performant animations. All animations use only `opacity` and `transform` for optimal performance.

## Animation Variants

### 1. fadeIn
Simple opacity transition - no movement

\`\`\`tsx
<motion.div
  initial="hidden"
  animate="visible"
  variants={fadeIn}
>
  Content
</motion.div>
\`\`\`

**Usage**: Simple element entrance

### 2. fadeInUp
Fade in while moving up 20px

\`\`\`tsx
<motion.div
  initial="hidden"
  whileInView="visible"
  variants={fadeInUp}
>
  Scroll-triggered content
</motion.div>
\`\`\`

**Usage**: Section headings, feature lists

### 3. slideUp
Larger upward slide (40px) with fade

\`\`\`tsx
<motion.h1 variants={slideUp}>
  Large heading
</motion.h1>
\`\`\`

**Usage**: Hero titles, major sections

### 4. scaleIn
Entrance with scale animation

\`\`\`tsx
<motion.div variants={scaleIn}>
  Small element entrance
</motion.div>
\`\`\`

**Usage**: Cards, icons, badges

### 5. staggerContainer
Parent wrapper for staggered children

\`\`\`tsx
<motion.div
  variants={staggerContainer}
  initial="hidden"
  animate="visible"
>
  {items.map((item, i) => (
    <motion.div key={i} variants={staggerItem}>
      {item}
    </motion.div>
  ))}
</motion.div>
\`\`\`

**Usage**: Product grids, feature lists, testimonials

### 6. scaleOnHover
Product card hover effect

\`\`\`tsx
<motion.div
  whileHover={{ scale: 1.02 }}
  whileTap={{ scale: 0.98 }}
  transition={{ type: 'spring', stiffness: 300 }}
>
  Hoverable element
</motion.div>
\`\`\`

**Usage**: Product cards, buttons, links

### 7. floatAnimation
Continuous subtle floating motion

\`\`\`tsx
<motion.div animate={floatAnimation}>
  Floating element
</motion.div>
\`\`\`

**Usage**: Hero images, decorative elements

## Scroll-Triggered Animations

Use `whileInView` for animations triggered on scroll:

\`\`\`tsx
<motion.div
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.3 }}
  variants={slideUp}
>
  Content visible when 30% in viewport
</motion.div>
\`\`\`

## Custom Animation Examples

### Button Click Animation
\`\`\`tsx
<motion.button
  whileTap={{ scale: 0.95 }}
  onClick={handleClick}
>
  Click me
</motion.button>
\`\`\`

### Dropdown Animation
\`\`\`tsx
<motion.div
  initial={{ opacity: 0, y: -10 }}
  animate={{ opacity: 1, y: 0 }}
  exit={{ opacity: 0, y: -10 }}
  transition={{ duration: 0.2 }}
>
  Dropdown content
</motion.div>
\`\`\`

### Loading Animation
\`\`\`tsx
<motion.div
  animate={{ rotate: 360 }}
  transition={{ repeat: Infinity, duration: 1 }}
>
  ⌛
</motion.div>
\`\`\`

## Performance Best Practices

1. **Use `initial` and `animate`** - Avoid dynamic values
2. **GPU Accelerated** - Only animate `transform` and `opacity`
3. **Viewport Detection** - Use `whileInView` instead of scroll listeners
4. **Exit Animations** - Wrap in `<AnimatePresence>` for cleanup
5. **Reduced Motion** - Respect user preferences:

\`\`\`tsx
// Optional: Respect prefers-reduced-motion
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
\`\`\`

## Common Patterns

### Page Entrance
\`\`\`tsx
<motion.main
  initial={{ opacity: 0, y: 10 }}
  animate={{ opacity: 1, y: 0 }}
>
  Page content
</motion.main>
\`\`\`

### Section Stagger
\`\`\`tsx
<motion.div
  variants={staggerContainer}
  initial="hidden"
  whileInView="visible"
>
  {sections.map(section => (
    <motion.section key={section.id} variants={staggerItem}>
      {section.content}
    </motion.section>
  ))}
</motion.div>
\`\`\`

### Modal/Drawer
\`\`\`tsx
<AnimatePresence>
  {isOpen && (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100 }}
    >
      Drawer content
    </motion.div>
  )}
</AnimatePresence>
\`\`\`

## Timing Presets

- **Fast**: 0.2-0.3s (micro-interactions)
- **Normal**: 0.5-0.6s (standard animations)
- **Slow**: 0.8-1s (dramatic entrances)
- **Continuous**: 3-5s (infinite loops)

## Transition Types

- **ease**: "easeIn", "easeOut", "easeInOut"
- **spring**: { stiffness: 300, damping: 10 }
- **tween**: Linear animation

## Testing Animations

1. **Reduce Motion**: Use macOS/Windows settings
2. **Browser DevTools**: Slow down animations to 4x or 10x
3. **Lighthouse**: Check performance impact
4. **Mobile**: Test on actual device for smoothness

## Troubleshooting

**Animation not playing:**
- Check `initial` and `animate` values are different
- Verify component is rendered
- Check for typos in variant names

**Animation janky:**
- Only animate opacity/transform
- Avoid animating layout properties (width, height)
- Use `willChange` CSS hint
- Check for main thread blocking

**Performance issues:**
- Reduce number of animated elements
- Use `shouldReduceMotion` check
- Defer non-critical animations
- Test on lower-end devices
