"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { useTheme } from "@/components/theme-provider"
import { useCart } from "@/lib/cart-context"
import { FloatingCartDrawer } from "@/components/floating-cart-drawer"
import { slideDown } from "@/lib/motion-variants"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()
  const { itemCount } = useCart()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/products", label: "Our Products" },
    { href: "/order", label: "Order Now" },
    { href: "/blog", label: "Blogs" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <>
      <motion.nav
        initial="hidden"
        animate="visible"
        variants={slideDown}
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? "bg-white dark:bg-slate-900/80 backdrop-blur-md border-b border-gray-200 dark:border-slate-800 shadow-sm"
            : "bg-white dark:bg-slate-950"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-serif font-bold text-lg">F</span>
            </div>
            <span className="font-serif font-bold text-xl hidden sm:inline text-gray-900 dark:text-white group-hover:text-primary transition">
              FreshSip
            </span>
          </Link>

          {/* Center Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary font-medium text-sm transition"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-800 transition text-gray-900 dark:text-gray-50"
              aria-label="Toggle theme"
            >
              {theme === "light" ? "🌙" : "☀️"}
            </button>

            {/* Cart */}
            <button
              onClick={() => setIsDrawerOpen(true)}
              className="relative p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-800 transition"
              aria-label="Open cart"
            >
              <svg
                className="w-6 h-6 text-gray-900 dark:text-gray-50"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              {itemCount > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute top-0 right-0 w-5 h-5 bg-primary text-white text-xs rounded-full flex items-center justify-center font-bold"
                >
                  {itemCount}
                </motion.span>
              )}
            </button>
          </div>
        </div>
      </motion.nav>

      <FloatingCartDrawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
    </>
  )
}
