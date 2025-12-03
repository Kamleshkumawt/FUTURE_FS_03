"use client"

import type React from "react"
import { motion } from "framer-motion"
import { pageTransitionIn } from "@/lib/motion-variants"

export function PageTransition({ children }: { children: React.ReactNode }) {
  return (
    <motion.main initial="hidden" animate="visible" variants={pageTransitionIn}>
      {children}
    </motion.main>
  )
}
