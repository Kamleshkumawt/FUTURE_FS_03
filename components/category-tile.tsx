"use client"
import { motion } from "framer-motion"
import Link from "next/link"

interface CategoryTileProps {
  name: string
  icon: string
  href: string
  description: string
}

export function CategoryTile({ name, icon, href, description }: CategoryTileProps) {
  return (
    <Link href={href}>
      <motion.div
        whileHover={{ scale: 1.03, translateY: -8 }}
        className="group bg-card rounded-2xl p-8 text-center space-y-4 cursor-pointer shadow-lg hover:shadow-xl transition-shadow"
      >
        <div className="text-5xl mb-2 group-hover:scale-110 transition-transform">{icon}</div>
        <h3 className="font-serif text-2xl font-bold text-foreground">{name}</h3>
        <p className="text-subtle text-sm">{description}</p>
        <div className="pt-2">
          <span className="text-primary font-semibold text-sm group-hover:gap-2 inline-flex items-center gap-1 transition">
            Explore →
          </span>
        </div>
      </motion.div>
    </Link>
  )
}
