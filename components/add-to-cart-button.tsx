"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useCart } from "@/lib/cart-context"
import { cn } from "@/lib/utils"

interface AddToCartButtonProps {
  productId: string
  className?: string
}

export function AddToCartButton({ productId, className }: AddToCartButtonProps) {
  const [isAdding, setIsAdding] = useState(false)
  const { addItem } = useCart()

  const handleAddToCart = () => {
    setIsAdding(true)
    addItem({ id: productId, name: "Product", price: 0, quantity: 1 })
    setTimeout(() => setIsAdding(false), 1000)
  }

  return (
    <motion.button
      onClick={handleAddToCart}
      whileTap={{ scale: 0.95 }}
      className={cn(
        "px-6 py-3 rounded-full font-medium transition-all duration-300",
        isAdding ? "bg-accent text-white" : "bg-primary text-white hover:brightness-90",
        className,
      )}
    >
      {isAdding ? "✓ Added" : "Add to Cart"}
    </motion.button>
  )
}
