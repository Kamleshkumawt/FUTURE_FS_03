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
            {/* <div className="flex gap-4 mt-4">
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
            </div> */}
            <div className="flex gap-4 mt-4 dark:text-gray-200 text-gray-900">
          <a href="https://github.com/Kamleshkumawt" target="_blank" rel="noopener noreferrer" className="group hover:scale-110 transition-transform duration-200">
            <div className="flex flex-col items-center">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" className="h-10 w-10 rounded-full bg-gray-500 p-2 dark:shadow-[0_0_25px_hsl(var(--primary)/0.5)]  " />
              <span className="text-xs  mt-1">GitHub</span>
            </div>
          </a>
          <a href="https://www.linkedin.com/in/kamlesh-kumawat-598988330/" target="_blank" rel="noopener noreferrer" className="group hover:scale-110 transition-transform duration-200">
            <div className="flex flex-col items-center">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" alt="LinkedIn" className="h-10 w-10 rounded-full bg-blue-700 p-2 dark:shadow-[0_0_25px_hsl(var(--primary)/0.5)]  " />
              <span className="text-xs mt-1">LinkedIn</span>
            </div>
          </a>
          <a href="https://www.instagram.com/kamleshkumawat68" target="_blank" rel="noopener noreferrer" className="group hover:scale-110 transition-transform duration-200">
            <div className="flex flex-col items-center">
              <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" alt="Instagram" className="h-10 w-10 rounded-full bg-pink-500 p-2 dark:shadow-[0_0_25px_hsl(var(--primary)/0.5)] " />
              <span className="text-xs mt-1">Instagram</span>
            </div>
          </a>
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
