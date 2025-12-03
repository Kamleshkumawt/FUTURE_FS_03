"use client"
import { motion } from "framer-motion"
import Link from "next/link"
import { staggerContainer, staggerItem } from "@/lib/motion-variants"

export function Footer() {
  return (
    <footer className="bg-card-bg border-t border-border mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12"
        >
          {/* Brand */}
          <motion.div variants={staggerItem}>
            <h3 className="font-serif font-bold text-lg mb-4">FreshSip</h3>
            <p className="text-subtle text-sm leading-relaxed">
              Leading organic juice innovation in Bangalore. 100% organic, cold-pressed, zero preservatives.
            </p>
            <div className="flex gap-4 mt-4">
              {["twitter", "instagram", "facebook"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-10 h-10 bg-primary/10 hover:bg-primary hover:text-white rounded-full flex items-center justify-center transition text-foreground"
                  aria-label={social}
                >
                  {social[0].toUpperCase()}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={staggerItem}>
            <h4 className="font-serif font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { href: "/products", label: "Products" },
                { href: "/about", label: "About Us" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-subtle hover:text-primary text-sm transition">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Customer Service */}
          <motion.div variants={staggerItem}>
            <h4 className="font-serif font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              {["FAQ", "Returns", "Privacy Policy", "Terms"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-subtle hover:text-primary text-sm transition">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div variants={staggerItem}>
            <h4 className="font-serif font-semibold mb-4">Get in Touch</h4>
            <p className="text-subtle text-sm mb-2">📞 +91 91136 40206</p>
            <p className="text-subtle text-sm mb-4">✉️ hello@freshsip.in</p>
            <p className="text-subtle text-sm">📍 Bangalore, India</p>
          </motion.div>
        </motion.div>

        <div className="divider my-8" />

        <div className="flex items-center justify-between text-subtle text-sm">
          <p>&copy; 2025 FreshSip. All rights reserved.</p>
          <p>Crafted with care 🍃</p>
        </div>
      </div>
    </footer>
  )
}
