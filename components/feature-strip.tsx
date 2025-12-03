"use client"

import type React from "react"
import { motion } from "framer-motion"
import { staggerContainer, staggerItem } from "@/lib/motion-variants"

interface Feature {
  icon: React.ReactNode
  title: string
  description: string
}

interface FeatureStripProps {
  features: Feature[]
}

export function FeatureStrip({ features }: FeatureStripProps) {
  return (
    <section className="py-16 md:py-24 bg-card-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-12"
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={staggerItem} className="text-center space-y-4">
              <div className="flex justify-center">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-3xl">
                  {feature.icon}
                </div>
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground">{feature.title}</h3>
              <p className="text-subtle leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
