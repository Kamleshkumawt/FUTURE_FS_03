"use client"

import { HeroSection } from "@/components/hero-section"
import { FeatureStrip } from "@/components/feature-strip"
import { CategoryTile } from "@/components/category-tile"
import { ProductGrid } from "@/components/product-grid"
import { TestimonialsSlider } from "@/components/testimonials-slider"
import { NewsletterSection } from "@/components/newsletter-section"
import { motion } from "framer-motion"
import { staggerContainer, staggerItem } from "@/lib/motion-variants"

const featuredProducts = [
  {
    id: "1",
    slug: "fresh-watermelon",
    name: "Fresh Watermelon Juice",
    price: 40,
    image: "/watermelon-juice-bottle.jpg",
    category: "Healthy Juices",
  },
  {
    id: "2",
    slug: "papaya-paradise",
    name: "Papaya Paradise",
    price: 40,
    image: "/papaya-juice-bottle.jpg",
    category: "Healthy Juices",
  },
  {
    id: "3",
    slug: "avocado-juice",
    name: "Avocado Juice",
    price: 45,
    image: "/avocado-juice-bottle.jpg",
    category: "Detox Cleanse",
  },
  {
    id: "4",
    slug: "grape-goodness",
    name: "Grape Goodness",
    price: 40,
    image: "/grape-juice-bottle.jpg",
    category: "Healthy Juices",
  },
]

const categories = [
  {
    name: "Healthy Juices",
    icon: "🥤",
    href: "/products?category=healthy",
    description: "Fresh and nutritious juice blends",
  },
  {
    name: "Detox Cleanse",
    icon: "🍃",
    href: "/products?category=detox",
    description: "Purify and rejuvenate your body",
  },
  {
    name: "Seasonal Picks",
    icon: "🌱",
    href: "/products?category=seasonal",
    description: "Limited edition seasonal flavors",
  },
  {
    name: "Bestsellers",
    icon: "⭐",
    href: "/products?category=bestsellers",
    description: "Customer favorites",
  },
]

const features = [
  {
    icon: "🚚",
    title: "Free Delivery",
    description: "Within 50km of Bangalore. Fresh juice delivered to your doorstep same-day.",
  },
  {
    icon: "🍃",
    title: "Fresh Ingredients",
    description: "100% organic fruits • cold pressed • zero preservatives • zero additives",
  },
  {
    icon: "↩️",
    title: "7-Day Returns",
    description: "Unsatisfied? Full refund within 7 days of purchase. No questions asked.",
  },
]

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    role: "Health Enthusiast",
    content: "FreshSip has transformed my daily routine. The juices taste incredible and I feel so much healthier!",
    rating: 5,
  },
  {
    id: 2,
    name: "Rajesh Kumar",
    role: "Fitness Coach",
    content: "I recommend FreshSip to all my clients. Quality and freshness are unmatched in Bangalore.",
    rating: 5,
  },
  {
    id: 3,
    name: "Ananya Patel",
    role: "Wellness Consultant",
    content: "The detox cleanse juices are a game-changer. Pure, natural, and exactly what your body needs.",
    rating: 5,
  },
]

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection
        title="Premium Organic Juices for Modern Living"
        subtitle="Experience 100% cold-pressed organic juices delivered fresh to your doorstep in Bangalore. Zero preservatives, maximum nutrition."
        cta={{ label: "Shop Now", href: "/products" }}
        imageSrc="/colorful-fresh-juice-bottles-lifestyle.jpg"
        imageAlt="FreshSip Premium Juices"
      />

      {/* Feature Strip */}
      <FeatureStrip features={features} />

      {/* Categories Section */}
      <section className="py-20 md:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-16">
            <h2 className="heading-lg mb-4">Explore Our Collections</h2>
            <p className="text-lg text-subtle max-w-2xl mx-auto">
              From energizing wellness juices to detoxifying cleanses, find the perfect juice for your lifestyle
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {categories.map((category, index) => (
              <motion.div key={index} variants={staggerItem}>
                <CategoryTile {...category} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 md:py-28 bg-card-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-16">
            <h2 className="heading-lg mb-4">Featured Juice Blends</h2>
            <p className="text-lg text-subtle max-w-2xl mx-auto">
              Handcrafted blends using nature's finest ingredients
            </p>
          </motion.div>

          <ProductGrid products={featuredProducts} />
        </div>
      </section>

      {/* Why FreshSip Section */}
      <section className="py-20 md:py-28 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="heading-lg">Why Choose FreshSip?</h2>
              <p className="text-lg text-subtle leading-relaxed">
                Leading organic juice innovation in Bangalore. We believe in transparency, quality, and sustainability.
              </p>

              <div className="space-y-4 pt-4">
                {[
                  {
                    num: "1",
                    title: "Organic Fruit Selection",
                    desc: "Carefully sourced from certified organic farms",
                  },
                  { num: "2", title: "Advanced Cleaning", desc: "Triple-wash process ensures food safety" },
                  { num: "3", title: "Cold Press Extraction", desc: "Preserves nutrients and enzymes" },
                  { num: "4", title: "Hygienic Bottling", desc: "State-of-the-art facility with zero waste" },
                ].map((step) => (
                  <div key={step.num} className="flex gap-4">
                    <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                      {step.num}
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{step.title}</h4>
                      <p className="text-subtle text-sm">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right Image */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative h-96 md:h-full rounded-2xl overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20" />
              <img src="/juice-manufacturing-cold-press-facility.jpg" alt="FreshSip Production" className="w-full h-full object-cover" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialsSlider testimonials={testimonials} />

      {/* Newsletter */}
      <NewsletterSection />
    </>
  )
}
