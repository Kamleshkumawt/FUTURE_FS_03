"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { slideUp, staggerContainer, staggerItem } from "@/lib/motion-variants"

export default function ContactPageClient() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setSubmitted(true)
    setFormData({ name: "", email: "", phone: "", message: "" })
    setTimeout(() => setSubmitted(false), 3000)
    setIsSubmitting(false)
  }

  return (
    <main className="min-h-screen pt-20 pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div initial="hidden" animate="visible" variants={slideUp} className="text-center mb-16">
          <h1 className="heading-lg mb-4">Get in Touch</h1>
          <p className="text-lg text-subtle max-w-2xl mx-auto">
            Have questions? We'd love to hear from you. Reach out to us anytime.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Contact Info */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="md:col-span-1 space-y-6"
          >
            {[
              { icon: "📍", title: "Address", content: "Bangalore, India" },
              { icon: "📞", title: "Phone", content: "+91 91136 40206" },
              { icon: "✉️", title: "Email", content: "hello@freshsip.in" },
              { icon: "🕐", title: "Hours", content: "Mon-Sun: 8am - 8pm" },
            ].map((item, idx) => (
              <motion.div key={idx} variants={staggerItem} className="bg-card rounded-2xl p-6 space-y-2">
                <div className="text-3xl mb-2">{item.icon}</div>
                <h3 className="font-serif font-bold text-foreground">{item.title}</h3>
                <p className="text-subtle">{item.content}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideUp}
            onSubmit={handleSubmit}
            className="md:col-span-2 bg-card-bg rounded-2xl p-8 space-y-6"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">Phone</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="+91 9XX XXX XXXX"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                placeholder="Your message..."
              />
            </div>

            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileTap={{ scale: 0.95 }}
              className="w-full btn-primary"
            >
              {isSubmitting ? "Sending..." : submitted ? "✓ Message Sent!" : "Send Message"}
            </motion.button>
          </motion.form>
        </div>

        {/* Delivery Radius */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-12 text-center space-y-4"
        >
          <h3 className="heading-md">Delivery Service Area</h3>
          <p className="text-lg text-subtle">We deliver fresh juices within a 50km radius of Bangalore</p>
          <p className="text-foreground font-semibold">📍 Same-day delivery available for most locations</p>
        </motion.div>
      </div>
    </main>
  )
}
