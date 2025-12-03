"use client"

import { motion } from "framer-motion"
import { fadeUp, staggerContainer } from "@/lib/motion-variants"

export default function OrderPageClient() {
  const orderSteps = [
    {
      step: 1,
      title: "Browse Products",
      description: "Explore our collection of 100% organic, cold-pressed juices.",
    },
    {
      step: 2,
      title: "Add to Cart",
      description: "Select your favorite juices and customize quantities.",
    },
    {
      step: 3,
      title: "Checkout",
      description: "Enter delivery address and select your preferred time slot.",
    },
    {
      step: 4,
      title: "Enjoy Fresh",
      description: "Fresh juice delivered to your doorstep within 24 hours.",
    },
  ]

  return (
    <main className="min-h-screen bg-white dark:bg-slate-950">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="text-center">
          <motion.h1 variants={fadeUp} className="heading-xl text-gray-900 dark:text-white mb-4">
            Order Fresh Juices Today
          </motion.h1>
          <motion.p variants={fadeUp} className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto mb-8">
            Place your order now and get fresh, cold-pressed organic juices delivered to your doorstep within 24 hours.
          </motion.p>
        </motion.div>
      </section>

      {/* Order Steps */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="grid md:grid-cols-4 gap-8"
        >
          {orderSteps.map((item, idx) => (
            <motion.div
              key={idx}
              variants={fadeUp}
              className="bg-gray-50 dark:bg-slate-900 p-8 rounded-2xl text-center hover:shadow-lg transition"
            >
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                {item.step}
              </div>
              <h3 className="font-serif text-xl font-bold text-gray-900 dark:text-white mb-2">{item.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
          <motion.h2 variants={fadeUp} className="heading-lg text-gray-900 dark:text-white mb-4">
            Ready to order?
          </motion.h2>
          <motion.p variants={fadeUp} className="text-gray-600 dark:text-gray-300 mb-8 text-lg">
            Browse our premium collection of organic juices and start your healthy journey today.
          </motion.p>
          <motion.a href="/products" variants={fadeUp} className="btn-primary inline-block">
            Shop Now
          </motion.a>
        </motion.div>
      </section>
    </main>
  )
}
