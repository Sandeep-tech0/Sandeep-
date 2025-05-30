"use client"

import { motion } from "framer-motion"

export function Cloud({ className }: { className?: string }) {
  return (
    <motion.div
      className={className}
      animate={{
        y: [0, 15, 0],
      }}
      transition={{
        duration: 4,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      }}
    >
      <svg width="120" height="80" viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M110 40C110 51.0457 101.046 60 90 60H30C18.9543 60 10 51.0457 10 40C10 28.9543 18.9543 20 30 20H90C101.046 20 110 28.9543 110 40Z"
          fill="white"
        />
        <path
          d="M85 25C85 36.0457 76.0457 45 65 45H35C23.9543 45 15 36.0457 15 25C15 13.9543 23.9543 5 35 5H65C76.0457 5 85 13.9543 85 25Z"
          fill="white"
        />
      </svg>
    </motion.div>
  )
}

