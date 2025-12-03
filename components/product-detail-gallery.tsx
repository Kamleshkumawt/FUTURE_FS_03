"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

interface ProductDetailGalleryProps {
  images: string[]
  productName: string
}

export function ProductDetailGallery({ images, productName }: ProductDetailGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState(0)

  return (
    <div className="space-y-4">
      {/* Main Image */}
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="relative h-96 md:h-[500px] bg-card-bg rounded-2xl overflow-hidden"
        >
          <Image
            src={images[selectedIndex] || "/placeholder.svg"}
            alt={`${productName} view ${selectedIndex + 1}`}
            fill
            className="object-cover"
            priority
          />
        </motion.div>
      </AnimatePresence>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="flex gap-3 overflow-x-auto pb-2">
          {images.map((img, idx) => (
            <motion.button
              key={idx}
              onClick={() => setSelectedIndex(idx)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 border-2 transition ${
                selectedIndex === idx ? "border-primary" : "border-border"
              }`}
            >
              <Image
                src={img || "/placeholder.svg"}
                alt={`Thumbnail ${idx + 1}`}
                width={80}
                height={80}
                className="w-full h-full object-cover"
              />
            </motion.button>
          ))}
        </div>
      )}
    </div>
  )
}
