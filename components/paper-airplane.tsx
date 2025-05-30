"use client"

import { motion } from "framer-motion"

export function PaperAirplane({ className }: { className?: string }) {
  return (
    <motion.div
      className={className}
      animate={{
        x: [0, 30, 0],
        y: [0, -15, 0],
        rotate: [0, -5, 0],
      }}
      transition={{
        duration: 6,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      }}
    >
      <svg width="100" height="100" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M22 2L11 13M22 2L15 22L11 13M22 2L2 9L11 13"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </motion.div>
  )
}

