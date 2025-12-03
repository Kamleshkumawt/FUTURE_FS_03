"use client"

import { useState, useMemo } from "react"
import { ProductGrid } from "@/components/product-grid"
import { motion } from "framer-motion"
import { slideUp } from "@/lib/motion-variants"
import { cn } from "@/lib/utils"

const allProducts = [
  {
    id: "1",
    slug: "fresh-watermelon",
    name: "Fresh Watermelon Juice",
    price: 40,
    image: "/watermelon-juice.png",
    category: "Healthy Juices",
  },
  {
    id: "2",
    slug: "papaya-paradise",
    name: "Papaya Paradise",
    price: 40,
    image: "/papaya-juice.jpg",
    category: "Healthy Juices",
  },
  {
    id: "3",
    slug: "avocado-juice",
    name: "Avocado Juice",
    price: 45,
    image: "/avocado-juice.jpg",
    category: "Detox Cleanse",
  },
  {
    id: "4",
    slug: "grape-goodness",
    name: "Grape Goodness",
    price: 40,
    image: "/grape-juice.jpg",
    category: "Healthy Juices",
  },
  {
    id: "5",
    slug: "mango-magic",
    name: "Mango Magic",
    price: 45,
    image: "/mango-juice.png",
    category: "Seasonal Picks",
  },
  {
    id: "6",
    slug: "coconut-tender",
    name: "Tender Coconut Juice",
    price: 50,
    image: "/coconut-juice.jpg",
    category: "Healthy Juices",
  },
  {
    id: "7",
    slug: "orange-splash",
    name: "Orange Splash",
    price: 40,
    image: "/glass-of-orange-juice.png",
    category: "Bestsellers",
  },
  {
    id: "8",
    slug: "green-detox",
    name: "Green Detox",
    price: 50,
    image: "/green-detox-juice.jpg",
    category: "Detox Cleanse",
  },
]

export function ProductsClient() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [sortBy, setSortBy] = useState("featured")

  const categories = ["Healthy Juices", "Detox Cleanse", "Seasonal Picks", "Bestsellers"]

  const filteredProducts = useMemo(() => {
    let filtered = allProducts

    if (selectedCategory) {
      filtered = filtered.filter((p) => p.category === selectedCategory)
    }

    if (sortBy === "price-low") {
      filtered.sort((a, b) => a.price - b.price)
    } else if (sortBy === "price-high") {
      filtered.sort((a, b) => b.price - a.price)
    }

    return filtered
  }, [selectedCategory, sortBy])

  return (
    <main className="min-h-screen bg-white dark:bg-slate-950 pt-20 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div initial="hidden" animate="visible" variants={slideUp} className="text-center mb-16">
          <h1 className="heading-lg mb-4">Our Premium Collection</h1>
          <p className="text-lg text-subtle max-w-2xl mx-auto">
            Discover our range of cold-pressed organic juices, carefully crafted for your health and wellbeing
          </p>
        </motion.div>

        {/* Filters & Sort */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <motion.div initial="hidden" animate="visible" variants={slideUp}>
            {/* Categories */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Category</h3>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setSelectedCategory(null)}
                  className={cn(
                    "px-4 py-2 rounded-full transition",
                    selectedCategory === null
                      ? "bg-primary text-white"
                      : "bg-card-bg text-foreground hover:bg-neutral/20",
                  )}
                >
                  All
                </button>
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={cn(
                      "px-4 py-2 rounded-full transition",
                      selectedCategory === cat
                        ? "bg-primary text-white"
                        : "bg-card-bg text-foreground hover:bg-neutral/20",
                    )}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Sort */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Sort By</h3>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>
          </motion.div>
        </section>

        {/* Results */}
        <div>
          <p className="text-sm text-subtle mb-6">Showing {filteredProducts.length} products</p>
          <ProductGrid products={filteredProducts} />
        </div>
      </div>
    </main>
  )
}
