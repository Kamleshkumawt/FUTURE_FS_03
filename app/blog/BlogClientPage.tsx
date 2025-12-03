"use client"

import { motion } from "framer-motion"
import { fadeUp, staggerContainer } from "@/lib/motion-variants"

export default function BlogClientPage() {
  const blogPosts = [
    {
      id: 1,
      title: "Benefits of Cold-Pressed Juices",
      excerpt: "Discover why cold-pressed juices are superior to regular juices and how they can boost your health.",
      date: "Dec 1, 2024",
      category: "Health",
      readTime: "5 min read",
    },
    {
      id: 2,
      title: "Top 5 Organic Fruits for Your Diet",
      excerpt: "Learn about the best organic fruits and their nutritional benefits for a healthier lifestyle.",
      date: "Nov 28, 2024",
      category: "Nutrition",
      readTime: "7 min read",
    },
    {
      id: 3,
      title: "How to Stay Hydrated This Winter",
      excerpt: "Expert tips on maintaining proper hydration during the cold months with our organic juice range.",
      date: "Nov 25, 2024",
      category: "Wellness",
      readTime: "4 min read",
    },
    {
      id: 4,
      title: "Sustainability Practices at FreshSip",
      excerpt: "Learn about our commitment to eco-friendly practices and sustainable packaging.",
      date: "Nov 22, 2024",
      category: "Sustainability",
      readTime: "6 min read",
    },
  ]

  return (
    <main className="min-h-screen bg-white dark:bg-slate-950">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="text-center">
          <motion.h1 variants={fadeUp} className="heading-xl text-gray-900 dark:text-white mb-4">
            FreshSip Blog
          </motion.h1>
          <motion.p variants={fadeUp} className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
            Explore health tips, nutrition guides, and stories from the world of organic juices.
          </motion.p>
        </motion.div>
      </section>

      {/* Blog Posts Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {blogPosts.map((post) => (
            <motion.article
              key={post.id}
              variants={fadeUp}
              className="bg-gray-50 dark:bg-slate-900 rounded-2xl overflow-hidden hover:shadow-lg transition cursor-pointer group"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-semibold text-primary bg-green-50 dark:bg-green-950 px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                  <span className="text-xs text-gray-500 dark:text-gray-400">{post.readTime}</span>
                </div>
                <h3 className="font-serif text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary transition">
                  {post.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{post.excerpt}</p>
                <div className="text-xs text-gray-500 dark:text-gray-500">{post.date}</div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </section>

      {/* Newsletter CTA */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
          <motion.h2 variants={fadeUp} className="heading-lg text-gray-900 dark:text-white mb-4">
            Subscribe to Our Blog
          </motion.h2>
          <motion.p variants={fadeUp} className="text-gray-600 dark:text-gray-300 mb-8">
            Get the latest health tips and juice recipes delivered to your inbox.
          </motion.p>
          <motion.div variants={fadeUp} className="flex gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-full border border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-gray-900 dark:text-white"
            />
            <button className="btn-primary">Subscribe</button>
          </motion.div>
        </motion.div>
      </section>
    </main>
  )
}
