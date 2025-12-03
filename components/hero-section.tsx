"use client"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { slideUp } from "@/lib/motion-variants"

interface HeroSectionProps {
  title: string
  subtitle: string
  cta: {
    label: string
    href: string
  }
  imageSrc: string
  imageAlt: string
}

export function HeroSection({ title, subtitle, cta, imageSrc, imageAlt }: HeroSectionProps) {
  return (
    <section className="relative min-h-[600px] md:min-h-[700px] overflow-hidden pt-12 md:pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div initial="hidden" animate="visible" className="space-y-6">
            <motion.h1 variants={slideUp} className="heading-xl text-foreground">
              {title}
            </motion.h1>

            <motion.p variants={slideUp} className="text-lg text-subtle leading-relaxed max-w-lg">
              {subtitle}
            </motion.p>

            <motion.div variants={slideUp} className="flex gap-4 pt-4">
              <Link href={cta.href} className="btn-primary">
                {cta.label}
              </Link>
              <a href="#features" className="btn-secondary">
                Learn More
              </a>
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative h-[400px] md:h-[500px]"
          >
            <Image
              src={imageSrc || "/placeholder.svg"}
              alt={imageAlt}
              fill
              className="object-cover rounded-2xl"
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
