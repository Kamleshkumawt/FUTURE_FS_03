"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { slideUp, staggerContainer, staggerItem } from "@/lib/motion-variants"

export default function AboutClient() {
  return (
    <main className="min-h-screen pt-20 pb-20">
      {/* Hero */}
      <section className="mb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" animate="visible" variants={slideUp} className="text-center space-y-4 mb-12">
            <h1 className="heading-xl">About FreshSip</h1>
            <p className="text-xl text-subtle max-w-3xl mx-auto">Leading organic juice innovation in Bangalore</p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="mb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="heading-lg">Our Story</h2>
              <p className="text-lg text-subtle leading-relaxed">
                At FreshSip, we started with a simple mission: to bring the freshest, most nutritious organic juices to
                Bangalore.
              </p>
              <p className="text-lg text-subtle leading-relaxed">
                We believe that health starts with what you consume. That's why we source only the finest organic
                fruits, use cold-press extraction to preserve maximum nutrients, and ensure zero preservatives or
                additives in every bottle.
              </p>
              <p className="text-lg text-subtle leading-relaxed">
                From our humble beginnings to becoming Bangalore's trusted juice brand, we've stayed committed to
                quality, sustainability, and your wellbeing.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative h-96 rounded-2xl overflow-hidden"
            >
              <Image src="/juice-production-facility.jpg" alt="FreshSip Story" fill className="object-cover" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="mb-20 bg-card-bg py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-12"
          >
            <motion.div variants={staggerItem} className="space-y-4">
              <h3 className="heading-md">Our Mission</h3>
              <p className="text-lg text-subtle leading-relaxed">
                To provide Bangalore with premium, cold-pressed organic juices that nourish the body and promote lasting
                health, while maintaining the highest standards of sustainability and ethical practices.
              </p>
            </motion.div>

            <motion.div variants={staggerItem} className="space-y-4">
              <h3 className="heading-md">Our Vision</h3>
              <p className="text-lg text-subtle leading-relaxed">
                To become India's most trusted organic juice brand, recognized for innovation, quality, and
                environmental responsibility. A brand that transforms how people think about nutrition and wellness.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Process */}
      <section className="mb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideUp}
            className="heading-lg text-center mb-16"
          >
            Our Cold-Press Process
          </motion.h2>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-4 gap-6"
          >
            {[
              {
                num: 1,
                title: "Organic Fruit Selection",
                desc: "Carefully sourced from certified organic farms in Karnataka",
              },
              { num: 2, title: "Advanced Cleaning", desc: "Triple-wash process ensures food safety and hygiene" },
              {
                num: 3,
                title: "Cold Press Extraction",
                desc: "Hydraulic press at low temperature preserves all nutrients",
              },
              { num: 4, title: "Hygienic Bottling", desc: "State-of-the-art facility with zero waste practices" },
            ].map((step) => (
              <motion.div
                key={step.num}
                variants={staggerItem}
                className="bg-card rounded-2xl p-6 space-y-4 text-center hover:shadow-lg transition"
              >
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto">
                  {step.num}
                </div>
                <h4 className="font-serif font-bold text-foreground">{step.title}</h4>
                <p className="text-subtle text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Sustainability */}
      <section className="bg-gradient-to-br from-primary/10 to-accent/10 py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideUp}
            className="text-center space-y-8"
          >
            <h2 className="heading-lg">Sustainability & Environment</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              {[
                { icon: "♻️", title: "Eco-Friendly Packaging", desc: "Glass bottles and recyclable materials" },
                { icon: "🌱", title: "Zero Waste Facility", desc: "Minimal environmental impact in production" },
                { icon: "🌍", title: "Carbon Neutral", desc: "Commitment to reducing our carbon footprint" },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="space-y-3"
                >
                  <div className="text-4xl mb-2">{item.icon}</div>
                  <h4 className="font-serif font-bold text-foreground">{item.title}</h4>
                  <p className="text-subtle">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
