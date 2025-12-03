"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface ProductCardProps {
  id: string
  slug: string
  name: string
  price: number
  image: string
}

export function ProductCard({ id, slug, name, price, image }: ProductCardProps) {
  const [isAdding, setIsAdding] = useState(false)

  const handleAddToCart = () => {
    setIsAdding(true)
    setTimeout(() => setIsAdding(false), 1000)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="group"
    >
      <Link href={`/product/${slug}`}>
        <div className="bg-white dark:bg-slate-900 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300">
          {/* Image */}
          <div className="relative w-full h-64 overflow-hidden bg-gray-100 dark:bg-slate-800">
            <Image
              src={image || "/placeholder.svg"}
              alt={name}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Content */}
          <div className="p-6">
            <h3 className="font-serif text-lg font-bold text-gray-900 dark:text-white mb-2">{name}</h3>
            <p className="text-primary font-bold text-xl mb-4">₹{price}</p>

            {/* Add to Cart Button */}
            <motion.button
              onClick={handleAddToCart}
              whileTap={{ scale: 0.95 }}
              className={cn(
                "w-full px-4 py-2 rounded-full text-sm font-medium transition-all",
                isAdding ? "bg-accent text-white" : "bg-primary/10 text-primary hover:bg-primary hover:text-white",
              )}
            >
              {isAdding ? "✓" : "Add"}
            </motion.button>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
