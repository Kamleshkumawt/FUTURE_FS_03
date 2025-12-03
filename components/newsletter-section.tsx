"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { slideUp } from "@/lib/motion-variants"

export function NewsletterSection() {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsSubmitted(true)
    setEmail("")
    setTimeout(() => setIsSubmitted(false), 3000)
    setIsSubmitting(false)
  }

  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-primary/10 to-accent/10 border-y border-border">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideUp}
          className="text-center space-y-8"
        >
          <div className="space-y-3">
            <h2 className="heading-lg">Stay Fresh & Healthy</h2>
            <p className="text-lg text-subtle">
              Get exclusive offers, recipes, and wellness tips delivered to your inbox
            </p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 px-6 py-3 rounded-full border border-border bg-background text-foreground placeholder:text-subtle focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
            <motion.button whileTap={{ scale: 0.95 }} type="submit" disabled={isSubmitting} className="btn-primary">
              {isSubmitting ? "..." : isSubmitted ? "✓" : "Subscribe"}
            </motion.button>
          </form>

          <p className="text-xs text-subtle">We respect your privacy. Unsubscribe at any time.</p>
        </motion.div>
      </div>
    </section>
  )
}
