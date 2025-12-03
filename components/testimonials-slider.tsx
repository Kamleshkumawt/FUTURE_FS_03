"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { fadeIn } from "@/lib/motion-variants"
import { cn } from "@/lib/utils"

interface Testimonial {
  id: number
  name: string
  role: string
  content: string
  rating: number
}

interface TestimonialsSliderProps {
  testimonials: Testimonial[]
}

export function TestimonialsSlider({ testimonials }: TestimonialsSliderProps) {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [testimonials.length])

  return (
    <section className="py-20 bg-card-bg">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="heading-lg text-center mb-16">What Our Customers Say</h2>

        <div className="relative h-64 md:h-48">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={fadeIn}
              className="bg-background rounded-2xl p-8 md:p-12 md:pt-2 shadow-lg absolute inset-0 flex flex-col justify-between"
            >
              <div>
                {/* Stars */}
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                    <span key={i} className="text-2xl text-accent">
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-lg text-foreground leading-relaxed italic mb-5">"{testimonials[current].content}"</p>
              </div>
              <div>
                <h4 className="font-serif font-bold text-foreground">{testimonials[current].name}</h4>
                <p className="text-subtle text-sm">{testimonials[current].role}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={cn(
                "w-2 h-2 rounded-full transition-all",
                index === current ? "bg-primary w-8" : "bg-neutral/30",
              )}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
