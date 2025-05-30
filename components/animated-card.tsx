"use client"

import { motion } from "framer-motion"
import type React from "react" // Import React

import { Card } from "@/components/ui/card"

export function AnimatedCard({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <Card className="p-6">{children}</Card>
    </motion.div>
  )
}

