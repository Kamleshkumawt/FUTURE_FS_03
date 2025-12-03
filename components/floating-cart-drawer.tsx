"use client"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { useCart } from "@/lib/cart-context"

interface FloatingCartDrawerProps {
  isOpen: boolean
  onClose: () => void
}

export function FloatingCartDrawer({ isOpen, onClose }: FloatingCartDrawerProps) {
  const { items, removeItem, updateQuantity, total } = useCart()

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-50"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed right-0 top-0 h-full w-full sm:w-96 bg-background border-l border-border shadow-2xl z-50 flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-border">
              <h2 className="font-serif text-2xl font-bold">Shopping Cart</h2>
              <button onClick={onClose} className="p-2 hover:bg-card-bg rounded-lg transition" aria-label="Close cart">
                ✕
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center">
                  <p className="text-subtle text-lg mb-4">Your cart is empty</p>
                  <Link href="/products" onClick={onClose} className="btn-primary">
                    Continue Shopping
                  </Link>
                </div>
              ) : (
                items.map((item) => (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="bg-card-bg rounded-lg p-4"
                  >
                    <div className="flex gap-4 mb-3">
                      <div className="w-16 h-16 bg-primary/10 rounded-lg flex-shrink-0" />
                      <div className="flex-1">
                        <h4 className="font-medium text-foreground">{item.name}</h4>
                        <p className="text-primary font-bold">₹{item.price}</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-6 h-6 flex items-center justify-center bg-neutral/20 rounded hover:bg-primary hover:text-white transition"
                        >
                          −
                        </button>
                        <span className="w-6 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-6 h-6 flex items-center justify-center bg-neutral/20 rounded hover:bg-primary hover:text-white transition"
                        >
                          +
                        </button>
                      </div>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-red-500 hover:text-red-700 text-sm transition"
                      >
                        Remove
                      </button>
                    </div>
                  </motion.div>
                ))
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="border-t border-border p-6 space-y-4">
                <div className="flex items-center justify-between text-lg font-bold">
                  <span>Total:</span>
                  <span className="text-primary">₹{total.toFixed(2)}</span>
                </div>
                <button onClick={onClose} className="w-full btn-primary">
                  Proceed to Checkout
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
